import { Icon } from '@equinor/eds-core-react';
import { tokens } from '@equinor/eds-tokens';
import { useRef } from 'react';

import { FilterGroup as IFilterGroup, FilterValueType } from '../../types';
import { getFilterHeaderText } from '../../utils/getFilterHeaderText';
import { StyledFilterGroupWrapper } from './filterGroup.styles';
import { FilterGroupPopoverMenu } from '../filterGroupPopoverMenu';
import styled from 'styled-components';

interface FilterGroupProps {
  name: string;
  isOpen: boolean;
  onClick: () => void;
  group: IFilterGroup;
  handleFilterItemClick: (filterItem: FilterValueType) => void;
  isChecked: (item: string) => boolean;
}
export const FilterGroup = ({
  name,
  isOpen,
  onClick,
  group,
  handleFilterItemClick,
  isChecked,
}: FilterGroupProps): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);

  // const handleFilterItemLabelClick = (val: FilterValueType) =>
  //   setFilterState([
  //     ...filterState.filter((s) => s.name !== name),
  //     { name: name, values: getGroupValues(name).filter((s) => s !== val) },
  //   ]);

  // const values = groups.find((s) => s.name === name)?.values ?? [];

  const handleFilterItemLabelClick = (val: FilterValueType) => {};

  const values = group.values;

  // const isChecked = (filterValue: FilterValueType) => checkValueIsInactive(name, filterValue);

  // const handleFilterItemClick = (filterItem: FilterValueType) =>
  //   changeFilterItem(isChecked(filterItem) ? 'MarkActive' : 'MarkInactive', name, filterItem);

  const markAllValuesActive = (name: string) => {};

  const isAllChecked = true;
  // const isAllChecked = getInactiveGroupValues(name).length === 0;
  const checkedValues = [''];
  // const checkedValues = values.filter((value) => !getInactiveGroupValues(name).includes(value));

  const customRender = (v) => <>{v?.toString() ?? '(Blank)'}</>;

  if (values.length === 0) return <></>;
  return (
    <div>
      <StyledFilterGroupWrapper ref={ref} onClick={onClick}>
        <StyledFilterText>{getFilterHeaderText(isAllChecked, name, checkedValues)}</StyledFilterText>
        <Icon color={tokens.colors.text.static_icons__tertiary.hex} name="chevron_down" />
      </StyledFilterGroupWrapper>
      {isOpen && (
        <FilterGroupPopoverMenu
          handleFilterItemLabelClick={handleFilterItemLabelClick}
          handleFilterItemClick={handleFilterItemClick}
          isChecked={(value) => isChecked(value)}
          markAllValuesActive={() => markAllValuesActive(name)}
          closePopover={onClick}
          anchorEl={ref.current}
          values={values}
          CustomRender={customRender}
          groupName={name}
        />
      )}
    </div>
  );
};
const StyledFilterText = styled.div`
  text-transform: capitalize;
  padding: 0 0.25rem;
`;
