import { Provider } from '../types';
import { Observable, OnchangeCallback } from './observable';
import { StateController } from './stateController';
import { TabController } from './tabController';

export class WorkspaceViewController<TTabNames extends string, TError> {
  appKey?: string;

  appColor?: string;

  viewState = new StateController();

  tabController = new TabController<TTabNames>();

  providers: Provider[] = [];

  Sidesheet: (() => JSX.Element) | undefined;

  addProvider = (provider: Provider) => {
    this.providers.filter((s) => s.name !== provider.name);
    this.providers.push(provider);
  };

  addSidesheetComponent = (comp: () => JSX.Element) => {
    this.Sidesheet = comp;
  };

  constructor(defaultTab?: TTabNames) {
    const error = new Observable<TError | undefined>(undefined);
    this.setError = error.setValue;
    this.onError = error.onchange;

    if (defaultTab) {
      this.tabController.setActiveTab(defaultTab);
    }

    error.onchange((val) => {
      this.error = val;
    });
  }

  error?: TError;

  setError: (value: TError | undefined) => void;

  onError: (callback: OnchangeCallback<TError | undefined>) => () => void;

  /** Component for handling errors */
  ErrorComponent?: (error: ErrorProps<TError>) => JSX.Element;

  /** Function for refetching data */
  refetchData?: () => Promise<void> | null;

  destroy = () => {
    for (const key in this) {
      this[key] = null as unknown as this[Extract<keyof this, string>];
      delete this[key];
    }
  };
}

type ErrorProps<TError> = {
  error: TError;
};
