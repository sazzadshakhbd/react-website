import React, { Component, Fragment } from 'react';
import {Container, Row, Col } from 'react-bootstrap';


class TopBannerAll extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="p-0 TopBannerAllFixed">
          <div className="TopBannerAllOverlay">
            <Container className="TopBannerContentAll">
              <Row>
                <Col>
                  <h1 className="text-center text-white">{this.props.pageTitle}</h1>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default TopBannerAll;