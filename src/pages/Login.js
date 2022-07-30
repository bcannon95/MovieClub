import React, { useState, useEffect } from 'react';

class Login extends React.Component {
    state = {
        formData: {
            name: '',
            email: '',

        }
    }

    handleChange = e => {
        this.setState({
            formData: {
                ...this.state.formData,
                [e.target.name]: e.target.value
                // [e.target.email]: e.target.value
            }
        })
    }

    // handleSubmit = e => {
    //     e.preventDefault();
    //     this.props.createUser(this.state.formData);
    // }

    render() {
        return (
            <div>
                <h1></h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            className="form-control"
                            name="name"
                            value={this.state.formData.name}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            className="form-control"
                            name="email"
                            value={this.state.formData.email}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-info"
                    >
                        LOG IN
                    </button>
                </form>
            </div>
        );
    }
}

export default Login;