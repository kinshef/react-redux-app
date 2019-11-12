import React from 'react';
import s from './header.module.css';
import fotoUser from '../../assets/img/logo192.png'
import {NavLink} from "react-router-dom";
import Preloader from "../common/Preloader";

let Header = (props) => {
    return (
        <header>
            <div className="wrap">
                <div className={s.content}>
                    <a href='/' className={s.logo}>
                        <img src={fotoUser}/>
                    </a>
                    <div className={s.taitel}>test: react/redux</div>
                    {props.auth.isFetching
                        ? <Preloader class={s.preloader}/>
                        : props.auth.isAuth
                            ? <div><button onClick={props.AuthLogout}>LogOut</button> <p className={s.login}>{props.auth.login}</p></div>
                            : <NavLink className={s.NavLogin} to='/login'>Login</NavLink>}
                </div>
            </div>
        </header>
    );
}

export default Header;