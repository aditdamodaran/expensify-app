import React from 'react'
import createHistory from 'history/createBrowserHistory'
import {Router, Route, Switch} from 'react-router-dom'
import ExpenseDashboardPage from '../components/ExpenseDashboard'
import AddExpensePage from '../components/AddExpense'
import EditExpensePage from '../components/EditExpense'
import HelpExpensePage from '../components/HelpExpense'
import LoginPage from '../components/LoginPage'
import NotFoundPage from '../components/NotFound'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" exact={true} component={LoginPage} />
        <PrivateRoute path="/dashboard" exact={true} component={ExpenseDashboardPage} />
        <PrivateRoute path="/create" exact={true} component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" exact={true} component={EditExpensePage} />
        <PrivateRoute path="/help" exact={true} component={HelpExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter