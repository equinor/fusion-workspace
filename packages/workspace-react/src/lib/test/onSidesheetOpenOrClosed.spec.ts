import { WorkspaceViewController } from '../classes';

describe('Callback should fire properly when sidesheet opens or closes', () => {
  it('Should call callback when sidesheet opens or closes', () => {
    const {
      isSidesheetOpen,
      setIsSidesheetOpen,
      onSidesheetOpenOrClosedChanged,
    } = new WorkspaceViewController([], '');
    const mockFunction = jest.fn();

    expect(isSidesheetOpen).toBeFalsy();
    onSidesheetOpenOrClosedChanged((isLoading) => {
      expect(isLoading).toBeTruthy();
      mockFunction();
    });
    setIsSidesheetOpen(true);
    expect(mockFunction).toBeCalledTimes(1);
  });

  it('Should not fire callbacks if the value didnt change', () => {
    const {
      isSidesheetOpen,
      setIsSidesheetOpen,
      onSidesheetOpenOrClosedChanged,
    } = new WorkspaceViewController([], '');
    const mockFunction = jest.fn();
    expect(isSidesheetOpen).toBeFalsy();
    onSidesheetOpenOrClosedChanged(() => {
      mockFunction();
    });
    setIsSidesheetOpen(false);
    expect(mockFunction).not.toBeCalled();
  });
});
