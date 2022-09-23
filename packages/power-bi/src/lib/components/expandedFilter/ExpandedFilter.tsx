import { FilterClearIcon, FilterCollapseIcon, FilterExpandIcon } from '../../icons';
import { PowerBiFilter } from '../../types';
import { FilterController } from '../Filter/Filter';
import { FilterItems } from '../filterItems/FilterItems';
import { ToggleHideFilterPopover } from '../toggleHideFilterPopover.tsx/ToggleHideFilterPopover';
import { StyledExpandedFilterWrapper, StyledFilterItemsWrapper, StyledSidebar } from './expandedFilter.styles';

interface ExpandedFilterProps {
	controller: FilterController;
}

export function ExpandedFilter({ controller }: ExpandedFilterProps): JSX.Element {
	const {
		activeFilters,
		handleOnChange,
		slicerFilters,
		visibleFilters,
		setVisibleFilters,
		resetFilter,
		isFilterExpanded,
		setIsFilterExpanded,
		isAnyFiltersActive,
	} = controller;

	return (
		<StyledExpandedFilterWrapper>
			<StyledFilterItemsWrapper>
				{visibleFilters.map((groupName) => (
					<FilterItems
						controller={controller}
						handleOnChange={handleOnChange}
						handleOnSelectAll={controller.handleOnSelectAll}
						activeFilters={activeFilters}
						group={slicerFilters.find((s) => s.type === groupName) as PowerBiFilter}
						key={groupName}
					/>
				))}
			</StyledFilterItemsWrapper>
			<StyledSidebar>
				<div onClick={() => setIsFilterExpanded(!isFilterExpanded)}>
					{isFilterExpanded ? <FilterCollapseIcon /> : <FilterExpandIcon />}
				</div>
				<FilterClearIcon isDisabled={!isAnyFiltersActive()} onClick={async () => await resetFilter()} />

				<ToggleHideFilterPopover
					allFilters={slicerFilters.map((s) => s.type)}
					setVisibleFilters={setVisibleFilters}
					visibleFilters={visibleFilters}
				/>
			</StyledSidebar>
		</StyledExpandedFilterWrapper>
	);
}