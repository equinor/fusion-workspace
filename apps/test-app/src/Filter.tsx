import { FilterDataSource, FilterGroup } from '@equinor/workspace-filter';

export const filterDataSource: FilterDataSource = {
  getFilterMeta: async (filters, signal) => {
    // const res = await makeRequest('work-orders/filter-model', filters as any, signal);
    // return (await res.json()).map((s: any): FilterGroup => ({ ...s }));
    return [
      {
        name: 'Discipline',
        filterItems: [
          {
            value: '(Blank)',
            count: 3193,
          },
          {
            value: 'P',
            count: 239,
          },
          {
            value: 'N',
            count: 140,
          },
          {
            value: 'I',
            count: 436,
          },
          {
            value: 'M',
            count: 76,
          },
          {
            value: 'X',
            count: 48,
          },
          {
            value: 'E',
            count: 319,
          },
          {
            value: 'Z',
            count: 43,
          },
          {
            value: 'T',
            count: 27,
          },
          {
            value: 'A',
            count: 44,
          },
          {
            value: 'O',
            count: 63,
          },
          {
            value: 'Y',
            count: 47,
          },
          {
            value: 'C',
            count: 20,
          },
          {
            value: 'D',
            count: 81,
          },
          {
            value: 'S',
            count: 116,
          },
          {
            value: 'H',
            count: 6,
          },
          {
            value: 'Q',
            count: 18,
          },
          {
            value: 'K',
            count: 10,
          },
          {
            value: 'B',
            count: 7,
          },
          {
            value: 'R',
            count: 11,
          },
          {
            value: 'L',
            count: 5,
          },
          {
            value: 'F',
            count: 6,
          },
        ],
        isQuickFilter: true,
      },
      {
        name: 'Job Status',
        filterItems: [
          {
            value: 'W03',
            count: 75,
          },
          {
            value: '(Blank)',
            count: 3602,
          },
          {
            value: 'W1111111',
            count: 652,
          },
          {
            value: 'W0000000',
            count: 510,
          },
          {
            value: 'W1111111',
            count: 108,
          },
          {
            value: 'W05000',
            count: 5,
          },
          {
            value: 'W02',
            count: 3,
          },
        ],
        isQuickFilter: true,
      },
      {
        name: 'Material status',
        filterItems: [
          {
            value: '(Blank)',
            count: 4852,
          },
          {
            value: 'MN',
            count: 78,
          },
          {
            value: 'M12',
            count: 15,
          },
          {
            value: 'M11',
            count: 7,
          },
          {
            value: 'M6',
            count: 2,
          },
          {
            value: 'M2',
            count: 1,
          },
        ],
        isQuickFilter: true,
      },
      {
        name: 'Hold',
        filterItems: [
          {
            value: '(Blank)',
            count: 4931,
          },
          {
            value: 'ENG',
            count: 4,
          },
          {
            value: 'OFF',
            count: 2,
          },
          {
            value: 'WP',
            count: 12,
          },
          {
            value: 'MATB',
            count: 3,
          },
          {
            value: 'EWP',
            count: 1,
          },
          {
            value: 'MAT',
            count: 1,
          },
          {
            value: 'SAS',
            count: 1,
          },
        ],
        isQuickFilter: true,
      },
      {
        name: 'Responsible',
        filterItems: [
          {
            value: '(Blank)',
            count: 4157,
          },
          {
            value: 'PCON',
            count: 659,
          },
          {
            value: 'PCOM',
            count: 81,
          },
          {
            value: 'PIND',
            count: 38,
          },
          {
            value: 'PCON2',
            count: 17,
          },
          {
            value: 'PASSV',
            count: 1,
          },
          {
            value: 'PVEN',
            count: 1,
          },
          {
            value: 'PASSC',
            count: 1,
          },
        ],
        isQuickFilter: true,
      },
      {
        name: 'Milestone',
        filterItems: [
          {
            value: '(Blank)',
            count: 4955,
          },
        ],
        isQuickFilter: true,
      },
      {
        name: 'MC',
        filterItems: [
          {
            value: 'OK',
            count: 1884,
          },
          {
            value: '(Blank)',
            count: 2974,
          },
          {
            value: 'PB',
            count: 28,
          },
          {
            value: 'OS',
            count: 68,
          },
          {
            value: 'PA',
            count: 1,
          },
        ],
        isQuickFilter: true,
      },
      {
        name: 'Progress',
        filterItems: [
          {
            value: 'Not Started',
            count: 4405,
          },
          {
            value: '100%',
            count: 547,
          },
          {
            value: '50-75%',
            count: 1,
          },
          {
            value: '75-95%',
            count: 2,
          },
        ],
        isQuickFilter: true,
      },
      {
        name: 'Project',
        filterItems: [
          {
            value: '977102',
            count: 144,
          },
          {
            value: '958655',
            count: 141,
          },
          {
            value: '9004343',
            count: 6,
          },
          {
            value: '80476517',
            count: 170,
          },
          {
            value: 'M.O053C.5I.S.0007',
            count: 51,
          },
          {
            value: 'M.O053C.6I.S.0007',
            count: 18,
          },
          {
            value: 'M.O053C.3D.S.0002',
            count: 38,
          },
          {
            value: 'L.O053C.021',
            count: 149,
          },
          {
            value: 'M.O053C.8I.S.0019',
            count: 7,
          },
          {
            value: '976031',
            count: 787,
          },
          {
            value: '969910',
            count: 25,
          },
          {
            value: '9002773',
            count: 14,
          },
          {
            value: '959036',
            count: 154,
          },
          {
            value: '9005217',
            count: 23,
          },
          {
            value: '80725292',
            count: 53,
          },
          {
            value: '959186',
            count: 28,
          },
          {
            value: '80639220',
            count: 50,
          },
          {
            value: '80818504',
            count: 11,
          },
          {
            value: 'M.O053C.8I.S.0013',
            count: 11,
          },
          {
            value: 'M.O053C.3I.S.0001',
            count: 105,
          },
          {
            value: '970208',
            count: 20,
          },
          {
            value: 'M.O053C.7D.S.0001',
            count: 44,
          },
          {
            value: '959187',
            count: 17,
          },
          {
            value: '80515264',
            count: 1,
          },
          {
            value: '80712856',
            count: 4,
          },
          {
            value: '80209028',
            count: 4,
          },
          {
            value: '80775588',
            count: 40,
          },
          {
            value: '970482',
            count: 119,
          },
          {
            value: 'M.O053C.6I.S.0005',
            count: 16,
          },
          {
            value: 'M.O053C.20.S.0009',
            count: 5,
          },
          {
            value: '9004045',
            count: 1,
          },
          {
            value: 'M.O053C.6D.S.0001',
            count: 26,
          },
          {
            value: '9015923',
            count: 17,
          },
          {
            value: 'M.O053C.3I.S.0005',
            count: 35,
          },
          {
            value: '80512470',
            count: 16,
          },
          {
            value: '80262621',
            count: 88,
          },
          {
            value: '80667043',
            count: 6,
          },
          {
            value: '80415130',
            count: 8,
          },
          {
            value: '80239823',
            count: 28,
          },
          {
            value: '80107976',
            count: 127,
          },
          {
            value: '80239852',
            count: 8,
          },
          {
            value: '9003514',
            count: 29,
          },
          {
            value: 'M.O053C.21.S.0009',
            count: 9,
          },
          {
            value: '959328',
            count: 20,
          },
          {
            value: '80243575',
            count: 5,
          },
          {
            value: '80536389',
            count: 10,
          },
          {
            value: '80532322',
            count: 1,
          },
          {
            value: '80628858',
            count: 5,
          },
          {
            value: '80262941',
            count: 11,
          },
          {
            value: '80284359',
            count: 4,
          },
          {
            value: '80428330',
            count: 10,
          },
          {
            value: '80541076',
            count: 6,
          },
          {
            value: '9018924',
            count: 4,
          },
          {
            value: '80457246',
            count: 10,
          },
          {
            value: 'M.O053C.20.S.0004',
            count: 18,
          },
          {
            value: '958651',
            count: 46,
          },
          {
            value: '962677',
            count: 35,
          },
          {
            value: '9002327',
            count: 33,
          },
          {
            value: '80530191',
            count: 32,
          },
          {
            value: '80530192',
            count: 29,
          },
          {
            value: '80688686',
            count: 21,
          },
          {
            value: '976291',
            count: 34,
          },
          {
            value: '9001438',
            count: 6,
          },
          {
            value: '80461810',
            count: 1,
          },
          {
            value: 'M.O053C.6I.S.0010',
            count: 5,
          },
          {
            value: '80247149',
            count: 6,
          },
          {
            value: '80376288',
            count: 6,
          },
          {
            value: '964447',
            count: 4,
          },
          {
            value: '80252008',
            count: 9,
          },
          {
            value: '80328667',
            count: 6,
          },
          {
            value: '966697',
            count: 5,
          },
          {
            value: '9002202',
            count: 12,
          },
          {
            value: '966648_B',
            count: 14,
          },
          {
            value: '80453519',
            count: 41,
          },
          {
            value: 'M.O053C.6I.S.0011',
            count: 17,
          },
          {
            value: 'M.O053C.20.S.0003',
            count: 20,
          },
          {
            value: '80265597',
            count: 9,
          },
          {
            value: 'M.O053C.6I.S.0001',
            count: 6,
          },
          {
            value: '958652',
            count: 33,
          },
          {
            value: '80116098',
            count: 50,
          },
          {
            value: 'M.O053C.4I.S.0007',
            count: 23,
          },
          {
            value: 'M.O053C.5I.S.0004',
            count: 13,
          },
          {
            value: '959091',
            count: 51,
          },
          {
            value: 'M.O053C.6I.S.0006',
            count: 3,
          },
          {
            value: '958653',
            count: 23,
          },
          {
            value: '9002881',
            count: 18,
          },
          {
            value: '9002883',
            count: 19,
          },
          {
            value: '9002966',
            count: 36,
          },
          {
            value: 'M.O053C.3I.S.0004',
            count: 8,
          },
          {
            value: '959092',
            count: 9,
          },
          {
            value: '9001176',
            count: 37,
          },
          {
            value: 'M.O053C.20.S.0001',
            count: 14,
          },
          {
            value: '80743103',
            count: 7,
          },
          {
            value: 'M.O053C.8I.S.0007',
            count: 2,
          },
          {
            value: '959178',
            count: 18,
          },
          {
            value: 'M.O053C.7I.S.0006',
            count: 6,
          },
          {
            value: 'M.O053C.6I.S.0009',
            count: 11,
          },
          {
            value: 'M.O053C.5I.S.0010',
            count: 15,
          },
          {
            value: 'M.O053C.8I.S.0017',
            count: 8,
          },
          {
            value: '9005040',
            count: 25,
          },
          {
            value: '958991',
            count: 24,
          },
          {
            value: '80428333',
            count: 8,
          },
          {
            value: '80397744',
            count: 5,
          },
          {
            value: '80607607',
            count: 6,
          },
          {
            value: '80552737',
            count: 9,
          },
          {
            value: '80490003',
            count: 4,
          },
          {
            value: '80255528',
            count: 11,
          },
          {
            value: '80242301',
            count: 13,
          },
          {
            value: '9004340',
            count: 10,
          },
          {
            value: 'M.O053C.4I.S.0003',
            count: 6,
          },
          {
            value: '959239',
            count: 3,
          },
          {
            value: '959148',
            count: 42,
          },
          {
            value: '9001981',
            count: 3,
          },
          {
            value: '967089',
            count: 8,
          },
          {
            value: 'M.O053C.8I.S.0014',
            count: 5,
          },
          {
            value: '970062',
            count: 17,
          },
          {
            value: '80594800',
            count: 21,
          },
          {
            value: 'M.O053C.8D.S.0001',
            count: 8,
          },
          {
            value: '9007154',
            count: 2,
          },
          {
            value: '80538550',
            count: 26,
          },
          {
            value: 'M.O053C.20.S.0008',
            count: 8,
          },
          {
            value: '80608783',
            count: 1,
          },
          {
            value: '80245246',
            count: 7,
          },
          {
            value: '80278650',
            count: 5,
          },
          {
            value: '80505305',
            count: 6,
          },
          {
            value: '80672648',
            count: 5,
          },
          {
            value: '80265386',
            count: 3,
          },
          {
            value: '80267445',
            count: 2,
          },
          {
            value: '80428331',
            count: 14,
          },
          {
            value: '80428329',
            count: 10,
          },
          {
            value: '80435572',
            count: 3,
          },
          {
            value: '960643',
            count: 23,
          },
          {
            value: 'M.O053C.5I.S.0002',
            count: 13,
          },
          {
            value: 'M.O053C.4I.S.0008',
            count: 16,
          },
          {
            value: '959038',
            count: 41,
          },
          {
            value: '80820963',
            count: 4,
          },
          {
            value: '963963',
            count: 18,
          },
          {
            value: 'M.O053C.8I.S.0008',
            count: 7,
          },
          {
            value: 'M.O053C.20.S.0005',
            count: 4,
          },
          {
            value: '959118',
            count: 11,
          },
          {
            value: '80686353',
            count: 6,
          },
          {
            value: '80846077',
            count: 13,
          },
          {
            value: '80370490',
            count: 23,
          },
          {
            value: '80492155',
            count: 8,
          },
          {
            value: '80336641',
            count: 8,
          },
          {
            value: '80415132',
            count: 9,
          },
          {
            value: '80680379',
            count: 4,
          },
          {
            value: '80541075',
            count: 13,
          },
          {
            value: '80584208',
            count: 22,
          },
          {
            value: '80255518',
            count: 7,
          },
          {
            value: 'M.O053C.21.S.0006',
            count: 15,
          },
          {
            value: '80374613',
            count: 2,
          },
          {
            value: '959007',
            count: 2,
          },
          {
            value: 'M.O053C.8I.S.0001',
            count: 12,
          },
          {
            value: '970484',
            count: 2,
          },
          {
            value: 'M.O053C.8I.S.0002',
            count: 4,
          },
          {
            value: 'M.O053C.20.S.0011',
            count: 4,
          },
          {
            value: '80581552',
            count: 17,
          },
          {
            value: '80508176',
            count: 4,
          },
          {
            value: '80490295',
            count: 5,
          },
          {
            value: '80582764',
            count: 6,
          },
          {
            value: '80489820',
            count: 2,
          },
          {
            value: '80431725',
            count: 4,
          },
          {
            value: '80703977',
            count: 5,
          },
          {
            value: '80632683',
            count: 9,
          },
          {
            value: '959028',
            count: 21,
          },
          {
            value: '80501831',
            count: 10,
          },
          {
            value: '959037',
            count: 13,
          },
          {
            value: 'M.O053C.5I.S.0011',
            count: 16,
          },
          {
            value: '80714176',
            count: 2,
          },
          {
            value: '966648',
            count: 3,
          },
          {
            value: 'M.O053C.21.S.0008',
            count: 5,
          },
          {
            value: '80532410',
            count: 4,
          },
          {
            value: 'OSEBERG_SOR',
            count: 2,
          },
          {
            value: '80776777',
            count: 14,
          },
          {
            value: 'M.O053C.7I.S.0004',
            count: 12,
          },
          {
            value: '80868261',
            count: 6,
          },
          {
            value: '9002506',
            count: 2,
          },
          {
            value: '80274653',
            count: 8,
          },
          {
            value: 'M.O053C.6D.S.0002',
            count: 3,
          },
          {
            value: '959042',
            count: 18,
          },
          {
            value: '80274870',
            count: 5,
          },
          {
            value: '80620895',
            count: 5,
          },
          {
            value: 'M.O053C.4I.F.0005',
            count: 4,
          },
          {
            value: '970287',
            count: 2,
          },
          {
            value: 'M.O053C.6D.S.0003',
            count: 22,
          },
          {
            value: '9015559',
            count: 7,
          },
          {
            value: '80470276',
            count: 6,
          },
          {
            value: 'M.O053C.8I.S.0006',
            count: 4,
          },
          {
            value: 'M.O053C.5I.S.0001',
            count: 10,
          },
          {
            value: '962852',
            count: 8,
          },
          {
            value: '974148',
            count: 4,
          },
          {
            value: '80428332',
            count: 6,
          },
          {
            value: '959317',
            count: 5,
          },
          {
            value: '80392223',
            count: 6,
          },
          {
            value: 'M.O053C.8I.S.0005',
            count: 14,
          },
          {
            value: '971968',
            count: 4,
          },
          {
            value: '80505230',
            count: 3,
          },
          {
            value: '80649582',
            count: 9,
          },
          {
            value: '80603898',
            count: 11,
          },
          {
            value: '80255988',
            count: 3,
          },
          {
            value: 'M.O053C.5I.S.0015',
            count: 12,
          },
          {
            value: 'M.O053C.4D.S.0001',
            count: 11,
          },
          {
            value: '80646840',
            count: 9,
          },
          {
            value: '970905',
            count: 8,
          },
          {
            value: '80726730',
            count: 4,
          },
          {
            value: '80255524',
            count: 10,
          },
          {
            value: '80374612',
            count: 2,
          },
          {
            value: '80247116',
            count: 6,
          },
          {
            value: 'M.O053C.20.S.0002',
            count: 15,
          },
          {
            value: '80745739',
            count: 1,
          },
          {
            value: '80632641',
            count: 11,
          },
          {
            value: '9008170',
            count: 5,
          },
          {
            value: '9010917',
            count: 3,
          },
          {
            value: 'M.O053C.7I.S.0005',
            count: 7,
          },
          {
            value: 'M.O053C.21.S.0005',
            count: 1,
          },
          {
            value: '80532411',
            count: 7,
          },
          {
            value: '80239802',
            count: 1,
          },
          {
            value: '80274879',
            count: 4,
          },
          {
            value: '80527839',
            count: 13,
          },
          {
            value: '80532331',
            count: 1,
          },
          {
            value: '9003509',
            count: 1,
          },
          {
            value: '80476376',
            count: 9,
          },
          {
            value: '9006606',
            count: 3,
          },
          {
            value: '977222',
            count: 2,
          },
          {
            value: '80247146',
            count: 3,
          },
          {
            value: '80207030',
            count: 6,
          },
          {
            value: '9014527',
            count: 7,
          },
          {
            value: '959333',
            count: 1,
          },
          {
            value: '968862',
            count: 1,
          },
          {
            value: '9002345',
            count: 16,
          },
          {
            value: '9003468',
            count: 2,
          },
          {
            value: 'M.O053C.5I.S.0003',
            count: 13,
          },
          {
            value: '973681',
            count: 6,
          },
          {
            value: '974355',
            count: 3,
          },
          {
            value: '9008214',
            count: 1,
          },
          {
            value: 'M.O053C.19.S.0002',
            count: 5,
          },
          {
            value: '80728319',
            count: 2,
          },
          {
            value: '80590081',
            count: 3,
          },
          {
            value: '80687662',
            count: 6,
          },
          {
            value: 'M.O053C.3D.S.0001',
            count: 6,
          },
          {
            value: '959035',
            count: 4,
          },
          {
            value: '80577245',
            count: 5,
          },
          {
            value: '80538418',
            count: 3,
          },
          {
            value: '80639355',
            count: 6,
          },
          {
            value: '80374614',
            count: 2,
          },
          {
            value: 'M.O053C.8I.S.0009',
            count: 3,
          },
          {
            value: '9001719',
            count: 1,
          },
          {
            value: 'M.O053C.21.S.0002',
            count: 5,
          },
          {
            value: '80308760',
            count: 4,
          },
          {
            value: 'M.O053C.7I.S.0002',
            count: 4,
          },
          {
            value: '80431721',
            count: 4,
          },
          {
            value: '80468741',
            count: 4,
          },
          {
            value: '80515220',
            count: 1,
          },
          {
            value: '967097',
            count: 4,
          },
          {
            value: '959127',
            count: 2,
          },
          {
            value: 'M.O053C.8I.S.0012',
            count: 4,
          },
          {
            value: '80265304',
            count: 3,
          },
          {
            value: '80641706',
            count: 2,
          },
          {
            value: '80247396',
            count: 3,
          },
          {
            value: '80247143',
            count: 5,
          },
          {
            value: '9005720',
            count: 2,
          },
          {
            value: 'M.O053C.5D.S.0005',
            count: 2,
          },
          {
            value: '80370491',
            count: 7,
          },
          {
            value: 'M.O053C.7I.S.0001',
            count: 9,
          },
          {
            value: '80583878',
            count: 3,
          },
          {
            value: '80704078',
            count: 5,
          },
          {
            value: '80487383',
            count: 4,
          },
          {
            value: '9005355',
            count: 3,
          },
          {
            value: '80619894',
            count: 2,
          },
          {
            value: '963588',
            count: 7,
          },
          {
            value: '80376290',
            count: 8,
          },
          {
            value: '80206942',
            count: 2,
          },
          {
            value: '959029',
            count: 3,
          },
          {
            value: '959336',
            count: 4,
          },
          {
            value: 'M.O053C.19.S.0001',
            count: 6,
          },
          {
            value: 'M.O053C.5D.S.0001',
            count: 4,
          },
          {
            value: '80275334',
            count: 4,
          },
          {
            value: '962629',
            count: 5,
          },
          {
            value: '80374514',
            count: 2,
          },
          {
            value: '80293684',
            count: 1,
          },
          {
            value: '80496913',
            count: 4,
          },
          {
            value: '9012123',
            count: 6,
          },
          {
            value: 'M.O053C.7D.S.0002',
            count: 3,
          },
          {
            value: '9003347',
            count: 6,
          },
          {
            value: '80239799',
            count: 1,
          },
          {
            value: '974798',
            count: 3,
          },
          {
            value: '80306523',
            count: 2,
          },
          {
            value: '9004541',
            count: 1,
          },
          {
            value: '80494162',
            count: 1,
          },
          {
            value: '80639351',
            count: 1,
          },
          {
            value: '80461814',
            count: 1,
          },
          {
            value: '80860410',
            count: 4,
          },
          {
            value: '970385',
            count: 1,
          },
          {
            value: '80374606',
            count: 2,
          },
          {
            value: '80566289',
            count: 4,
          },
          {
            value: 'M.O053C.19.S.0005',
            count: 1,
          },
          {
            value: '80680086',
            count: 2,
          },
          {
            value: '80533533',
            count: 3,
          },
          {
            value: '959248',
            count: 1,
          },
          {
            value: '80642514',
            count: 1,
          },
          {
            value: '80297820',
            count: 1,
          },
          {
            value: '80288700',
            count: 2,
          },
          {
            value: '80528836',
            count: 1,
          },
          {
            value: '974204',
            count: 1,
          },
          {
            value: 'M.O053C.8I.S.0004',
            count: 1,
          },
          {
            value: '9000705',
            count: 1,
          },
          {
            value: '9006906',
            count: 1,
          },
          {
            value: '974598',
            count: 1,
          },
          {
            value: '80374611',
            count: 2,
          },
          {
            value: '80485145',
            count: 1,
          },
          {
            value: '976342',
            count: 1,
          },
          {
            value: '80565600',
            count: 4,
          },
          {
            value: '80433438',
            count: 1,
          },
          {
            value: '80868040',
            count: 1,
          },
          {
            value: '80257543',
            count: 1,
          },
          {
            value: 'M.O053C.19.S.0004',
            count: 1,
          },
          {
            value: '80259534',
            count: 1,
          },
          {
            value: '80571329',
            count: 1,
          },
          {
            value: '80494047',
            count: 1,
          },
          {
            value: '9006312',
            count: 1,
          },
          {
            value: '970320',
            count: 1,
          },
          {
            value: 'M.O053C.20.S.0007',
            count: 1,
          },
          {
            value: '80515266',
            count: 1,
          },
          {
            value: '958910',
            count: 1,
          },
          {
            value: '974079',
            count: 1,
          },
        ],
        isQuickFilter: true,
      },
    ];
  },
};
