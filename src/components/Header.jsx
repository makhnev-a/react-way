import React from "react";
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src="../logo2.jpg" alt='logo'/>
        </header>
    );
};

export default Header;