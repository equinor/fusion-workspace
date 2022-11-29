import { Icon } from '@equinor/eds-core-react';
import { tokens } from '@equinor/eds-tokens';
import { useRef } from 'react';

import { useFilterContext } from '../../hooks/useFilterContext';
import { FilterValueType } from '../../types';
import { getFilterHeaderText } from '../../utils/getFilterHeaderText';
import { StyledFilterGroupWrapper } from './filterGroup.styles';
import { FilterGroupPopoverMenu } from '../filterGroupPopoverMenu';
import { useFilterGroups } from '../../hooks';
import styled from 'styled-components';

interface FilterGroupProps {
	name: string;
	isOpen: boolean;
	onClick: () => void;
}
export const FilterGroup = ({ name, isOpen, onClick }: FilterGroupProps): JSX.Element => {
	const ref = useRef<HTMLDivElement>(null);
	const groups = useFilterGroups();
	const { groups: configuration } = useFilterContext();

	const {
		filterStateController: {
			changeFilterItem,
			checkValueIsInactive,
			filterState,
			getInactiveGroupValues,
			markAllValuesActive,
			setFilterState,
		},
		getGroupValues,
	} = useFilterContext();

	const handleFilterItemLabelClick = (val: FilterValueType) =>
		setFilterState([
			...filterState.filter((s) => s.name !== name),
			{ name: name, values: getGroupValues(name).filter((s) => s !== val) },
		]);

	const values = groups.find((s) => s.name === name)?.values ?? [];

	const isChecked = (filterValue: FilterValueType) => checkValueIsInactive(name, filterValue);

	const handleFilterItemClick = (filterItem: FilterValueType) =>
		changeFilterItem(isChecked(filterItem) ? 'MarkActive' : 'MarkInactive', name, filterItem);

	const isAllChecked = getInactiveGroupValues(name).length === 0;

	const checkedValues = values.filter((value) => !getInactiveGroupValues(name).includes(value));

	const customRender =
		configuration.find((s) => s.name === name)?.customValueRender ?? ((v) => <>{v?.toString() ?? '(Blank)'}</>);

	if (values.length === 0) return <></>;
	return (
		<div>
			<StyledFilterGroupWrapper ref={ref} onClick={onClick}>
				<StyledFilterText>{getFilterHeaderText(isAllChecked, name, checkedValues)}</StyledFilterText>
				<Icon color={tokens.colors.text.static_icons__tertiary.hex} name="chevron_down" />
			</StyledFilterGroupWrapper>
			{isOpen && (
				<FilterGroupPopoverMenu
					handleFilterItemLabelClick={handleFilterItemLabelClick}
					handleFilterItemClick={handleFilterItemClick}
					isChecked={isChecked}
					markAllValuesActive={() => markAllValuesActive(name)}
					closePopover={onClick}
					anchorEl={ref.current}
					values={values}
					CustomRender={customRender}
					groupName={name}
				/>
			)}
		</div>
	);
};
const StyledFilterText = styled.div`
	text-transform: capitalize;
	padding: 0 0.25rem;
`;
