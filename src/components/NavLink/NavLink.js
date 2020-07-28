import React, { Component } from 'react'
import './NavLink.css'
class NavLink extends Component {
    render() {
        return (
            <div className={'maindiv'}>
                <p className={'link'}>{this.props.name}</p>
            </div>
        )
    }
}



export default NavLink;