import moment from 'moment'
import filtersReducer from '../../reducers/filters'

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date', // can be date or amount
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set the sortBy to amount', () => {
    const state = filtersReducer(undefined,{ type: 'SORT_BY_AMOUNT' })
    expect(state.sortBy).toBe('amount')
})

test('should set the sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount', // can be date or amount
        startDate: undefined,
        endDate: undefined
    }
    const state = filtersReducer(currentState,{ type: 'SORT_BY_DATE' })
    expect(state.sortBy).toBe('date')
})

test('should set the start date of state', () => {
    const state = filtersReducer(undefined,{ type: 'SET_START_DATE', startDate:moment(0) })
    expect(state.startDate).toEqual(moment(0))
})

test('should set the end date of state', () => {
    const state = filtersReducer(undefined,{ type: 'SET_END_DATE', endDate:moment(0) })
    expect(state.endDate).toEqual(moment(0))
})

test('should set the text of state', () => {
    const state = filtersReducer(undefined,{ type: 'SET_TEXT_FILTER', text:'Fadel' })
    expect(state.text).toBe('Fadel')
})