export type Cleanup = VoidFunction;

export type ReplaceFunction = (
	newComp: (el: HTMLDivElement, replace: Frame) => Promise<Cleanup> | Cleanup
) => Promise<Cleanup>;

export type Frame = {
	replace: ReplaceFunction;
	unmount: () => void;
};
