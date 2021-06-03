import styled from "styled-components";

export const Container = styled.div`
  background-color: #252e41;
  height: 100px;
  width: 95%;
  margin-top: 5%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 8px 8px 8px 8px;
  align-self: center;
  overflow-y: scroll;
  /* small devices */
  @media (max-height: 600px) {
    height: 80px;
    font-size: 0.85rem;
    p {
      font-size: 0.75rem;
    }
  }
`;

export const TopInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 10px;
  justify-content: space-between;
`;

export const ListContainer = styled.div`
  background-color: #232831;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;
