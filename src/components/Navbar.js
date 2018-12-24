import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="/">Home</NavLink>
        </nav>
    )
}

export default withRouter(Navbar);