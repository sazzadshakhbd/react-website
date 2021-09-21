import React, { Component, Fragment } from 'react';
import TopBannerAll from "../components/TopBannerAll/TopBannerAll";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Footer from "../components/Footer/Footer";
import PrivacyDescription from '../components/PrivacyDiscription/PrivacyDiscription';

class PrivacyPolicyPage extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <TopNavigation PageBarTitle="Privacy Policy"></TopNavigation>
          <TopBannerAll pageTitle="Privacy Policy"></TopBannerAll>
          <PrivacyDescription></PrivacyDescription>
          <Footer></Footer>
        </div>
      </Fragment>
    );
  }
}

export default PrivacyPolicyPage;