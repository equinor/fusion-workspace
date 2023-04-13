import { useGardenContext, useGroupingKeys, useItemWidths } from '../../hooks';
import { ExpandProvider } from '../ExpandProvider';
import { FilterSelector } from '../FilterSelector';
import { VirtualGarden } from '../VirtualGarden';
import { StyledVirtualContainer } from './virtualContainer.styles';
import { useQuery } from '@tanstack/react-query';
import { GardenDataSource } from '../Garden';

type VirtualContainerProps<TContext = undefined> = {
  dataSource: GardenDataSource<TContext>;
  context: TContext;
};

export const VirtualContainer = <TContext,>({
  dataSource,
  context,
}: VirtualContainerProps<TContext>): JSX.Element | null => {
  const controller = useGardenContext();
  const {
    clickEvents: { onClickItem },
  } = controller;

  const keys = useGroupingKeys();

  const { data } = useQuery(['garden', keys.gardenKey.toString(), ...keys.groupByKeys, context], {
    refetchOnWindowFocus: false,
    suspense: true,
    useErrorBoundary: true,
    keepPreviousData: true,
    queryFn: ({ signal }) =>
      dataSource.getGardenMeta([keys.gardenKey.toString(), ...keys.groupByKeys], context, signal ?? new AbortSignal()),
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
      {/* <ReactQueryDevtools /> */}
      <StyledVirtualContainer id={'garden_root'}>
        <FilterSelector allGroupingOptions={data.allGroupingOptions} validGroupingOptions={data.validGroupingOptions} />
        <ExpandProvider initialWidths={widths}>
          <VirtualGarden
            context={context}
            getSubgroupItems={dataSource.getSubgroupItems}
            meta={data}
            getBlockAsync={dataSource.getBlockAsync}
            width={widths[0]}
            handleOnItemClick={(item) => onClickItem && onClickItem(item)}
            getHeader={dataSource.getHeader}
          />
        </ExpandProvider>
      </StyledVirtualContainer>
    </>
  );
};
