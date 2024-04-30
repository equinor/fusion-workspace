import { Icon, Checkbox, Popover } from '@equinor/eds-core-react';
import { tokens } from '@equinor/eds-tokens';
import { useState, useRef } from 'react';
import { ReactSortable } from 'react-sortablejs';
import { StyledButton, StyledItemWrapper, StyledPopoverList } from './toggleHideFilterPopover.styles';
import styled from 'styled-components';

interface ShowHideFilterButtonProps {
  allFilters: FilterType[];
  setFilterOrder: (val: FilterType[]) => void;
}

type FilterType = {
  groupName: string;
  isVisible: boolean;
};

export const ToggleHideFilterPopover = ({ allFilters, setFilterOrder }: ShowHideFilterButtonProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const DraggableHandleSelector = 'globalDraggableHandle';

  const listRef = useRef(allFilters.map((s) => ({ id: s.groupName, item: s.groupName })));

  const updateListOrder = () => {
    const updatedFilterOrder = listRef.current
      .filter((refItem) => allFilters.some((filter) => filter.groupName === refItem.item))
      .map((refItem) => {
        const correspondingFilter = allFilters.find((filter) => filter.groupName === refItem.item);
        return {
          groupName: refItem.item,
          isVisible: correspondingFilter ? correspondingFilter.isVisible : true,
        } as FilterType;
      });

    setFilterOrder(updatedFilterOrder);
  };

  const handleCheckboxClick = (val: string) => {
    const updatedFilters = allFilters.map((filter) => {
      if (filter.groupName === val) {
        return { ...filter, isVisible: !filter.isVisible };
      }

      return filter;
    });

    setFilterOrder(updatedFilters);
  };

  return (
    <>
      {/* TODO: FIX styling */}
      <div ref={ref}>
        <StyledButton style={{ cursor: 'pointer' }} title="Add filters" onClick={() => setIsOpen(true)}>
          <Icon name="playlist_add" color={tokens.colors.interactive.primary__resting.hex} />
        </StyledButton>
      </div>

      {isOpen && (
        <Popover open={isOpen} onClose={() => setIsOpen(false)} anchorEl={ref.current} placement="bottom-end">
          <Popover.Header>
            <Popover.Title>Filter types</Popover.Title>
          </Popover.Header>
          <R style={{ maxHeight: '60vh', overflowY: 'auto', overflowX: 'hidden' }}>
            <StyledPopoverList>
              <ReactSortable
                animation={200}
                handle={`.${DraggableHandleSelector}`}
                list={listRef.current}
                setList={(e) => {
                  listRef.current = e;
                }}
                onEnd={updateListOrder}
              >
                {listRef.current.map(({ item }) => (
                  <StyledItemWrapper className={DraggableHandleSelector} key={item}>
                    <Checkbox
                      size={2}
                      checked={allFilters.some((filter) => filter.groupName === item && filter.isVisible === true)}
                      onChange={() => {
                        handleCheckboxClick(item);
                      }}
                    />
                    <div style={{ textTransform: 'capitalize' }}>{item}</div>
                    <Icon name="drag_handle" color={tokens.colors.interactive.primary__resting.hex} />
                  </StyledItemWrapper>
                ))}
              </ReactSortable>
            </StyledPopoverList>
          </R>
        </Popover>
      )}
    </>
  );
};

const R = styled(Popover.Content)`
  & *:first-child {
    padding-top: 0px;
    padding-bottom: 0px;
  }
  padding: 0px;
`;
