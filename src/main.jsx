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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <AuthProvider>
    <HelmetProvider>

        <div className="font-Poppins">
          <RouterProvider router={Routes} />
        </div>
        <Toaster></Toaster>
    </HelmetProvider>
      </AuthProvider>

  </React.StrictMode>,
)

