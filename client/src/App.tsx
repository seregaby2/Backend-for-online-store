import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import { Router } from './components/Router';
import { setupStore } from './store/store';

const store = setupStore();

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <NavBar />
        <Router />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
