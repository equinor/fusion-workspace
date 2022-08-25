import { Observable, OnchangeCallback } from '@workspace/workspace-core';

interface Node {
	id: string;
}

/** Service for keeping track over selected nodes in the system */
export class SelectionService {
	/** Register a callback for when the selection changes */
	onSelectionChanged: (callback: OnchangeCallback<Node[]>) => void;
	/** Function for selecting a new set of nodes */
	setSelection: (nodes: Node[]) => void;
	/** The currently selected nodes */
	selectedNodes: Node[] = [];

	constructor() {
		const { onchange, setValue } = new Observable<Node[]>([]);
		this.onSelectionChanged = onchange;
		this.setSelection = setValue;
		onchange((val) => (this.selectedNodes = val));
	}
}
