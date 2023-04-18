import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderItems = styled.header`
  border-bottom: 1px solid rgb(117, 119, 119);
  margin-bottom: 15px;
`;

export const PageItem = styled.ul`
  display: flex;
  justify-content: center;
`;

export const StyledLink = styled(NavLink)`
  margin-right: 20px;
  font-size: 25px;
  border: 2px solid lightcoral;
  border-radius: 5px;
  padding: 5px;
  color: lightslategray;

  &.active {
    color: lightblue;
    background-color: lightcoral;
  }
`;
