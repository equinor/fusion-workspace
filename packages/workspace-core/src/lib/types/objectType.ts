export type ObjectType<T> = { [K in keyof T]: T[K] };
