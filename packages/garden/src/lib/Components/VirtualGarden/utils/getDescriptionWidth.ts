import { GardenItem, GardenItemWithDepth } from '../types/gardenItem';

type PackageWithDescription<T extends unknown> = T & {
    description: string;
};
/** Type guard for a package object checking whether or not it contains a description property */
function packageHasDescription<T extends unknown>(
    packageObj: T
): packageObj is PackageWithDescription<T> {
    if (
        (packageObj as PackageWithDescription<T>)?.description !== undefined &&
        (packageObj as PackageWithDescription<T>).description !== null
    ) {
        return true;
    } else {
        return false;
    }
}
export function columnDataIsWithDepth<T extends unknown>(
    packageObj: GardenItem<T>[]
): packageObj is GardenItemWithDepth<T>[] {
    if ((packageObj[0] as GardenItemWithDepth<T>)?.item !== undefined) {
        return true;
    } else {
        return false;
    }
}

const getTextLengthToBeDisplayed = <T extends unknown>(
    gardenItem: T,
    customDescription?: (item: T) => string
) => {
    if (customDescription) {
        return customDescription(gardenItem);
    } else {
        return packageHasDescription(gardenItem) ? gardenItem.description : '';
    }
};
/**
 * @param columnData One column from the garden
 * @returns Longest description string
 */
export const getLongestDescription = <T extends unknown>(
    columnData: GardenItem<T>[],
    customDescription?: (item: T | GardenItem<T>) => string
): string => {
    let longest = '';
    if (columnDataIsWithDepth(columnData)) {
        columnData.forEach(({ item }) => {
            const textToBeDisplayed = getTextLengthToBeDisplayed(item, customDescription);
            textToBeDisplayed.length > longest.length ? (longest = textToBeDisplayed) : null;
        });
    } else {
        columnData.forEach((e) => {
            const textToBeDisplayed = getTextLengthToBeDisplayed(e, customDescription);
            textToBeDisplayed.length > longest.length ? (longest = textToBeDisplayed) : null;
        });
    }
    return longest;
};
/**
 * Function for estimating the extra width it takes to display the descriptions of packages.
 * @param columnData One column from the garden
 * @returns A calculated width based on string length and font
 */
export const getDescriptionWidth = <T extends unknown>(
    columnData: GardenItem<T>[] | null,
    customDescription?: (item: T | GardenItem<T>) => string
): number => {
    if (!columnData || columnData.length === 0) {
        return 0;
    }
    const longestDescription = getLongestDescription(columnData, customDescription);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    //HACK do something smart here
    ctx!.font = '16px Equinor, sans-serif';
    const width = ctx!.measureText(longestDescription).width;
    return width;
};
