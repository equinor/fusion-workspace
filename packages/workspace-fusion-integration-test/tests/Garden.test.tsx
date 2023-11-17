// import React, { memo } from 'react';
// import { Workspace } from '@equinor/workspace-fusion';
// import { render, getByText, waitFor } from '@testing-library/react';
// import { workspaceOptions } from '../config/workspaceOptions';
// import { fakeTimeout } from '../utils/fakeTimeout';
// import { getMockGardenConfig } from '../config/mockGardenConfig';

// describe('Testing garden integration', () => {
//   it('Should call all garden api functions', async () => {
//     const { gardenModule, fakeGardenMeta, fakeHeaders, gardenConfig } = getMockGardenConfig();

//     render(<Workspace workspaceOptions={workspaceOptions} modules={[gardenModule]} gardenOptions={gardenConfig} />);

//     await waitFor(() => {
//       expect(fakeGardenMeta).toHaveBeenCalled();
//       expect(fakeHeaders).toHaveBeenCalled();
//     });
//   });

//   it('Should render a custom garden item', async () => {
//     const { gardenModule, gardenConfig } = getMockGardenConfig();
//     const uniqueGardenItemId = 'uid-garden-item';

//     render(
//       <Workspace
//         workspaceOptions={workspaceOptions}
//         modules={[gardenModule]}
//         gardenOptions={{
//           ...gardenConfig,
//           customViews: {
//             customItemView: memo(() => <div id={uniqueGardenItemId}></div>),
//           },
//         }}
//       />
//     );

//     await waitFor(() => {
//       const el = document.getElementById(uniqueGardenItemId);
//       expect(el).toBeInTheDocument();
//     });
//   });

//   it('Should render a custom garden group', async () => {
//     const { gardenModule, gardenConfig } = getMockGardenConfig();
//     const uniqueGardenHeaderId = 'uid-garden-group';

//     render(
//       <Workspace
//         workspaceOptions={workspaceOptions}
//         modules={[gardenModule]}
//         gardenOptions={{
//           ...gardenConfig,
//           customViews: {
//             customHeaderView: memo(() => <div id={uniqueGardenHeaderId}></div>),
//           },
//         }}
//       />
//     );

//     await waitFor(() => {
//       const el = document.getElementById(uniqueGardenHeaderId);
//       expect(el).toBeInTheDocument();
//     });
//   });

//   it('Should render the correct display name', async () => {
//     const { gardenModule, gardenConfig } = getMockGardenConfig();
//     const uniqueDisplayName = 'uid-display-name';

//     render(
//       <Workspace
//         workspaceOptions={workspaceOptions}
//         modules={[gardenModule]}
//         gardenOptions={{
//           ...gardenConfig,
//           getDisplayName: () => uniqueDisplayName,
//         }}
//       />
//     );

//     await waitFor(() => {
//       const assertion = getByText(document.body, uniqueDisplayName);
//       expect(assertion).toBeInTheDocument();
//     });
//   });
// });
