import { createWorkspaceController } from '../controllers';
import { Controller, WorkspaceControllerInternal } from '../types';
import { addController } from './addController';

const mockFunction = jest.fn();

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
        mockFunction(mockController.id);
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
        expect(mockFunction).toBeCalled();
        expect(mockFunction).toBeCalledTimes(1);
        expect(mockFunction).not.toBeCalledTimes(2);
        expect(mockFunction).toBeCalledWith('mockController');
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
