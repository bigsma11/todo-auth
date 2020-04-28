import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Layout from './hoc/layout/Layout.js'
import Home from './containers/Home/Home.js'
import Todos from './containers/Todos/Todos.js'

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/todos">
            <Todos />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
