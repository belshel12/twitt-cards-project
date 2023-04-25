import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #5736a3;
  font-weight: 700;
  font-size: 20px;
  &.active {
    color: tomato;
    scale: 1.1;
  }
`;
