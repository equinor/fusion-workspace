import {
    inputNoSubGroups,
    gardenOneGroupAllExpanded,
    gardenOneGroupExpandedOneGroupNotExpanded,
    gardenTwoGroupsAllExpanded,
    gardenThreeGroupsAllExpanded,
    gardenGroupsWithItemsInsideDifferentGroups,
} from '../mock/gardendata';
import { getRowCount } from '../utils/getRowCount';
describe('subgroupcount', () => {
    it('should return count of items when no subgroups', () => {
        const output = getRowCount(inputNoSubGroups);
        expect(output).toBe(2);
    });

    it('should return count of subgroup headers + items in subgroup when subgroup is expanded', () => {
        const output = getRowCount(gardenOneGroupExpandedOneGroupNotExpanded);
        const output2 = getRowCount(gardenOneGroupAllExpanded);
        const output3 = getRowCount(gardenTwoGroupsAllExpanded);
        const output4 = getRowCount(gardenThreeGroupsAllExpanded);
        const output5 = getRowCount(gardenGroupsWithItemsInsideDifferentGroups);
        expect(output).toBe(2);
        expect(output2).toBe(4);
        expect(output3).toBe(4);
        expect(output4).toBe(5);
        expect(output5).toBe(5);
    });
});
