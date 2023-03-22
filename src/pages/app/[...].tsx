import React from 'react'
import { Router, type RouteComponentProps } from '@reach/router'

import PrivateRoute from '@components/PrivateRoute/PrivateRoute'
import Login from './pages/Login'
import Verify from './pages/Verify'
import Profile from './pages/Profile'

const Default = (_props: RouteComponentProps) => <p>Sorry, nothing here!</p>

const App = () => (
  <Router basepath='/app'>
    <PrivateRoute path='/verificar' component={Verify} />
    <PrivateRoute path='/perfil' component={Profile} />
    <Login path='/login' />
    <Default path='/' default />
  </Router>
)

export default App
