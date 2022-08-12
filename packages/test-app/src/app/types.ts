export interface DefaultInterface {
	id: string;
	sequenceNumber: number;
	title: string;
	description: string;
	phase: string;
	originSource: string;
	originSourceId: string | null;
	changeCategory: ChangeCategory;
	scope: Scope;
}

interface ChangeCategory {
	id: string;
	name: string;
}
interface Scope {
	id: string;
	name: string;
}
