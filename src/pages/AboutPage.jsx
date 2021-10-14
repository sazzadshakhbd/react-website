import React, { Component, Fragment } from 'react';
import AboutUsContent from "../components/AboutUsContent/AboutUsContent";
import TopBannerAll from "../components/TopBannerAll/TopBannerAll";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Footer from "../components/Footer/Footer";

class AboutPage extends Component {
  componentDidMount() {
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
        <div>
          <TopNavigation PageBarTitle="About"></TopNavigation>
          <TopBannerAll pageTitle="About Me"></TopBannerAll>
          <AboutUsContent></AboutUsContent>
          <Footer></Footer>
        </div>
      </Fragment>
    );
  }
}

export default AboutPage;