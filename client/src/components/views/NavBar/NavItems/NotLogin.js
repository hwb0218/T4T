import React from 'react';
import { NavItem, NavLinks, NavItemBtn, NavBtnLink, Button } from "../NavbarElements";

const NotLogin = ({ button }) => {
    return (
        <>
            <NavItem>
                <NavLinks to='login'>로그인</NavLinks>
            </NavItem>
            <NavItemBtn>
                {button ? (
                    <NavBtnLink to='/register'>
                        <Button>회원가입</Button>
                    </NavBtnLink>
                ) : (
                    <NavBtnLink to='/register'>
                        <Button fontBig>회원가입</Button>
                    </NavBtnLink>
                )}
            </NavItemBtn>
        </>
    )
};

export default NotLogin;