import { Menu, Button, Search } from '@equinor/eds-core-react';
import { useState } from 'react';
import styled from 'styled-components';
import { useFilterContext, useFilterState } from '../../hooks';
import { FilterValueType } from '../../types';
import { FilterItemCheckbox } from '../filterItem/FilterItemCheckbox';
import { ClearButtonWrapper, MenuWrapper, SearchHolder, VerticalLine } from './filterGroup.styles';

interface FilterGroupPopoverMenuProps {
	anchorEl: HTMLElement | null | undefined;
	onClick: () => void;
	values: FilterValueType[];
	handleFilterItemClick: (item: FilterValueType) => void;
	isChecked: (filterValue: FilterValueType) => boolean;
	markAllValuesActive: () => void;
	CustomRender: (value: FilterValueType) => JSX.Element;
	handleFilterItemLabelClick: (val: FilterValueType) => void;
	groupName: string;
}
export const FilterGroupPopoverMenu = ({
	handleFilterItemClick,
	isChecked,
	handleFilterItemLabelClick,
	markAllValuesActive,
	onClick,
	anchorEl,
	values,
	CustomRender,
	groupName,
}: FilterGroupPopoverMenuProps): JSX.Element => {
	const [searchText, setSearchText] = useState<string>('');

	const { valueFormatters, getCountForFilterValue } = useFilterContext();
	const { setFilterState, filterState } = useFilterState();
	const valueFormatter = valueFormatters.find(({ name }) => name === groupName)?.valueFormatter;

	const handleInput = (e) => setSearchText(e.target.value.toString().toLowerCase());

	const getValuesMatchingSearchText = () =>
		values.filter((s) => !searchText || s?.toString().toLowerCase().startsWith(searchText));

	const setFilterStateFromSearch = () => {
		const valuesMatchingSearch = values.filter((s) => !getValuesMatchingSearchText().includes(s));

		setFilterState([
			...filterState.filter((s) => s.name !== groupName),
			{
				name: groupName,
				values: valuesMatchingSearch,
			},
		]);
		setSearchText('');
		onClick();
	};

	return (
		<Menu
			id="menu-complex"
			aria-labelledby="anchor-complex"
			open={true}
			anchorEl={anchorEl}
			onClose={onClick}
			placement={'bottom-end'}
		>
			<MenuWrapper>
				{values.length > 7 && (
					<>
						<SearchHolder>
							<Search
								value={searchText}
								placeholder="Search"
								onInput={handleInput}
								onKeyPress={(e) => {
									if (e.key === 'Enter') {
										setFilterStateFromSearch();
									}
								}}
							/>
						</SearchHolder>
						<VerticalLine />
					</>
				)}

				<List>
					{getValuesMatchingSearchText().map((value) => (
						<FilterItemCheckbox
							key={value}
							ValueRender={() => CustomRender(value)}
							filterValue={value}
							handleFilterItemClick={() => handleFilterItemClick(value)}
							handleFilterItemLabelClick={() => handleFilterItemLabelClick(value)}
							isChecked={isChecked(value)}
							count={getCountForFilterValue(groupName, value)}
						/>
					))}
				</List>
				<VerticalLine />
				<ClearButtonWrapper>
					<Button onClick={markAllValuesActive} variant="ghost">
						Clear
					</Button>
				</ClearButtonWrapper>
			</MenuWrapper>
		</Menu>
	);
};

const List = styled.div`
	max-height: 250px;
	padding: 8px 8px;
	overflow: scroll;
	height: auto;
`;
