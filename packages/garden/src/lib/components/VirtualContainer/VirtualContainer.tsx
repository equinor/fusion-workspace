import { useMemo } from 'react';

import { useGardenContext, useGardenGroups, useItemWidths } from '../../hooks';
import { ExpandProvider } from '../ExpandProvider';
import { FilterSelector } from '../FilterSelector';
import { VirtualGarden } from '../VirtualGarden';
import { StyledVirtualContainer } from './virtualContainer.styles';

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
    <StyledVirtualContainer id={'garden_root'}>
      <FilterSelector />
      <ExpandProvider initialWidths={widths}>
        <VirtualGarden width={widths[0]} handleOnItemClick={(item) => onClickItem && onClickItem(item, controller)} />
      </ExpandProvider>
    </StyledVirtualContainer>
  );
};
