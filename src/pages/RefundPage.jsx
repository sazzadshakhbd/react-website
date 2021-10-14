import React, { Component, Fragment } from 'react';
import RefundDiscription from "../components/RefundDiscription/RefundDiscription";
import TopBannerAll from "../components/TopBannerAll/TopBannerAll";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Footer from "../components/Footer/Footer";

class RefundPage extends Component {
  componentDidMount() {
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
        <div>
          <TopNavigation PageBarTitle="Refund Policy"></TopNavigation>
          <TopBannerAll pageTitle="Refund Policy"></TopBannerAll>
          <RefundDiscription></RefundDiscription>
          <Footer></Footer>
        </div>
      </Fragment>
    );
  }
}

export default RefundPage;