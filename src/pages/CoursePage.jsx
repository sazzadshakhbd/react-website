import React, { Component, Fragment } from 'react';
import AllCourses from '../components/AllCourses/AllCourses';
import TopBannerAll from '../components/TopBannerAll/TopBannerAll';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Footer from '../components/Footer/Footer';

class CoursePage extends Component {
  componentDidMount() {
    window.scroll(0,0)
  }
  render() {
    return (
      <div>
        <Fragment>
          <TopNavigation PageBarTitle="Course"></TopNavigation>
          <TopBannerAll pageTitle='My Courses'></TopBannerAll>
          <AllCourses></AllCourses>
          <Footer></Footer>
        </Fragment>
      </div>
    );
  }
}

export default CoursePage;