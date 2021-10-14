import React, { Component, Fragment } from 'react';
import TermsDiscription from "../components/TermsDiscription/TermsDiscription";
import TopBannerAll from "../components/TopBannerAll/TopBannerAll";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Footer from "../components/Footer/Footer";

class TermsPage extends Component {
  componentDidMount() {
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
        <div>
          <TopNavigation PageBarTitle="Terms & Condition"></TopNavigation>
          <TopBannerAll pageTitle="Terms & Condition"></TopBannerAll>
          <TermsDiscription></TermsDiscription>
          <Footer></Footer>
        </div>
      </Fragment>
    );
  }
}

export default TermsPage;