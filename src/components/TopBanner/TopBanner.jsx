import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../../asset/css/bootstrap.min.css';
import '../../asset/css/custom.css'

class TopBanner extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="p-0 topBannerFixed">
          <div className="bannerOverlay">
            <Container className="topBannerContent">
              <Row>
                <Col className="text-center">
                  <h1>SOFTWARE ENGINEER</h1>
                  <h4>Mobile & Web Application</h4>
                  <Button variant="primary">More Info</Button>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default TopBanner;