import { useItemWidths } from '../../hooks';
import { ExpandProvider } from '../ExpandProvider';
import { VirtualGarden } from '../VirtualGarden';
import { StyledVirtualContainer } from './virtualContainer.styles';
import { useQuery } from '@tanstack/react-query';
import { GardenDataSource } from '../Garden';
import { useGardenConfig } from '../../hooks/useGardenConfig';
import { useGarden } from '../../hooks/useGarden';

type VirtualContainerProps<TContext = undefined> = {
  dataSource: GardenDataSource<TContext>;
  context: TContext;
};

export const VirtualContainer = <TContext,>({
  dataSource,
  context,
}: VirtualContainerProps<TContext>): JSX.Element | null => {
  const { onClickItem } = useGardenConfig();
  const {
    groupingService: { groupingKeys, timeInterval, dateVariant },
  } = useGarden();

  const { data, isFetching } = useQuery(['garden', ...groupingKeys, timeInterval, dateVariant, context], {
    refetchOnWindowFocus: false,
    suspense: true,
    useErrorBoundary: true,
    keepPreviousData: false,
    cacheTime: Infinity,
    staleTime: Infinity,
    queryFn: ({ signal }) =>
      dataSource.getGardenMeta(
        {
          timeInterval,
          dateVariant,
          groupingKeys,
        },
        context,
        signal ?? new AbortSignal()
      ),
  });

  if (!data) {
    // Will never happen when suspense is true
    throw new Error();
  }

  const amountOfColumns = data.columnCount;
  const columnWidth = data.columnWidth || 300;
  const widths = useItemWidths(data.columnCount, columnWidth);

  //TODO: Handle widths = 0 better
  if (widths.length === 0 || amountOfColumns !== widths.length) {
    return null;
  }

  if (widths.length !== amountOfColumns) {
    return null;
  }

  //TODO: temp fix, should show skeletons
  if (isFetching) {
    return null;
  }

  return (
    <>
      {/* <ReactQueryDevtools /> */}
      <StyledVirtualContainer id={'garden_root'}>
        <ExpandProvider initialWidths={widths} defaultColumnWidth={columnWidth}>
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
