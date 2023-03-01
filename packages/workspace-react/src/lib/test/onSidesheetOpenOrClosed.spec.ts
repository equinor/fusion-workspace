import { WorkspaceViewController } from '../classes';

describe('Callback should fire properly when sidesheet opens or closes', () => {
  it('Should call callback when sidesheet opens or closes', () => {
    const {
      sidesheet: { isOpen, setIsOpen, onOpenOrClosedChanged },
    } = new WorkspaceViewController();
    const mockFunction = jest.fn();

    expect(isOpen).toBeFalsy();
    onOpenOrClosedChanged((isLoading) => {
      expect(isLoading).toBeTruthy();
      mockFunction();
    });
    setIsOpen(true);
    expect(mockFunction).toBeCalledTimes(1);
  });

  it('Should not fire callbacks if the value didnt change', () => {
    const {
      sidesheet: { isOpen, setIsOpen, onOpenOrClosedChanged },
    } = new WorkspaceViewController();
    const mockFunction = jest.fn();
    expect(isOpen).toBeFalsy();
    onOpenOrClosedChanged(() => {
      mockFunction();
    });
    setIsOpen(false);
    expect(mockFunction).not.toBeCalled();
  });
});
