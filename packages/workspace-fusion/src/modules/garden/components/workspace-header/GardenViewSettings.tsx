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
import { useOutsideClick } from './useClickOutside';

Icon.add({ close, more_vertical });

type GardenPopoverItemProps = {
  anchor: HTMLElement;
  groupingKeys$: BehaviorSubject<string[]>;
  filterState: FilterState;
  config: GardenConfig<any, FilterState>;
  setGroupingKeys: (keys: string[]) => void;
};
type Props = {
  iconRef: React.MutableRefObject<HTMLDivElement | null>;
  anchor: HTMLElement;
  setClose: () => void;
  filterState: FilterState;
  groupingKeys: string[];
  setGroupingKeys: (keys: string[]) => void;
  config: GardenConfig<any, FilterState>;
};
const PopoverItem = ({
  iconRef: iconRef,
  anchor,
  setClose,
  filterState,
  groupingKeys,
  setGroupingKeys,
  config,
}: Props) => {
  const popoverRef = useRef<HTMLDivElement | null>(null);
  useOutsideClick(popoverRef, iconRef, (e) => console.log('Clicked outside?', e, popoverRef));
  return (
    <>
      {createPortal(
        <Popover ref={popoverRef} style={{ height: '450px', width: '300px' }} open={true} anchorEl={iconRef.current}>
          <Popover.Header>
            <StyledPopoverHeaderLine>
              <Popover.Title>Garden settings</Popover.Title>
              <Icon name="close" color={tokens.colors.interactive.primary__resting.hex} onClick={() => setClose()} />
            </StyledPopoverHeaderLine>
          </Popover.Header>
          <Popover.Content style={{ overflow: 'hidden' }}>
            <Suspense fallback={<GroupingSelectorLoading />}>
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
export const GardenPopoverItem = ({
  anchor,
  groupingKeys$,
  setGroupingKeys,
  config,
  filterState,
}: GardenPopoverItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const iconRef = useRef<null>(null);

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
        ref={iconRef}
        onClick={() => setIsOpen((s) => !s)}
      />
      <div>
        {isOpen && (
          <PopoverItem
            anchor={anchor}
            config={config}
            filterState={filterState}
            groupingKeys={groupingKeys}
            iconRef={iconRef}
            setClose={() => setIsOpen(false)}
            setGroupingKeys={setGroupingKeys}
          />
        )}
      </div>
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
