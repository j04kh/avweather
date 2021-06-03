import "../../assets/styles/App.css";
import { useParams } from "react-router-dom";
import NavBar from "../Details/NavBar";
import { MapContainer } from "./styles";

const ShowInMaps = (props) => {
  let { coords } = useParams();

  const mapsKey = `${process.env.REACT_APP_MAPS_KEY}`;
  const mapUrl = `https://www.google.com/maps/embed/v1/view?
										center=${coords}&
										zoom=13&
										key=${mapsKey}&
										maptype=satellite`;

  return (
    <div className="main">
      <NavBar nearby icao="Location" />
      <MapContainer>
        <iframe className="map" title="maps" src={mapUrl} />
      </MapContainer>
    </div>
  );
};

export default ShowInMaps;
