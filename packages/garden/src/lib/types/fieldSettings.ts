import { BaseRecordObject } from './customGeneric';

export type GetSortFunction = (a: string, b: string) => number;
export type GetKeyFunction<
	TData,
	TExtendedFields extends string = never,
	TCustomGroupByKeys extends BaseRecordObject<TCustomGroupByKeys> = never
> = (item: TData, itemKey: keyof TData | TExtendedFields, customGroupByKeys: TCustomGroupByKeys) => string[] | string;

export type FieldSetting<
	ItemType,
	TExtendedFields extends string,
	TCustomGroupByKeys extends BaseRecordObject<TCustomGroupByKeys>
> = {
	key?: keyof ItemType | string;
	label?: string;
	getKey?: GetKeyFunction<ItemType, TExtendedFields, TCustomGroupByKeys>;
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
	ExtendedFields extends string = never,
	TCustomGroupByKeys extends BaseRecordObject<TCustomGroupByKeys> = never
> = Partial<Record<keyof ItemType | ExtendedFields, FieldSetting<ItemType, ExtendedFields, TCustomGroupByKeys>>>;
