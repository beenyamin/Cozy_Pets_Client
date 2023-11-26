import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';

import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import Routes from './Routes/Routes.jsx';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './Provider/AuthProvider.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
    <HelmetProvider>

        <div className="font-Poppins">
          <RouterProvider router={Routes} />
        </div>
        <Toaster></Toaster>
    </HelmetProvider>
    </QueryClientProvider>
      </AuthProvider>


  </React.StrictMode>,
)

