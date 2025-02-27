import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
function App() {
  return (
  <Router>
    <Switch>
      <Route>
        <Home path="/home"></Home>
      </Route>
    </Switch>
  </Router>
  )
}

export default App;
