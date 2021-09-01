import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="Footer">
          <Row>
            <Col lg={3} sm={12} md={6} className="p-5">
              <h3>follow me</h3>
              <ul className="SocialLink">
                <li><a href="facebook.com" target='_blank'><FontAwesomeIcon icon={faFacebook} /> Facebook</a></li>
                <li><a href="youTube.com" target='_blank'><FontAwesomeIcon icon={faYoutube} /> YouTube</a></li>
              </ul>
            </Col>
            <Col lg={3} sm={12} md={6} className="p-5">
              <h3>address</h3>
              <ul>
                <li>House No - 243/1, Ward No - 5, Village: Sazzankanda, Thana+Post: Rajbari, District: Rajbari.</li>
                <li><FontAwesomeIcon icon={faEnvelope} /> sazzadshakhbd@hotmail.com</li>
                <li><FontAwesomeIcon icon={faPhone} /> +8801718188425</li>
              </ul>
            </Col>
            <Col lg={3} sm={12} md={6} className="p-5">
              <h3>information</h3>
              <ul>
                <li><a href="about.html" target='_blank'>about me</a></li>
                <li><a href="resume.html" target='_blank'>my resume</a></li>
                <li><a href="contact.html" target='_blank'>contact me</a></li>
              </ul>
            </Col>
            <Col lg={3} sm={12} md={6} className="p-5">
              <h3>legal</h3>
              <ul>
                <li><a href="refund.html" target='_blank'>refund policy</a></li>
                <li><a href="terms.html" target='_blank'>terms and condition</a></li>
                <li><a href="policy.html" target='_blank'>privacy policy</a></li>
              </ul>
            </Col>
          </Row>
        </Container>
        <Container fluid={true}>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <p className="CopyRight">sazzadshakh.xyz &copy; 2021-2022</p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Footer;