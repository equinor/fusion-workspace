import { createWorkspaceController } from '../Controller';
import { WorkspaceControllerInternal } from '../Types';
import { onClick, onDataChanged, onError, onFiletedDataChanges } from './events';

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
        onDataChanged(workspaceController, () => {
            mocFunction();
        });
        onDataChanged(workspaceController, () => {
            mocFunction();
        });
        workspaceController.setData([]);
        expect(mocFunction).toBeCalled();
        expect(mocFunction).toBeCalledTimes(2);
        expect(workspaceController.onDataChangedCallbacks.length).toBe(2);
    });
    it('should add onFiletedDataChanges event', () => {
        const mocFunction = jest.fn();
        onFiletedDataChanges(workspaceController, () => {
            mocFunction();
        });
        onFiletedDataChanges(workspaceController, () => {
            mocFunction();
        });
        workspaceController.setFilteredData([]);
        expect(mocFunction).toBeCalled();
        expect(mocFunction).toBeCalledTimes(2);
        expect(workspaceController.onFilteredDataChangedCallbacks.length).toBe(2);
    });
    it('should add onError event', () => {
        const mocFunction = jest.fn();
        onError(workspaceController, () => {
            mocFunction();
        });
        onError(workspaceController, () => {
            mocFunction();
        });
        workspaceController.throwError('test');
        expect(mocFunction).toBeCalled();
        expect(mocFunction).toBeCalledTimes(2);
        expect(workspaceController.onErrorCallbacks.length).toBe(2);
    });
    it('should add onClick event', () => {
        const mocFunction = jest.fn();
        onClick(workspaceController, () => {
            mocFunction();
        });
        onClick(workspaceController, () => {
            mocFunction();
        });
        workspaceController.notifyOnClick();
        expect(mocFunction).toBeCalled();
        expect(mocFunction).toBeCalledTimes(2);
        expect(workspaceController.onClickCallbacks.length).toBe(2);
    });
});
