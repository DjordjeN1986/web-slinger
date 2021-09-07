import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Landing from "./components/Landing/Landing";
import Test from "./components/Test";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/test" component={Test} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
