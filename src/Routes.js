import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import MonteMarmita from './pages/MonteMarmita'
import Cardapio from './pages/Cardapio'
import Planejamento from './pages/Planejamento'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/montemarmita" exact>
          <MonteMarmita />
        </Route>
        <Route path="/cardapio" exact>
          <Cardapio />
        </Route>
        <Route path="/planejamento" exact>
          <Planejamento />
        </Route>
       
      </Switch>
    </BrowserRouter>
  )
}
export default Routes