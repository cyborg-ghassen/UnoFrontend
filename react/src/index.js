import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Main from "./Main";
import 'helpers/initFA';
import { Provider } from 'react-redux';
import { storeAuth } from 'reduxStores.js/AuthStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
            <Provider store={storeAuth}>

      <Main>
          <App />
      </Main>
      </Provider>

  </React.StrictMode>
  // ,document.getElementById('root')
);
