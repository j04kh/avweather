import "../../assets/styles/App.css";
import { useParams, useHistory } from "react-router-dom";
import { LoadingContainer, MainWrapper, FindNearbyButton } from "./styles";
import NavBar from "./NavBar";
import Metar from "./Metar";
import Taf from "./Taf";
import AirportInfo from "./AirportInfo";
import useFetch from "../../hooks/useFetch";

const Details = () => {
  let history = useHistory();
  let { ident } = useParams();
  const {
    stationData,
    metarData,
    tafData,
    infoLoading,
    metarLoading,
    tafLoading,
  } = useFetch(ident);

  const getRunwaysList = () => {
    const listRwys = stationData.runways.map((rwy) => {
      return (
        <span className="text small data-font runway">
          {rwy.ident1}/{rwy.ident2}
        </span>
      );
    });
    return (
      <>
        <p className="text small">
          <span className="bold">Runways: </span>{" "}
          {" " + stationData.runways.length}
        </p>
        <p className="text small">{listRwys}</p>
      </>
    );
  };

  const formatCoordLat = (coord) => {
    let res = coord;
    res = Math.floor(res * 100) / 100;
    if (res < 0) {
      return `S ${Math.abs(res.toFixed(2))}`;
    } else return `N ${Math.abs(res.toFixed(2))}`;
  };

  const formatCoordLong = (coord) => {
    let res = coord;
    res = Math.floor(res * 100) / 100;
    if (res < 0) {
      return `W ${Math.abs(res.toFixed(2))}`;
    } else return `E ${Math.abs(res.toFixed(2))}`;
  };

  const roundCoord = (coord) => {
    let res = coord;
    res = Math.floor(res * 100) / 100;
    return res.toFixed(2);
  };

  const findNearbyAirports = () => {
    const coords =
      roundCoord(stationData.lat) + "," + roundCoord(stationData.lon);
    history.push(`/nearby/${coords}/${stationData.icao}`);
  };

  const seeAirportOnMap = () => {
    const coords =
      roundCoord(stationData.lat) + "," + roundCoord(stationData.lon);
    history.push(`/location/${coords}/${stationData.icao}`);
  };

  const windInfo = () => {
    const direction =
      metarData.wind_direction === null
        ? "variable"
        : `${metarData.wind_direction}º`;
    const speed =
      metarData.wind_speed === 0 ? "Wind calm" : `${metarData.wind_speed} kts `;

    if (speed === "Wind calm") {
      return speed;
    } else {
      return direction + " " + speed;
    }
  };

  const showFlightConditions = () => {
    if (metarData.flight_rules.includes("VFR")) {
      return "VMC";
    } else {
      return "IMC";
    }
  };

  if (metarLoading || tafLoading || infoLoading) {
    return (
      <LoadingContainer>
        <h1>Loading...</h1>
      </LoadingContainer>
    );
  } else {
    return (
      <div className="main">
        <NavBar
          iata={stationData.iata}
          icao={stationData.icao}
          seeOnMap={seeAirportOnMap}
        />

        <MainWrapper>
          <div>
            <p className="text">{stationData.name}</p>
            <p className="text">{stationData.country}</p>
          </div>

          <Metar
            windInfo={windInfo()}
            conditions={showFlightConditions()}
            raw={metarData.raw}
            timeAgo={metarData.since}
          />

          <Taf raw={tafData.raw} />

          <AirportInfo
            lat={formatCoordLat(stationData.lat)}
            lon={formatCoordLong(stationData.lon)}
            elevFt={stationData.elev_ft}
            elevM={stationData.elev_m}
            getRunwaysList={getRunwaysList}
          />

          <FindNearbyButton onClick={(e) => findNearbyAirports(e)}>
            <p>FIND NEARBY</p>
          </FindNearbyButton>
        </MainWrapper>
      </div>
    );
  }
};

export default Details;
