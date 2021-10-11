import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavbarComponent extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to={'/'}>Home</Link>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                            <Link className="nav-link" to={'/profile'}>Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/login'}>Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/signup'}>Sign Up</Link>
                        </li>


                    </ul>

                </div>
            </nav>
            
        )
    }
}
