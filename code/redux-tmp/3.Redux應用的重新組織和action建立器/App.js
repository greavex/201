import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React from 'react'

import Menu from './components/Menu'

import Couter from './pages/Couter'

function App() {
  return (
    <Router>
      <>
        <div className="container">
          <Menu />

          <Switch>
            <Route exact path="/">
              <Couter />
            </Route>
          </Switch>
        </div>
      </>
    </Router>
  )
}

export default App
