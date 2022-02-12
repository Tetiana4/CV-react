import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;

  justify-content: space-around;
  background-color: black;
  color: white;
  margin-top: 20px;
`;

export const NavLinkStyles = styled(NavLink)`
  color: white;
  text-decoration: none;
  padding: 10px;
  &.active {
    color: black;
    background-color: white;
  }
`;
