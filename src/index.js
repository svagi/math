import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import PrimeNumbers from './pages/PrimeNumbers'
import PrimeFactors from './pages/PrimeFactors'
import Euclidean from './pages/Euclidean'
import Lcm from './pages/Lcm'
import Congruence from './pages/Congruence'

const app = (
  <BrowserRouter basename="/math">
    <App>
      <Routes>
        <Route path="/prime-generator" element={<PrimeNumbers />} />
        <Route path="/prime-factors" element={<PrimeFactors />} />
        <Route path="/extended-euclidean" element={<Euclidean />} />
        <Route path="/lcm" element={<Lcm />} />
        <Route path="/congruence" element={<Congruence />} />
      </Routes>
    </App>
  </BrowserRouter>
)

const root = createRoot(document.getElementById('root'))
root.render(app)
