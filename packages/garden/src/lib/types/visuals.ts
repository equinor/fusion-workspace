import { ItemWidthCalculation, HighlightHorizontalColumn, GetDescription, GetItemColor } from './';

export interface Visuals<
	TData extends Record<PropertyKey, unknown>,
	TExtendedFields extends string = never,
	TCustomGroupByKeys extends Record<PropertyKey, unknown> = never
> {
	/**Function for calculating the longest width of a garden column */
	calculateItemWidth?: ItemWidthCalculation<TData, TExtendedFields, TCustomGroupByKeys>;
	/**
	 * Height of a single garden item
	 * Necessary for virtualization to work.
	 * Supply this if you are using a custom item view
	 */
	rowHeight?: number;
	/**
	 * Function for highlighting a single garden header
	 * I.E highlight the current week number
	 */
	highlightHorizontalColumn?: HighlightHorizontalColumn<TData, TExtendedFields, TCustomGroupByKeys>;
	/**
	 * Specifies whether the garden groups should by closed by default
	 * If true, groups are closed by default
	 */
	collapseSubGroupsByDefault?: boolean;
	/** Function that returns the string of text that is to be displayed when a column is expanded */
	getDescription?: GetDescription<TData>;
	/** Function that returns the color of the item to be displayed */
	getItemColor?: GetItemColor<TData>;
}
