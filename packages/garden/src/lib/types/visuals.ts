import {
	ItemWidthCalculation,
	HighlightHorizontalColumn,
	GetCustomDescription,
	GetCustomItemColor,
	GetGroupDescriptionFunc,
	CustomVirtualView,
	Options,
	StatusView,
} from './';

export interface Visuals<T> {
	calculateItemWidth?: ItemWidthCalculation<T>;
	rowHeight?: number;
	highlightHorizontalColumn?: HighlightHorizontalColumn;
	customViews?: CustomVirtualView<T>;
	options?: Options<T>;
	status?: StatusView<T>;
	collapseSubGroupsByDefault?: boolean;
	/** Function that returns the string of text that is to be displayed when a column is expanded */
	getCustomDescription?: GetCustomDescription<T>;
	/** Function that returns the color of the item to be displayed */
	getCustomItemColor?: GetCustomItemColor<T>;

	getGroupDescriptionFunc?: GetGroupDescriptionFunc<T>;
	customView?: CustomVirtualView<T>;
}
