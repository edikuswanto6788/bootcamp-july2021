import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from "react-router-dom";
import { logoutInitiate } from '../redux/action';

 const Header=()=> {
     const [activeTab, setActiveTab] = useState("Home");
     const location = useLocation();
     const {user } = useSelector((state) => ({ ...state.user }))
     const dispatch = useDispatch();
     const handleAuth = () => {
         dispatch(logoutInitiate());
     }
     return (
         <div className="header">
             <Link to="/">
                 <p className="logo">My Website</p>
             </Link>
             <div className="header-right">
                 <Link to="/">
                     <p className={`${activeTab === "Home" ? "active" : ""}`}
                     onClick={()=> setActiveTab("Home")}>Home</p>
                 </Link>
                 <Link to="/add-contact">
                     <p className={`${activeTab === "Add Contact" ? "active" : ""}`}
                     onClick={()=> setActiveTab("Add Contact")}>Add Contact</p>
                 </Link>
                 <Link to="/about">
                     <p className={`${activeTab === "About" ? "active" : ""}`}
                     onClick={()=> setActiveTab("About")}>About</p>
                 </Link>
                 {user ? (
                      <Link to="/signout">
                         <p
                             style={{cursor:"pointer"}}
                     onClick={handleAuth}>Sign Out</p>
                 </Link>
                 ) : (
                    <Link to="/signin">
                    <p className={`${activeTab === "Sign In" ? "active" : ""}`}
                    onClick={()=> setActiveTab("Sign In")}>Sign In</p>
                </Link>
                 )}
                
             </div>
         </div>
     )
}

export default Header;
