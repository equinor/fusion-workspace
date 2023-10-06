import { Workspace } from '@equinor/workspace-fusion';
import { gardenModule } from '@equinor/workspace-fusion/garden-module';
import { gridModule } from '@equinor/workspace-fusion/grid-module';
import { powerBiModule } from '@equinor/workspace-fusion/power-bi-module';
import { GroupingOption } from '@equinor/workspace-garden';
import React from 'react';
import { createRoot } from 'react-dom/client';

export function App() {
  return (
    <Workspace<{ id: string }>
      workspaceOptions={{ getIdentifier: (a) => a.id }}
      gridOptions={{
        columnDefinitions: [{ field: 'id' }],
        getRows: async ({ success, request }, filter) => {
          success({ rowData: [{ id: '123' }, { id: '125' }, { id: '9342' }, { id: '1212' }], rowCount: 4 });
        },
        excelExport: async (filterState) =>
          new Promise((res, rej) =>
            setTimeout(() => {
              res();
              console.log('løøøøøøø');
            }, 2000)
          ),
      }}
      powerBiOptions={{
        getEmbed: async () => ({
          embedUrl:
            'https://app.powerbi.com/reportEmbed?reportId=569ecdc8-cc1a-42d8-a73d-c5ff9a672d52&groupId=1d18b216-86d9-40de-b09e-259073c38779&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLU5PUlRILUVVUk9QRS1ILVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19',
          reportId: '569ecdc8-cc1a-42d8-a73d-c5ff9a672d52',
        }),
        getErrorMessage: async () => '',
        getToken: async () => ({
          expirationUtc: '2023-10-06T12:30:01Z',
          token:
            'H4sIAAAAAAAEACWTt66EVgAF_-W1WCIvYMkFaUlLDgu3I-ecsfzvfrK7U0w1OvP3jxXf3RhnP3_-FDmtbJVvi-5obqy2At5iOn628KEs8yFds80EiSDpTOJ7X5V3LpwaJcopniAjWSZhVb1heeMD61ax4Hnr1e8XQ-VjPmEWegMRBynCyyFNU3O7wiTv4_kkF4ag0PRpsUldeG23JWW0cwNj97fHeA_YWflICbieCbCh774ezaayYFk0Jbe79eOYu3ok8DcvNgKScvfrOeR5oXwlonHCILHgU2SBnmKQbOLfCpMVOEHKjTgQXf3QY5p1WwOHguF78z4DGZoFblmfMUFvvtd4DXWrfHk7lxFnokFyrplOF2eIXBby3i4a8S61hOtmNdqdEcbuoMuDV9zL0SJGwcvYnNiYaln5Aur2zshyXO7K2sN2eftZ_DSTuDNxJDUsCSTzjK_lzAJvVW-nQfy2IE08sleD8wPaCy4hxe2KwZB5tkT6WjwgGbwos49mBXyTCpaYWCeEItUSM0QnYxlKop-abF0eGB3-yXBqWigU0QvsRBUtfzKIQqyKoR5BFc2RoQihfdnFPp2xAFidjR7tOjdqCieyYWZztUmW7Vl-YPHwIyTrVwSE5UeTcQl4UKZ7Kcf98oGgI2rhKdYUGUbN8-I2cLEBfdHhvkeBylwjKL1irAU5b9utghB0fzbZ_4iU2833-sWpWCpsjPosZ20kTFVXiDm1cry6qnGA8isZjgzFB_168ZB0y9KJS6xiolwKO2E_BOBK651TTIEy_F54rC6vBPdIbX0eeZTc_Q0EV1Srr_NsJwcLjcbVVeqrDLvxLt_K5xISpvWFHBWFJRYtOkuq8gxRdsRvByyhh9RtNZBdtnalxMQskVZZZ72v5hImNMuMuFPor5j4V9dZPQtD1Xt-uw67zoP_QtYvpAbN3Dd5sXOC9X66uzsafx4V2VaHAY2IV2O4RiEM0nSXbvlkHP4pdxWaaQ1jzvOvv37--OGXe9pGLb9_M8UaowjxR8wnIgzjPAEqWeD1rwj1OXAPnIOWF7jkHWmiFR2LKq5JCk2rW2W_zLM_kZ0FAL00LatRGdK2g2LfbTLyOVqQZMksL0SAsZUmvXF_DtCr8rorC__BeM57JuUJE_lYO3wD1dJdQMIOMEqbtRF6qVuDlRff5iZ2v7pep6ftgOw9h-6eQDZ0bz-5Ow5vzBUC-MzkD-r5S8Yovajs78dw32HkA9b-XUWLfvqjxB6Dukz1UcqpqWbdBrc2EhO0MDs02HMAH_prxhrUlN880X75N2OSQYNAYmNsQMHe6lHx-Z5JeaKKSJWHVyp-a9ZqIhfyD8lRM1ip9lY6Lbi9BMv-X_M9_SavBL-WUdYhxNjI-AuvwMaRBBrMHvsf5dblEG_7kv9iInw-IM_SkY3D9hhMcjR09tp7p2fqcOrd2EayMeO2qfZfRKBjL3myoXENhN5SK-N95uJBHh_Wolq3vIZlV0m2TUiKkT-_Z8OeHmYwC1HaWtBYnuRQVrmFl8ywTr80aOqE9-orSAg4OpFTsRQy2L5c1a19cMiJUzXMCmsrp0LclNs9wdsxoHcebuF-kOoRCXZPu9rqwbaDCc5Mj3koWazO8_nxasi66NfHc51wnUzMmucIjfpKlEYB_na6y0UurANB1GKK6C1sqS4Y6cJqB7jmgexI5vhLKaMg-NlmHfKX8JaHQY0kGIOqrK_1bBodHJV4s5SflSJbQB35dBrnyR-dU8tfzf_8C0Z9upWaBgAA.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLU5PUlRILUVVUk9QRS1ILVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJleHAiOjE2OTY1OTU0MDEsImFsbG93QWNjZXNzT3ZlclB1YmxpY0ludGVybmV0Ijp0cnVlfQ==',
        }),
        reportUri: '',
      }}
      sidesheetOptions={{
        type: 'default',
        DetailsSidesheet: (a) => {
          return <div onClick={() => a.close()}>hello am sidesheet</div>;
        },
      }}
      gardenOptions={{
        getGardenMeta: async (a, b, c) => {
          console.log(a);
          return {
            allGroupingOptions: [
              {
                groupingKey: 'RFOC',
                timeInterval: ['Daily', 'Weekly', 'Monthly'],
                dateVariant: ['Forecast', 'Planned'],
              },
              {
                groupingKey: 'RFCC',
                timeInterval: ['Daily', 'Weekly', 'Monthly'],
                dateVariant: ['Forecast', 'Planned'],
              },
              {
                groupingKey: 'Some very long keys',
                timeInterval: ['Daily', 'Weekly'],
                dateVariant: ['Forecast', 'Planned', 'Done'],
              },
              { groupingKey: 'System', timeInterval: null, dateVariant: null },
            ] as GroupingOption[],
            columnCount: 2,
            columnStart: 0,
            rowCount: 10000,
            validGroupingOptions: ['RFOC', 'PartitionKey'],
            columnWidth: 150,
          };
        },
        getBlockAsync: async (a) => {
          return [
            { columnName: 'Some name', items: [], subGroupCount: 0, subGroups: [], totalItemsCount: 0 },
            {
              columnName: 'some other name',
              items: [{ id: '123' }],
              subGroupCount: 0,
              subGroups: [],
              totalItemsCount: 1,
            },
          ];
        },
        getDisplayName: () => '',
        getHeader: async (a) => {
          return [
            { count: 0, name: 'Some name' },
            { count: 1, name: 'some other name' },
          ];
        },
        getSubgroupItems: () => {
          throw new Error('');
        },
        initialGrouping: ['RFOC'],
        initialDateVariant: 'Planned',
        initialTimeInterval: 'Weekly',
      }}
      filterOptions={{
        dataSource: {
          getFilterMeta: async () => [
            {
              filterItems: [
                { count: 10, value: 'test' },
                {
                  count: 9,
                  value: 'test2',
                },
              ],
              isQuickFilter: true,
              name: 'test',
            },
            {
              name: 'single',
              filterItems: [{ count: 1, value: 'abc' }],
              isQuickFilter: true,
            },
          ],
        },
      }}
      modules={[gridModule, gardenModule, powerBiModule]}
    />
  );
}

const container = document.getElementById('root')!;
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
