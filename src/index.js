import React from 'react';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthModeContextProvider } from "./context/AuthContext";
import { hydrate, render } from "react-dom";
import { Provider } from 'react-redux';
import store from './store';



const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(
    <Provider store={store}>
      <AuthModeContextProvider>
        <App /> 
      </AuthModeContextProvider>
    </Provider>, rootElement);
} else {
  render(
    <Provider store={store}>
      <AuthModeContextProvider>
        <App /> 
      </AuthModeContextProvider>
    </Provider>, rootElement);
}

reportWebVitals();
