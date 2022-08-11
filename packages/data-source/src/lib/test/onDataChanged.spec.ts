import { DataSourceController } from '../classes';

async function defaultFetch() {
  return [1, 2, 3] as any;
}
const mocFunction = jest.fn();

describe('Validates that the onDataChanged event fires correctly', () => {
  const controller = new DataSourceController(defaultFetch);

  it('Should run onDataChangedCallback', async () => {
    const { unsubscribe } = controller.onDataChanged((s) => {
      mocFunction();
      expect(s.length).toBe(3);
    });
    await controller.fetch();
    expect(mocFunction).toBeCalledTimes(1);
    unsubscribe();
  });

  it('Should not run onDataChanged when preventCallbacks is set to true', async () => {
    const { unsubscribe } = controller.onDataChanged(() => {
      /** If this callback is called the test will fail */
      throw 'Function should not have been called, fetchData is ignoring the preventCallbacks flag';
    });
    await controller.fetch(true);
    unsubscribe();
  });

  it('Should remove the data', () => {
    expect(controller.data.length).toBeTruthy();
    controller.remove();
    expect(controller.data.length).toBeFalsy();
  });
});
