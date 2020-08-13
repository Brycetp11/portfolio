import React from 'react'

export default function EmailForm(props) {
    return (
        <div className="container">
            <form className="form">
                <div className="form-group font-weight-bolder">
                    <h2>Contact</h2>
                    <label for="exampleFormControlInput1 text">Name</label>
                    <input value={props.name} type="name" name="name" onChange={props.handleInputChange} className="form-control" placeholder="John Doe" />
                </div>
                <div className="form-group font-weight-bolder">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input value={props.email} type="email" name="email" onChange={props.handleInputChange} className="form-control" placeholder="name@example.com" />
                </div>
                <div className="form-group font-weight-bolder">
                    <label for="exampleFormControlTextarea1">Messsage</label>
                    <textarea value={props.message} name="message" onChange={props.handleInputChange} className="form-control" rows="3"></textarea>
                </div>
                <button type="button" onClick={props.handleFormSubmit} className="btn btn-dark">Submit</button>
            </form>
        </div>
    )
}
