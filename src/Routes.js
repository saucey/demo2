import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import MediaLogin from './pages/signup/mediaLogin'
import CreateMedia from './pages/createMedia/index'
import MediaPlanner from './pages/mediaPlanner/index'
import MediaOwner from './pages/mediaOwner/index'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/media-login" exact component={MediaLogin} />
      <Route path="/create-media" exact component={CreateMedia} />
      <Route path="/media-planner" exact component={MediaPlanner} />
      <Route path="/media-owner" exact component={MediaOwner} />
      <Route path="/" exact component={MediaLogin} />
    </Switch>
  </BrowserRouter>
)
