import React from "react";
import { shallow } from "enzyme";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { filters, altfilters } from "../fixtures/filters";
import moment from "moment";

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach( () => {
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow(<ExpenseListFilters 
        setTextFilter={setTextFilter} 
        sortByDate={sortByDate} 
        sortByAmount={sortByAmount} 
        setStartDate={setStartDate} 
        setEndDate={setEndDate}
        filters = {filters}
    />)
})

test('Should render ExpenseListFilters properly', () =>{
    expect(wrapper).toMatchSnapshot()
})

test('Should render ExpenseListFilters with alt filter properly', () => {
    wrapper.setProps({
        filters: altfilters
    });
    expect(wrapper).toMatchSnapshot();
})

test('Should handle text change', () => {
    const value = 'new text'
    wrapper.find('input').simulate('change' , {
        target: { value }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

test('Should sort by date', () => {
    const value='date'
    wrapper.find('select').simulate('change' , {
        target: { value }
    })
    expect(sortByDate).toHaveBeenCalled()
})

test('Should sort by amount', () => {
    const value='amount'
    wrapper.find('select').simulate('change' , {
        target: { value }
    })
    expect(sortByAmount).toHaveBeenCalled()
})

test('Should handle date change', () => {
    const startDate=moment(0).add(1,'days')
    const endDate=moment(0).add(3,'days')
    wrapper.find('DateRangePicker').simulate('DatesChange' , startDate, endDate)
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

test('Should handle date focus change', () =>{
    const calendarFocused = 'startDate'
    wrapper.find('DateRangePicker').simulate('FocusChange' , calendarFocused)
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
})