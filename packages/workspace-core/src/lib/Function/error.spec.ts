import { createWorkspaceController } from '../Controller';
import { WorkspaceControllerInternal } from '../Types';
import { throwError } from './error';

const mocFunction = jest.fn();

const workspaceController = createWorkspaceController() as WorkspaceControllerInternal<
    any,
    any,
    any,
    any,
    any
>;

describe('error', () => {
    it('should call error callback with error', () => {
        workspaceController.onError((error: Error) => {
            expect(error.message).toEqual('mockControllerError');
        });
        throwError(workspaceController, new Error('mockControllerError'));
    });
    it('should call all error callbacks with error', () => {
        workspaceController.onError((error: Error) => {
            mocFunction(error.message);
        });
        throwError(workspaceController, new Error('mockControllerError'));
        expect(mocFunction).toBeCalled();
        expect(mocFunction).toBeCalledTimes(1);
        expect(mocFunction).not.toBeCalledTimes(2);
        expect(mocFunction).toBeCalledWith('mockControllerError');
    });
});
