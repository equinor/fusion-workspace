export function validateData<TData>(data: TData[]) {
	if (!Array.isArray(data)) throw new Error('Data is not an array');
	return data;
}
