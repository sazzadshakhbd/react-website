import React, { Component, Fragment } from 'react';
import AllCourses from '../components/AllCourses/AllCourses';
import TopBannerAll from '../components/TopBannerAll/TopBannerAll';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Footer from '../components/Footer/Footer';

class CoursePage extends Component {
  render() {
    return (
      <div>
        <Fragment>
          <TopNavigation></TopNavigation>
          <TopBannerAll pageTitle='My Courses'></TopBannerAll>
          <AllCourses></AllCourses>
          <Footer></Footer>
        </Fragment>
      </div>
    );
  }
}

export default CoursePage;