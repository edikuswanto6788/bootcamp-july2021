import axios from 'axios';
import React, { Component } from 'react'

export default class Signup extends Component {


    handSubmit = (e) => {
        e.preventDefault();
        const data = {
            name :  this.name,
            username : this.username,
            email : this.email,
            password : this.password,
            phone :this.phone,
            
        }
        // console.log("work:");
        // console.log(data);
        axios.post('http://jsonplaceholder.typicode.com/users', data)
            .then(res => {
            console.log(res);
            }).catch(
                err => {
                    console.log(err);
            }
        )
    }

    render() {
        return (
            <>
                <h3>Sign Up</h3>
                <form onSubmit={this.handSubmit}>
                <div className="form-group">
                    <label>Name</label>
                        <input type="text" className="form-control" placeholder="Name"
                        onChange={e => this.name = e.target.value}></input>
                    </div>
                    <div className="form-group">
                    <label>Username</label>
                        <input type="text" className="form-control" placeholder="Username"
                        onChange={e => this.username = e.target.value}></input>
                </div>
        
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
                <div className="form-group">
                    <label>Telephone</label>
                        <input type="number" className="form-control" placeholder="Telephone"
                        onChange={e => this.phone = e.target.value}></input>
                </div>
                    <div className="form-group" style={{
                        marginTop: 10
                        
                }}>
                   
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                </div>
                </form>
           </>
        )
    }
}
