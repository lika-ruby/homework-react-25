import styled from "styled-components";

export const CastWrap = styled.div`
  padding: 32px 0;
    background:rgb(38, 38, 38);

`;

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
`;

export const CastItem = styled.li`
  width: 270px;
  text-align: center;
    background: #343434;
`;

export const CastImg = styled.img`
  width: 100%;
  height: 370px;
  object-fit: cover;
`;

export const CastDown = styled.div`
  padding: 20px;
`;


export const CastName = styled.p`
  font-weight: 600;
  color:rgb(236, 153, 0);
  font-size: 20px;
  margin-bottom: 8px;
`;

export const CastRole = styled.p`
  color: #fff;
  font-size: 14px;
`;

export const Text = styled.p`
  color: #fff;
  text-align: center;
  font-size: 20px;
  margin-top: 24px;
  line-height: 1.5;
`;

