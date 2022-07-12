/**
 * Default response parser if no custom parser is provided.
 * @param res
 * @returns
 */
export async function defaultResponseParser<T>(res: Response): Promise<T[]> {
    if (!res.ok) {
        throw 'Failed to get data';
    }
    const data = await res.json();

    if (!Array.isArray(data)) {
        throw 'Data is not in array format';
    }

    return data as T[];
}
