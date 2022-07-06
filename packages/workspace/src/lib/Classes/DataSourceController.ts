import { BaseController } from '@workspace/basecontroller';

type FetchResponseAsync = (signal?: AbortSignal) => Promise<Response>;
type ResponseParserAsync<T> = (Response: Response) => Promise<T[]>;

export interface DataSource<T> {
    responseAsync: (signal?: AbortSignal) => Promise<Response>;

    responseParser?: (Response: Response) => Promise<T[]>;
}

export class DataSourceController<T> extends BaseController {
    /** Function that returns the api call promise */
    fetchResponseAsync: FetchResponseAsync;
    /** Function that parses the response to correct format, defaults to just parsing the raw response */
    responseParserAsync: ResponseParserAsync<T> = defaultResponseParser;
    data: T[] = [];

    constructor(fetch: FetchResponseAsync) {
        super();
        this.fetchResponseAsync = fetch;
    }

    fetchData = async (): Promise<T[]> => {
        const res = await this.fetchResponseAsync();
        const data = await this.responseParserAsync(res);
        this.data = data;
        this.notifyListeners();
        return data;
    };
}

/**
 * Default response parser if no custom parser is provided.
 * @param res
 * @returns
 */
async function defaultResponseParser<T>(res: Response) {
    if (!res.ok) {
        throw 'Failed to get data';
    }
    const data = await res.json();

    if (!Array.isArray(data)) {
        throw 'Data is not in array format';
    }

    return data as T[];
}
