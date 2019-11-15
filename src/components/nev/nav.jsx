import React from 'react';
import style from './nav.module.css';
import {NavLink} from "react-router-dom";


let Nav = () => {
    return (
        <nav className={style.nav}>
            <ul>
                <li><NavLink to={`/profile`} activeClassName={style.active}>Profile</NavLink></li>
                <li><NavLink to="/message" activeClassName={style.active}>Message</NavLink></li>
                <li><NavLink to="/news" activeClassName={style.active}>News</NavLink></li>
                <li><NavLink to="/users" activeClassName={style.active}>Users</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;