import { ParkViewProvider } from '../Context/ParkViewProvider';
import { VirtualContainer } from './VirtualGarden/Container';

import { Icon as EdsIcon } from '@equinor/eds-core-react';
import * as icons from '@equinor/eds-icons';
import { GardenController } from '../Classes';
import create from 'zustand';
import { useJsObjectToState } from '@workspace/basecontroller';

EdsIcon.add({ ...icons });

interface GardenProps<T> {
    controller: GardenController<T>;
}

interface ZustandReactContext {
    api: GardenController<unknown> | null;
    setApi: (newApi: GardenController<unknown>) => void;
}

export const useZuContext = create<ZustandReactContext>((set) => ({
    api: null,
    setApi: (newApi: GardenController<unknown>) => set(() => ({ api: newApi })),
}));

export function Garden<T>({ controller }: GardenProps<T>): JSX.Element | null {
    const context = useZuContext();
    useJsObjectToState('Garden', controller, () => context.setApi(controller as any));
    if (!context.api) return null;

    return (
        <div>
            <ParkViewProvider controller={context.api}>
                <VirtualContainer />
            </ParkViewProvider>
        </div>
    );
}
