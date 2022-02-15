import './Logo.css'
import logo from '../../assets/imgs/logo-linkedin.png'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="logo">
        <Link to="https://www.linkedin.com/in/henrique-cintra-gouveia-083455230" className="logo">
            <img src={logo} alt="logo" />
        </Link>
    </aside>