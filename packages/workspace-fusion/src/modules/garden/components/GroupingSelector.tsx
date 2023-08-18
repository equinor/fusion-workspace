import { Autocomplete, Radio } from '@equinor/eds-core-react';
import { FilterState } from '@equinor/workspace-filter';
import { GardenDataSource, GroupingOption } from '@equinor/workspace-garden';
import { useQuery } from '@tanstack/react-query';
import { useRef } from 'react';
import styled from 'styled-components';
import { useOutsideClick } from '../../../lib/hooks/useGardenPopoverOutsideClick';

type GroupingSelectorProps = {
  dataSource: GardenDataSource<FilterState>;
  context: FilterState;
  setGroupingKeys: (keys: string[]) => void;
  groupingKeys: string[];
  dimension: string | null;
  type: string | null;
  onChangeDimension: (dimension: string | null) => void;
  onChangeMode: (type: string | null) => void;
  popoverRef: React.MutableRefObject<HTMLDivElement | null>;
  iconRef: React.MutableRefObject<HTMLDivElement | null>;
  close: VoidFunction;
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
  iconRef,
  popoverRef,
  close,
}: GroupingSelectorProps): JSX.Element | null {
  const { data } = useQuery(['garden', ...groupingKeys, dimension, type, context], {
    refetchOnWindowFocus: false,
    suspense: true,
    useErrorBoundary: true,
    keepPreviousData: false,
    queryFn: ({ signal }) =>
      dataSource.getGardenMeta({ groupingKeys, dimension, type }, context, signal ?? new AbortSignal()),
  });

  const selectorRef = useRef(null);

  useOutsideClick(
    (e, a) => {
      console.log('outside click', a);
      close();
    },
    popoverRef,
    iconRef
  );

  const setGardenKey = (key: string) => {
    const foundGroupingOption = data?.allGroupingOptions.find((option) => option.groupingKey === key);
    if (!foundGroupingOption) {
      throw new Error('Invalid grouping option');
    }

    if (!foundGroupingOption?.dimension?.includes(dimension ?? '')) {
      onChangeDimension(foundGroupingOption.dimension?.at(0) ?? null);
    }

    if (!foundGroupingOption?.type?.includes(type ?? '')) {
      onChangeMode(foundGroupingOption.type?.at(0) ?? null);
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
        ref={selectorRef}
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
                      checked={dimension?.trim().toLowerCase() === dim.trim().toLowerCase()}
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
                      checked={type?.trim().toLowerCase() === typ.trim().toLowerCase()}
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
