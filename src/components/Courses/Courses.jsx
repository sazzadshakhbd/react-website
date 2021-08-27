import React, { Component, Fragment } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import elephent from '../../asset/image/elephent.jpg';
import dolphin from '../../asset/image/dolphin.jpg';
import dove from '../../asset/image/dove.jpg';
import lion from '../../asset/image/lion.jpg';

class Courses extends Component {
  render() {
    return (
      <Fragment>
        <Container>
        <h1 className="globalTitle">our courses</h1>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <Row>
                <Col className="mb-3" lg={6} md={12} sm={12}>
                  <img className="img-fluid" src={elephent} alt='Elephent'></img>
                </Col>
                <Col className="mb-3" lg={6} md={12} sm={12}>
                  <h3 className="CourseTitle">Web Development</h3>
                  <p className="CourseSubTitle">I build native and cross platform mobile app for your business app for your business</p>
                  <a className="CourseLink" href="details.html">Details</a>
                </Col>
              </Row>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <Row>
                <Col lg={6} md={12} sm={12}>
                  <img className="img-fluid" src={dolphin} alt='Dolphin'></img>
                </Col>
                <Col lg={6} md={12} sm={12}>
                  <h3 className="CourseTitle">Web Development</h3>
                  <p className="CourseSubTitle">I build native and cross platform mobile app for your business app for your business</p>
                  <a className="CourseLink" href="details.html">Details</a>
                </Col>
              </Row>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <Row>
                <Col lg={6} md={12} sm={12}>
                  <img className="img-fluid" src={dove} alt='Dove'></img>
                </Col>
                <Col lg={6} md={12} sm={12}>
                  <h3 className="CourseTitle">Web Development</h3>
                  <p className="CourseSubTitle">I build native and cross platform mobile app for your business app for your business</p>
                  <a className="CourseLink" href="details.html">Details</a>
                </Col>
              </Row>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <Row>
                <Col lg={6} md={12} sm={12}>
                  <img className="img-fluid" src={lion} alt='Lion'></img>
                </Col>
                <Col lg={6} md={12} sm={12}>
                  <h3 className="CourseTitle">Web Development</h3>
                  <p className="CourseSubTitle">I build native and cross platform mobile app for your business app for your business</p>
                  <a className="CourseLink" href="details.html">Details</a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Courses;