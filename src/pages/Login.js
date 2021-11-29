import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from "react-router-dom";
import { googleSignInInitiate, loginInitiate } from '../redux/action';
import "./Login.css";

const Login = () => {
    const [state, setState] = useState({
        email: "",
        password:""
    })

    const { currentUser } = useSelector((state) => state.user); //ngambil user dari rootReducer
    const history = useHistory();
    
    useEffect(() => {
        if (currentUser) {
            history.push("/")
        }
    }, [currentUser, history]);

    const dispatch = useDispatch();

    const { email, password } = state;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            return;
        }
        dispatch(loginInitiate(email, password))
        setState({...state, email:"", password:""})
     }
    const handleGoogleSignIn = () => {
        dispatch(googleSignInInitiate());
            history.push("/login")
     }

    const handleChange = (e) => {
        let { name, value } = e.target;
        setState({...state, [name]:value})
     }
    return (
        
            <div id="logreg-forms"> 
                <form className="form-signin" onSubmit={handleSubmit}>
                    <h1 className="h3 mb-3 font-weight-normal" style={{ textAlign:"center" }}> Sign In</h1>
                    
                <div>
                    {/* <p style={{textAlign:"center"}}>OR</p> */}
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
                </div>
                <div style={{marginTop:10}}>
                    <button className="btn btn-secondary btn-block">
                        <i className="fas fa-sign-in-alt "> Sign In</i> 
                    </button>
                </div>
                <hr></hr>
                <p>Don't have an account</p>
                <div className="social-login">
                        <button className="btn google-btn social-btn" type="button" onClick={handleGoogleSignIn}>
                            <span>
                                <i className="fab fa-google-plus-g" onClick={handleGoogleSignIn}> Sign Up with Google+</i>
                            </span>
                        </button>
                    </div>
                <Link to="/register">
                    <button className="btn btn-primary btn-block" id="btn-signup">
                        <i className="fas fa-user-plus ">  Sign Up New account</i>
                </button>
                </Link>

                </form>
            </div>
        
    )
}

export default Login;