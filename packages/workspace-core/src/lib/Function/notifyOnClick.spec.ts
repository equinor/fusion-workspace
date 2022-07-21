import { WorkspaceControllerInternal } from '../types';
import { createWorkspaceController } from '../workspace-controller';
import { notifyOnClick } from './notifyOnClick';

const mocFunction = jest.fn();

const workspaceController = createWorkspaceController() as WorkspaceControllerInternal<
    any,
    any,
    any,
    any,
    any
>;

describe('notifyOnClick', () => {
    it('should notify the onClick event with event', () => {
        workspaceController.onClick((event) => {
            expect(event.type).toBe('mockEvent');
        });
        notifyOnClick(workspaceController, { type: 'mockEvent' });
    });
    it('should notify all the onClicks event with event', () => {
        workspaceController.onClick((event) => {
            mocFunction(event.type);
        });
        workspaceController.onClick((event) => {
            mocFunction(event.type);
        });
        notifyOnClick(workspaceController, { type: 'mockEvent' });
        expect(mocFunction).toBeCalled();
        expect(mocFunction).toBeCalledTimes(2);
        expect(mocFunction).toBeCalledWith('mockEvent');
    });
});
