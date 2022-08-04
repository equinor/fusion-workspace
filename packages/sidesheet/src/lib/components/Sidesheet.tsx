import { Button, Icon } from '@equinor/eds-core-react';
import { tokens } from '@equinor/eds-tokens';
import styled from 'styled-components';

import { SidesheetController } from '../classes/sidesheetController';
import { useSidesheet } from '../hooks/useSidesheet';

export interface SidesheetProps<T> {
    controller: SidesheetController<T>;
}

export function Sidesheet<T>({ controller }: SidesheetProps<T>): JSX.Element | null {
    const {isOpen, item} = useSidesheet(controller);

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
            <div>{isOpen ? 'Sidesheet is open' : 'Sidesheet is closed'}</div>
            <div>
                {item ? 'Sidesheet has an item' : 'Sidesheet does not have an item'}
            </div>
            <pre>
                {item &&
                    JSON.stringify(item)
                        .split(',')
                        .map((s, i) => <div key={s + i}>{s}</div>)}
            </pre>
        </StyledSidesheet>
    );
}

    const StyledSidesheet = styled.div`
        height: auto;
        border: 1px solid ${tokens.colors.ui.background__medium.hex};
        width: auto;
    `;