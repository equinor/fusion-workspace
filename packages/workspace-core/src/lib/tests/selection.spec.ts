import { Observable } from '../classes';
import { createSelectionService } from '../utils';

describe('Selection service should store selection information', () => {
  it('Should interact correctly with a controller', () => {
    const selection = createSelectionService();

    const dummy = new Observable<string[]>([]);

    selection.selectedNodes$.subscribe(dummy.setValue);

    expect(dummy.value?.length).toStrictEqual(0);
    selection.selectedNodes = ['123'];
    expect(dummy.value?.length).toStrictEqual(1);
  });
});
