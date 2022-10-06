import { Observable } from 'rxjs';

/**Picks keys that extends the given type */
type PickTypeKeys<Obj, Type, T extends keyof Obj = keyof Obj> = {
	[P in keyof Obj]: Obj[P] extends Type ? P : never;
}[T];

/**Omits all keys of a certain type */
type OmitType<T, Type> = Omit<T, PickTypeKeys<T, Type>>;

/**
 * Creates a union of an object and creates a Observable of all properties
```TS
type Test = {name: string};

type Doc = SubscriberProxy<Test> // {name: string, name$: Observable<string>}
```
 */
export type SubscriberProxy<Type> = Type & {
	[Property in keyof OmitType<Type, (...args: any) => any> as `${Property & string}$`]: Observable<Type[Property]>;
};
