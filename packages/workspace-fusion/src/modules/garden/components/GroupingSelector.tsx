import { Autocomplete, Radio } from '@equinor/eds-core-react';
import { FilterState } from '@equinor/workspace-filter';
import { GardenDataSource, GroupingOption } from '@equinor/workspace-garden';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import styled from 'styled-components';

type GroupingSelectorProps = {
  dataSource: GardenDataSource<FilterState>;
  context: FilterState;
  setGroupingKeys: (keys: string[]) => void;
  groupingKeys: string[];
  dimension: string | null;
  type: string | null;
  onChangeDimension: (dimension: string | null) => void;
  onChangeMode: (type: string | null) => void;
};

export function GroupingSelector({
  dataSource,
  context,
  dimension,
  type,
  setGroupingKeys,
  onChangeDimension,
  onChangeMode,
  groupingKeys,
}: GroupingSelectorProps): JSX.Element | null {
  const { data } = useQuery(['garden', ...groupingKeys, dimension, type, context], {
    refetchOnWindowFocus: false,
    suspense: true,
    useErrorBoundary: true,
    keepPreviousData: false,
    queryFn: ({ signal }) =>
      dataSource.getGardenMeta(groupingKeys, dimension, type, context, signal ?? new AbortSignal()),
  });

  const setGardenKey = (key: string) => {
    
    const foundGroupingOption = data?.allGroupingOptions.find((option) => option.groupingKey === key);
    if (foundGroupingOption) {
      if (
        !dimension ||
        (dimension && foundGroupingOption.dimension && !foundGroupingOption.dimension.includes(dimension))
      ) {
        onChangeDimension(foundGroupingOption.dimension?.[0] || null);
      }

      if (!type || (type && foundGroupingOption.type && !foundGroupingOption.type.includes(type))) {
        onChangeMode(foundGroupingOption.type?.[0] || null);
      }
    } else {
      onChangeDimension(null);
      onChangeMode(null);
    }

    setGroupingKeys([key]);
  };

  const handleExistingSelectionChange = (newValue: string | null | undefined) => {
    const gardenKey = groupingKeys.at(0);
    if (!gardenKey) {
      throw new Error('');
    }
    const newKeys = newValue == null ? [gardenKey] : [gardenKey, newValue];
    setGroupingKeys(newKeys);
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
        options={data.allGroupingOptions.map((option: GroupingOption) => option.groupingKey)}
        label={'Column headers'}
        hideClearButton
        multiple={false}
        selectedOptions={[groupingKeys[0]]}
        onOptionsChange={(changes) => handleGardenKeyChange(changes.selectedItems[0])}
      />
      {data.allGroupingOptions.map(
        (groupingOption) =>
          groupingOption.groupingKey === groupingKeys[0] && (
            <RadioWrapper>
              <RadioCategoryWrapper>
                {groupingOption.dimension &&
                  groupingOption.dimension.map((dim) => (
                    <Radio
                      key={dim}
                      label={dim}
                      value={dim}
                      name="Dimension"
                      checked={dimension === dim}
                      onChange={(e) => onChangeDimension(e.target.value)}
                    />
                  ))}
              </RadioCategoryWrapper>
              <RadioCategoryWrapper>
                {groupingOption.type &&
                  groupingOption.type.map((typ) => (
                    <Radio
                      key={typ}
                      label={typ}
                      value={typ}
                      name="type"
                      checked={type === typ}
                      onChange={(e) => onChangeMode(e.target.value)}
                    />
                  ))}
              </RadioCategoryWrapper>
            </RadioWrapper>
          )
      )}

      <Autocomplete
        options={data.validGroupingOptions}
        label={'Group by'}
        selectedOptions={[groupingKeys.at(1)]}
        onOptionsChange={(changes) => handleExistingSelectionChange(changes.selectedItems[0])}
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

export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 1em;
`;

export const RadioCategoryWrapper = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 0.1em;
`;
