import { Autocomplete, SingleSelect } from '@equinor/eds-core-react';
import { Fragment, useCallback, useMemo } from 'react';
import { SelectOneWrapper, SelectRowWrapper, Separator } from '../Styles/groupingSelector';
import { useParkViewContext } from '../Context/ParkViewProvider';
import { FieldSettings } from '../Models/fieldSettings';

const getFieldSettingsKeyFromLabel = <T,>(label: string, fieldSettings: FieldSettings<T, string>) =>
    Object.keys(fieldSettings).find((k) => fieldSettings[k]?.label === label) || label;

const getFieldSettingsLabelFromKey = <T,>(key: string, fieldSettings: FieldSettings<T, string>) =>
    fieldSettings?.[key]?.label || key;

export function FilterSelector<T>(): JSX.Element | null {
    const {
        fieldSettings,
        visuals,
        data,
        grouping: { horizontalGroupingAccessor, verticalGroupingKeys = [] },
        setVerticalGroupingKeys,
        setHorizontalGroupingAccessor,
    } = useParkViewContext<T>();

    const CustomGroupByView = visuals?.customViews?.customGroupByView;

    const allOptions = useMemo(
        () =>
            fieldSettings && Object.keys(fieldSettings).length
                ? Object.keys(fieldSettings)
                : Object.keys(data?.[0] || {}),
        [fieldSettings, data]
    );

    const filterGroupKey = useCallback(
        (groupKey: string) =>
            !(groupKey === horizontalGroupingAccessor || verticalGroupingKeys.includes(groupKey)),
        [horizontalGroupingAccessor, verticalGroupingKeys]
    );

    const groupingOptions = useMemo(
        (): string[] =>
            data.length
                ? allOptions
                      .filter(filterGroupKey)
                      .map((groupKey) => fieldSettings?.[groupKey]?.label || groupKey)
                      .sort()
                : [],

        [data, fieldSettings, filterGroupKey, allOptions]
    );

    const handleExistingSelectionChange = useCallback(
        (newValue: string | null | undefined, index: number) => {
            const newGroupByKeys = verticalGroupingKeys;
            newValue == null
                ? newGroupByKeys.splice(index, 1)
                : (newGroupByKeys[index] =
                      getFieldSettingsKeyFromLabel(newValue, fieldSettings) || newValue);

            setVerticalGroupingKeys(newGroupByKeys);
        },
        [fieldSettings, verticalGroupingKeys, setVerticalGroupingKeys]
    );

    const addItemToGroupKeys = useCallback(
        (newValue: string | null | undefined) =>
            newValue &&
            setVerticalGroupingKeys([
                ...verticalGroupingKeys,
                getFieldSettingsKeyFromLabel(newValue, fieldSettings),
            ]),
        [fieldSettings, setVerticalGroupingKeys, verticalGroupingKeys]
    );

    const handleGardenKeyChange = useCallback(
        (newValue: string | null | undefined) => {
            const keyFromLabel = newValue && getFieldSettingsKeyFromLabel(newValue, fieldSettings);
            keyFromLabel && setHorizontalGroupingAccessor(keyFromLabel);
            setVerticalGroupingKeys([]);
        },
        [fieldSettings, setHorizontalGroupingAccessor, setVerticalGroupingKeys]
    );
    if (!data) return null;

    return (
        <SelectRowWrapper>
            {CustomGroupByView && <CustomGroupByView />}

            <Separator> Group by </Separator>

            <SelectOneWrapper>
                <SingleSelect
                    items={groupingOptions}
                    label={''}
                    selectedOption={horizontalGroupingAccessor.toString()}
                    handleSelectedItemChange={(e) => handleGardenKeyChange(e.selectedItem)}
                />
                {/* <Autocomplete
                    key={horizontalGroupingAccessor.toString()}
                    options={groupingOptions}
                    multiple={false}
                    label={''}
                    selectedOptions={[
                        getFieldSettingsLabelFromKey(
                            horizontalGroupingAccessor.toString(),
                            fieldSettings
                        ),
                    ]}
                    onOptionsChange={(e) => handleGardenKeyChange(e.selectedItems[0])}
                /> */}
            </SelectOneWrapper>
            <Separator>then</Separator>

            {verticalGroupingKeys.sort().map((groupByKey, index) => {
                return (
                    <Fragment key={index}>
                        <SelectOneWrapper>
                            <Autocomplete
                                key={groupByKey.toString()}
                                options={groupingOptions || []}
                                label={''}
                                multiple={false}
                                selectedOptions={[
                                    getFieldSettingsLabelFromKey(
                                        groupByKey.toString(),
                                        fieldSettings
                                    ),
                                ]}
                                onOptionsChange={(e) =>
                                    handleExistingSelectionChange(e.selectedItems[0], index)
                                }
                            />
                        </SelectOneWrapper>
                        <Separator>then</Separator>
                    </Fragment>
                );
            })}
            {groupingOptions && groupingOptions.length > 0 && (
                <SelectOneWrapper>
                    <Autocomplete
                        key={'EmptyGroupBySelector'}
                        multiple={false}
                        options={groupingOptions}
                        label={''}
                        onOptionsChange={(e) => addItemToGroupKeys(e.selectedItems[0])}
                    />
                </SelectOneWrapper>
            )}
        </SelectRowWrapper>
    );
}
