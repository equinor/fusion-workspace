import { Icon, Checkbox, Popover } from '@equinor/eds-core-react';
import { tokens } from '@equinor/eds-tokens';
import { useState, useRef } from 'react';
import { ReactSortable } from 'react-sortablejs';
import { StyledButton, StyledItemWrapper, StyledPopoverList } from './toggleHideFilterPopover.styles';

interface ShowHideFilterButtonProps {
  allFilters: string[];
  visibleFilters: string[];
  setVisibleFilters: (val: string[]) => void;
}

export const ToggleHideFilterPopover = ({
  setVisibleFilters,
  visibleFilters,
  allFilters,
}: ShowHideFilterButtonProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const listRef = useRef(allFilters.map((s) => ({ id: s, item: s })));

  const handleChange = (val: string) => {
    if (visibleFilters.includes(val)) {
      setVisibleFilters([...visibleFilters.filter((s) => s !== val)]);
    } else {
      setVisibleFilters([...visibleFilters, val]);
    }
  };
  const DraggableHandleSelector = 'globalDraggableHandle';

  const updateList = () =>
    setVisibleFilters(listRef.current.map((s) => s.item).filter((s) => visibleFilters.includes(s)));

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
          <Popover.Content style={{ maxHeight: '60vh', overflowY: 'auto', overflowX: 'hidden' }}>
            <StyledPopoverList>
              <ReactSortable
                animation={200}
                handle={`.${DraggableHandleSelector}`}
                list={listRef.current}
                setList={(e) => {
                  listRef.current = e;
                }}
                onEnd={updateList}
              >
                {listRef.current.map(({ item }) => (
                  <StyledItemWrapper className={DraggableHandleSelector} key={item}>
                    <Checkbox
                      size={2}
                      checked={visibleFilters.includes(item)}
                      onChange={() => {
                        handleChange(item);
                      }}
                    />
                    <div style={{ textTransform: 'capitalize' }}>{item}</div>
                    <Icon name="drag_handle" color={tokens.colors.interactive.primary__resting.hex} />
                  </StyledItemWrapper>
                ))}
              </ReactSortable>
            </StyledPopoverList>
          </Popover.Content>
        </Popover>
      )}
    </>
  );
};
