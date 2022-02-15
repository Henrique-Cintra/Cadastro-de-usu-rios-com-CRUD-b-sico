import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'


export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <Link to={props.link}>
                <i className={`fa fa-${props.icon}`}></i> {props.page}
            </Link>

        </nav>
    </aside>