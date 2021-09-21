import React, { Component, Fragment } from 'react';
import TopBannerAll from '../components/TopBannerAll/TopBannerAll';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Footer from '../components/Footer/Footer';
import Services from '../components/Services/Services'
import ContactSection from '../components/ContactSection/ContactSection';

class ServicePage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation PageBarTitle="Service"></TopNavigation>
        <TopBannerAll pageTitle="My Services"></TopBannerAll>
        <Services></Services>
        <ContactSection></ContactSection>
        <Footer></Footer>
      </Fragment>
    );
  }
}

export default ServicePage;