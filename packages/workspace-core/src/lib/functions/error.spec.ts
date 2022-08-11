import { WorkspaceController } from '../controllers';

const mocFunction = jest.fn();

const workspaceController = new WorkspaceController<
  unknown,
  Record<string, any>,
  unknown,
  WorkspaceError,
  unknown
>();

interface WorkspaceError {
  error: string;
  detail: string;
}

const errorObject: WorkspaceError = {
  error: 'Something went wrong',
  detail: 'Unknown reference',
};

describe('error', () => {
  it('should call error callback with error', () => {
    workspaceController.onError((error: WorkspaceError) => {
      expect(error.detail).toEqual(errorObject.detail);
    });
    workspaceController.throwError(errorObject);
  });
  it('should call all error callbacks with error', () => {
    workspaceController.onError((error: WorkspaceError) => {
      mocFunction(error.detail);
    });
    workspaceController.throwError(errorObject);
    expect(mocFunction).toBeCalled();
    expect(mocFunction).toBeCalledTimes(1);
    expect(mocFunction).not.toBeCalledTimes(2);
    expect(mocFunction).toBeCalledWith(errorObject.detail);
  });
});
