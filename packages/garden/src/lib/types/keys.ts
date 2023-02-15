export type HorizontalGroupingAccessor<TData extends Record<PropertyKey, unknown>> = keyof TData | string;

export interface GroupingKeys<TData extends Record<PropertyKey, unknown>> {
  horizontalGroupingAccessor: HorizontalGroupingAccessor<TData>;
  verticalGroupingKeys: string[];
}
