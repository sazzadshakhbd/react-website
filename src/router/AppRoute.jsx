import React, { Component, Fragment } from 'react';
import {Route, Switch} from 'react-router-dom';
import Courses from '../pages/CoursePage';
import HomePage from '../pages/HomePage';
import ServicePage from '../pages/ServicePage';
import PortfolioPage from '../pages/PortfolioPage';
import ContactPage from '../pages/ContactPage';
import AboutPage from '../pages/AboutPage';
import RefundPage from '../pages/RefundPage';
import TermsPage from '../pages/TermsPage';
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage';
import ProjectDetailsPage from '../pages/ProjectDetailsPage';
import CourseDetailsPage from '../pages/CourseDetailsPage';

class AppRoute extends Component {
  render() {
    return (
        <Fragment>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/services" component={ServicePage}></Route>
            <Route exact path="/courses" component={Courses}></Route>
            <Route exact path="/portfolio" component={PortfolioPage}></Route>
            <Route exact path="/contact" component={ContactPage}></Route>
            <Route exact path="/about" component={AboutPage}></Route>
            <Route exact path="/refund" component={RefundPage}></Route>
            <Route exact path="/terms-and-condition" component={TermsPage}></Route>
            <Route exact path="/privacy-policy" component={PrivacyPolicyPage}></Route>
            <Route exact path="/project-details" component={ProjectDetailsPage}></Route>
            <Route exact path="/course-details" component={CourseDetailsPage}></Route>
          </Switch>
        </Fragment> 
    );
  }
}

export default AppRoute;