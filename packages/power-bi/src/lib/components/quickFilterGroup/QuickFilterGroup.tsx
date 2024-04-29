import { Icon } from '@equinor/eds-core-react';
import { tokens } from '@equinor/eds-tokens';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import { ActiveFilter, PowerBiFilter, PowerBiFilterItem } from '../../types';
import { getFilterHeaderText } from '../../utils/getFilterHeader';
import { FilterController } from '../Filter/Filter';
import { PowerBiGroupPopoverMenu } from '../groupPopoverMenu/GroupPopoverMenu';
import { StyledFilterGroupContent, StyledFilterGroupWrapper } from './quickFilterGroup.styles';

interface PowerBiFilterGroupProps {
  controller: FilterController;
  group: PowerBiFilter;
  handleOnChange: (filter: PowerBiFilterItem, singleClick?: boolean) => Promise<void>;
  activeFilters: ActiveFilter[];
}
export const PowerBiFilterGroup = ({
  group,
  activeFilters,
  controller,
  handleOnChange,
}: PowerBiFilterGroupProps): JSX.Element | null => {
  const [isOpen, setIsOpen] = useState(false);
  const anchorEl = useRef<HTMLDivElement>(null);

  if (!activeFilters) return null;
  const isAllChecked = activeFilters.length === 0 || activeFilters.length === group.filterVals.length;

  return (
    <>
      {isOpen && <StyledOverlay onClick={() => setIsOpen(false)} />}
      <StyledFilterGroupWrapper onClick={() => setIsOpen((s) => !s)} ref={anchorEl}>
        <StyledFilterGroupContent>
          <div>
            {getFilterHeaderText(
              isAllChecked,
              group.type,
              activeFilters.map((s) => s?.toString() ?? '(Blank)')
            )}
          </div>

          <Icon color={tokens.colors.text.static_icons__tertiary.hex} name="chevron_down" />
        </StyledFilterGroupContent>
      </StyledFilterGroupWrapper>
      {isOpen && (
        <PowerBiGroupPopoverMenu
          controller={controller}
          checkedValues={activeFilters}
          anchorEl={anchorEl.current}
          group={group}
          values={Object.values(group?.value ?? '(Blank)')}
          onClickFilter={(filter: PowerBiFilterItem, singleClick?: boolean) => handleOnChange(filter, singleClick)}
          onCloseMenu={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

// Overlay to close the popover when clicking outside it
const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
`;
