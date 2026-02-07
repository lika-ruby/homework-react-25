import styled from "styled-components";

export const ReviewsWrap = styled.div`
  padding: 32px 0;
  background: rgb(38, 38, 38);
`;

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const ReviewItem = styled.li`
  background: #343434;
  padding: 20px;
  border-radius: 8px;
`;

export const ReviewAuthor = styled.p`
  font-weight: 600;
  color: yellow;
  font-size: 18px;
  margin-bottom: 12px;
`;

export const ReviewContent = styled.p`
  color: #fff;
  text-align: left;
  font-size: 14px;
  line-height: 1.5;
`;

export const Text = styled.p`
  color: #fff;
  text-align: center;
  font-size: 20px;
  margin-top: 24px;
  line-height: 1.5;
`;

