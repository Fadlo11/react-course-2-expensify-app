import moment from 'moment'
import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
    const state = expensesReducer(undefined,{ type: '@@INIT'})
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual([ expenses[0], expenses[2] ])
})

test('should not remove expense by id that not exists', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '5'
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual([ expenses[0], expenses[1], expenses[2] ])
})

test('should add expense by id that not exists', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: '4',
            description: 'FFFF',
            note: '',
            amount: 5000,
            createdAt: moment(0).add(5,'day').valueOf()
        }
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual([ ...expenses, {
        id: '4',
        description: 'FFFF',
        note: '',
        amount: 5000,
        createdAt: moment(0).add(5,'day').valueOf()
    } ])
})

test('should edit expense by id', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            description: 'FFFF',
            note: '',
            amount: 5000,
            createdAt: moment(0).add(5,'day').valueOf()
        }
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual([ expenses[0], {
        id: expenses[1].id,
        description: 'FFFF',
        note: '',
        amount: 5000,
        createdAt: moment(0).add(5,'day').valueOf()
    }, expenses[2] ])
})

test('should not edit expense by id that not exists', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '5',
        updates: {
            description: 'FFFF',
            note: '',
            amount: 5000,
            createdAt: moment(0).add(5,'day').valueOf()
        }
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual(expenses)
})