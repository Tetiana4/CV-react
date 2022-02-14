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
  padding: 10px 40px;
  width: 250px;
  &.active {
    color: black;
    background-color: white;
    border-top: 1px solid black;
    border-radius: 10px 100px /120px;
  }
`;

export const ContainerMobile = styled.div`
  background-color: black;
  color: white;
  margin-top: 20px;
`;

export const NavLinkStylesMob = styled(NavLink)`
  color: white;
  text-decoration: none;
  display: block;
  text-align: center;
  padding: 20px 0;
  &.active {
    color: black;
    background-color: white;
    border-top: 1px solid black;
    border-radius: 10px 100px /120px;
  }
`;
