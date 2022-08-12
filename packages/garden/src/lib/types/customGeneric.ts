export type BaseRecordObject<T> = { [K in keyof T]: T[K] };
