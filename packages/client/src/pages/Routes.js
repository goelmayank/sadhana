import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const SadhanaForm = lazy(() => import('./Sadhana'));
const Wall = lazy(() => import('./Wall'));
 
export const Routes = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Wall}/>
        <Route exact path="/sadhanaform" component={SadhanaForm}/>
      </Switch>
    </Suspense>
  </Router>
);