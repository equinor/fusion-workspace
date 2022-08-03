import { createWorkspaceController } from '../controllers';
import { WorkspaceControllerInternal } from '../types';
import { onClick, onDataChanged, onError, onFilteredDataChange } from './events';

const workspaceController = createWorkspaceController() as WorkspaceControllerInternal<
    any,
    any,
    any,
    any,
    any
>;

describe('events', () => {
    it('should add onOriginalDataChanged event', () => {
        const mocFunction = jest.fn();

        const s1 = onDataChanged(workspaceController, () => {
            mocFunction();
        });
        const s2 = onDataChanged(workspaceController, () => {
            mocFunction();
        });
        workspaceController.setData([]);
        expect(mocFunction).toBeCalled();
        expect(mocFunction).toBeCalledTimes(2);
        expect(workspaceController.onDataChangedCallbacks.length).toBe(2);

        s1.unSubscribe();
        s2.unSubscribe();

        expect(workspaceController.onDataChangedCallbacks.length).toBe(0);
        workspaceController.setData([]);
    });
    it('should add onFilteredDataChange event', () => {
        const mocFunction = jest.fn();

        const s1 = onFilteredDataChange(workspaceController, () => {
            mocFunction();
        });
        const s2 = onFilteredDataChange(workspaceController, () => {
            mocFunction();
        });
        workspaceController.setFilteredData([]);
        expect(mocFunction).toBeCalled();
        expect(mocFunction).toBeCalledTimes(2);
        expect(workspaceController.onFilteredDataChangedCallbacks.length).toBe(2);

        s1.unSubscribe();
        s2.unSubscribe();

        expect(workspaceController.onFilteredDataChangedCallbacks.length).toBe(0);
    });
    it('should add onError event', () => {
        const mocFunction = jest.fn();

        const s1 = onError(workspaceController, () => {
            mocFunction();
        });
        const s2 = onError(workspaceController, () => {
            mocFunction();
        });
        workspaceController.throwError('test');
        expect(mocFunction).toBeCalled();
        expect(mocFunction).toBeCalledTimes(2);
        expect(workspaceController.onErrorCallbacks.length).toBe(2);

        s1.unSubscribe();
        s2.unSubscribe();

        expect(workspaceController.onErrorCallbacks.length).toBe(0);
    });
    it('should add onClick event', () => {
        const mocFunction = jest.fn();

        const s1 = onClick(workspaceController, () => {
            mocFunction();
        });
        onClick(workspaceController, () => {
            mocFunction();
        });

        workspaceController.click();
        expect(mocFunction).toBeCalled();
        expect(mocFunction).toBeCalledTimes(2);
        expect(workspaceController.onClickCallbacks.length).toBe(2);
        const event = s1.id;
        s1.unSubscribe();

        expect(workspaceController.onClickCallbacks.length).toBe(1);
        expect(workspaceController.onClickCallbacks.map((s) => s.id)).not.toContain(event);
    });
});
