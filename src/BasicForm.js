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

    userformdata = {};

    // if the user changes anything in the form, we need to update
    // the state to make sure the correct data is sent to backend
    handleChange(event) {
        this.setState({value: event.target.value})
        // if you want to validate the input, handleChange can have the logic to do that
        console.log(event.target.id , event.target.value);
    }

    handleSubmit(event) {
        alert('submit was clicked' + this.state.value)
        event.preventDefault();
        // function needs to create the JSON with the user's response
        // this is where Javascript would send the JSON data to the backend database
    }

    render() {
        return (
            <>
            <div>Welcome</div>
            <form onSubmit={this.handleSubmit} >
                {RegistrationForm.questions.map((item,index) => {
                    return (
                        <div className='formsection' key={item.section}>
                            <div className='section-title'>{item.section}</div>
                            {item.inputs.map((row,index) => {
                                return (
                                    <>
                                    <div className={row.labelClass}>{row.label}</div>
                                    <input className={row.inputClass} type={row.inputType} id={row.name} onChange={this.handleChange}/>
                                    </>
                                );
                                })
                            }
                        </div>
                    );
                    }
                )}
                <div className='formsection'>
                    <input className="form-submit" type="submit" value="Submit" />
                </div>
            </form>
            </>
        )
    }
}
