import React, { Component, Fragment } from 'react';
import TopBannerAll from '../components/TopBannerAll/TopBannerAll';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Footer from '../components/Footer/Footer';
import ContactSection from '../components/ContactSection/ContactSection';

class ContactPage extends Component {
  componentDidMount() {
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
        <TopNavigation PageBarTitle="Contact"></TopNavigation>
        <TopBannerAll pageTitle="Contact Me"></TopBannerAll>
        <ContactSection></ContactSection>
        <Footer></Footer>
      </Fragment>
    );
  }
}

export default ContactPage;