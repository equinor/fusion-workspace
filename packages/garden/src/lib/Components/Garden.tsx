import { ParkViewProvider } from '../Context/ParkViewProvider';
import { VirtualContainer } from './VirtualGarden/Container';

import { Icon as EdsIcon } from '@equinor/eds-core-react';
import * as icons from '@equinor/eds-icons';
import { GardenController } from '../Classes';

EdsIcon.add({ ...icons });

interface GardenProps<T> {
    controller: GardenController<T>;
}

export function Garden<T>({ controller }: GardenProps<T>): JSX.Element | null {
    return (
        <div>
            <ParkViewProvider controller={controller}>
                <VirtualContainer />
            </ParkViewProvider>
        </div>
    );
}
