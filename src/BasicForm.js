import './App.css'
import React, { Component } from 'react'
import { RegistrationForm } from './forms/registration';

export default class BasicForm extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // if the user changes anything in the form, we need to update
    // the state to make sure the correct data is sent to backend
    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        alert('submit was clicked' + this.state.value)
        event.preventDefault();
        // this is where Javascript would send the JSON data to the backend database
    }

    render() {
        return (
            <>
            <div>Welcome</div>
            <form onSubmit={this.handleSubmit} >
                {RegistrationForm.questions.map((item,index) => {
                    return (
                        <div className='formsection' key={index}>
                            <h1>{item.section}</h1>
                            {item.inputs.map((row,index) => {
                                return (
                                    <>
                                    <label>{row.label}</label>
                                    <input className='form-input' type={row.inputType} id={row.name} />
                                    </>
                                );
                                })
                            }
                        </div>
                    );
                    }
                )}
                <input type="submit" value="Submit" />
            </form>
            </>
        )
    }
}
