import { Button } from '@equinor/eds-core-react';
import { useJsObjectToState } from '@workspace/basecontroller';
import { useState } from 'react';
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { DataSourceController } from '../Classes';
import { WorkspaceController } from '../Classes/WorkspaceController';

export interface WorkspaceProps<T> {
    controller: WorkspaceController<T>;
}

const StyledWorkspace = styled.div`
    background-color: pink;
`;

export function Workspace<T>({ controller }: WorkspaceProps<T>) {
    const [value, setValue] = useState(false);

    const CurrentViewTab = useMemo(() => {
        return controller.tabs.find((s) => s.name === controller.activeTab);
    }, [controller.activeTab, value]);

    useJsObjectToState('Workspace', controller, () => setValue((s) => !s));

    const dataSourceController = controller.headlessControllers.find((s) => s.name === 'DataSource')
        ?.controller as DataSourceController<T>;
    if (!dataSourceController) {
        throw 'No data source controller added';
    }

    const { data, isLoading } = useQuery(['Workspace data'], dataSourceController.fetchData, {
        onSuccess: () => {
            console.log('Data retrieved');
        },
    });

    if (isLoading) {
        return <div>Loading data</div>;
    }

    return (
        <div>
            <StyledWorkspace>
                <h1>Welcome to Workspace!</h1>
                Data length: {data?.length}
                Test length: {controller.originalData.length}
            </StyledWorkspace>
            {controller.tabs.map(({ name }) => (
                <Button
                    variant="outlined"
                    onClick={() => controller.setActiveTabIndex(name)}
                    key={name}
                >
                    {name}
                </Button>
            ))}
            <div>
                {CurrentViewTab && (
                    <CurrentViewTab.ViewComponent controller={CurrentViewTab.controller} />
                )}
            </div>
        </div>
    );
}

export default Workspace;
