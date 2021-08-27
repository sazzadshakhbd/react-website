import React, { Component, Fragment } from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';

class Summary extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="p-0 summaryBannerFixed mt-5rem">
          <div className="summaryBannerOverlay">
            <Container>
              <Row>
                <Col lg={8} md={6} sm={12}>
                  <Row>
                    <Col lg={6} md={6} sm={6}>
                      <div className="text-center">
                        <h1 className="counterNumber">100</h1>
                        <h4 className="counterTitle">total projects</h4>
                        <hr className="bg-white w-25"></hr>
                      </div>
                    </Col>
                    <Col lg={6} md={6} sm={6}>
                      <div className="text-center">
                        <h1 className="counterNumber">100</h1>
                        <h4 className="counterTitle">total clients</h4>
                        <hr className="bg-white w-25"></hr>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <Card>
                    <Card.Body>
                      <Card.Title className="counterCardTitle">How i Work</Card.Title>
                      <Card.Text className="counterCardSubTitle">
                        <ul>
                          <li>requirement gathering</li>
                          <li>system analysis</li>
                          <li>coding testing</li>
                          <li>implementation</li>
                        </ul>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default Summary;