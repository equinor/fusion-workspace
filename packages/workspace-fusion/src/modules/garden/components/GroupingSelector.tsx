import { Autocomplete } from '@equinor/eds-core-react';
import { FilterState } from '@equinor/workspace-filter';
import { GardenDataSource } from '@equinor/workspace-garden';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';

type FilterSelectorProps = {
  dataSource: GardenDataSource<any>;
  context: FilterState;
  setGroupingKeys: (keys: string[]) => void;
  groupingKeys: string[];
};

export function GroupingSelector({
  dataSource,
  context,
  setGroupingKeys,
  groupingKeys,
}: FilterSelectorProps): JSX.Element | null {
  const { data } = useQuery(['garden', ...groupingKeys, context], {
    refetchOnWindowFocus: false,
    suspense: true,
    useErrorBoundary: true,
    keepPreviousData: false,
    queryFn: ({ signal }) => dataSource.getGardenMeta(groupingKeys, context, signal ?? new AbortSignal()),
  });

  const setGroupKeys = (items: string[]) => {
    setGroupingKeys([groupingKeys[0], ...items]);
  };

  const setGardenKey = (key: string) => {
    setGroupingKeys([key]);
  };

  const handleExistingSelectionChange = (newValue: string | null | undefined, index: number) => {
    const newGroupByKeys = groupingKeys.slice(1);
    newValue == null ? newGroupByKeys.splice(index, 1) : (newGroupByKeys[index] = newValue);

    setGroupKeys(newGroupByKeys);
  };

  const handleGardenKeyChange = (newValue: string | null | undefined) => {
    const keyFromLabel = newValue;
    keyFromLabel && setGardenKey(keyFromLabel);
  };

  if (!data) {
    throw new Error('An error occurred while fetching grouping selections');
  }

  return (
    <StyledAutoCompleteWrapper>
      <Autocomplete
        key={groupingKeys[0]}
        options={data.allGroupingOptions}
        label={'Column headers'}
        hideClearButton
        multiple={false}
        selectedOptions={[groupingKeys[0]]}
        onOptionsChange={(changes) => handleGardenKeyChange(changes.selectedItems[0])}
      />

      <Autocomplete
        options={data.validGroupingOptions}
        label={'Group by'}
        selectedOptions={[groupingKeys.at(1)]}
        onOptionsChange={(changes) => handleExistingSelectionChange(changes.selectedItems[0], 0)}
      />
    </StyledAutoCompleteWrapper>
  );
}

export const StyledAutoCompleteWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1em;
`;
