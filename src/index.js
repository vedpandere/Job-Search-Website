import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {SnackbarProvider} from 'notistack';
import { JobContextProvider } from "./Context/JobContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <JobContextProvider>
      <SnackbarProvider >
        <App />
      </SnackbarProvider>
    </JobContextProvider>
  </React.StrictMode>

);

