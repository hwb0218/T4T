import React from 'react';
import {NavItem, NavLinks} from "../Navbar.elements";

const NotLogin = () => {
    const navItems = [
        { '회원가입' : '/register' },
        { '로그인': '/login'},
    ];

    return (
        <>
            {navItems.map(navItem => (
                Object.entries(navItem).map(([key, value]) => (
                    <NavItem key={key}>
                        <NavLinks to={value}>{key}</NavLinks>
                    </NavItem>
                ))
            ))}
        </>
    );
};

export default NotLogin;