import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MapIcon from "@material-ui/icons/Map";
import { CustomNavBar, NavButton } from "./styles";
import { useHistory } from "react-router-dom";

const NavBar = (props) => {
  let history = useHistory();

  //When NavBar is used on Nearby or Maps nearby prop is passed
  const isForNearby = props.nearby;

  return (
    <CustomNavBar>
      <NavButton left onClick={(e) => history.goBack()}>
        <ArrowBackIcon className="material-icon" />
      </NavButton>
      <h2 className={`material-icon ${isForNearby && "medium"}`}>
        {props.iata ? props.iata + "/" + props.icao : props.icao}
      </h2>
      <NavButton onClick={(e) => props.seeOnMap()}>
        <MapIcon
          className={`material-icon right ${isForNearby && "invisible"}`}
        />
      </NavButton>
    </CustomNavBar>
  );
};

export default NavBar;
