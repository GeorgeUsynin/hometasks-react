import React from 'react'
import { NavLink } from 'react-router-dom'
import cls from './Header.module.css'

function Header() {
    return (
        <div>
            <nav className={cls.navbar}>
                <NavLink to="/pre-junior" activeClassName={cls.active}>pre-junior</NavLink>
                <NavLink to="/junior" activeClassName={cls.active}>junior</NavLink>
                <NavLink to="/junior+" activeClassName={cls.active}>junior+</NavLink>
                <span className={cls.navbar_square}></span>
            </nav>
        </div>
    )
}

export default Header
