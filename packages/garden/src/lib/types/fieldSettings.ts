export type GetSortFunction = (a: string, b: string) => number;
export type GetKeyFunction<TData, TCustomGroupByKeys extends Record<string, string>> = (
	item: TData,
	itemKey: keyof TData | string,
	customGroupByKeys?: TCustomGroupByKeys
) => string[] | string;

export type FieldSetting<ItemType, TCustomGroupByKeys extends Record<string, string>> = {
	key?: keyof ItemType | string;
	label?: string;
	getKey?: GetKeyFunction<ItemType, TCustomGroupByKeys>;
	getColumnSort?: GetSortFunction;
};

/**
 * Define Fields that should be used in garden.
 * ItemType and ExtendedFields (optional) are combined on keys, to create a partial record for fields.
 * Garden will use all specified fields to build its group by selection.
 * Fields that are not specified, will be ignored
 *
 * @template ItemType  Base model for item/package used. Is the type that is passed to functions.
 * @template ExtendedFields (optional) string literal that defines fields that does not exist on the base model.
 */
export type FieldSettings<
	ItemType,
	TCustomGroupByKeys extends Record<string, string>,
	ExtendedFields extends string = never
> = Partial<Record<keyof ItemType | ExtendedFields, FieldSetting<ItemType, TCustomGroupByKeys>>>;
