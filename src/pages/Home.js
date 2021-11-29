import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutInitiate } from '../redux/action';

const Home = () => {
    const { currentUser } = useSelector((state) => state.user)
    const dispacth = useDispatch();

    const handleAuth = () => {
        if (currentUser) {
            dispacth(logoutInitiate())
        }
    }
    return (
        <div>
            <h2>Home</h2>
            <button className="btn btn-danger" onClick={handleAuth}>Logout</button>
        </div>
    )
}

export default Home;