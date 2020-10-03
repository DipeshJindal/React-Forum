import React, { Component } from 'react';
import NavLink from '../NavLink/NavLink';
import './Navbar.css'
import Hamburger from '../Hamburger/Hamburger';
class Navbar extends Component {
    render() {
        return (
            <div className={'mainnav'}>
                <div className={'navbar'}>
                    <NavLink name="Home" />
                    <NavLink name="Home" />
                    <NavLink name="Home" />
                    <NavLink name="Home" />
                </div>
                <Hamburger />
            </div>
        );
    }
}

export default Navbar;
