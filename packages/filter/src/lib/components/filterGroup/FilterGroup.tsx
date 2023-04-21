import { Icon } from '@equinor/eds-core-react';
import { tokens } from '@equinor/eds-tokens';
import { useRef } from 'react';

import { FilterGroup as IFilterGroup, FilterValueType } from '../../types';
import { getFilterHeaderText } from '../../utils/getFilterHeaderText';
import { StyledFilterGroupWrapper } from './filterGroup.styles';
import { FilterGroupPopoverMenu } from '../filterGroupPopoverMenu';
import styled from 'styled-components';
import { useFilterGroup } from '../../hooks/useFilterGroup';

interface FilterGroupProps {
  name: string;
  isOpen: boolean;
  onClick: () => void;
  group: IFilterGroup;
  uncheckedValues: string[];
}
export const FilterGroup = ({ name, isOpen, onClick, group, uncheckedValues }: FilterGroupProps): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);

  const { clearGroup, filterItemLabelClick, toggleItem, setGroupsUnchecked } = useFilterGroup(group);

  const { filterItems } = group;
  const isAllChecked = uncheckedValues.length === 0;
  const checkedValues = group.filterItems.filter((s) => !filterItems.includes(s));

  const customRender = (v: FilterValueType) => <>{v.value}</>;

  if (filterItems.length === 0) return <></>;
  return (
    <div>
      <StyledFilterGroupWrapper ref={ref} onClick={onClick}>
        <StyledFilterText>{getFilterHeaderText(isAllChecked, name, checkedValues)}</StyledFilterText>
        <Icon color={tokens.colors.text.static_icons__tertiary.hex} name="chevron_down" />
      </StyledFilterGroupWrapper>
      {isOpen && (
        <FilterGroupPopoverMenu
          setUncheckedValues={setGroupsUnchecked}
          handleFilterItemLabelClick={filterItemLabelClick}
          handleFilterItemClick={toggleItem}
          isChecked={(filterItem) => uncheckedValues.includes(filterItem.value)}
          markAllValuesActive={clearGroup}
          closePopover={onClick}
          anchorEl={ref.current}
          values={filterItems}
          CustomRender={customRender}
        />
      )}
    </div>
  );
};
const StyledFilterText = styled.div`
  text-transform: capitalize;
  padding: 0 0.25rem;
`;
