import React from 'react'
import { Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import LoadingRedirect from './LoadingRedirect';

const UserRoute = ({children, ...rest}) => {
    const { currentUser } = useSelector((state) => state.user);
    return currentUser ? <Route {...rest} /> : <LoadingRedirect />
   
    }


export default UserRoute;
