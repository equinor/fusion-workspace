import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ClientGrid } from '@equinor/workspace-ag-grid';
import App from './App';

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <div style={{ height: '1000px', width: '1000px' }}>
        <App />
      </div>
    </QueryClientProvider>
  </React.StrictMode>
);
