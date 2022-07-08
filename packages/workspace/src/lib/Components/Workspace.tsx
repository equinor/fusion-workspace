import { Button } from '@equinor/eds-core-react';
import { tokens } from '@equinor/eds-tokens';
import { Sidesheet } from '@workspace/sidesheet';
import { useEffect, useState } from 'react';
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { DataSourceController } from '../Classes';
import { WorkspaceController } from '../Classes/WorkspaceController';

export interface WorkspaceProps<T> {
    controller: WorkspaceController<T>;
}

const StyledWorkspace = styled.div`
    background-color: ${tokens.colors.ui.background__medium.hex};
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export function Workspace<T>({ controller }: WorkspaceProps<T>) {
    const dataSourceController = controller.controllers.find((s) => s.name === 'DataSource')
        ?.controller as DataSourceController<T>;
    if (!dataSourceController) {
        throw 'No data source controller added';
    }

    useQuery(['Workspace data'], dataSourceController.fetchData, { refetchOnWindowFocus: false });

    return (
        <div>
            <StyledWorkspace>
                <DataInformation controller={controller} />
                <TabNavBar controller={controller} />
            </StyledWorkspace>
            <SplitScreen>
                <TabHandler controller={controller} />
                <Sidesheet
                    controller={
                        controller.controllers.find((s) => s.name === 'Sidesheet')
                            ?.controller as any
                    }
                />
            </SplitScreen>
        </div>
    );
}

const SplitScreen = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`;

export default Workspace;

interface DataInformationProps<T> {
    controller: WorkspaceController<T>;
}

const DataInformation = <T,>({ controller }: DataInformationProps<T>) => {
    const setData = useState(controller.filteredData)[1];

    useEffect(() => {
        const unsub = controller.onFilteredDataChanged((data) => {
            setData(data);
        }).unsub;

        const unsubOrgData = controller.onOriginalDataChanged((data) => {
            setData(data);
        }).unsub;

        return () => {
            unsub();
            unsubOrgData();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <div>Data length: {controller.originalData.length}</div>
            <div>Filtered data length: {controller.filteredData.length}</div>
        </div>
    );
};

interface TabHandlerProps<T> {
    controller: WorkspaceController<T>;
}

function TabHandler<T>({ controller }: TabHandlerProps<T>) {
    const [value, setValue] = useState(controller.activeTab);

    useEffect(() => {
        controller.onTabChanged(setValue);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const CurrentViewTab = useMemo(() => {
        return controller.tabs.find((s) => s.name === controller.activeTab);
    }, [controller.activeTab, value]);

    return (
        <div>
            {CurrentViewTab && (
                <CurrentViewTab.ViewComponent controller={CurrentViewTab.controller} />
            )}
        </div>
    );
}

interface TabNavBarProps<T> {
    controller: WorkspaceController<T>;
}

function TabNavBar<T>({ controller }: TabNavBarProps<T>) {
    return (
        <div>
            {controller.tabs.map(({ name }) => (
                <Button
                    variant="outlined"
                    onClick={() => controller.setActiveTabIndex(name)}
                    key={name}
                >
                    {name}
                </Button>
            ))}
        </div>
    );
}
