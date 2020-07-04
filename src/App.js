import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import LandingPage from "./components/landingPage/page";
import IssuePage from "./components/issuePage/index";

function App() {
  const [darkTheme, setDarkTheme] = React.useState(true);
  return (
    <div className={darkTheme ? "dark-theme" : "light-theme"}>
      <nav>
        <button onClick={() => setDarkTheme((prevTheme) => !prevTheme)}>
          {darkTheme ? "Light" : "Dark"}
        </button>
      </nav>

      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/issuepage/:number" component={IssuePage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
