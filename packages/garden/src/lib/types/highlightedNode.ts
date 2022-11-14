export type FindNodeCallback<TData extends Record<PropertyKey, unknown>> = (data: TData[]) => string | null;
