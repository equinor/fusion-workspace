import { createWorkspaceController } from './workspace-controller';
const mocFunction = jest.fn();

interface IMockController {
    id: string;
    getTabID: () => string;
}

interface IMockControllers {
    testController?: IMockController;
    garden?: IMockController;
    grid?: IMockController;
}

const mockController = {
    id: 'testController',
    getTabID: () => 'testController',
};
const controller = {
    name: 'testController',
    controller: mockController,
    config: (mockController, ws) => {
        ws.onTabChanged(() => {
            mocFunction();
            if (ws.activeTab === 'garden') {
                ws.setActiveTab('grid');
            }
        });
    },
};

const workspaceController = createWorkspaceController<any, IMockControllers>();

describe('workspaceController', () => {
    it('should add mockTabIdController and two tabs, then change tabs twice', () => {
        workspaceController.addTab({
            name: 'garden',
            controller: {
                id: 'garden',
                getTabID: () => 'garden',
            },

            config: () => {
                // No implementation
            },
        });
        workspaceController.addTab({
            name: 'grid',
            controller: {
                id: 'grid',
                getTabID: () => 'grid',
            },

            config: () => {
                // No implementation
            },
        });

        workspaceController.addController(controller);
        expect(workspaceController.activeTab).toEqual(undefined);
        workspaceController.setActiveTab('garden');
        expect(workspaceController.tabs.length).toEqual(2);
        expect(workspaceController.controllers.testController?.getTabID()).toEqual(
            'testController'
        );
        expect(workspaceController.activeTab).toEqual('grid');
        expect(mocFunction).toBeCalledTimes(2);
    });
    it('should not allow two controller with the same id', () => {
        const setup = () => {
            workspaceController.addController(controller);
        };
        expect(setup).toThrow(Error);
        expect(setup).toThrow('Controller already exist!');
    });
});
