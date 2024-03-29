import { GetDescription } from './';

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
  itemColor?: string;
  popoverComponent?: (props: PopoverComponentProps<TData>) => JSX.Element;
}

export type PopoverComponentProps<TData extends Record<PropertyKey, unknown>> = {
  item: TData;
};
