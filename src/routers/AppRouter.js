import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from '../components/Header'
import ExpenseDashboardPage from '../components/ExpenseDashboard'
import AddExpensePage from '../components/AddExpense'
import EditExpensePage from '../components/EditExpense'
import HelpExpensePage from '../components/HelpExpense'
import NotFoundPage from '../components/NotFound'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={ExpenseDashboardPage}></Route>
        <Route path="/create" exact={true} component={AddExpensePage}></Route>
        <Route path="/edit/:id" exact={true} component={EditExpensePage}></Route>
        <Route path="/help" exact={true} component={HelpExpensePage}></Route>
        <Route component={NotFoundPage}></Route>
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter