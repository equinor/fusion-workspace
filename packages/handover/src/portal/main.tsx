import { tokens } from '@equinor/eds-tokens';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import { PortalHeader } from './PortalHeader';

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: Equinor;
        font-size: 13px;
        margin: 0;
    };

    p {
        font-family: Equinor;
        font-size: 13px !important;
    }
    button {
        font-family: Equinor;
    }
    pre {
        font-family: Equinor;
        font-size: 13px !important;
        font-weight: 400;
        line-height: 1.250em;
        text-align: left;
    }

    ::-webkit-scrollbar {
        height: 0.5rem;
        width: 0.5rem;
    }

        /* Track */
        ::-webkit-scrollbar-track {
        background: none; 
        }
        
        /* Handle */
        ::-webkit-scrollbar-thumb {
        background: ${tokens.colors.interactive.primary__resting.rgba}; 
        border-radius: 5px;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
        background:${tokens.colors.interactive.primary__hover.rgba}; 
        }
`;

const root = ReactDOM.createRoot(document.getElementById('portal') as HTMLElement);
root.render(
	<div>
		<GlobalStyle />
		<PortalHeader />
	</div>
);
