import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouters';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses  from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
// });

//  store.dispatch(addExpense({ description: 'Water Bill', amount: 150 }));
//  store.dispatch(addExpense({ description: 'Gas Bill', createdAt:1000 }));
//  store.dispatch(addExpense({ description: 'Rent', amount: 2500 }));

// store.dispatch(setTextFilter('Water'));
// setTimeout(() =>{
//     store.dispatch(setTextFilter('bill'));
// },3000)

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);
// console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'));
