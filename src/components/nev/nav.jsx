import React from 'react';
import s from './nav.module.css';
import {NavLink} from "react-router-dom";


let Nav = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li><NavLink to={`/profile`} activeClassName={s.active}>Profile</NavLink></li>
                <li><NavLink to="/message" activeClassName={s.active}>Message</NavLink></li>
                <li><NavLink to="/news" activeClassName={s.active}>News</NavLink></li>
                <li><NavLink to="/users" activeClassName={s.active}>Users</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;