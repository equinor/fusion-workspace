import { useEffect, useMemo, useState } from 'react';
import { GardenGroups } from '../../types';
import { useGardenContext } from '../Garden';
import { ExpandProvider } from '../ExpandProvider';
import { VirtualGarden } from '../VirtualGarden/VirtualGarden';
import { StyledVirtualContainer } from './virtualContainer.styles';
import { FilterSelector } from '../FilterSelector/FilterSelector';

export const VirtualContainer = (): JSX.Element | null => {
	const garden = useGardenGroups();

	const controller = useGardenContext();
	const {
		clickEvents: { onClickItem },
		highlightedNode: { value: selectedItem },
	} = controller;

	console.log(controller);

	const amountOfColumns = useMemo(() => garden.length, [garden]);
	const widths = useItemWidths();

	console.log(amountOfColumns);
	//TODO: Handle widths = 0 better
	if (widths.length === 0 || amountOfColumns !== widths.length) {
		return null;
	}

	if (widths.length !== amountOfColumns) {
		return null;
	}

	return (
		<StyledVirtualContainer>
			<FilterSelector />
			<ExpandProvider initialWidths={widths}>
				<VirtualGarden
					width={widths[0]}
					handleOnItemClick={(item) => onClickItem && onClickItem(item, controller)}
				/>
			</ExpandProvider>
		</StyledVirtualContainer>
	);
};

export function useItemWidths() {
	const [widths, setWidths] = useState<number[]>([]);
	const groups = useGardenGroups();

	const amountOfColumns = useMemo(() => groups.length, [groups]);

	const {
		visuals: { calculateItemWidth },
		grouping: {
			value: { horizontalGroupingAccessor },
		},
		customGroupByKeys,
	} = useGardenContext();

	useEffect(() => {
		if (groups && amountOfColumns > 0) {
			const width = calculateItemWidth(groups, horizontalGroupingAccessor, customGroupByKeys);
			setWidths(new Array(amountOfColumns).fill(width));
		}
	}, [amountOfColumns, groups, calculateItemWidth, customGroupByKeys, horizontalGroupingAccessor]);

	return widths;
}

export function useGardenGroups() {
	const controller = useGardenContext();

	const [groups, setGroups] = useState<GardenGroups<unknown>>(controller.groups.value);

	useEffect(() => {
		const unsubscribe = controller.groups.onChange(setGroups);
		return unsubscribe;
	}, []);

	return groups;
}
