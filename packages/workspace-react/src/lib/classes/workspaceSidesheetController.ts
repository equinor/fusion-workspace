import {
  Callback,
  OnSidesheetOpenOrClosedCallback,
  OnWidthChange,
} from '../types';
import { registerCallback } from '../utils/registerCallback';

export class WorkspaceSidesheetController {
  Component?: () => JSX.Element;

  isOpen = false;

  width = 1000;

  minWidth = 200;

  setWidth = (newWidth: number) => {
    this.width = newWidth;
    this.onSidesheetWidthChangedCallbacks.forEach(({ callback }) =>
      callback(newWidth)
    );
  };

  setIsOpen = (isOpen: boolean) => {
    if (this.isOpen === isOpen) return;
    this.isOpen = isOpen;
    this.onSidesheetOpenOrClosedCallbacks.forEach(({ callback }) =>
      callback(isOpen, this)
    );
  };

  /**
   * Register a callback to be called whenever the sidesheet opens or closes
   * @param cb Callback to be called when the sidesheet opens or closes
   * @returns Id of the callback(debug purposes), and an unsubscribe function
   */
  onOpenOrClosedChanged = (cb: OnSidesheetOpenOrClosedCallback<this>) =>
    registerCallback(
      this.onSidesheetOpenOrClosedCallbacks,
      cb,
      this.removeOnSidesheetOpenOrClosedCallback
    );
  /**
   * Register a callback to be called whenever the sidesheet width changes
   * @param cb Callback to be called when the sidesheet width changes
   * @returns Id of the callback(debug purposes), and an unsubscribe function
   */
  onWidthChange = (cb: OnWidthChange) =>
    registerCallback(
      this.onSidesheetWidthChangedCallbacks,
      cb,
      this.removeOnSidesheetWidthChangedCallback
    );

  private onSidesheetOpenOrClosedCallbacks: Callback<
    OnSidesheetOpenOrClosedCallback<this>
  >[] = [];

  private onSidesheetWidthChangedCallbacks: Callback<OnWidthChange>[] = [];

  private removeOnSidesheetOpenOrClosedCallback = (id: string) =>
    (this.onSidesheetOpenOrClosedCallbacks =
      this.onSidesheetOpenOrClosedCallbacks.filter((s) => s.id !== id));

  private removeOnSidesheetWidthChangedCallback = (id: string) =>
    (this.onSidesheetWidthChangedCallbacks =
      this.onSidesheetWidthChangedCallbacks.filter((s) => s.id !== id));
}
