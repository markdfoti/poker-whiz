import React from "react";
import '../App.css';
import Button from "./Button";
import Ranges from "./Web Pages/Ranges";
import Equity from "./Web Pages/Equity";
import Outs from "./Web Pages/Outs";
import Home from "./Web Pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [conditionally, setConditional] = React.useState("Testing");

  function setStateFunction(event) {
    setConditional(event.target.value);
  }

  function displayPages(variable) {
    if (variable === "Ranges") {
      return <Ranges />;
    } else if (variable === "Outs") {
      return <Outs />;
    } else if (variable === "Equity") {
      return <Equity />;
    }
  } 


  return (
    <div className="App">

      <Router>
        <div>



          <div className="container">
          <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <p>Poker Whiz</p>
          <nav>
            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li>
                <Link to="/ranges" className="nav-link">Opening Ranges Charts</Link>
              </li>
              <li>
                <Link to="/outs" className="nav-link">Counting Outs Practice</Link>
              </li>
              <li>
                <Link to="/equityodds" className="nav-link">Equity vs. Pot Odds Scenarios</Link>
              </li>
            </ul>
          </nav>

          </header>
          </div>




          <Switch>
            <Route path="/ranges">
              <Ranges />
            </Route>
            <Route path="/outs">
              <Outs />
            </Route>
            <Route path="/equityodds">
              <Equity />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

        </div>
      </Router>

      </div>

  );
}

export default App;
