import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from './App'
import PrimeNumbers from './pages/PrimeNumbers'
import PrimeFactors from './pages/PrimeFactors'
import Euclidean from './pages/Euclidean'
import Lcm from './pages/Lcm'
import Congruence from './pages/Congruence'

const app = (
  <BrowserRouter basename="/math">
    <App>
      <Switch>
        <Route path="/prime-generator" component={PrimeNumbers} />
        <Route path="/prime-factors" component={PrimeFactors} />
        <Route path="/extended-euclidean" component={Euclidean} />
        <Route path="/lcm" component={Lcm} />
        <Route path="/congruence" component={Congruence} />
      </Switch>
    </App>
  </BrowserRouter>
)

render(app, document.getElementById('root'))
