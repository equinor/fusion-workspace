import { OnchangeCallback, Observable } from './observable';

export class StateController {
  isLoading: boolean | undefined;

  setIsLoading: (value: boolean) => void;

  onIsLoadingChanged: (callback: OnchangeCallback<boolean>) => () => void;

  constructor() {
    const isLoading = new Observable<boolean>(false, (newVal, oldVal) => newVal === oldVal);
    this.setIsLoading = isLoading.setValue;
    this.onIsLoadingChanged = isLoading.onchange;
    this.isLoading = isLoading.value;
    isLoading.onchange((val) => {
      this.isLoading = val;
    });
  }
}
