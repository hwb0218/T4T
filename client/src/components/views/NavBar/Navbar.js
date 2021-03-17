import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import LoggedIn from "./NavItems/LoggedIn";
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu } from './NavbarElements';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import NotLogin from "./NavItems/NotLogin";

const Navbar = () => {
    const user = useSelector(state => state.user);
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <IconContext.Provider value={{ color: '#5B5B7B' }}>
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