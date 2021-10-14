import React, { Component, Fragment } from 'react';
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";
import TopBannerAll from "../components/TopBannerAll/TopBannerAll";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Footer from "../components/Footer/Footer";

class ProjectDetailsPage extends Component {
  componentDidMount() {
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
        <TopNavigation PageBarTitle="Project Details"></TopNavigation>
        <TopBannerAll pageTitle="Project Details"></TopBannerAll>
        <ProjectDetails></ProjectDetails>
        <Footer></Footer>
      </Fragment>
    );
  }
}

export default ProjectDetailsPage;