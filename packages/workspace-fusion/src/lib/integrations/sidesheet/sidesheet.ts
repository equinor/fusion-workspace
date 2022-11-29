import { GetIdentifier } from '../../types';

export type SidesheetProps<TData> = {
	/**
	 * Identifier for your item
	 *
	 * The same as getIdentifier in workspaceOptions returns
	 */
	id: ReturnType<GetIdentifier<TData>>;
	/**
	 * You might get an instance of your item depending on what triggered the sidesheet
	 * If the sidesheet is triggered by URL we cant provide you the item
	 * If its a click event you will get the item
	 */
	item?: TData;
	/**
	 * Let's the sidesheet interact with workspace
	 */
	controller: Controller;
};

export type Controller = {
	close: VoidFunction;
	invalidate?: VoidFunction;
};

export type SidesheetConfig<TData> = {
	Sidesheet: (props: SidesheetProps<TData>) => JSX.Element;
};
