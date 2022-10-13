export type ChangeEvent = {
	origin: string;
	timestamp: Date;
	newVal: any;
	type: 'audit';
	target: string;
};
