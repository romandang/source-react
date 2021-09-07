import { Switch, useRouteMatch } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import Homepage from "./Homepage";

const Page = () => {
  const match = useRouteMatch();

  return (
    <BrowserRouter>
      <Switch>
        <Route path={match.url} component={ Homepage } />
      </Switch>
    </BrowserRouter>
  )
}

export default Page;