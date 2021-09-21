import React, { Component, Fragment } from 'react';
import {Route, Switch} from 'react-router-dom';
import Courses from '../components/Courses/Courses';
import HomePage from '../pages/HomePage';
import ServicePage from '../pages/ServicePage';
import PortfolioPage from '../pages/PortfolioPage';
import ContactPage from '../pages/ContactPage';
import AboutPage from '../pages/AboutPage';

class AppRoute extends Component {
  render() {
    return (
      <div>
        <Fragment>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/services" component={ServicePage}></Route>
            <Route exact path="/courses" component={Courses}></Route>
            <Route exact path="/portfolio" component={PortfolioPage}></Route>
            <Route exact path="/contact" component={ContactPage}></Route>
            <Route exact path="/about" component={AboutPage}></Route>
          </Switch>
        </Fragment>
      </div>
    );
  }
}

export default AppRoute;