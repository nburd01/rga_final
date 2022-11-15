import React from 'react';
import './index.scss';
import App from './App';
import { AuthModeContextProvider } from "./context/AuthContext";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from 'react-helmet-async';
// import reportWebVitals from './reportWebVitals';
// import { hydrate, render } from "react-dom";
// import { Provider } from 'react-redux';
// import store from './store';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <AuthModeContextProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </AuthModeContextProvider>
  </React.StrictMode>
);



// const rootElement = document.getElementById("root");
// if (rootElement.hasChildNodes()) {
//   hydrate(
//     <Provider store={store}>
//       <AuthModeContextProvider>
//         <App /> 
//       </AuthModeContextProvider>
//     </Provider>, rootElement);
// } else {
//   render(
//     <Provider store={store}>
//       <AuthModeContextProvider>
//         <App /> 
//       </AuthModeContextProvider>
//     </Provider>, rootElement);
// }

// reportWebVitals();
