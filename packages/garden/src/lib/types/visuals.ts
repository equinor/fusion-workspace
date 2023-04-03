import { GetDescription, GetItemColor } from './';

export interface Visuals<TData extends Record<PropertyKey, unknown>> {
  /**
   * Height of a single garden item
   * Necessary for virtualization to work.
   * Supply this if you are using a custom item view
   */
  rowHeight?: number;

  /** Function that returns the string of text that is to be displayed when a column is expanded */
  getDescription?: GetDescription<TData>;
  /** Function that returns the color of the item to be displayed */
  getItemColor?: GetItemColor<TData>;
}
