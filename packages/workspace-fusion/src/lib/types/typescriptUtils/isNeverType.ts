export type IsNeverType<T, TReturnTrue, TReturnFalse> = [T] extends [never] ? TReturnTrue : TReturnFalse;
