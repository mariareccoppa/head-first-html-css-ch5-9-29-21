import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyPod from "./mypod/index.js";
export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MyPod />
        </Route>
        <Route exact path="/something/foo.html">
          You reached the foo page!
        </Route>
        <Route path="/">FILE NOT FOUND!</Route>
      </Switch>
    </Router>
  );
}
