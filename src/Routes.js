import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import MediaLogin from './pages/signup/mediaLogin'
import CreateMedia from './pages/createMedia/index'
import MediaPlanner from './pages/mediaPlanner/index'
import MediaOwner from './pages/mediaOwner/index'
import About from './pages/mediaOwner/about'
import Personas from './pages/mediaOwner/personas'
import PersonasAdd from './pages/mediaOwner/personasAdd'
import Inventory from './pages/mediaOwner/inventory'
import Admin from './pages/admin/index'
import AddPersona from './pages/addPersona/index'
import PersonaOverview from './pages/personaOverview/index'
import ResponsiveDrawer from './layouts/newMainLayout'

export default () => (
  <BrowserRouter>
    <Switch>
      {/* <Route path="/nav" exact component={ResponsiveDrawer} />
      <Route path="/admin" exact component={Admin} />
      <Route path="/add-persona" exact component={AddPersona} />
      <Route path="/persona-overview" exact component={PersonaOverview} />
      <Route path="/media-login" exact component={MediaLogin} />
      <Route path="/create-media" exact component={CreateMedia} />

      <Route path="media-owner/personas" exact component={CreateMedia} />
      <Route path="media-owner/personas/add" exact component={CreateMedia} />
      <Route path="media-owner/personas/edit/:id" exact component={CreateMedia} />
      
      
      
      <Route path="/media-planner" exact component={MediaPlanner} />
      {/* <Route path="/media-owner" exact component={MediaOwner} /> */}
      {/* <Route path="/" exact component={MediaLogin} /> */}
      <Route path="media-owner" exact component={About} />
      <Route path="/media-owner/about" exact component={About} />
      <Route path="/media-owner/personas" exact component={Personas} />
      <Route path="/media-owner/personas/add" exact component={PersonasAdd} />
      <Route path="/media-owner/inventory" exact component={Inventory} />
    </Switch>
  </BrowserRouter>
)
