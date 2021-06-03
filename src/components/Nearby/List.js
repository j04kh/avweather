import "../../assets/styles/App.css";
import StationPreview from "./StationPreview";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const List = (props) => {
  const url = `https://avwx.rest/api/station/near/${props.coords}?n=6&airport=true&format=json`;
  const token = `${process.env.REACT_APP_TOKEN}`;

  const [nearby, setNearby] = useState([]);

  const getNearby = () => {
    fetch(url, {
      headers: {
        Authorization: `TOKEN ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setNearby(data);
      })
      .catch((error) => console.log("Nearby list fetch error: " + error));
  };

  //Skip the airport itself
  const slicedNearby = nearby.slice(1);

  const listNearby = slicedNearby.map((a) => {
    return (
      <Link to={`/station/${a.station.icao}`} className="link">
        <StationPreview
          key={a.station.iata}
          icao={a.station.icao}
          name={a.station.name}
          dist={a.nautical_miles}
          country={a.station.country}
          from={props.ident}
        />
      </Link>
    );
  });

  useEffect(() => getNearby(), []); // eslint-disable-line react-hooks/exhaustive-deps

  return <>{listNearby}</>;
};

export default List;
