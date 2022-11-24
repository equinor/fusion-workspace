import { Observable } from 'rxjs';

/**
 * Creates a union of an object and creates a Observable of all properties
```TS
type Test = {name: string};

type Doc = SubscriberProxy<Test> // {name: string, name$: Observable<string>}
```
 */
export type ObservableProxy<Type> = Type & {
	[Property in keyof Type as `${Property & string}$`]: Observable<Type[Property]>;
} & { completeAll: () => void };
