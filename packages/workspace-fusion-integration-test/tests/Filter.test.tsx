import React from 'react';
import { Workspace } from '@equinor/workspace-fusion';
import { act, render, waitFor } from '@testing-library/react';
import { workspaceOptions } from '../config/workspaceOptions';
import { fakeTimeout } from '../utils/fakeTimeout';
import { getMockGardenConfig } from '../config/mockGardenConfig';
import { getMockFilterConfig } from '../config/mockFilterConfig';

// describe('Testing filter integration', () => {
// it('Should call the getFilterMeta function on load', async () => {
//   const { gardenModule, gardenConfig } = getMockGardenConfig();
//   const { config, mockFilterMeta } = getMockFilterConfig();
//   act(() => {
//     render(
//       <Workspace
//         workspaceOptions={workspaceOptions}
//         filterOptions={config}
//         modules={[gardenModule]}
//         gardenOptions={gardenConfig}
//       />
//     );
//   });
//   await fakeTimeout();
//   expect(mockFilterMeta).toBeCalledTimes(1);
// });
// it('Should call the getFilterMeta when the search input is triggered', async () => {
//   const { gardenModule, gardenConfig } = getMockGardenConfig();
//   const { config, getSearchInputEl, mockFilterMeta, triggerSearchInput } = getMockFilterConfig();
//   act(() => {
//     render(
//       <Workspace
//         workspaceOptions={workspaceOptions}
//         filterOptions={config}
//         modules={[gardenModule]}
//         gardenOptions={gardenConfig}
//       />
//     );
//   });
//   await waitFor(() => {
//     const el = getSearchInputEl();
//     //ensure search element is present
//     expect(el).toBeTruthy();
//     triggerSearchInput('abc');
//     expect(mockFilterMeta).toBeCalledTimes(2);
//   });
// });
// });
