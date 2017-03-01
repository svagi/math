import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import App from './App'
import PrimeNumbers from './pages/PrimeNumbers'
import PrimeFactors from './pages/PrimeFactors'
import Euclidean from './pages/Euclidean'
import Lcm from './pages/Lcm'
import Congruence from './pages/Congruence'

const app = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='prime-generator' component={PrimeNumbers} />
      <Route path='prime-factors' component={PrimeFactors} />
      <Route path='extended-euclidean' component={Euclidean} />
      <Route path='lcm' component={Lcm} />
      <Route path='congruence' component={Congruence} />
      <Redirect path='*' to='/' />
    </Route>
  </Router>
)

render(app, document.getElementById('root'))
