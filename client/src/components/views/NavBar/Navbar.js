import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const NavBar = styled.div`
    background: greenyellow; 
    padding: 0 20px;
    border-bottom: solid 1px #e8e8e8;
    box-shadow: 0 0 30px #f3f1f1;
    overflow: auto;
`;

const Navbar = () => {
    return (
        <NavBar>
            <div className = 'menu__logo'>
                <Link to='/'>T4T</Link>
            </div>
        </NavBar>
    );
};

export default Navbar;