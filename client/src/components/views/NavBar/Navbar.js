import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import Button from './Sections/Button';
import Dropdown from './Sections/Dropdown';
import LoggedIn from "./NavItems/LoggedIn";
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu } from './NavbarElements';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import NotLogin from "./NavItems/NotLogin";

const Navbar = () => {
    const user = useSelector(state => state.user);
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    useEffect(() => {
        showButton();
    }, []);

    const handleClick = () => setClick(!click);

    const showButton = () => {
        if (window.innerWidth <= 768) {
            setButton(false);
        } else {
            setButton(true);
        }
    }
    window.addEventListener('resize', showButton);

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
                            {user.userData && !user.userData.isAuth ? <NotLogin button={button} /> : <LoggedIn />}
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;