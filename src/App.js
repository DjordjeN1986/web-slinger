import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Landing from "./Pages/Landing/Landing";
import Test from "./components/Test";
import ProjectPage from "./Pages/ProjectPage/ProjectPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/test" component={Test} />
          <Route exact path="/projects" component={ProjectPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
