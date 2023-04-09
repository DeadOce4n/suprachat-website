import React, { lazy } from 'react'
import { Router, type RouteComponentProps } from '@reach/router'

import { PrivateRoute, createLazyRoute } from '@components/PrivateRoute'

const Login = createLazyRoute(
  lazy(() => import('@components/ClientOnlyPages/Login'))
)
const Verify = createLazyRoute(
  lazy(() => import('@components/ClientOnlyPages/Login'))
)
const Profile = createLazyRoute(
  lazy(() => import('@components/ClientOnlyPages/Profile'))
)

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
