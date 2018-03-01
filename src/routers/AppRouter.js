import React from 'react'
import { Route , Router , Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import DashboardPage from '../components/DashboardPage'
import NotFoundPage from '../components/NotFoundPage'
import PublicRoute from './PublicRoute'

export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={DashboardPage} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter
