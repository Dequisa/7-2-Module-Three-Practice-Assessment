import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Home from './Home';
import Berries from "./Component/Berries";
import Pokemon from "./Component/Pokemon";
import Location from "./Component/Location"

const App = () => (
  <div>
    <nav>
      <Link to="/">Home</Link>
      {"  "}
      <Link to="/pokemon">Pokemon</Link>
      {"  "}
      <Link to="/location">Location</Link>
      {" "}
      <Link to="/berries">Berries</Link>
    </nav>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/pokemon" component={Pokemon} />
      <Route path="/location" component={Location} />
      <Route path="/berries" component={Berries} />
    </div>
  </div>
);

export default App;
