import { Icon, Popover, CircularProgress } from '@equinor/eds-core-react';
import { tokens } from '@equinor/eds-tokens';
import { close, more_vertical } from '@equinor/eds-icons';
import { FilterState } from '@equinor/workspace-filter';

import { useState, useRef, useEffect, Suspense } from 'react';
import { createPortal } from 'react-dom';
import { BehaviorSubject, distinctUntilChanged } from 'rxjs';
import styled from 'styled-components';
import { GroupingSelector } from '../GroupingSelector';
import { GardenConfig } from '../../../../lib/integrations/garden';
import { GardenMetaRequest } from '@equinor/workspace-garden';

Icon.add({ close, more_vertical });

type GroupState = Required<GardenMetaRequest>;

type GardenPopoverItemProps = {
  anchor: HTMLElement;
  groupingKeys$: BehaviorSubject<GroupState>;
  filterState: FilterState;
  config: GardenConfig<any, FilterState>;
  setGroupingKeys: (keys: string[]) => void;
  onChangeTimeInterval: (timeInterval: string | null) => void;
  onChangeDateVariant: (dateVariant: string | null) => void;
};
export const GardenPopoverItem = ({
  anchor,
  groupingKeys$,
  onChangeTimeInterval,
  onChangeDateVariant,
  setGroupingKeys,
  config,
  filterState,
}: GardenPopoverItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pRef = useRef(null);
  const [groupState, setGroupState] = useState<GroupState>(groupingKeys$.value);
  const popoverRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sub = groupingKeys$.pipe(distinctUntilChanged()).subscribe((r) => {
      setGroupState(r);
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
        <Popover ref={popoverRef} style={{ height: '450px', width: '300px' }} open={isOpen} anchorEl={pRef.current}>
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
          <Popover.Content style={{ overflow: 'hidden' }}>
            <Suspense fallback={<GroupingSelectorLoading />}>
              <GroupingSelector
                iconRef={pRef}
                close={() => setIsOpen(false)}
                popoverRef={popoverRef}
                groupingKeys={groupState.groupingKeys}
                setGroupingKeys={setGroupingKeys}
                timeInterval={groupState.timeInterval}
                onChangeTimeInterval={onChangeTimeInterval}
                dateVariant={groupState.dateVariant}
                onChangeDateVarient={onChangeDateVariant}
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

const StyledPopoverHeaderLine = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const GroupingSelectorLoading = () => {
  return (
    <StyledLoadingWrapper>
      <CircularProgress size={48} />
    </StyledLoadingWrapper>
  );
};

export const StyledLoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1em;
  width: 268px;
  height: 300px;
  justify-content: center;
`;
