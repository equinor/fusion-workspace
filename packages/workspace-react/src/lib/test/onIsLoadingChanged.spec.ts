import { WorkspaceViewController } from '../classes';

describe('Callback should fire properly when isLoading property changes', () => {
  it('Should call callback when isLoading state changes', () => {
    const {
      viewState: { isLoading, onIsLoadingChanged, setIsLoading },
    } = new WorkspaceViewController();
    const mockFunction = jest.fn();

    expect(isLoading).toBeFalsy();
    onIsLoadingChanged((isLoading) => {
      expect(isLoading).toBeTruthy();
      mockFunction();
    });
    setIsLoading(true);
    expect(mockFunction).toBeCalledTimes(1);
  });
});
