import { useState } from 'react';

import { CompactFilterWrapper, SearchLine, LeftSection, RightSection } from './quickFilterStyles';
import { Chip } from '@equinor/eds-core-react';
import styled from 'styled-components';
import { tokens } from '@equinor/eds-tokens';
import { FilterGroup } from '../filterGroup';
import { FilterQuickSearch } from '../filterQuickSearch/FilterQuickSearch';
import { ToggleHideFilterPopover } from '../ToggleHideFilterPopover';
import { FilterClearIcon, FilterCollapseIcon, FilterExpandIcon } from '../../icons';
import { FilterController } from '../../classes';
import { FilterView } from '../filterView/FilterView';
import { FilterConfiguration } from '../../types';
import { useOnFilteredDataChanged } from '../../hooks/useOnFilteredDataChanged';

/**
 * How to separate controller and visual logic in this component?
 */
interface QuickFilterProps<T> {
	controller: FilterController<T>;
	groups: Omit<FilterConfiguration<T>, 'valueFormatter'>[];
}

export function QuickFilter<T>({ controller = new FilterController(), groups }: QuickFilterProps<T>): JSX.Element {
	useOnFilteredDataChanged();

	const [filterGroupOpen, setFilterGroupOpen] = useState<string | null>(null);
	const {
		valueFormatters,
		filterStateController: { filterState, getInactiveGroupValues, clearActiveFilters },
	} = controller;

	function checkHasActiveFilters() {
		return filterState.length !== 0;
	}

	const handleExpandFilterGroup = (groupName: string) =>
		filterGroupOpen === groupName ? setFilterGroupOpen(null) : setFilterGroupOpen(groupName);

	const quickFilterGroups = groups?.filter(({ isQuickFilter }) => isQuickFilter).map(({ name }) => name);

	const filterGroups = valueFormatters.map(({ name }) => name);

	const [visibleFilterGroups, setVisibleFilterGroups] = useState<string[]>(
		groups.filter((s) => !s.defaultHidden).map((s) => s.name)
	);

	const [isFilterExpanded, setIsFilterExpanded] = useState(false);

	const toggleFilterIsExpanded = () => {
		setIsFilterExpanded((s) => !s);
		setFilterGroupOpen(null);
	};

	const calculateHiddenFiltersApplied = () =>
		groups.reduce(
			(acc, curr) => (!curr.isQuickFilter && getInactiveGroupValues(curr.name).length > 0 ? acc + 1 : acc),
			0
		);

	return (
		<Wrapper>
			<CompactFilterWrapper>
				<SearchLine>
					<LeftSection>
						<FilterQuickSearch />
					</LeftSection>
					<RightSection>
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
								<OtherFiltersAppliedInfo activeFilters={calculateHiddenFiltersApplied()} />
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
							<FilterClearIcon
								isDisabled={!checkHasActiveFilters()}
								onClick={() => clearActiveFilters()}
							/>

							<div onClick={toggleFilterIsExpanded}>
								{isFilterExpanded ? <FilterCollapseIcon /> : <FilterExpandIcon />}
							</div>
						</div>
					</RightSection>
				</SearchLine>
			</CompactFilterWrapper>
			{isFilterExpanded && <FilterView visibleFilterGroups={visibleFilterGroups} />}
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 100%;
	overflow: scroll;
`;

interface OtherFiltersAppliedInfoProps {
	activeFilters: number;
}

export function OtherFiltersAppliedInfo({ activeFilters }: OtherFiltersAppliedInfoProps): JSX.Element | null {
	if (activeFilters <= 0) return null;

	return <InfoChip>+{activeFilters} other filters applied</InfoChip>;
}

const InfoChip = styled(Chip)`
	background-color: ${tokens.colors.ui.background__info.hex};
	color: ${tokens.colors.text.static_icons__default.hex};
	font-weight: 500;
	font-size: 12px;
`;
