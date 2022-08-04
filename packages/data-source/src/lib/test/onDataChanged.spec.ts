import { DataSourceController } from "../classes";

async function defaultFetch(){
    return {} as any
}
const mocFunction = jest.fn();

describe("OnDataChangedTesting", () => {


    const controller =  new DataSourceController(defaultFetch);
    controller.responseParserAsync = async () => {
        return [1,2,3]
    }

    it("Should run onDataChangedCallback", async () => {
        const {unSubscribe} = controller.onDataChanged((s) => {
            mocFunction();
            expect(s.length).toBe(3)
        })
        await controller.fetchData();
        expect(mocFunction).toBeCalledTimes(1)
        unSubscribe();
    });
    it("Should not run onDataChanged when preventCallbacks is set to true", async () => {
        const {unSubscribe} = controller.onDataChanged(() => {
            throw "Function should not have been called, fetchData is ignoring the preventCallbacks flag"
        })
        await controller.fetchData(true);
        unSubscribe();
    })



    it("Should remove the data", () => {
        expect(controller.data.length).toBeTruthy();
        controller.remove();
        expect(controller.data.length).toBeFalsy();
    })

})