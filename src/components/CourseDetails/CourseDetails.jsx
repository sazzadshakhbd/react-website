import React, { Component, Fragment } from 'react';
import {Col, Container, Row, Button} from 'react-bootstrap';
import 'video-react/dist/video-react.css';
import {Player, BigPlayButton} from 'video-react';

class CourseDetails extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="p-0 TopBannerAllFixed">
          <div className="TopBannerAllOverlay">
            <Container className="TopBannerContentAllCourse">
              <Row>
                <Col sm={12} md={6} lg={6}>
                  <h3>Full dynamic website with admin panel</h3>
                  <p className="mb-1 text-warning">Total Lecture: 30</p>
                  <p className="mb-1 text-warning">Total Student: 40</p>
                </Col>
                <Col sm={12} md={6} lg={6}>
                  <h5> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga illo eveniet, odio repellendus repellat earum, iste exercitationem ea sapiente odit obcaecati dolore quae est inventore facilis qui iure saepe eum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga illo eveniet, odio repellendus repellat earum, iste exercitationem ea sapiente odit obcaecati dolore quae est inventore facilis qui iure saepe eum. </h5>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
        <Container className="mt-5">
          <Row>
            <Col sm={12} md={6} lg={6}>
              <h1 className="serviceCardTitle">Skill you get</h1>
              <ul>
                <li className="serviceCardSubTitle">Unlimited Dynamic Product Category</li>
                <li className="serviceCardSubTitle">Unlimited Dynamic Product Category</li>
                <li className="serviceCardSubTitle">Unlimited Dynamic Product Category</li>
                <li className="serviceCardSubTitle">Unlimited Dynamic Product Category</li>
                <li className="serviceCardSubTitle">Unlimited Dynamic Product Category</li>
                <li className="serviceCardSubTitle">Unlimited Dynamic Product Category</li>
                <li className="serviceCardSubTitle">Unlimited Dynamic Product Category</li>
                <li className="serviceCardSubTitle">Unlimited Dynamic Product Category</li>
                <li className="serviceCardSubTitle">Unlimited Dynamic Product Category</li>
                
              </ul>
              <Button variant="primary">Details</Button>
            </Col>
            <Col sm={12} md={6} lg={6}>
            <Player  poster="https://video-react.js.org/assets/poster.png"
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
              <BigPlayButton position="center"></BigPlayButton>
            </Player>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default CourseDetails;