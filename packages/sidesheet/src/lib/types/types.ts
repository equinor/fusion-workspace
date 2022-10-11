import { ReactNode } from 'react';
import { BehaviorSubject, Observable } from 'rxjs';

export type Tab<TItem extends Record<PropertyKey, unknown>> = {
	name: string;
	viewComponent: (props: ViewComponentProps<TItem>) => JSX.Element;
};
type ViewComponentProps<TItem extends Record<PropertyKey, unknown>> = {
	item: TItem;
};

export type DefaultError = {
	title: string;
	description: string;
};

export type Provider = ({ children }: { children: ReactNode }) => JSX.Element;

export type SidesheetController<TItem extends Record<PropertyKey, unknown>, TError extends DefaultError> = {
	providers$: BehaviorSubject<Provider[]>;
	title$: BehaviorSubject<string>;
	menuOptions$: BehaviorSubject<never[]>;
	throwError: (value: TError | null) => void;
	error$: Observable<TError | null>;
	subHeadings$: BehaviorSubject<SubHeading[]>;
	tabs$: BehaviorSubject<Tab<TItem>[]>;
	item$: BehaviorSubject<TItem | null>;
	config$: BehaviorSubject<SidesheetConfig>;
	activeTab$: BehaviorSubject<string | null>;
	isOpen$: BehaviorSubject<boolean>;
};

export type TitleFunction<TItem extends Record<PropertyKey, unknown>> = (item: TItem) => string;

export type SubHeading = {
	title: string | number;
	value: string | number | JSX.Element;
};

export type SidesheetConfig = {
	defaultWidth: number;
	minWidth?: number;
	maxWidth?: number;
	defaultActiveTab: string;
	color: string;
};
