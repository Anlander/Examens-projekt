import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import initStore from './store'

import './App.css';


import ProfilePage from './pages/Profile'
import ServicePage from './pages/Services'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import ServiceDetail from './pages/servicedetails'

import NavbarClone from './pages/Components/NavbarClone'

const store = initStore()

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavbarClone />
        <Switch>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        <Route path="/Services/:id">
          <ServiceDetail />
        </Route>
          <Route path="/Services">
            <ServicePage />
          </Route>
          <Route path="/Profile">
            <ProfilePage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
