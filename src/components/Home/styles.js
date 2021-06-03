import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
  background-color: #232831;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SearchForm = styled.form`
  background-color: #c3c7d0;
  height: 36px;
  width: 210px;
  border-radius: 20px 20px 20px 20px;
  display: flex;
`;

export const SearchButton = styled.button`
  align-self: center;
  color: #eeeeee;
`;

export const ErrorMsg = styled.p`
  color: red;
  font-size: 0.85rem;
  visibility: ${(props) => (props.error === "ERROR" ? "visible" : "hidden")};
`;
