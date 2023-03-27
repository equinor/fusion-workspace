import {
  GardenGroup,
  GardenHeaderGroup,
  GardenMeta,
  GetBlockRequestArgs,
  GetHeaderBlockRequestArgs,
} from '../../types';

import { useGardenContext, useGroupingKeys, useItemWidths } from '../../hooks';
import { ExpandProvider } from '../ExpandProvider';
import { FilterSelector } from '../FilterSelector';
import { VirtualGarden } from '../VirtualGarden';
import { StyledVirtualContainer } from './virtualContainer.styles';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useQuery } from '@tanstack/react-query';

type VirtualContainerProps = {
  getGardenMeta: (groupingKeys: string[], signal?: AbortSignal) => Promise<GardenMeta>;
  getBlockAsync: (args: GetBlockRequestArgs, signal: AbortSignal) => Promise<GardenGroup<any>[]>;
  getHeader: (args: GetHeaderBlockRequestArgs, signal: AbortSignal) => Promise<GardenHeaderGroup[]>;
};

export const VirtualContainer = ({
  getGardenMeta,
  getBlockAsync,
  getHeader,
}: VirtualContainerProps): JSX.Element | null => {
  const controller = useGardenContext();
  const {
    clickEvents: { onClickItem },
  } = controller;

  const keys = useGroupingKeys();

  const { data } = useQuery(['garden', keys.gardenKey.toString(), ...keys.groupByKeys], {
    refetchOnWindowFocus: false,
    suspense: true,
    queryFn: ({ signal }) => getGardenMeta([keys.gardenKey.toString(), ...keys.groupByKeys], signal),
  });

  if (!data) {
    // Will never happen when suspense is true
    throw new Error();
  }

  const amountOfColumns = data.columnCount;
  const widths = useItemWidths(data.columnCount);

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
        <FilterSelector groupingOptions={data.groupingOptions} />
        <ExpandProvider initialWidths={widths}>
          <VirtualGarden
            meta={data}
            getBlockAsync={(args, signal) => getBlockAsync(args, signal)}
            width={widths[0]}
            handleOnItemClick={(item) => onClickItem && onClickItem(item, controller)}
            getHeader={(args, signal) => getHeader(args, signal)}
          />
        </ExpandProvider>
      </StyledVirtualContainer>
    </>
  );
};
