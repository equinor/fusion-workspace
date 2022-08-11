import { WorkspaceController } from '../controllers';

const mocFunction = jest.fn();

interface Event {
  type: string;
}

const workspaceController = new WorkspaceController<
  unknown,
  Record<string, any>,
  Event,
  unknown,
  unknown
>();

describe('notifyOnClick', () => {
  it('should notify the onClick event with event', () => {
    workspaceController.onClick((event) => {
      expect(event.type).toBe('mockEvent');
    });
    workspaceController.click({ type: 'mockEvent' });
  });
  it('should notify all the onClicks event with event', () => {
    workspaceController.onClick((event) => {
      mocFunction(event.type);
    });
    workspaceController.onClick((event) => {
      mocFunction(event.type);
    });
    workspaceController.click({ type: 'mockEvent' });
    expect(mocFunction).toBeCalled();
    expect(mocFunction).toBeCalledTimes(2);
    expect(mocFunction).toBeCalledWith('mockEvent');
  });
});
