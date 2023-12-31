import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

export default class ExpenseForm extends React.Component{
    constructor(props){
        super(props)

        if (this.props.expense) {
            this.state = {
                description: this.props.expense.description,
                note: this.props.expense.note,
                amount: (this.props.expense.amount / 100).toString(),
                createdAt: moment(this.props.expense.createdAt),
                calendarFocused: false,
                error: ''
            }
        }
        else{
            this.state = {
                description: '',
                note: '',
                amount: '',
                createdAt: moment(),
                calendarFocused: false,
                error: ''
            } 
        }
    }
    
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => { 
            return { description };
         });
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => {
            return { note }
        });
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => {
                return { amount }
            });
        }
    }
    onDateChange = (createdAt) => {
        this.setState(() => ({createdAt}))
    }
    onFocusChange = (focused) => {
        this.setState(() => ({ calendarFocused: focused.focused }))
    }
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount){
            this.setState(() => ({ error: 'Please provide description and amount.' }))
        }
        else {
            this.setState(() => ({ error: '' }))
            this.props.onSubmit({
                id: this.state.id,
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form  
                    onSubmit={this.onSubmit}
                >
                    <input 
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input 
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea 
                        value={this.state.note}
                        onChange={this.onNoteChange}
                        placeholder="Add a note for your expense">
                    </textarea>
                    <button type="submit">Add Expense</button>
                </form>
            </div>
        )
    }
}