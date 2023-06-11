import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test('should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'})
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', { note:'Fadel has noted here' })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {note:'Fadel has noted here'}
    })
})

test('should setup add expense action object', () => {
    const action = addExpense({
        description: 'FFFFFFFF', 
        note: 'JJJJJJJJJJJJJJJJJJJJJ', 
        amount: 555, 
        createdAt: 55555 
    })
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: 'FFFFFFFF', 
            note: 'JJJJJJJJJJJJJJJJJJJJJ', 
            amount: 555, 
            createdAt: 55555 
        }
    })
})

test('should setup add expense action object with defaul values', () => {
    const expenseDefaultData = {
        description: '', 
        note: '', 
        amount: 0, 
        createdAt: 0 
    }
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseDefaultData,
            id: expect.any(String),
        }
    })
})