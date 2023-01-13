import { SingleSelect, Autocomplete } from '@equinor/eds-core-react';
import { createGardenProp } from '../../utils/createGardenProp';
import { Fragment, useCallback, useMemo } from 'react';
import { useGardenContext } from '../../hooks';
import { useGroupingKeys } from '../../hooks/useGroupingKeys';
import { FieldSettings } from '../../types';
import { StyledSelect, StyledSelectOneWrapper, StyledSelectRowWrapper, StyledSeparator } from './filterSelector.styles';

const getFieldSettingsKeyFromLabel = <
	T extends Record<PropertyKey, unknown>,
	TExtendedFields extends string = never,
	TCustomGroupByKeys extends Record<PropertyKey, unknown> = never
>(
	label: string,
	fieldSettings: FieldSettings<T, TExtendedFields, TCustomGroupByKeys>
) => Object.keys(fieldSettings).find((k) => fieldSettings[k]?.label === label) || label;

const getFieldSettingsLabelFromKey = <
	T extends Record<PropertyKey, unknown>,
	TExtendedFields extends string = never,
	TCustomGroupByKeys extends Record<PropertyKey, unknown> = never
>(
	key: string,
	fieldSettings: FieldSettings<T, TExtendedFields, TCustomGroupByKeys>
) => fieldSettings?.[key]?.label || key;

export function FilterSelector(): JSX.Element | null {
	const controller = useGardenContext();
	const { setHorizontalGroupingAccessor, setVerticalGroupingKeys, customViews, getData, fieldSettings } = controller;

	const { gardenKey, groupByKeys } = useGroupingKeys();

	const CustomGroupByView = customViews?.customGroupByView;

	const setGroupKeys = (items: string[]) => setVerticalGroupingKeys(items);

	const setGardenKey = (key: string) => {
		setHorizontalGroupingAccessor(key);
		setVerticalGroupingKeys([]);
	};

	const allOptions =
		fieldSettings && Object.keys(fieldSettings).length
			? Object.keys(fieldSettings)
			: Object.keys(getData()[0] as Record<string, unknown>);

	const filterGroupKey = (groupKey: string) => !(groupKey === gardenKey || groupByKeys.includes(groupKey));

	const groupingOptions = getData().length
		? allOptions
				.filter(filterGroupKey)
				.map((groupKey) => fieldSettings?.[groupKey]?.label || groupKey)
				.sort()
		: [];

	const handleExistingSelectionChange = (newValue: string | null | undefined, index: number) => {
		const newGroupByKeys = [...groupByKeys] as string[];
		newValue == null
			? newGroupByKeys.splice(index, 1)
			: (newGroupByKeys[index] = getFieldSettingsKeyFromLabel(newValue, fieldSettings) || newValue);

		setGroupKeys(newGroupByKeys);
	};

	const addItemToGroupKeys = (newValue: string | null | undefined) =>
		newValue && setGroupKeys([...(groupByKeys as string[]), getFieldSettingsKeyFromLabel(newValue, fieldSettings)]);

	const handleGardenKeyChange = (newValue: string | null | undefined) => {
		const keyFromLabel = newValue && getFieldSettingsKeyFromLabel(newValue, fieldSettings);
		keyFromLabel && setGardenKey(keyFromLabel);
	};
	if (!getData()) return null;

	return (
		<StyledSelectRowWrapper>
			{CustomGroupByView && <CustomGroupByView controller={createGardenProp(controller)} />}

			<StyledSeparator> Group by </StyledSeparator>

			<StyledSelectOneWrapper>
				<StyledSelect
					key={gardenKey.toString()}
					items={groupingOptions}
					label={''}
					selectedOption={getFieldSettingsLabelFromKey(gardenKey.toString(), fieldSettings)}
					handleSelectedItemChange={(changes) => handleGardenKeyChange(changes.selectedItem)}
				/>
			</StyledSelectOneWrapper>
			<StyledSeparator>then</StyledSeparator>

			{groupByKeys.sort().map((groupByKey, index) => {
				return (
					<Fragment key={groupByKey}>
						<StyledSelectOneWrapper>
							<SingleSelect
								key={groupByKey.toString()}
								items={groupingOptions || []}
								label={''}
								selectedOption={getFieldSettingsLabelFromKey(groupByKey.toString(), fieldSettings)}
								handleSelectedItemChange={(changes) => {
									handleExistingSelectionChange(changes.selectedItem, index);
								}}
							/>
						</StyledSelectOneWrapper>
						<StyledSeparator>then</StyledSeparator>
					</Fragment>
				);
			})}
			{groupingOptions && groupingOptions.length > 0 && (
				<StyledSelectOneWrapper>
					<SingleSelect
						key={'EmptyGroupBySelector'}
						items={groupingOptions}
						label={''}
						selectedOption=""
						handleSelectedItemChange={(changes) => {
							addItemToGroupKeys(changes.selectedItem);
						}}
					/>
				</StyledSelectOneWrapper>
			)}
		</StyledSelectRowWrapper>
	);
}
