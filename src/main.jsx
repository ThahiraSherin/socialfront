import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { MantineProvider } from '@mantine/core';
import store from '../src/store/ReduxStore';
import { BrowserRouter } from 'react-router-dom'; // ✅ import BrowserRouter

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <BrowserRouter> {/* ✅ wrap App with Router */}
          <App />
        </BrowserRouter>
      </MantineProvider>
    </Provider>
  </React.StrictMode>
);
