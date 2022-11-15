export type ReplaceFunction = (
	newComp: (el: HTMLDivElement, replace: Frame) => Promise<VoidFunction> | VoidFunction
) => Promise<VoidFunction>;

export type Frame = {
	replace: ReplaceFunction;
	unmount: () => void;
};
