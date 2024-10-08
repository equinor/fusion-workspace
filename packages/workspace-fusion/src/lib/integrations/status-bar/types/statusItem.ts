export interface StatusItem {
  /** Title to be shown above the value */
  title: string;
  /** Value to be shown in the status bar */
  value: string | number;
  description?: string;
  group?: string;
}
