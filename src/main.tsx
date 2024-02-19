import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { MantineProvider, createTheme } from '@mantine/core'
import '@mantine/core/styles.css';
import './index.css'

const theme = createTheme({
  fontFamily: "Satoshi, sans-serif",
  breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em',
  },
});


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>,
)
