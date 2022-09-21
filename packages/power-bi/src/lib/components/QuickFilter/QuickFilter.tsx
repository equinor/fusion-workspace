import { Chip } from '@equinor/eds-core-react';
import { tokens } from '@equinor/eds-tokens';
import styled from 'styled-components';

import { FilterClearIcon, FilterCollapseIcon, FilterExpandIcon } from '../../icons';

import { ActiveFilter, PowerBiFilterItem } from '../../types';
import { ExpandedFilter } from '../expandedFilter/ExpandedFilter';
import { FilterController } from '../Filter/Filter';
import { PowerBiFilterGroup } from '../quickFilterGroup/QuickFilterGroup';

import { StyledCompactFilterWrapper } from './quickFilter.styles';

interface PowerBIQuickFilterProps {
	controller: FilterController;
}

const FilterBar = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 2em;
	align-items: center;
`;
const InfoChip = styled(Chip)`
	background-color: ${tokens.colors.ui.background__info.hex};
	color: ${tokens.colors.text.static_icons__default.hex};
	font-weight: 500;
	font-size: 12px;
	z-index: 1;
`;

const calculateHiddenFilters = (shownFilters: string[], activeFilters: Record<string, ActiveFilter[]>): number => {
	if (shownFilters.length < 0 || Object.keys(activeFilters).length < 0) {
		return 0;
	}
	const activeFilterKeys = Object.keys(activeFilters);
	const filterShownFilters = activeFilterKeys.filter((key) => !shownFilters.includes(key));
	const hiddenFilters = filterShownFilters.reduce((acc, curr) => {
		acc[curr] = activeFilters[curr];
		return acc;
	}, {} as Record<string, ActiveFilter[]>);

	return Object.values(hiddenFilters).filter((a) => a.length > 0).length;
};

export const PowerBIQuickFilter = ({ controller }: PowerBIQuickFilterProps): JSX.Element => {
	const {
		activeFilters,
		handleOnChange,
		isAnyFiltersActive,
		resetFilter,
		slicerFilters,
		isFilterExpanded,
		setIsFilterExpanded,
	} = controller;
	const shownFilters: string[] = [];

	return (
		<FilterWrapper>
			{!isFilterExpanded && (
				<StyledCompactFilterWrapper>
					<FilterBar>
						<>
							{slicerFilters.map((s, i) => {
								i < 9 && shownFilters.push(s.type);
								return (
									i < 9 && (
										<PowerBiFilterGroup
											activeFilters={activeFilters[s.type]}
											controller={controller}
											handleOnChange={(filter: PowerBiFilterItem, singleClick?: boolean) =>
												handleOnChange(s, filter, singleClick)
											}
											group={s}
											key={s.type + i}
										/>
									)
								);
							})}
							<OtherFiltersAppliedInfo
								activeFilters={calculateHiddenFilters(shownFilters, activeFilters)}
							/>
							<FilterButtonContainer>
								<FilterClearIcon
									isDisabled={!isAnyFiltersActive()}
									onClick={async () => await resetFilter()}
								/>

								<div onClick={() => setIsFilterExpanded(!isFilterExpanded)}>
									{isFilterExpanded ? <FilterCollapseIcon /> : <FilterExpandIcon />}
								</div>
							</FilterButtonContainer>
						</>
					</FilterBar>
				</StyledCompactFilterWrapper>
			)}
			{isFilterExpanded && <ExpandedFilter controller={controller} />}
		</FilterWrapper>
	);
};

const FilterButtonContainer = styled.div`
	display: flex;
	align-items: center;
`;

const FilterWrapper = styled.div`
	width: 100%;
	overflow-x: auto;
	overflow-y: hidden;
`;

interface OtherFiltersAppliedInfoProps {
	activeFilters: number;
}

export function OtherFiltersAppliedInfo({ activeFilters }: OtherFiltersAppliedInfoProps): JSX.Element | null {
	if (activeFilters <= 0) return null;

	return <InfoChip>+{activeFilters} other filters applied</InfoChip>;
}
