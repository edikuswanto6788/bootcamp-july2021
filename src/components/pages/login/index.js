import axios from 'axios'
import React, { Component } from 'react'

class Login extends Component {
    handSubmit = (e) => {
        e.preventDefault()
        const data = {
            email: this.email,
            username: this.username    
        }
        this.props.history.push('/')
        axios.post('http://jsonplaceholder.typicode.com/users', data)
            .then(res => {
                localStorage.setItem('token', res.data.token)
            console.log(res);
            }).catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <h3>Login</h3>
                <form onSubmit={this.handSubmit}>
                <div className="form-group">
                    <label>Email</label>
                        <input type="email" className="form-control" placeholder=" Email"
                        onChange={e => this.email = e.target.value}></input>
                </div>
                <div className="form-group">
                    <label>Password</label>
                        <input type="password" className="form-control" placeholder="Password"
                        onChange={e => this.password = e.target.value}></input>
                    </div>
                    <br />
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default Login;
