import { Button, Icon, Search } from '@equinor/eds-core-react';
import { useMemo, useState } from 'react';
import { useFilterContext } from '../../hooks/useFilterContext';
import { FilterClearIcon } from '../../icons';
import { FilterGroup } from '../../types';
import { DEFAULT_NULL_VALUE } from '../../utils/convertFromBlank';
import { searchByValue } from '../../utils/searchByvalue';
import { Case, Switch } from '../../utils/Switch';
import { StyledSearchButton, StyledFilterHeaderGroup, StyledTitle, StyledWrapper } from './expandedFilterGroup.styles';
import { VirtualContainer } from '../virtualContainer/VirtualContainer';
import styled from 'styled-components';
import { tokens } from '@equinor/eds-tokens';

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

	/** If user presses enter, the filter item matches the search will be applied and the popover closes */
	function handleOnKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
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
	}

	return (
		<StyledWrapper>
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
							onKeyPress={handleOnKeyPress}
						/>
					</Case>
					<Case when={true}>
						<StyledFilterGroupName>
							<StyledTitle onClick={() => isSearchable && handleSearchButtonClick()}>
								{filterGroup.name}
							</StyledTitle>
							<div>
								{isSearchable && (
									<StyledSearchButton variant="ghost_icon" onClick={handleSearchButtonClick}>
										<Icon name={'search'} id={'search'} />
									</StyledSearchButton>
								)}
								{hasAnyActiveFilters && (
									<Button variant="ghost_icon" onClick={() => markAllValuesActive(filterGroup.name)}>
										<FilterClearIcon />
									</Button>
								)}
							</div>
						</StyledFilterGroupName>
					</Case>
				</Switch>
			</StyledFilterHeaderGroup>
			<VirtualContainer filterGroup={filterGroup} filterSearchValue={filterSearchValue} />
		</StyledWrapper>
	);
};

const StyledFilterGroupName = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 100%;
	&:hover {
		background-color: ${tokens.colors.ui.background__medium.hex};
	}
`;
