import { BehaviorSubject } from 'rxjs';
import { postChangeEvent } from '../postChangeEvent';

export const createDataService = <TData>() => {
	const data$ = new BehaviorSubject<TData[] | null>(null);
	const filteredData$ = new BehaviorSubject<TData[] | null>(null);

	return {
		data$: data$.asObservable(),
		setData: (data: TData[], origin: string) => {
			postChangeEvent({ newVal: data, origin, timestamp: new Date(), type: 'audit', target: 'data' });
			data$.next(data);
		},

		filteredData$: filteredData$.asObservable(),
		setFilteredData: (data: TData[], origin: string) => {
			postChangeEvent({ newVal: data, origin, timestamp: new Date(), type: 'audit', target: 'filteredData' });
			filteredData$.next(data);
		},
	};
};
