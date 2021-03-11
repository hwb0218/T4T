import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container} from "../../../styles/GlobalStyles";

export const Nav = styled.nav`
  border-bottom: solid 1px #e8e8e8;
  box-shadow: 0 0 30px #f3f1f1;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
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
  font-weight: 700;
  
  ${({ theme }) => theme.tablet`
    font-size: 1rem;
  `}
`;

export const MobileIcon = styled.div`
  display: none;
  
  ${({ theme }) => theme.tablet`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 80%);
    font-size: 1.8rem;
    cursor: pointer;
  `}
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  
  ${({ theme }) => theme.tablet`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    right: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.25s ease-in-out;
    box-shadow: 0 0 30px #f3f1f1;
  `}
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  
  &:hover {
    border: 2px solid #4b59f7;
   
  }
  
  ${({ theme }) => theme.tablet`
    width: 100%;
    
    &:hover {
      border: none;
    }
  `}
`

export const NavLinks = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  height: 100%;
  
  ${({ theme }) => theme.tablet`
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