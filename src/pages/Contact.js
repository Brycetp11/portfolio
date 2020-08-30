import React, { Component } from 'react'
import EmailForm from '../components/EmailForm';

export default class Contact extends Component {
    state= {
        name: "",
        email: "",
        message: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

      handleFormSubmit = event => {
        event.preventDefault();
        window.location = "mailto:brycepingul@gmail.com"
        alert(`Thank you ${this.state.name}`)
        this.setState({
            name: "",
            email: "",
            message: ""
        })
      };

    render() {
        return (
            <EmailForm 
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            name={this.state.name}
            email={this.state.email}
            message={this.state.message}
            />
        )
    }
}
