import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/reduxStore';
import { ruRU } from '@mui/material/locale';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fcbb42' //'#49d3e2'#D9ECF2
    },
    secondary: {
      main: '#07139e'//#faaf0007139e
    },
    secondaryYellow: {
      main: '#faaf00'
    },
    primary1: {
      main: '#ffffff'
    },
    primaryBlue: {
      main: '#D9ECF2'
    },
    chip: {
      main: '#FFEBA1'
    },
    primaryRed: {
      main: '#FF0000'
    },
    primaryBlack: {
      main: '#000000'
    },
    colorIconDate: {
      main: '#1AA6B7'
    }
  },
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": { backgroundColor: "rgba(252, 187, 66, 0.8);"},
          ":hover": { backgroundColor: "rgba(252, 187, 66, 0.3);" },
          "&.Mui-selected:hover": { backgroundColor: "rgba(252, 187, 66, 0.3);" }
        }
      }
    },
    
  }
}, ruRU)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store} >
      <ThemeProvider theme={theme} >
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
