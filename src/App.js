import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/index";
import ShowInMaps from "./components/Maps/index";
import Details from "./components/Details/index";
import Nearby from "./components/Nearby/index";
import "./assets/styles/App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/avweather" component={Home} />
        <Route path="/station/:ident" component={Details} />
        <Route path="/nearby/:coords/:ident" component={Nearby} />
        <Route path="/location/:coords/:ident" component={ShowInMaps} />
      </Switch>
    </Router>
  );
}

export default App;
