import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../../../styles/GlobalStyles";

export const Nav = styled.nav`
  background-color: #fff;
  border-bottom: solid 1px #e8e8e8;
  box-shadow: 0 0 30px #f3f1f1;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #5f0080;
  display: flex;
  justify-self: flex-start;
  align-items: center;
  font-size: 1.7rem;
  font-weight: bold;

  &::selection {
    outline: none;
  }

  ${({ theme }) => theme.mobile`
    font-size: 1rem;
    color: #5f0080;
  `}
`;

export const MobileIcon = styled.div`
  display: none;

  ${({ theme }) => theme.mobile`
    color: #5f0080;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 80%);
    font-size: 1.8rem;
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
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? "0px" : "-100%")};
    opacity: 1;
    transition: all 0.3s ease;
    box-shadow: 0 0 30px #f3f1f1;
  `}
`;

export const NavItem = styled.li`
  height: 80px;

  &:hover {
    opacity: 0.5;
  }

  ${({ theme }) => theme.mobile`
    width: 100%;
  `}
`;

export const NavLinks = styled(Link)`
  color: #5f0080;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  height: 100%;

  &::selection {
    outline: none;
  }

  ${({ theme }) => theme.mobile`
    color: #5f0080;
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    
    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease; 
    }
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
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
