import { useState } from "react";
import "../../assets/styles/App.css";
import Logo from "../../assets/images/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";
import { Container, SearchForm, SearchButton, ErrorMsg } from "./styles";

const Home = () => {
  let history = useHistory();

  const [search, setSearch] = useState("");
  const [resStatus, setResStatus] = useState("OK");

  const URL = `https://avwx.rest/api/station/${search}?&format=json`;
  const token = `${process.env.REACT_APP_TOKEN}`;

  const searchStation = (e) => {
    e.preventDefault();
    fetch(URL, {
      headers: {
        Authorization: `TOKEN ${token}`,
      },
    }).then((res) => {
      setSearch("");
      res.ok ? history.push(`/station/${search}`) : errorHandler();
    });
  };

  //Shows error message if airport not found
  const errorHandler = () => {
    setResStatus("ERROR");
    setTimeout(() => {
      setResStatus("OK");
    }, 2200);
  };

  return (
    <Container>
      <img src={Logo} alt="logo" />
      <h1>AvWeather</h1>
      <SearchForm
        onChange={(e) => setSearch(e.target.value)}
        onSubmit={(e) => searchStation(e)}
      >
        <input type="text" placeholder="ICAO..." value={search} />
        <SearchButton className="material-icon" type="submit">
          <SearchIcon className="material-icon primary" />
        </SearchButton>
      </SearchForm>
      <ErrorMsg error={resStatus}>Error: Airport not found</ErrorMsg>
    </Container>
  );
};

export default Home;
