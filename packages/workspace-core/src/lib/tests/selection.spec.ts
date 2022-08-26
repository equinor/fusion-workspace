import { Observable } from '../classes';
import { SelectionService } from '../classes/selectionService';

describe('Selection service should store selection information', () => {
	it('Should interact correctly with a controller', () => {
		const selection = new SelectionService();

		const dummy = new Observable<string[]>([]);

		selection.onSelectionChanged((sel) => dummy.setValue(sel.map((s) => s.id)));
		expect(dummy.value?.length).toStrictEqual(0);
		selection.setSelection([{ id: '123' }]);
		expect(dummy.value?.length).toStrictEqual(1);
	});
});
