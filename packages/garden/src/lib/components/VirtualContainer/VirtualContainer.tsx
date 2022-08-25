import { useEffect, useMemo, useState } from 'react';
import { GardenGroups } from '../../types';
import { useGardenContext } from '../Garden';
import { ExpandProvider } from '../ExpandProvider';
import { VirtualGarden } from '../VirtualGarden/VirtualGarden';
import { StyledVirtualContainer } from './virtualContainer.styles';
import { FilterSelector } from '../FilterSelector/FilterSelector';
import { defaultSortFunction } from '../../utils/defaultSortFunction';
import { useItemWidths } from '../../hooks/useItemWidths';
import { useGardenGroups } from '../../hooks/useGardenGroups';

export const VirtualContainer = (): JSX.Element | null => {
	const garden = useGardenGroups();

	const controller = useGardenContext();
	const {
		clickEvents: { onClickItem },
	} = controller;
	const amountOfColumns = useMemo(() => garden.length, [garden]);
	const widths = useItemWidths();

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
