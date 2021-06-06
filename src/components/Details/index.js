import { useState, useEffect } from "react";
import "../../assets/styles/App.css";
import { useParams, useHistory } from "react-router-dom";
import { LoadingContainer, MainWrapper, FindNearbyButton } from "./styles";
import NavBar from "./NavBar";
import Metar from "./Metar";
import Taf from "./Taf";
import AirportInfo from "./AirportInfo";

const Details = () => {
  let { ident } = useParams();
  const stationUrl = `https://avwx.rest/api/station/${ident}?&format=json`;
  const metarUrl = `https://avwx.rest/api/metar/${ident}?&format=json`;
  const tafUrl = `https://avwx.rest/api/taf/${ident}?&format=json`;
  const token = `${process.env.REACT_APP_TOKEN}`;

  const [stationData, setStationData] = useState({});
  const [metarData, setMetarData] = useState({});
  const [tafData, setTafData] = useState({});
  const [infoLoading, setInfoLoading] = useState(true);
  const [metarLoading, setMetarLoading] = useState(true);
  const [tafLoading, setTafLoading] = useState(true);

  let history = useHistory();

  const getStationData = async () => {
    try {
      await fetch(stationUrl, {
        headers: {
          Authorization: `TOKEN ${token}`,
        },
      })
        .then((res) => res.json())
        .then((json) => {
          const newStationData = {
            iata: json.iata,
            icao: json.icao,
            lat: json.latitude,
            lon: json.longitude,
            name: json.name,
            country: json.country,
            runways: json.runways,
            elev_ft: json.elevation_ft,
            elev_m: json.elevation_m,
          };
          setStationData(newStationData);
          setInfoLoading(false);
        });
    } catch (error) {
      console.error("Station fetch error: " + error);
    }
  };

  const getMetarData = async () => {
    try {
      await fetch(metarUrl, {
        headers: {
          Authorization: `TOKEN ${token}`,
        },
      })
        .then((res) => res.json())
        .then((json) => {
          const sincePublished = timeSincePublished(json);
          const newMetarData = {
            raw: json.raw,
            flight_rules: json.flight_rules,
            wind_direction: json.wind_direction.value,
            wind_speed: json.wind_speed.value,
            since: sincePublished,
          };
          setMetarData(newMetarData);
          setMetarLoading(false);
        });
    } catch (error) {
      console.error("METAR fetch error: " + error);
    }
  };

  const getTafData = async () => {
    try {
      await fetch(tafUrl, {
        headers: {
          Authorization: `TOKEN ${token}`,
        },
      })
        .then((res) => res.json())
        .then((json) => {
          const newTafData = {
            raw: json.raw,
          };
          setTafData(newTafData);
          setTafLoading(false);
        });
    } catch (error) {
      console.error("TAF fetch error: " + error);
    }
  };

  const getRunwaysList = () => {
    const listRwys = stationData.runways.map((rwy) => {
      return (
        <span className="text small left data-font runway">
          {rwy.ident1}/{rwy.ident2}
        </span>
      );
    });
    return (
      <>
        <p className="text left small">
          <span className="bold">Runways: </span>{" "}
          {" " + stationData.runways.length}
        </p>
        <p className="text left small">{listRwys}</p>
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

  //Aux function
  const timeSince = (date) => {
    let seconds = Math.floor((new Date() - date) / 1000);
    let interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  };

  const timeSincePublished = (data) => {
    const offset = new Date().getTimezoneOffset(); //Offset in minutes ex: 180min = +3hs
    const now = new Date();
    const toLocal = parseInt(offset / 60);
    const daypublished = parseInt(data.raw.slice(5, 7));
    let publishedHr = parseInt(data.raw.slice(7, 9)) - toLocal;
    if (publishedHr < 0) {
      publishedHr = publishedHr % 12;
    }
    const publishedMin = parseInt(data.raw.slice(9, 11));
    const published = new Date(
      now.getFullYear(),
      now.getMonth(),
      daypublished,
      publishedHr,
      publishedMin,
      0,
      0
    );

    const res = timeSince(published);

    //METAR reports "expires" after 1 hour
    if (res.includes("minutes")) {
      return `${res} ago`;
    } else {
      return "expired";
    }
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

  useEffect(() => getMetarData(), []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => getStationData(), []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => getTafData(), []); // eslint-disable-line react-hooks/exhaustive-deps

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
