import React, { Component, Fragment } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import '../../asset/css/bootstrap.min.css';
import '../../asset/css/custom.css';
import WebLogo from '../../asset/image/web.svg';
import MobileLogo from '../../asset/image/mobile.svg';
import GraphicsLogo from '../../asset/image/graphics.svg';

class Services extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <h1 className="globalTitle">my services</h1>
          <Row>
            <Col lg={4} md={4} sm={12}>
              <div className="text-center serviceCard">
                  <img src={WebLogo} alt="Web Logo"></img>
                  <h2 className="serviceCardTitle">Web Development</h2>
                  <p className="serviceCardSubTitle">
                  I design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.
                  </p>
              </div>
            </Col>
            <Col lg={4} md={4} sm={12}>
              <div className="text-center serviceCard">
                  <img src={MobileLogo} alt="Mobile Logo"></img>
                  <h2 className="serviceCardTitle">Mobile Development</h2>
                  <p className="serviceCardSubTitle">
                  I build native and cross platform mobile app for your business and institution as per as your requirements.
                  </p>
              </div>
            </Col>
            <Col lg={4} md={4} sm={12}>
              <div className="text-center serviceCard">
                  <img src={GraphicsLogo} alt="Graphics Logo"></img>
                  <h2 className="serviceCardTitle">Graphics Design</h2>
                  <p className="serviceCardSubTitle">
                  I design modern user interface and other graphical components for your business and institution.
                  </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Services;