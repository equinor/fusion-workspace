import { GardenGroup } from '../Models/data';
import { Items } from './Items';
import { Group } from './Group';
import styled from 'styled-components';
import { FieldSettings } from '../Models/fieldSettings';
import { defaultSortFunction } from '../Utils/utilities';
import { useMemo } from 'react';

interface TreeColumnProps<T> {
    group: GardenGroup<T>;
    fieldSettings?: FieldSettings<T>;
}

const Groups = styled.div`
    width: 100%;
    box-sizing: border-box;

    > div {
        width: 100%;
        margin: 0px;
    }
`;

export function TreeColumn<T>({ group, fieldSettings }: TreeColumnProps<T>): JSX.Element | null {
    const columnExpanded = group.isExpanded;
    const subGroupKeys = useMemo(
        () => group.subGroups.map((sub) => sub.value) || [],
        [group.subGroups]
    );

    if (!group) return null;

    return (
        <>
            {group.items[0] != null ? (
                <Items data={group.items} columnExpanded={columnExpanded} />
            ) : (
                <Groups>
                    {subGroupKeys
                        .sort(
                            fieldSettings?.[group.subGroups?.[0]?.groupKey]?.getColumnSort ||
                                defaultSortFunction
                        )
                        .map((groupKey, index) => (
                            <Group
                                key={groupKey + index}
                                group={group.subGroups[index]}
                                columnExpanded={columnExpanded}
                                fieldSettings={fieldSettings}
                            />
                        ))}
                </Groups>
            )}
        </>
    );
}
