import { GardenGroups } from '../Models/data';
import { Count, Groupe, Title } from '../Styles/common';

type GardenHeaderProps<T> = {
    garden: GardenGroups<T>;
    columnIndex: number;
};

export function GroupHeader<T>({ garden, columnIndex }: GardenHeaderProps<T>): JSX.Element {
    return (
        <Groupe>
            {garden[columnIndex].status?.statusElement}
            <Title>{garden[columnIndex].value}</Title>
            <Count>({garden[columnIndex].count})</Count>
        </Groupe>
    );
}
