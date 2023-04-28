import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ClientGrid } from '@equinor/workspace-ag-grid';

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <div style={{ height: '1000px', width: '1000px' }}>
        <ClientGrid colDefs={[{ field: 'id' }]} height={1000} rowData={[{ id: '123' }]} />
      </div>
    </QueryClientProvider>
  </React.StrictMode>
);
