import { Observable } from '../classes';
describe('Listeners should be notified whenever the value they subscribed to changes', () => {
	it('Should fire the callback', () => {
		const observable = new Observable(false);
		const mockFunction = jest.fn();
		observable.onchange(mockFunction);
		observable.setValue(true);
		expect(mockFunction).toBeCalledTimes(1);
	});

	it('Should not fire the callback after unsubscribing', () => {
		const observable = new Observable(false);
		const mockFunction = jest.fn();
		const unsubscribe = observable.onchange(mockFunction);
		unsubscribe();
		observable.setValue(true);
		expect(mockFunction).not.toBeCalled();
	});

	it('Should pass correct parameters to the callback', () => {
		const initValue = true;
		const newValue = false;
		const observable = new Observable(initValue);
		const mockFunction = jest.fn();
		observable.onchange(mockFunction);
		observable.setValue(newValue);
		expect(mockFunction).toBeCalledWith(newValue, initValue);
	});

	it('Should not fire callbacks if compare function returns true', () => {
		const value = false;
		const observable = new Observable(value, (a, b) => a === b);
		observable.onchange(() => {
			throw new Error('Callback shouldnt be called, value never changed');
		});
		observable.setValue(value);
	});
});
