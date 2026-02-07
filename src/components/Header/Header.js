import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderS = styled.header`
    padding: 32px 0;
    background: #343434;
`;

export const Nav = styled.nav`
`;

export const List = styled.ul`
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
`;

export const Item = styled.li`
`;

export const Link = styled(NavLink)`
    font-size: 20px;
    color: #fff;

    &.active {
   color: yellow;
   }
`;