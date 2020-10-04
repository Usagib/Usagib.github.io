import React from 'react';
import PropTypes from 'prop-types';
import { withCookies } from 'react-cookie';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import Me from './Me';
import Projects from './Projects';

const App = props => {
  const { cookies } = props;
  return (
    <Router>
      <div className="App">
        <Navigation cookies={cookies} />
        <Switch>
          <Route path="/">
            <Home />
            <Me />
            <Projects />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

App.propTypes = {
  cookies: PropTypes.shape({
    set: PropTypes.func.isRequired,
    get: PropTypes.func.isRequired,
  }).isRequired,
};

export default withCookies(App);
