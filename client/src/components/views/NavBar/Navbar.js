import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import RightMenu from "./Sections/RightMenu";

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 5;
  width: 100%;
  height: 68px;
  padding: 0 40px;
  border-bottom: solid 1px #e8e8e8;
  box-shadow: 0 0 30px #f3f1f1;
  background-color: white;
  white-space: nowrap;
`

const Input = styled.input`

`

const MenuLeft = styled.div`
  flex: none
`

const MenuRight = styled.div`
  flex: none
`

const Navbar = () => {
    return (
        <NavBar>
            <MenuLeft>
                <Link to='/'>Thanks For Traveling</Link>
                <Input></Input>
            </MenuLeft>
            <MenuRight>
                <RightMenu></RightMenu>
            </MenuRight>
        </NavBar>
    );
};

export default Navbar;