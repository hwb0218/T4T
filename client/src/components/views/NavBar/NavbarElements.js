import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../../../styles/GlobalStyles";

export const Nav = styled.nav`
  background-color: #fff;
  box-shadow: 0 1px 5px -1px #f3f1f1;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #5f0080;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.1rem;
  font-weight: bold;

  &::selection {
    outline: none;
  }

  ${({ theme }) => theme.tablet`
    font-size: 1.9rem;
  `}

  ${({ theme }) => theme.mobile`
    font-size: 1.2rem;
  `}
`;

export const MobileIcon = styled.div`
  display: none;
  ${({ theme }) => theme.mobile`
    color: #5f0080;
    display: block;
    position: absolute;
    top: 5px;
    right: 0;
    transform: translate(-100%, 80%);
    font-size: 1.5rem;
    cursor: pointer;
    
    &:hover {
      opacity: 0.6;
    }
  `}
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;

  ${({ theme }) => theme.mobile`
    background-color: #fff;
    display: block;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 65px;
    left: ${({ click }) => (click ? "0px" : "-100%")};
    opacity: 1;
    transition: all 0.3s ease;
    box-shadow: 0 0 30px #f3f1f1;
  `}
`;

export const NavItem = styled.li`
  &:last-child {
    padding: 8px 16px;
  }
  ${({ theme }) => theme.mobile`
    width: 100%;
    height: 80px;
  `}
`;

export const NavLinks = styled(Link)`
  color: #5e5e5e;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  height: 100%;
  font-size: 1.1rem;

  &::selection {
    outline: none;
  }

  &:hover {
    color: #5f0080;
  }

  ${({ path }) =>
    path &&
    css`
      color: #5f0080;
    `}

  ${({ theme }) => theme.mobile`
    color: #5f0080;
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
  `}
`;

export const Button = styled.button`
  border-radius: 4px;
  background: #5f0080;
  white-space: nowrap;
  padding: 10px 20px;
  color: #cccccc;
  font-size: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    transition: 0.15s all;
    opacity: 0.5;
  }
  ${({ theme }) => theme.mobile`
    width: 100%;
    font-size: 20px;
  `}
`;

export const NavItemBtn = styled.li`
  ${({ theme }) => theme.mobile`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  `}
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  padding: 8px 16px;
`;
