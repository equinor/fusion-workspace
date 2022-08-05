import { WorkspaceController } from "../controllers";

interface MocContext {
    name: string;
    lastName: string;
    age: number;
}

const mocContext: MocContext = {
    name: 'Tom',
    lastName: 'Jones',
    age: 82,
};
const workspaceController = new WorkspaceController<any, any, any, any, MocContext>();

describe('Workspace controller context', () => {
    it('Set context should successfully update the context. ', () => {
        workspaceController.setContext(() => (mocContext))
        expect(workspaceController.getContext()).toEqual(mocContext);
    });
    it('Set context should handle partial updates, with spread operator', () => {
        workspaceController.setContext((c) => {
            if(!c) return;

            return {
                ...c,
                name: "Ron"
            }
        })
        expect(workspaceController.getContext()).toEqual(
            {...mocContext, name: "Ron"}
        );
        expect(workspaceController.getContext()?.name).toBe('Ron');
        expect(workspaceController.getContext()?.lastName).toBe('Jones');
    });
});
