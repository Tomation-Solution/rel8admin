import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
const client = new QueryClient()
root.render(
  <React.StrictMode>
      <QueryClientProvider client={client}>
              <App />
            <ReactQueryDevtools position="bottom-right"/>
      </QueryClientProvider>
    </React.StrictMode>
);
