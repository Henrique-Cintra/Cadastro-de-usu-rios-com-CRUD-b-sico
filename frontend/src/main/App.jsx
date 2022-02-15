import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'


import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Routes from './Routes'
import Footer from '../components/template/Footer'

export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <aside className="menu-area">
                <nav className='menu'>
                    <Nav link='/home' icon='home' page='Início' />
                    <Nav link='/users' icon='users' page='Usuários' />
                </nav>
            </aside>
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>