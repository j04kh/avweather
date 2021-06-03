import { useParams } from "react-router-dom";
import "../../assets/styles/App.css";
import List from "./List";
import NavBar from "../Details/NavBar";
import { ListContainer } from "./styles";

const Nearby = () => {
  let { coords } = useParams();
  let { ident } = useParams();

  return (
    <div className="main">
      <NavBar nearby icao="Nearby Airports" />
      <ListContainer>
        <div>
          <List coords={coords} ident={ident} />
        </div>
      </ListContainer>
    </div>
  );
};

export default Nearby;
