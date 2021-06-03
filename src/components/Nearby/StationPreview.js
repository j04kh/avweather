import "../../assets/styles/App.css";
import { Container, TopInfoContainer } from "./styles";

const StationPreview = (props) => {
  const roundDistance = (d) => {
    let res = d;
    res = Math.floor(res * 100) / 100;
    return res.toFixed(0);
  };

  return (
    <Container>
      <TopInfoContainer>
        <p className="text">{props.name + " " + props.country}</p>
        <p className="text bold">{props.icao}</p>
      </TopInfoContainer>
      <div className="">
        <p className="text">
          {roundDistance(props.dist) + " Nm from " + props.from}
        </p>
      </div>
    </Container>
  );
};

export default StationPreview;
