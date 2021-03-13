import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import ShowInMaps from './components/ShowInMaps';
import Details from './components/Details';
import Nearby from './components/Nearby';
import './assets/styles/App.scss';

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
