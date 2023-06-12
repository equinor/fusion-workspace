import { BaseEvent } from '@equinor/workspace-core';
import { FilterState, useFilterContext } from '@equinor/workspace-filter';
import { BookmarkRef, Garden } from '@equinor/workspace-garden';
import { Suspense, useEffect, useRef, useState } from 'react';
import { GardenConfig } from '../../../../lib/integrations/garden';
import { GetIdentifier } from '../../../../lib/types/configuration';
import { FusionMediator, HeaderIcon, useWorkspaceHeaderComponents } from '../../../../lib';
import { createPortal } from 'react-dom';
import { Autocomplete, Icon, Popover } from '@equinor/eds-core-react';
import { more_vertical } from '@equinor/eds-icons';
import { tokens } from '@equinor/eds-tokens';
import styled from 'styled-components';
import { GroupingSelector } from '../GroupingSelector';
import { BehaviorSubject, Observable, distinctUntilChanged, of } from 'rxjs';
Icon.add({ more_vertical });

type GardenWrapperProps<
  TData extends Record<PropertyKey, unknown>,
  TError extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown> = never,
  TCustomSidesheetEvents extends BaseEvent = never,
  TFilter = undefined
> = {
  config: GardenConfig<any, TFilter>;
  getIdentifier: GetIdentifier<TData>;
  mediator: FusionMediator<never, any, any>;
};

export const GardenWrapper = <
  TData extends Record<PropertyKey, unknown>,
  TError extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
  TContext extends Record<PropertyKey, unknown> = never,
  TCustomSidesheetEvents extends BaseEvent = never,
  TFilter = undefined
>({
  config,
  getIdentifier,
  mediator,
}: GardenWrapperProps<TData, TError, TContext, TCustomSidesheetEvents, TFilter>) => {
  const { filterState } = useFilterContext();
  const bookmarkRef = useRef<BookmarkRef<TData> | null>(null);
  const [groupingKeys, setGroupingKeys] = useState<string[]>([
    config.initialGrouping.horizontalGroupingAccessor.toString(),
    ...(config.initialGrouping.verticalGroupingKeys ?? []),
  ]);

  const test$ = useRef(new BehaviorSubject(groupingKeys));
  if (test$.current.value !== groupingKeys) {
    test$.current.next(groupingKeys);
  }

  const { setIcons } = useWorkspaceHeaderComponents();

  useEffect(() => {
    const icon: HeaderIcon = {
      Icon: ({ anchor }) => (
        <GardenPopoverItem
          config={config}
          filterState={filterState}
          anchor={anchor}
          groupingKeys$={test$.current}
          setGroupingKeys={setGroupingKeys}
        />
      ),
      name: 'garden-grouping',
      placement: 'right',
      type: 'button',
    };
    setIcons((s) => [...s, icon]);

    return () => {
      setIcons((s) => s.filter((y) => y.name !== icon.name));
    };
  }, []);

  return (
    <div id="workspace_garden_wrapper" style={{ height: '100%', width: '100%' }}>
      <Garden<TData, TFilter>
        bookmarkRef={bookmarkRef}
        dataSource={{ ...config }}
        context={filterState as TFilter}
        customViews={config.customViews}
        visuals={config.visuals}
        getIdentifier={getIdentifier}
        groupingKeys={groupingKeys}
        getDisplayName={config.getDisplayName}
        clickEvents={{
          onClickItem: (i) => {
            mediator.selectionService.selectedNodes = [{ id: getIdentifier(i), item: i as any }];
          },
        }}
      />
    </div>
  );
};

const StyledPopoverHeaderLine = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

type GardenPopoverItemProps = {
  anchor: HTMLElement;
  groupingKeys$: BehaviorSubject<string[]>;
  filterState: FilterState;
  config: GardenConfig<any, any>;
  setGroupingKeys: (keys: string[]) => void;
};
const GardenPopoverItem = ({ anchor, groupingKeys$, setGroupingKeys, config, filterState }: GardenPopoverItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pRef = useRef(null);
  const [groupingKeys, setInternalKeys] = useState<string[]>(groupingKeys$.value);

  useEffect(() => {
    const sub = groupingKeys$.pipe(distinctUntilChanged()).subscribe((r) => {
      setInternalKeys(r);
    });
    return () => sub.unsubscribe();
  }, [groupingKeys$]);

  return (
    <>
      <Icon
        name="more_vertical"
        color={tokens.colors.interactive.primary__resting.hex}
        ref={pRef}
        onClick={() => setIsOpen((s) => !s)}
      />
      {createPortal(
        <Popover style={{ height: '450px', width: '300px' }} open={isOpen} anchorEl={pRef.current}>
          <Popover.Header>
            <StyledPopoverHeaderLine>
              <Popover.Title>Garden settings</Popover.Title>
              <Icon
                name="close"
                color={tokens.colors.interactive.primary__resting.hex}
                onClick={() => setIsOpen(false)}
              />
            </StyledPopoverHeaderLine>
          </Popover.Header>
          <Popover.Content>
            <Suspense fallback={<div>Loading...</div>}>
              <GroupingSelector
                groupingKeys={groupingKeys}
                setGroupingKeys={setGroupingKeys}
                context={filterState}
                dataSource={config}
              />
            </Suspense>
          </Popover.Content>
        </Popover>,
        anchor
      )}
    </>
  );
};
