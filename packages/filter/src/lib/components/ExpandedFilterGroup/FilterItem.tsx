import { Checkbox } from '@equinor/eds-core-react';
import { memo, useMemo } from 'react';
import { useFilterContext } from '../../hooks/useFilterContext';
import { FilterGroup, FilterValueType, ValueFormatterFunction } from '../../types';
import { DEFAULT_NULL_VALUE } from '../../utils/convertFromBlank';
import { Count, FilterItemName, FilterItemWrap } from '../filterItem/filterItem.styles';

const sanitizeFilterItemName = (value: FilterValueType) => value?.toString() ?? DEFAULT_NULL_VALUE;

type FilterItemValueProps = {
	virtualRowStart: number;
	virtualRowSize: number;
	filterItem: FilterValueType;
	filterGroup: FilterGroup;
	valueFormatter: ValueFormatterFunction<unknown>;
	CustomRender?: (value: FilterValueType) => JSX.Element;
};

export const FilterItem = ({
	virtualRowStart,
	virtualRowSize,
	filterItem,
	filterGroup,
	valueFormatter,
	CustomRender = (value) => <>{sanitizeFilterItemName(value)}</>,
}: FilterItemValueProps): JSX.Element => {
	const {
		filterStateController: { changeFilterItem, checkValueIsInactive, setFilterState, filterState },
		getCountForFilterValue,
	} = useFilterContext();
	function uncheckAllButThisValue() {
		setFilterState([
			...filterState.filter((s) => s.name !== filterGroup.name),
			{ name: filterGroup.name, values: [...filterGroup.values.filter((s) => s !== filterItem)] },
		]);
	}
	const isUnChecked = checkValueIsInactive(filterGroup.name, filterItem);
	const count = getCountForFilterValue(filterGroup.name, filterItem);
	return (
		<FilterItemWrap
			title={typeof filterItem === 'string' ? filterItem : '(Blank)'}
			style={{
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				transform: `translateY(${virtualRowStart}px)`,
				height: `${virtualRowSize}px`,
			}}
		>
			<Checkbox
				checked={!isUnChecked}
				onChange={() =>
					changeFilterItem(isUnChecked ? 'MarkActive' : 'MarkInactive', filterGroup.name, filterItem)
				}
			/>
			<FilterItemName onClick={uncheckAllButThisValue}>{CustomRender(filterItem)}</FilterItemName>
			{!isUnChecked && <Count>({count})</Count>}
		</FilterItemWrap>
	);
};

export const FilterItemValue = memo(FilterItem);
