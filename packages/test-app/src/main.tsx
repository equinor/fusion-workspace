import { StarProgress } from '@equinor/eds-core-react';
import { StrictMode, Suspense } from 'react';
import * as ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import { FusionApp } from './app/FusionApp';
import { Framework } from './app/FusionFramework';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <StrictMode>
        <Suspense
            fallback={
                <Wrapper>
                    <StarProgress />
                    <h1>Loading framework</h1>
                </Wrapper>
            }
        >
            <Framework>
                <FusionApp />
            </Framework>
        </Suspense>
    </StrictMode>
);
