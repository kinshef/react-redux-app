import React from 'react';
import style from './header.module.css';
import fotoUser from '../../assets/img/logo192.png'
import {NavLink} from "react-router-dom";
import Preloader from "../common/Preloader";

let Header = ({isFetching, isAuth, login, AuthLogout}) => {
    return (
        <header>
            <div className="wrap">
                <div className={style.content}>
                    <a href='/' className={style.logo}>
                        <img  alt='' src={fotoUser}/>
                    </a>
                    <div className={style.taitel}>test: react/redux</div>
                    {isFetching
                        ? <Preloader class={style.preloader}/>
                        : isAuth
                            ? <div><button onClick={AuthLogout}>LogOut</button> <p className={style.login}>{login}</p></div>
                            : <NavLink className={style.NavLogin} to='/login'>Login</NavLink>}
                </div>
            </div>
        </header>
    );
}

export default Header;