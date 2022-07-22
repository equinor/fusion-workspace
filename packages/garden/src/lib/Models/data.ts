
export interface Status {
    rating: number;
    statusElement?: JSX.Element;
    status?: string;
}

export type GardenGroup<T> = {
    groupKey: keyof T;
    value: string;
    subGroups: GardenGroups<T>;
    items: T[];
    isExpanded: boolean;
    count: number;
    subGroupCount: number;
    status?: Status;
    description?: string | undefined;
    depth: number;
};

export type GardenGroups<T> = GardenGroup<T>[];
