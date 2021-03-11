import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from './Sections/Button';
import Dropdown from './Sections/Dropdown';
import LoggedIn from "./NavItems/LoggedIn";
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu } from './Navbar.elements';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import NotLogin from "./NavItems/NotLogin";
import LoginPage from "../LoginPage/LoginPage";

const Navbar = () => {
    const user = useSelector(state => state.user);
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <>
            <IconContext.Provider value={{ color: '#5f0080' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to='/'>
                            Thanks For Traveling
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            {user.userData && !user.userData.isAuth ? <NotLogin /> : <LoggedIn />}
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;