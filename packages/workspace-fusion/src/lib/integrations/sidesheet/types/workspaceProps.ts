export type WorkspaceSidesheetProps<TData extends Record<PropertyKey, unknown>> = {
  sidesheetOptions?: SidesheetConfig<TData>;
};

export type SidesheetConfig<TData> =
  | { type: 'custom'; Component: () => JSX.Element }
  | {
      type: 'default';
      DetailsSidesheet: (props: DetailsSidesheetProps<TData>) => JSX.Element;
      CreateSidesheet?: () => JSX.Element;
    };

export type DetailsSidesheetProps<TData> = {
  id: string;
  item?: TData;
  close: VoidFunction;
};
