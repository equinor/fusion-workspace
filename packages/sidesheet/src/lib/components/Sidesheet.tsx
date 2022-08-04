import { Button, Icon } from '@equinor/eds-core-react';
import { tokens } from '@equinor/eds-tokens';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { SidesheetController } from '../classes/sidesheetController';

/* eslint-disable-next-line */

export interface SidesheetProps<T> {
    controller: SidesheetController<T>;
}

const StyledSidesheet = styled.div`
    height: auto;
    border: 1px solid ${tokens.colors.ui.background__medium.hex};
    width: auto;
`;

export function Sidesheet<T>({ controller }: SidesheetProps<T>): JSX.Element | null {
    const [isOpen, setIsOpen] = useState(controller.isSidesheetOpen);
    const setItem = useState(controller.item)[1];

    useEffect(() => {
        const unSubscribe = controller.onItemChanges(setItem).unSubscribe;
        return () => {
            unSubscribe();
        };
    }, []);

    useEffect(() => {
        const unSubscribe = controller.onSidesheetOpen((s) =>
            s === 'Open' ? setIsOpen(true) : setIsOpen(false)
        ).unSubscribe;
        return () => {
            unSubscribe();
        };
    }, []);

    if (!isOpen) return null;

    return (
        <StyledSidesheet>
            <Icon
                name="close"
                onClick={() => {
                    controller.setSidesheetState('Closed');
                    controller.setItem(undefined);
                }}
            />
            <Button onClick={() => controller.setItem(undefined)}>Remove item</Button>
            <div>{controller.isSidesheetOpen ? 'Sidesheet is open' : 'Sidesheet is closed'}</div>
            <div>
                {controller.item ? 'Sidesheet has an item' : 'Sidesheet does not have an item'}
            </div>
            <pre>
                {controller.item &&
                    JSON.stringify(controller.item)
                        .split(',')
                        .map((s, i) => <div key={s + i}>{s}</div>)}
            </pre>
        </StyledSidesheet>
    );
}

export default Sidesheet;
