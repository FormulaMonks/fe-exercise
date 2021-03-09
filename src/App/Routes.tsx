import { Switch, Route } from "react-router-dom";
import { Home } from "src/views/Home";

export function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}
