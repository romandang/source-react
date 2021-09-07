import React from 'react';
import { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ErrorPage from 'pages/Error';
import "common/index.scss";


const page = React.lazy(() => import("pages/index.jsx"));

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Switch>
            <Route exact from="/" to="" component={page} />
            <Route component={ErrorPage} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
