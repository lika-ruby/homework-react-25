import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const MovieWrap = styled.div`
  padding: 48px 0;
  background: rgb(38, 38, 38);
`;

export const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 32px;
  color: yellow;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  gap: 80px;
  margin-bottom: 48px;
  align-items: center;
`;

export const Poster = styled.img`
  width: 350px;
`;

export const Info = styled.div`
`;

export const Title = styled.h2`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 16px;
  color: orange;
  text-align: left;
`;

export const Text = styled.p`
  margin-bottom: 16px;
  line-height: 1.5;
  text-align: left;
  color: #fff;
`;

export const Subtitle = styled.h3`
  font-size: 24px;
  margin: 24px 0 12px;
  text-align: left;
  color: yellow;
`;

export const AddTitle = styled.h3`
  font-size: 36px;
  margin-bottom: 16px;
  color: orange;
`;

export const AddList = styled.ul`
  display: flex;
  gap: 24px;
`;

export const AddLink = styled(NavLink)`
  font-size: 24px;
  color: #fff;
  font-weight: 500;
  text-decoration: none;

  &:focus { 
   color: yellow;
  }
`;
