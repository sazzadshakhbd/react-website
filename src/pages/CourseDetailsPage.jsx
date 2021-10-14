import React, { Component, Fragment } from 'react';
import CourseDetails from '../components/CourseDetails/CourseDetails';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Footer from '../components/Footer/Footer';

class CourseDetailsPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation PageBarTitle="CourseDetails"></TopNavigation>
        <CourseDetails></CourseDetails>
        <Footer></Footer>
      </Fragment>
    );
  }
}

export default CourseDetailsPage;