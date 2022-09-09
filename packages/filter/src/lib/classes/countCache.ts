export class CountCache {
	countValues = new Map<string, number>();

	clear = () => {
		this.countValues = new Map();
	};

	addCount = (name: string, count: number) => {
		this.countValues.set(name, count);
	};

	getCount = (name: string) => {
		return this.countValues.get(name);
	};
}
