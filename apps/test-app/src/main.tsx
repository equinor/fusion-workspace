import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import styled from 'styled-components';
import { GardenServer } from './Garden';

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <div style={{ height: '100vh' }}>
        <GardenServer />
      </div>
    </QueryClientProvider>
  </React.StrictMode>
);
