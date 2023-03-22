import { GardenGroups } from '../../types';
import { useMemo } from 'react';

import { useGardenContext, useGardenGroups, useItemWidths } from '../../hooks';
import { ExpandProvider } from '../ExpandProvider';
import { FilterSelector } from '../FilterSelector';
import { GetBlockRequestArgs, VirtualGarden } from '../VirtualGarden';
import { StyledVirtualContainer } from './virtualContainer.styles';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

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
    <>
      <ReactQueryDevtools />
      <StyledVirtualContainer id={'garden_root'}>
        <FilterSelector />
        <ExpandProvider initialWidths={widths}>
          <VirtualGarden
            getBlockAsync={(args, signal) => getBlockAsync(args, signal, garden)}
            width={widths[0]}
            handleOnItemClick={(item) => onClickItem && onClickItem(item, controller)}
          />
        </ExpandProvider>
      </StyledVirtualContainer>
    </>
  );
};

/**
 * Configure how to get blocks
 * @param args
 * @param signal
 * @param garden
 * @returns
 */
async function getBlockAsync(
  args: GetBlockRequestArgs,
  signal: AbortSignal,
  garden: GardenGroups<Record<PropertyKey, unknown>>
): Promise<GardenGroups<any>> {
  const { xEnd, xStart, yEnd, yStart, groupingKey } = args;

  if (yStart === 0) {
    return new Promise((_, rej) => rej('rip'));
  }

  const columns = garden.slice(xStart, xEnd + 1);

  const result = columns.map((column) => ({
    ...column,
    items: column.items.slice(yStart, yEnd + 1),
    subGroups: column.subGroups.slice(yStart, yEnd + 1),
  }));

  return new Promise((res) => setTimeout(() => res(result), Math.random() * 800));
}

/**
 * Api call for fetching possible groupingKeys
 */
const getGroupingOptions = async () => {};
