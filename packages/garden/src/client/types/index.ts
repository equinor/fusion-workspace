export type GroupingDefinition<TData> = {
  name: string;
  group: (i: TData) => string | null;
};
