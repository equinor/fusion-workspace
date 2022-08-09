import { DataSourceController } from "../classes";

const errorMessage = "Some error";


async function defaultFetch(): Promise<any[]>{
    throw errorMessage
}


describe("Validates that the onError event fires correctly", () => {
    const mockFunction = jest.fn();

    const controller =  new DataSourceController<unknown,string>(defaultFetch);
   
    it("Should catch the error", async () => {
        controller.onErrorThrown(s => {
            expect(s).toBe(errorMessage)
            mockFunction();
        })
        await controller.fetch();
        expect(mockFunction).toBeCalled();
    })

})