// import React from 'react';
// import { Workspace } from '@equinor/workspace-fusion';
// import { act, render } from '@testing-library/react';
// import { workspaceOptions } from '../config/workspaceOptions';
// import { fakeTimeout } from '../utils/fakeTimeout';
// import { getMockGardenConfig } from '../config/mockGardenConfig';
// import { getMockStatusBar } from '../config/statusbar';

// describe('Testing Kpi api call', () => {
//   it('Should call the get statusbar function on load', async () => {
//     const { gardenModule, gardenConfig } = getMockGardenConfig();
//     const { fakeStatusBar, statusbarConfig } = getMockStatusBar();
//     act(() => {
//       render(
//         <Workspace
//           workspaceOptions={workspaceOptions}
//           statusBarOptions={statusbarConfig}
//           modules={[gardenModule]}
//           gardenOptions={gardenConfig}
//         />
//       );
//     });

//     await fakeTimeout();
//     expect(fakeStatusBar).toBeCalledTimes(1);
//   });
// });
