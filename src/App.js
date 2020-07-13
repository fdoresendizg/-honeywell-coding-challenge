import React from 'react';
import { Provider } from 'react-redux';

import store from './utils/store';
import Routes from './routes';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;