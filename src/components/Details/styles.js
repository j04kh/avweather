import styled from "styled-components";

export const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #232831;
  font-size: 0.85rem;
  display: grid;
  place-items: center;
`;

export const CustomNavBar = styled.nav`
  background-color: #252e41;
  width: 100%;
  height: 50px;
  border-radius: 0 0 8px 8px;
  display: flex;
  justify-content: space-between;
`;

export const NavButton = styled.button`
  align-self: center;
  color: #eeeeee;
  margin-left: ${(props) => (props.left ? "10px" : "")};
  margin-right: ${(props) => (props.right ? "10px" : "")};
`;

export const MainWrapper = styled.div`
  background-color: #232831;
  min-height: 100vh;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 500px) {
    width: 500px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
`;

/* Reutilizable container used for metar, taf and airport info */
export const Container = styled.div`
  background-color: #252e41;
  height: auto;
  max-height: 140px;
  width: 95%;
  margin-top: 5%;
  border-radius: 8px 8px 8px 8px;
  align-self: center;
  overflow-y: scroll;
  /* small devices */
  @media (max-height: 600px) {
    height: auto;
    max-height: 110px;
    font-size: 0.85rem;
    p {
      font-size: 0.75rem;
    }
  }
`;

export const MetarTopRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
  margin-left: 10px;
  height: 35px;
  align-items: center;
  margin-top: 5px;
`;

export const WindAndConditionsRow = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  @media (max-height: 600px) {
    font-size: 0.85rem;
  }
`;

export const ConditionsFlag = styled.p`
  padding: 1.5px;
  font-weight: 700;
  font-size: 0.85rem;
  color: #eeeeee;
  border-radius: 5px 5px 5px 5px;
  text-align: center;
  background-color: ${(props) =>
    props.conditions === "IMC" ? "#e49400" : "#02c802"};
  @media (max-height: 600px) {
    font-size: 0.75rem;
  }
`;

export const RawInfo = styled.p`
  font-family: "RobotoMono", sans-serif;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 12px;
  margin-top: 0;
`;

export const TimeAgoContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: flex-end;
  top: auto;
  margin-bottom: 10px;
`;

export const TimeAgo = styled.p`
  font-size: 0.8rem;
  text-align: end;
  margin-bottom: 0px;
  margin-right: 10px;
  margin-top: 0;
  height: 100%;
  color: ${(props) => (props.timeAgo.includes("minutes") ? "#02c802" : "red")};
  @media (max-height: 600px) {
    font-size: 0.75rem;
    margin-top: 5px;
  }
`;

export const FindNearbyButton = styled.button`
  color: #c3c7d0;
  position: absolute;
  bottom: 2%;
  align-self: center;
  background-color: #252e41;
  border-radius: 25px 25px 25px 25px;
  font-size: 0.85rem;
  font-weight: 700;
  width: 140px;
  @media (min-width: 500px) {
    bottom: 10%;
  }
`;
