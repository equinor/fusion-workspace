import { ReactiveValue } from '../classes/reactiveValue';

export interface HighlightedNode {
	node: ReactiveValue<string | null>;
	setHighlighted: (nodeIdOrCallback: (string | null) | findNodeCallback) => void;
}
export type findNodeCallback = <T>(data: T[]) => string | null;
