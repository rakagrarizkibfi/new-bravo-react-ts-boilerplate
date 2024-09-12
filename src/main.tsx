import 'regenerator-runtime';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

import App from '~/App';
import { AuthProvider } from '~/context/auth/AuthProvider';
import GlobalStyle from '~/styles/global';
import theme from '~/styles/theme';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <GlobalStyle />
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </MuiThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
