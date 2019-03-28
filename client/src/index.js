import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, } from 'react-router-dom';
import { AuthProvider, } from './providers/AuthProvider';
import { initMiddleware, } from 'devise-axios';
import "semantic-ui-css/semantic.min.css"

initMiddleware();
  // anytime an axios request is made, thes function will add a token to it, if an axios request sends a token back, this will save it to local storage.

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>, 
  document.getElementById('root')
);

