/**
 * Count cache is used by the filter controller to store the counts
 * Count is reset everytime any filter item changes
 * Checkbox runs counting on the fly and will commit the count to the cache
 */
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
