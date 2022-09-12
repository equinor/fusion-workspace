import { useMemo, useRef, useCallback } from 'react';
import { useVirtual } from 'react-virtual';
import { useFilterContext } from '../../hooks';
import { FilterGroup } from '../../types';
import { DEFAULT_NULL_VALUE, convertFromBlank } from '../../utils/convertFromBlank';
import { searchByValue } from '../../utils/searchByvalue';
import {
	StyledVirtualFilterContainer,
	StyledVirtualFilterItemWrapper,
} from '../sexpandedFilterGroup/expandedFilterGroup.styles';
import { FilterItemValue } from '../expandedFilterItem/ExpandedFilterItem';

interface VirtualContainerProps {
	filterGroup: FilterGroup;
	filterSearchValue: string;
}

export const VirtualContainer = ({ filterGroup, filterSearchValue }: VirtualContainerProps): JSX.Element | null => {
	const { valueFormatters, groups: filterOptions } = useFilterContext();

	const groupsMatchingSearch = useMemo(
		() =>
			searchByValue(
				filterGroup.values.map((v) => (v !== null ? v.toString() : DEFAULT_NULL_VALUE)),
				filterSearchValue
			),
		[filterGroup.values, filterSearchValue]
	);

	const rowLength = useMemo(() => groupsMatchingSearch.length, [groupsMatchingSearch]);

	const parentRef = useRef<HTMLDivElement | null>(null);

	const valueFormatter = valueFormatters.find(({ name }) => name === filterGroup.name)?.valueFormatter;

	const rowVirtualizer = useVirtual({
		parentRef,
		size: rowLength,
		estimateSize: useCallback(() => 20, []),
	});
	if (!valueFormatter) return null;
	return (
		<StyledVirtualFilterContainer ref={parentRef}>
			<StyledVirtualFilterItemWrapper
				style={{
					height: `${rowVirtualizer.totalSize}px`,
				}}
			>
				{rowVirtualizer.virtualItems.map((virtualRow) => {
					return (
						<FilterItemValue
							valueFormatter={valueFormatter}
							key={convertFromBlank(groupsMatchingSearch[virtualRow.index])}
							virtualRowSize={virtualRow.size}
							virtualRowStart={virtualRow.start}
							filterItem={convertFromBlank(groupsMatchingSearch[virtualRow.index])}
							filterGroup={filterGroup}
							CustomRender={
								filterOptions?.find(({ name }) => name === filterGroup.name)?.customValueRender
							}
						/>
					);
				})}
			</StyledVirtualFilterItemWrapper>
		</StyledVirtualFilterContainer>
	);
};
