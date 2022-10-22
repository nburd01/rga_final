import React from 'react';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthModeContextProvider } from "./context/AuthContext";
import { hydrate, render } from "react-dom";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import urlReducer from "./features/url";

const store = configureStore({
  reducer: {
    url: urlReducer,
  },
})

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
