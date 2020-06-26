import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Menu from './components/menu'
import Home from './views/Home'

const Routes = () => {
  return(
    <div>
      <Menu />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Routes
