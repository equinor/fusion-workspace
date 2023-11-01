export type WorkspaceSidesheetProps<TData extends Record<PropertyKey, unknown>> = {
  sidesheetOptions?: SidesheetConfig<TData>;
};

export type SidesheetConfig<TData> = {
  type: 'default';
  DetailsSidesheet: (props: DetailsSidesheetProps<TData>) => JSX.Element;
  CreateSidesheet?: (props: CreateSidesheetProps<TData>) => JSX.Element;
};
//Future for Piping & release control, disabled for now
// | { type: 'custom'; Component: () => JSX.Element }

export type DetailsSidesheetProps<TData> = {
  id: string;
  item?: TData;
  close: VoidFunction;
};

export type CreateSidesheetProps<TData> = {
  close: VoidFunction;
};
