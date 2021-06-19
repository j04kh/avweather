import { useState, useEffect } from "react";

const useFetch = (ident) => {
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

  useEffect(() => {
    getStationData();
    getMetarData();
    getTafData();
  });

  return {
    stationData,
    metarData,
    tafData,
    infoLoading,
    metarLoading,
    tafLoading,
  };
};

export default useFetch;
