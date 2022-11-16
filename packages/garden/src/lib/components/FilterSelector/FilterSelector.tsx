import { SingleSelect } from '@equinor/eds-core-react';
import { createGardenProp } from '../../utils/createGardenProp';
import { Fragment, useCallback, useMemo } from 'react';
import { useGardenContext } from '../../hooks';
import { useGroupingKeys } from '../../hooks/useGroupingKeys';
import { FieldSettings } from '../../types';
import { StyledSelectOneWrapper, StyledSelectRowWrapper, StyledSeparator } from './filterSelector.styles';

const getFieldSettingsKeyFromLabel = <T extends Record<PropertyKey, unknown>>(
	label: string,
	fieldSettings: FieldSettings<T, string>
) => Object.keys(fieldSettings).find((k) => fieldSettings[k]?.label === label) || label;

const getFieldSettingsLabelFromKey = <T extends Record<PropertyKey, unknown>>(
	key: string,
	fieldSettings: FieldSettings<T, string>
) => fieldSettings?.[key]?.label || key;

export function FilterSelector(): JSX.Element | null {
	const controller = useGardenContext();
	const { setHorizontalGroupingAccessor, setVerticalGroupingKeys, customViews, data, fieldSettings } = controller;

	const { gardenKey, groupByKeys } = useGroupingKeys();

	const CustomGroupByView = customViews?.customGroupByView;

	const setGroupKeys = useCallback((items: string[]) => {
		setVerticalGroupingKeys(items);
	}, []);

	const setGardenKey = useCallback((key: string) => {
		setHorizontalGroupingAccessor(key);
		setVerticalGroupingKeys([]);
	}, []);

	const allOptions = useMemo(
		() =>
			fieldSettings && Object.keys(fieldSettings).length
				? Object.keys(fieldSettings)
				: Object.keys(data?.value[0] as Record<string, unknown>),
		[fieldSettings, data.value]
	);

	const filterGroupKey = useCallback(
		(groupKey: string) => !(groupKey === gardenKey || groupByKeys.includes(groupKey)),
		[gardenKey, groupByKeys]
	);

	const groupingOptions = useMemo(
		(): string[] =>
			data.value.length
				? allOptions
						.filter(filterGroupKey)
						.map((groupKey) => fieldSettings?.[groupKey]?.label || groupKey)
						.sort()
				: [],

		[data, fieldSettings, filterGroupKey, allOptions]
	);

	const handleExistingSelectionChange = useCallback(
		(newValue: string | null | undefined, index: number) => {
			const newGroupByKeys = [...groupByKeys] as string[];
			newValue == null
				? newGroupByKeys.splice(index, 1)
				: (newGroupByKeys[index] = getFieldSettingsKeyFromLabel(newValue, fieldSettings) || newValue);

			setGroupKeys(newGroupByKeys);
		},
		[fieldSettings, groupByKeys, setGroupKeys]
	);

	const addItemToGroupKeys = useCallback(
		(newValue: string | null | undefined) =>
			newValue &&
			setGroupKeys([...(groupByKeys as string[]), getFieldSettingsKeyFromLabel(newValue, fieldSettings)]),
		[fieldSettings, groupByKeys, setGroupKeys]
	);

	const handleGardenKeyChange = useCallback(
		(newValue: string | null | undefined) => {
			const keyFromLabel = newValue && getFieldSettingsKeyFromLabel(newValue, fieldSettings);
			keyFromLabel && setGardenKey(keyFromLabel);
		},
		[fieldSettings, setGardenKey]
	);
	if (!data) return null;

	return (
		<StyledSelectRowWrapper>
			{CustomGroupByView && <CustomGroupByView controller={createGardenProp(controller)} />}

			<StyledSeparator> Group by </StyledSeparator>

			<StyledSelectOneWrapper>
				<SingleSelect
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
					<Fragment key={index}>
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
