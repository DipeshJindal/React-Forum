import React, { Component } from 'react';
import './Hamburger.css'
class Hamburger extends Component {
    render() {
        return (
            <div className={'main'}>
                <span className={'line'}></span>
                <span className={'line'}></span>
                <span className={'line'}></span>
            </div>
        );
    }
}

export default Hamburger;