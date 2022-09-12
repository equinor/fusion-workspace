import { Icon, Search } from '@equinor/eds-core-react';
import { useCallback, useMemo, useRef, useState } from 'react';
import { useVirtual } from 'react-virtual';
import { useFilterContext } from '../../hooks/useFilterContext';
import { FilterClearIcon } from '../../icons';
import { FilterConfiguration, FilterGroup } from '../../types';
import { convertFromBlank, DEFAULT_NULL_VALUE } from '../../utils/convertFromBlank';
import { searchByValue } from '../../utils/searchByvalue';
import { Case, Switch } from '../../utils/Switch';
import {
	SearchButton,
	StyledFilterHeaderGroup,
	Title,
	VirtualFilterContainer,
	VirtualFilterItemWrapper,
	Wrapper,
} from './expandedFilterGroup.styles';
import { FilterItemValue } from './FilterItem';

interface FilterGroupeComponentProps {
	filterGroup: FilterGroup;
	hideTitle?: boolean;
}

export const ExpandedFilterGroup = ({ filterGroup }: FilterGroupeComponentProps) => {
	const {
		filterStateController: { getInactiveGroupValues, filterState, markAllValuesActive, setFilterState },
	} = useFilterContext();

	const [filterSearchValue, setFilterSearchValue] = useState('');
	const [searchActive, setSearchActive] = useState(false);

	function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
		const { value } = event.target;
		setFilterSearchValue(value);
	}

	function handleSearchButtonClick() {
		setSearchActive((isActive) => !isActive);
	}

	const isSearchable = filterGroup.values.length > 10;
	const hasAnyActiveFilters = Boolean(getInactiveGroupValues(filterGroup.name).length);

	const groupsMatchingSearch = useMemo(
		() =>
			searchByValue(
				filterGroup.values.map((v) => (v !== null ? v.toString() : DEFAULT_NULL_VALUE)),
				filterSearchValue
			),
		[filterGroup.values, filterSearchValue]
	);

	return (
		<Wrapper>
			<StyledFilterHeaderGroup isActive={hasAnyActiveFilters}>
				<Switch>
					<Case when={searchActive}>
						<Search
							autoFocus={searchActive}
							onBlur={() => {
								setSearchActive(false);
								setFilterSearchValue('');
							}}
							aria-label="in filter group"
							id="search-normal"
							placeholder="Search"
							onChange={handleOnChange}
							onKeyPress={(e) => {
								if (e.key === 'Enter') {
									setFilterState([
										...filterState.filter((s) => s.name !== filterGroup.name),
										{
											name: filterGroup.name,
											values: filterGroup.values.filter(
												(s) => !groupsMatchingSearch.includes(s?.toString() ?? '(Blank)')
											),
										},
									]);
									setFilterSearchValue('');
									setSearchActive(false);
								}
							}}
						/>
					</Case>
					<Case when={true}>
						<Title
							onClick={() => isSearchable && handleSearchButtonClick()}
							hasFilters={hasAnyActiveFilters}
						>
							{filterGroup.name}
						</Title>
						{isSearchable && (
							<SearchButton variant="ghost_icon" onClick={handleSearchButtonClick}>
								<Icon name={'search'} id={'search'} />
							</SearchButton>
						)}
						{hasAnyActiveFilters && (
							<FilterClearIcon onClick={() => markAllValuesActive(filterGroup.name)} />
						)}
					</Case>
				</Switch>
			</StyledFilterHeaderGroup>
			<VirtualContainer filterGroup={filterGroup} filterSearchValue={filterSearchValue} />
		</Wrapper>
	);
};

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
		<VirtualFilterContainer ref={parentRef}>
			<VirtualFilterItemWrapper
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
			</VirtualFilterItemWrapper>
		</VirtualFilterContainer>
	);
};
