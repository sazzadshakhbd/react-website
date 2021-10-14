import React, { Component, Fragment } from 'react';
import TopBanner from "../components/TopBanner/TopBanner";
import Services from "../components/Services/Services";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Analysis from "../components/Analysis/Analysis";
import Summary from "../components/Summary/Summary";
import RecentProject from "../components/RecentProject/RecentProject";
import Courses from "../components/Courses/Courses";
import Video from "../components/Video/Video";
import Review from "../components/Review/Review";
import Footer from "../components/Footer/Footer";

class HomePage extends Component {
  componentDidMount() {
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
        <div>
          <TopNavigation PageBarTitle="Home"></TopNavigation>
          <TopBanner></TopBanner>
          <Services></Services>
          <Analysis></Analysis>
          <Summary></Summary>
          <RecentProject></RecentProject>
          <Courses></Courses>
          <Video></Video>
          <Review></Review>
          <Footer></Footer>
        </div>
      </Fragment>
    );
  }
}

export default HomePage;