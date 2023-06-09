

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from './firebase/config';
import Context, { FirebaseContext } from './store/FirebaseContext';


ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase }}>
    <Context>
      <App />
      </Context>
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
