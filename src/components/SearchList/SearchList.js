import styled from "styled-components";

export const SearchWrap = styled.div`
  padding: 48px 0;
  background: rgb(38, 38, 38);
  min-height: 100vh
`;

export const SearchTitle = styled.h2`
  color: #fff;
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 48px;
  text-align: center;
`;

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 32px;

  input {
    padding: 12px 16px;
    width: 300px;
    border: none;
    outline: none;
    font-size: 20px;
    
  }

  button {
    padding: 12px 24px;
    background-color: rgb(236, 153, 0);
    color: #fff;
    font-weight: 400;
    border: none;
    cursor: pointer;
  font-size: 20px;
    transition: 0.3s;

    &:hover {
      background-color: rgb(200, 120, 0);
    }
  }
`;

export const SearchListS = styled.ul`
  display: flex;
  gap: 36px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
