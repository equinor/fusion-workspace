import { Icon } from '@equinor/eds-core-react';
import { tokens } from '@equinor/eds-tokens';
import { useState, useRef } from 'react';
import { ActiveFilter, PowerBiFilter, PowerBiFilterItem } from '../../types';
import { getFilterHeaderText } from '../../utils/getFilterHeader';
import { FilterController } from '../Filter/Filter';
import { PowerBiGroupPopoverMenu } from '../groupPopoverMenu/GroupPopoverMenu';
import { StyledFilterGroupWrapper } from './quickFilterGroup.styles';

interface PowerBiFilterGroupProps {
	controller: FilterController;
	group: PowerBiFilter;
	handleOnChange: (filter: PowerBiFilterItem, singleClick?: boolean) => Promise<void>;
	activeFilters: ActiveFilter[];
}
export const PowerBiFilterGroup = ({
	group,
	activeFilters,
	controller,
	handleOnChange,
}: PowerBiFilterGroupProps): JSX.Element | null => {
	const [isOpen, setIsOpen] = useState(false);
	const anchorEl = useRef<HTMLDivElement>(null);

	if (!activeFilters) return null;
	const isAllChecked = activeFilters.length === 0 || activeFilters.length === group.filterVals.length;
	return (
		<div>
			<StyledFilterGroupWrapper onClick={() => setIsOpen((s) => !s)} ref={anchorEl}>
				<div>
					{getFilterHeaderText(
						isAllChecked,
						group.type,
						activeFilters.map((s) => s?.toString() ?? '(Blank)')
					)}
				</div>

				<Icon color={tokens.colors.text.static_icons__tertiary.hex} name="chevron_down" />
			</StyledFilterGroupWrapper>
			{isOpen && (
				<PowerBiGroupPopoverMenu
					controller={controller}
					checkedValues={activeFilters}
					anchorEl={anchorEl.current}
					group={group}
					values={Object.values(group.value)}
					onClickFilter={(filter: PowerBiFilterItem, singleClick?: boolean) =>
						handleOnChange(filter, singleClick)
					}
					onCloseMenu={() => setIsOpen(false)}
				/>
			)}
		</div>
	);
};
