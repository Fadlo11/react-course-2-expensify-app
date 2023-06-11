import moment from "moment";
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "../../actions/filters";

test('should set Text Filter action onject', () => {
    const filter = setTextFilter('Fadel')
    expect(filter).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Fadel'
    })
})

test('should set Text Filter action onject With default value', () => {
    const filter = setTextFilter()
    expect(filter).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('should generate Start Date action onject', () => {
    const filter = setStartDate(moment(0))
    expect(filter).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should generate End Date action onjecte', () => {
    const filter = setEndDate(moment(0))
    expect(filter).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('should generate sort By Amount action onject', () => {
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('should generate sort By Date action onject', () => {
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE'
    })
})