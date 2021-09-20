import { React } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AddVideo from "./views/_addVideo";
import Videos from "./views/_videos";
import Header from "./views/_header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Videos />
          </Route>
          <Route path="/addvideo" exact>
            {" "}
            <AddVideo />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
