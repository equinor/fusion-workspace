import { createWorkspaceController } from '../controllers';
import { Controller, WorkspaceControllerInternal } from '../types';
import { addController } from './addController';

const mocFunction = jest.fn();

interface IMockController {
    id: string;
}

interface IMockControllers {
    mockController?: IMockController;
}

const mockController: IMockController = {
    id: 'mockController',
};

const controller: Controller<IMockController, any> = {
    name: 'mockController',
    controller: mockController,
    config: (mockController) => {
        mocFunction(mockController.id);
    },
};

const workspaceController = createWorkspaceController() as WorkspaceControllerInternal<
    any,
    IMockControllers,
    any,
    any,
    any
>;

describe('addController', () => {
    it('should be able to add controller with config and read id ', () => {
        addController(workspaceController, controller);
        expect(mocFunction).toBeCalled();
        expect(mocFunction).toBeCalledTimes(1);
        expect(mocFunction).not.toBeCalledTimes(2);
        expect(mocFunction).toBeCalledWith('mockController');
        expect(workspaceController.controllers.mockController?.id).toEqual('mockController');
    });
    it('should not allow two controller with the same name / id', () => {
        const setup = () => {
            addController(workspaceController, controller);
        };
        expect(setup).toThrow(Error);
        expect(setup).toThrow('Controller already exist!');
    });
});
