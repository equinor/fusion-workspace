import { Autocomplete } from '@equinor/eds-core-react';
import { Fragment } from 'react';
import { useGardenContext } from '../../hooks';
import { useGroupingKeys } from '../../hooks/useGroupingKeys';
import { StyledSelectOneWrapper, StyledSelectRowWrapper, StyledSeparator } from './filterSelector.styles';

type FilterSelectorProps = {
  groupingOptions: string[];
};

export function FilterSelector({ groupingOptions }: FilterSelectorProps): JSX.Element | null {
  const controller = useGardenContext();
  const { setHorizontalGroupingAccessor, setVerticalGroupingKeys } = controller;

  const { gardenKey, groupByKeys } = useGroupingKeys();

  const setGroupKeys = (items: string[]) => setVerticalGroupingKeys(items);

  const setGardenKey = (key: string) => {
    setHorizontalGroupingAccessor(key);
    setVerticalGroupingKeys([]);
  };

  const handleExistingSelectionChange = (newValue: string | null | undefined, index: number) => {
    const newGroupByKeys = [...groupByKeys] as string[];
    newValue == null ? newGroupByKeys.splice(index, 1) : (newGroupByKeys[index] = newValue);

    setGroupKeys(newGroupByKeys);
  };

  const addItemToGroupKeys = (newValue: string | null | undefined) =>
    newValue && setGroupKeys([...(groupByKeys as string[]), newValue.toString()]);

  const handleGardenKeyChange = (newValue: string | null | undefined) => {
    const keyFromLabel = newValue;
    keyFromLabel && setGardenKey(keyFromLabel);
  };

  return (
    <StyledSelectRowWrapper>
      {/* TODO: how to handle? */}
      {/* {CustomGroupByView && <CustomGroupByView controller={createGardenProp(controller)} />} */}

      <StyledSeparator> Group by </StyledSeparator>

      <StyledSelectOneWrapper>
        <Autocomplete
          key={gardenKey.toString()}
          options={[...groupingOptions, ...groupByKeys]}
          label={''}
          hideClearButton
          //TODO: ...EDS check if fixed
          onFocus={(e) => e.preventDefault()}
          multiple={false}
          selectedOptions={[gardenKey.toString()]}
          onOptionsChange={(changes) => handleGardenKeyChange(changes.selectedItems[0])}
        />
      </StyledSelectOneWrapper>
      <StyledSeparator>then</StyledSeparator>

      {groupByKeys.sort().map((groupByKey, index) => {
        return (
          <Fragment key={groupByKey}>
            <StyledSelectOneWrapper>
              <Autocomplete
                key={groupByKey.toString()}
                options={groupingOptions}
                label={''}
                //TODO: ...EDS check if fixed
                onFocus={(e) => e.preventDefault()}
                selectedOptions={[groupByKey.toString()]}
                onOptionsChange={(changes) => handleExistingSelectionChange(changes.selectedItems[0], index)}
              />
            </StyledSelectOneWrapper>
            <StyledSeparator>then</StyledSeparator>
          </Fragment>
        );
      })}
      {groupingOptions && groupingOptions.length > 0 && (
        <StyledSelectOneWrapper>
          <Autocomplete
            key={'EmptyGroupBySelector'}
            options={groupingOptions}
            label={''}
            selectedOptions={['']}
            onFocus={(e) => e.preventDefault()}
            onOptionsChange={(changes) => addItemToGroupKeys(changes.selectedItems[0])}
          />
        </StyledSelectOneWrapper>
      )}
    </StyledSelectRowWrapper>
  );
}
