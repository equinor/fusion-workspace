import { Observable } from '../';
import { OnchangeCallback } from '../../types';

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
		const { onchange, setValue } = new Observable<Node[]>([], isSelectionEqual);
		this.onSelectionChanged = onchange;
		this.setSelection = setValue;
		onchange((val) => {
			this.selectedNodes = val;
		});
	}
}

function isSelectionEqual(a?: Node[], b?: Node[]): boolean {
	//Both are undefined
	if (!a && !b) return true;
	//Only one of them is undefined
	if (!a || !b) return false;

	if (a.length !== b.length) return false;

	return a.every(({ id }) => b.map((s) => s.id).includes(id));
}
