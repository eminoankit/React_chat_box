import React from 'react'
import './Header.css'


const Header = (props) => {
    return (
        <div>
            <div className="header-main">
            <h3>{props.headerText}</h3>
        </div>            
        </div>
    )
}

export default Header
