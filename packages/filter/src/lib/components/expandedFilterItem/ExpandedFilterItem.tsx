import { Checkbox } from '@equinor/eds-core-react';
import { memo } from 'react';
import { FilterGroup, FilterValueType, ValueFormatterFunction } from '../../types';
import { StyledCount, StyledFilterItemName, StyledFilterItemWrap } from '../filterItem/filterItem.styles';

// const sanitizeFilterItemName = (value: FilterValueType) => value?.toString() ?? DEFAULT_NULL_VALUE;

type ExpandedFilterItemValueProps = {
  virtualRowStart: number;
  virtualRowSize: number;
  filterItem: FilterValueType;
  filterGroup: FilterGroup;
  valueFormatter: ValueFormatterFunction<unknown>;
  CustomRender?: (value: FilterValueType) => JSX.Element;
};

export const ExpandedFilterItem = ({
  virtualRowStart,
  virtualRowSize,
  filterItem,
  filterGroup,
  valueFormatter,
  CustomRender = (value) => <>{''}</>,
}: ExpandedFilterItemValueProps): JSX.Element => {
  return <></>;
  // const {
  //   filterStateController: { changeFilterItem, checkValueIsInactive, setFilterState, filterState },
  //   getCountForFilterValue,
  // } = useFilterContext();
  // function uncheckAllButThisValue() {
  //   setFilterState([
  //     ...filterState.filter((s) => s.name !== filterGroup.name),
  //     { name: filterGroup.name, values: [...filterGroup.values.filter((s) => s !== filterItem)] },
  //   ]);
  // }
  // const isUnChecked = checkValueIsInactive(filterGroup.name, filterItem);
  // const count = getCountForFilterValue(filterGroup.name, filterItem);
  // return (
  //   <StyledFilterItemWrap
  //     title={typeof filterItem === 'string' ? filterItem : '(Blank)'}
  //     style={{
  //       position: 'absolute',
  //       top: 0,
  //       left: 0,
  //       width: '100%',
  //       transform: `translateY(${virtualRowStart}px)`,
  //       height: `${virtualRowSize}px`,
  //     }}
  //   >
  //     <Checkbox
  //       checked={!isUnChecked}
  //       onChange={() => changeFilterItem(isUnChecked ? 'MarkActive' : 'MarkInactive', filterGroup.name, filterItem)}
  //     />
  //     <StyledFilterItemName onClick={uncheckAllButThisValue}>{CustomRender(filterItem)}</StyledFilterItemName>
  //     {!isUnChecked && <StyledCount>({count})</StyledCount>}
  //   </StyledFilterItemWrap>
  // );
};

export const FilterItemValue = memo(ExpandedFilterItem);
