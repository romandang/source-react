import React, { useEffect, useState } from 'react';
import { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ErrorPage from 'pages/Error';
import "common/index.scss";
import { https } from 'api/https';
import { config } from 'common/config';
import { endpoints } from 'common/endpoints';


const page = React.lazy(() => import("pages/index.jsx"));

const App = () => {
  const [currentData, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await https.GetAllWithParams(
          config.SUBMIT_API + endpoints.GetAllWeather, 
          { 
            drilldowns: "Nation", 
            measures: "Population" 
          }
        );
        const { data } = response;
        setData(data);
      } catch(error) {
        console.log(error);
      }
      
    }
    fetchData();

  }, []);
    
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
