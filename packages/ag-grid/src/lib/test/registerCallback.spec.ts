import { GridController } from "../classes"

describe("Should add callback to array", () => {
    it("Callback with corresponding id should be present", () => {
        const controller = new GridController();
        const {id, unSubscribe} = controller.onRowDataChanged(s => s)
        expect(controller.onRowDataChangedCallbacks.map((s) => s.id).includes(id)).toBeTruthy()
        unSubscribe();
        expect(controller.onRowDataChangedCallbacks.map((s) => s.id).includes(id)).toBeFalsy()
    })
})