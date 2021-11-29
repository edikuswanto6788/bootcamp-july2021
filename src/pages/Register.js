import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from "react-router-dom";
import { registerInitiate } from '../redux/action';
import "./Register.css";

const Register = () => {
    const [state, setState] = useState({
        displayName:"",
        email: "",
        password: "",
        passwordConfirm:"",
    })
    const { currentUser } = useSelector((state) => state.user); //ngambil user dari rootReducer
    const history = useHistory();
    
    useEffect(() => {
        if (currentUser) {
            history.push("/login")
        }
    }, [currentUser, history]);

    const dispatch = useDispatch();

    const { email, password, passwordConfirm, displayName } = state;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== passwordConfirm) {
            return console.warn("password tidak sesuai");
        }
        dispatch(registerInitiate(email, password, displayName));
        setState({email:"", displayName:"", password:"", passwordConfirm:""})
        
     }
    const handleChange = (e) => {
        let { name, value } = e.target;
        setState({...state, [name]:value})
     }
    return (
        
            <div id="register-form"> 
                <form className="form-signin" onSubmit={handleSubmit}>
                    <h1 className="h3 mb-3 font-weight-normal" style={{ textAlign:"center" }}> Sign Up</h1>
                   
                <div>
                <input
                        type="text"
                        id="displayName"
                        className="form-control"
                        placeholder="Full Name"
                        name="displayName"
                        onChange={handleChange}
                        value={displayName}
                        required
                    />
                    <input
                        type="email"
                        id="inputEmail"
                        className="form-control"
                        placeholder="Email Address"
                        name="email"
                        onChange={handleChange}
                        value={email}
                        required
                    />
                    <input
                        type="password"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        value={password}
                        required
                    />
                    <input
                        type="password"
                        id="inputRePassword"
                        className="form-control"
                        placeholder="Repeat Password"
                        name="passwordConfirm"
                        onChange={handleChange}
                        value={passwordConfirm}
                        required
                    /> 
                </div>
                <div style={{marginTop:10}}>
                    <button className="btn btn-secondary btn-block" type="submit">
                        <i className="fas fa-user-plus "> Sign Up</i> 
                    </button>
                </div>
                <hr></hr>
                <p>I have an account</p>
                <Link to="/login">
                        <i className="fas fa-sign-in-alt"></i> Login
                </Link>
                </form>
            </div>
        
    )
}

export default Register;