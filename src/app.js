import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import AppRouter from './routers/AppRouter'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize';

import { addExpense } from './actions/expenses'

const store = configureStore();

// store.dispatch
store.dispatch(addExpense({ description : 'Water Bill', amount: 4500}))
store.dispatch(addExpense({ description : 'Gas Bill', amount: 8500, createdAt: 1000}))
store.dispatch(addExpense({ description : 'Rent', amount: 109500}))

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)


ReactDOM.render(jsx, document.getElementById('app'));