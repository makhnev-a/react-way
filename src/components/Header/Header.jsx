import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const  Header = (props) => {
    return (
        <header className={s.header}>
            <img src="../../logo2.jpg" alt='logo'/>
            <div className={s.loginBlock}>
                {props.isAuth ? 'free' : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;