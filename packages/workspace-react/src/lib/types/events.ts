/** Function signature for when active tab changes */
export type OnActiveTabChangedCallback<TabName, TController> = (
  to: TabName,
  from: TabName | undefined,
  controller: TController
) => void;
/** Function signature for when sidesheet opens or closes */
export type OnSidesheetOpenOrClosedCallback<TController> = (isOpen: boolean, controller: TController) => void;
/** Function signature for when filter opens or closes */
export type OnFilterOpenOrClosedCallback<TController> = (isOpen: boolean, controller: TController) => void;
/** Function signature for when isLoading changes */
export type OnIsLoadingChangedCallback<TController> = (isLoading: boolean, controller: TController) => void;
/** Function signature for when sidesheet width changes */
export type OnWidthChange = (newWidth: number) => void;
