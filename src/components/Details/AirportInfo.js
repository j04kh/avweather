import "../../assets/styles/App.css";
import { Container } from "./styles";

const AirportInfo = (props) => {
  return (
    <Container>
      <p style={{ fontWeight: 600, marginLeft: 10, marginBottom: 5 }}>
        Airport Info
      </p>
      <div className="flex col">
        <p className="text small">
          <span style={{ fontWeight: 700 }}>Coordinates: </span>
          {props.lat} {props.lon}
        </p>
        <p className="text small">
          <span style={{ fontWeight: 700 }}>Elevation: </span> {props.elevFt}ft
          / {props.elevM}m{" "}
        </p>
        {props.getRunwaysList()}
      </div>
    </Container>
  );
};

export default AirportInfo;
