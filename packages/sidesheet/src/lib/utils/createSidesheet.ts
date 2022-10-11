import { BehaviorSubject } from 'rxjs';
import { Provider, SubHeading, Tab, SidesheetConfig, TitleFunction, SidesheetController, DefaultError } from '../types';

export function createSidesheet<TItem extends Record<PropertyKey, unknown>, TError extends DefaultError>() {
	const providers$ = new BehaviorSubject<Provider[]>([]);
	const title$ = new BehaviorSubject('');
	const menuOptions$ = new BehaviorSubject([]);
	const error$ = new BehaviorSubject<TError | null>(null);
	const subHeadings$ = new BehaviorSubject<SubHeading[]>([]);
	const tabs$ = new BehaviorSubject<Tab<TItem>[]>([]);
	const activeTab$ = new BehaviorSubject<string | null>(null);
	const item$ = new BehaviorSubject<TItem | null>(null);
	const config$ = new BehaviorSubject<SidesheetConfig>({
		defaultWidth: 1000,
		maxWidth: 2000,
		minWidth: 100,
		defaultActiveTab: '',
		color: 'grey',
	});

	const isOpen$ = new BehaviorSubject(false);
	item$.subscribe((i) => isOpen$.next(Boolean(i)));

	const controller: SidesheetController<TItem, TError> = {
		providers$,
		title$,
		menuOptions$,
		error$: error$.asObservable(),
		throwError: (error: TError | null) => error$.next(error),
		subHeadings$,
		tabs$,
		item$,
		config$,
		activeTab$,
		isOpen$,
	};

	const configurator = {
		addMenuOptions: (options: []) => {
			menuOptions$.next(options);
			return configurator;
		},
		addTab: (tab: Tab<TItem>) => {
			tabs$.next([...tabs$.value, tab]);
			return configurator;
		},
		addSubHeadings: (subHeadings: (item: TItem) => SubHeading[]) => {
			item$.subscribe((s) => s && subHeadings$.next(subHeadings(s)));
			return configurator;
		},
		addTitle: (titleFunction: TitleFunction<TItem>) => {
			item$.subscribe((s) => s && title$.next(titleFunction(s)));
			return configurator;
		},
		addConfig: (config: SidesheetConfig) => {
			config$.next({ ...config$.value, ...config });
			activeTab$.next(config.defaultActiveTab);
			return configurator;
		},
		addProvider: (provider: Provider) => {
			providers$.next([...providers$.value, provider]);
			return configurator;
		},
		controller,
	};

	return configurator;
}
