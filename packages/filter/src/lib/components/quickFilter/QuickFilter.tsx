import { useState } from 'react';

import {
	StyledCompactFilterWrapper,
	StyledLeftSection,
	StyledRightSection,
	StyledSearchLine,
	StyledWrapper,
} from './quickFilter.styles';
import { FilterGroup } from '../filterGroup';
import { FilterQuickSearch } from '../filterQuickSearch/FilterQuickSearch';
import { ToggleHideFilterPopover } from '../toggleHideFilterPopover/ToggleHideFilterPopover';
import { FilterClearIcon, FilterCollapseIcon, FilterExpandIcon } from '../../icons';
import { FilterController } from '../../classes';
import { FilterView } from '../filterView/FilterView';
import { useIsFilterExpanded } from '../../hooks/useIsFilterExpanded';
import { useFilterContext } from '../../hooks';
import { FiltersAppliedInfo } from '../filtersAppliedInfo/FiltersAppliedInfo';
import { Button } from '@equinor/eds-core-react';
import styled from 'styled-components';

/**
 * How to separate controller and visual logic in this component?
 */
interface QuickFilterProps<T> {
	controller: FilterController<T>;
}

const PButton = styled.button`
	background: none;
	border: none;
	height: 48px;
	width: 48px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

export function QuickFilter<T>({ controller }: QuickFilterProps<T>): JSX.Element {
	const { groups } = useFilterContext();
	const { setIsFilterExpanded } = useFilterContext();
	const isFilterExpanded = useIsFilterExpanded();

	const [filterGroupOpen, setFilterGroupOpen] = useState<string | null>(null);
	const {
		valueFormatters,
		filterStateController: { filterState, getInactiveGroupValues, clearActiveFilters },
	} = controller;

	const handleExpandFilterGroup = (groupName: string) =>
		filterGroupOpen === groupName ? setFilterGroupOpen(null) : setFilterGroupOpen(groupName);

	const quickFilterGroups = groups?.filter(({ isQuickFilter }) => isQuickFilter).map(({ name }) => name);

	const filterGroups = valueFormatters.map(({ name }) => name);

	const [visibleFilterGroups, setVisibleFilterGroups] = useState<string[]>(
		groups.filter((s) => !s.defaultHidden).map((s) => s.name)
	);

	const toggleFilterIsExpanded = () => {
		setIsFilterExpanded(!isFilterExpanded);
		setFilterGroupOpen(null);
	};

	const calculateHiddenFiltersApplied = () =>
		groups.reduce(
			(acc, curr) => (!curr.isQuickFilter && getInactiveGroupValues(curr.name).length > 0 ? acc + 1 : acc),
			0
		);

	return (
		<StyledWrapper>
			<StyledCompactFilterWrapper>
				<StyledSearchLine>
					<StyledLeftSection>
						<FilterQuickSearch />
					</StyledLeftSection>
					<StyledRightSection>
						{!isFilterExpanded && (
							<>
								{quickFilterGroups.map(
									(group, i) =>
										i < 5 && (
											<FilterGroup
												onClick={() => handleExpandFilterGroup(group)}
												key={group}
												isOpen={filterGroupOpen === group}
												name={group}
											/>
										)
								)}
								<FiltersAppliedInfo activeFilters={calculateHiddenFiltersApplied()} />
							</>
						)}
						<div style={{ display: 'flex' }}>
							{isFilterExpanded && (
								<ToggleHideFilterPopover
									allFilters={filterGroups}
									setVisibleFilters={setVisibleFilterGroups}
									visibleFilters={visibleFilterGroups}
								/>
							)}

							<PButton onClick={() => clearActiveFilters()}>
								<FilterClearIcon isDisabled={!filterState.length} />
							</PButton>

							<PButton onClick={toggleFilterIsExpanded}>
								{isFilterExpanded ? <FilterCollapseIcon /> : <FilterExpandIcon />}
							</PButton>
						</div>
					</StyledRightSection>
				</StyledSearchLine>
			</StyledCompactFilterWrapper>
			{isFilterExpanded && <FilterView visibleFilterGroups={visibleFilterGroups} />}
		</StyledWrapper>
	);
}
