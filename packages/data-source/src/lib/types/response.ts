/**
 * Function for performing a fetch call
 */
export type FetchResponseAsync = (signal?: AbortSignal) => Promise<Response>;
/**
 * Function for parsing the response
 */
export type ResponseParserAsync<T> = (Response: Response) => Promise<T[]>;