import React, { Component, Fragment } from 'react';
import Portfolio from '../components/Portfolio/Portfolio';
import TopBannerAll from '../components/TopBannerAll/TopBannerAll';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Footer from '../components/Footer/Footer';

class PortfolioPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation PageBarTitle="Portfolio"></TopNavigation>
        <TopBannerAll pageTitle="My Portfolio"></TopBannerAll>
        <Portfolio></Portfolio>
        <Footer></Footer>
      </Fragment>
    );
  }
}

export default PortfolioPage;