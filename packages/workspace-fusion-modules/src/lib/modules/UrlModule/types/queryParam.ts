/** A union type of the workspace query parameters */
type QueryParamTopic = 'item' | 'tab';

/** Defines the type for the query parameter */
export type QueryParam = `${QueryParamTopic}=${string}`;
