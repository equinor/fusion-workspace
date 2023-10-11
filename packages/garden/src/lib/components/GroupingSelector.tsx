import { Autocomplete, Divider, Radio } from '@equinor/eds-core-react';
import { useQuery } from '@tanstack/react-query';
import { Fragment, useRef } from 'react';
import styled from 'styled-components';
import { GardenDataSource } from './Garden';
import { GroupingOption } from '../types';

type GroupingSelectorProps<TContext> = {
  dataSource: GardenDataSource<TContext>;
  context: TContext;
  setGroupingKeys: (keys: string[]) => void;
  groupingKeys: string[];
  timeInterval: string | null;
  dateVariant: string | null;
  onChangeTimeInterval: (timeInterval: string | null) => void;
  onChangeDateVarient: (dateVariant: string | null) => void;
};

export function GroupingSelector<TContext>({
  dataSource,
  context,
  timeInterval,
  dateVariant,
  setGroupingKeys,
  onChangeTimeInterval,
  onChangeDateVarient,
  groupingKeys,
}: GroupingSelectorProps<TContext>): JSX.Element | null {
  const { data } = useQuery(['garden', ...groupingKeys, timeInterval, dateVariant, context], {
    refetchOnWindowFocus: false,
    suspense: true,
    useErrorBoundary: true,
    keepPreviousData: false,
    queryFn: ({ signal }) =>
      dataSource.getGardenMeta({ groupingKeys, timeInterval, dateVariant }, context, signal ?? new AbortSignal()),
  });

  const selectorRef = useRef(null);

  const setGardenKey = (key: string) => {
    const foundGroupingOption = data?.allGroupingOptions.find((option) => option.groupingKey === key);
    if (!foundGroupingOption) {
      throw new Error('Invalid grouping option');
    }

    if (!foundGroupingOption?.timeInterval?.includes(timeInterval ?? '')) {
      onChangeTimeInterval(foundGroupingOption.timeInterval?.at(0) ?? null);
    }

    if (!foundGroupingOption?.dateVariant?.includes(dateVariant ?? '')) {
      onChangeDateVarient(foundGroupingOption.dateVariant?.at(0) ?? null);
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
    <>
      <StyledGroupHeader>Groups</StyledGroupHeader>
      <Divider />
      <StyledAutoCompleteWrapper>
        <Autocomplete
          ref={selectorRef}
          key={groupingKeys[0]}
          options={data.allGroupingOptions.map((option: GroupingOption) => option.groupingKey)}
          label={'Group by'}
          hideClearButton
          multiple={false}
          selectedOptions={[groupingKeys[0]]}
          onOptionsChange={(changes) => handleGardenKeyChange(changes.selectedItems[0])}
        />
        <Autocomplete
          options={data.validGroupingOptions}
          label={'Then Group by'}
          selectedOptions={[groupingKeys.at(1)]}
          onOptionsChange={(changes) => handleExistingSelectionChange(changes.selectedItems[0])}
        />
      </StyledAutoCompleteWrapper>

      {data.allGroupingOptions.map((groupingOption) => {
        // Check if dateVariant or timeInterval is defined
        const hasDateVariant = !!groupingOption.dateVariant;
        const hasTimeInterval = !!groupingOption.timeInterval;

        if (!hasDateVariant && !hasTimeInterval) return null;

        return (
          groupingOption.groupingKey === groupingKeys[0] && (
            <Fragment key={groupingOption.groupingKey}>
              <StyledGroupHeader>Views</StyledGroupHeader>
              <Divider />
              <RadioWrapper>
                <StyledSubGroupHeader>Date Fields:</StyledSubGroupHeader>
                <RadioCategoryWrapper>
                  {hasDateVariant &&
                    groupingOption.dateVariant?.map((typ) => (
                      <Radio
                        key={typ}
                        label={typ}
                        value={typ}
                        name="dateVariant"
                        checked={dateVariant?.trim().toLowerCase() === typ.trim().toLowerCase()}
                        onChange={(e) => onChangeDateVarient(e.target.value)}
                      />
                    ))}
                </RadioCategoryWrapper>
                <StyledSubGroupHeader>Time Intervals:</StyledSubGroupHeader>
                <RadioCategoryWrapper>
                  {hasTimeInterval &&
                    groupingOption.timeInterval?.map((dim) => (
                      <Radio
                        key={dim}
                        label={dim}
                        value={dim}
                        name="timeInterval"
                        checked={timeInterval?.trim().toLowerCase() === dim.trim().toLowerCase()}
                        onChange={(e) => onChangeTimeInterval(e.target.value)}
                      />
                    ))}
                </RadioCategoryWrapper>
              </RadioWrapper>
            </Fragment>
          )
        );
      })}
    </>
  );
}

export const StyledAutoCompleteWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1em;
`;

export const StyledGroupHeader = styled.div`
  font-weight: 500px;
  padding-top: 2rem;
`;
export const StyledSubGroupHeader = styled.div`
  padding-left: 1rem;
  padding-top: 1rem;
`;
export const RadioWrapper = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 1em;
`;

export const RadioCategoryWrapper = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 0.1em;
`;
