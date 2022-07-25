import { createWorkspaceController } from '../controllers';
import { WorkspaceControllerInternal } from '../types';
import { click } from './click';

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
        click(workspaceController, { type: 'mockEvent' });
    });
    it('should notify all the onClicks event with event', () => {
        workspaceController.onClick((event) => {
            mocFunction(event.type);
        });
        workspaceController.onClick((event) => {
            mocFunction(event.type);
        });
        click(workspaceController, { type: 'mockEvent' });
        expect(mocFunction).toBeCalled();
        expect(mocFunction).toBeCalledTimes(2);
        expect(mocFunction).toBeCalledWith('mockEvent');
    });
});
