import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { AppContextProvider } from './context/AppContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
    <ToastContainer autoClose={1500} />
  </>
  // </React.StrictMode>
);
