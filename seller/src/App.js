import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home'

export class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
          </Switch>
        </Router >
      </>
    )
  }
}

export default App