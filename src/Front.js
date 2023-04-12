import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Home from "./Home";

const Front = () => {



    const usenavigate = useNavigate();
    useEffect(() => {
        let username = sessionStorage.getItem('username')
        if (username === '' || username === null) {
            usenavigate('/login');
        }
    }, []);
    return (
        <div>
            <div className="header">
                <Link to={'/'}>Home</Link>
                <Link style={{ float: 'right' }} to={'/login'}>Logout</Link>
            </div>


            <Home />
        </div>
    );
}

export default Front;