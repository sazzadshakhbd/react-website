import React, { Component, Fragment } from 'react';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import BabyImage1 from '../../asset/image/image-1.jpg';
import BabyImage2 from '../../asset/image/image-2.jpg';
import BabyImage3 from '../../asset/image/image-3.jpg';

class Portfolio extends Component {
  render() {
    return (
      <Fragment>
        <Container className="mt-5">
          <Row>
            <Col lg={4} md={6} sm={12} className="p-2">
              <Card className="text-center RecentProjectsCard">
                <Card.Img variant="top" src={BabyImage1} alt="Baby Photo - 1" />
                <Card.Body>
                  <Card.Title className="RecentProjectsCardTitle">Card Title</Card.Title>
                  <Card.Text className="RecentProjectsCardSubTitle">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Details</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12} className="p-2">
              <Card className="text-center RecentProjectsCard">
                <Card.Img variant="top" src={BabyImage2} alt="Baby Photo - 2" />
                <Card.Body>
                  <Card.Title className="RecentProjectsCardTitle">Card Title</Card.Title>
                  <Card.Text className="RecentProjectsCardSubTitle">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Details</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12} className="p-2">
              <Card className="text-center RecentProjectsCard">
                <Card.Img variant="top" src={BabyImage3} alt="Baby Photo - 3" />
                <Card.Body>
                  <Card.Title className="RecentProjectsCardTitle">Card Title</Card.Title>
                  <Card.Text className="RecentProjectsCardSubTitle">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Details</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12} className="p-2">
              <Card className="text-center RecentProjectsCard">
                <Card.Img variant="top" src={BabyImage1} alt="Baby Photo - 1" />
                <Card.Body>
                  <Card.Title className="RecentProjectsCardTitle">Card Title</Card.Title>
                  <Card.Text className="RecentProjectsCardSubTitle">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Details</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12} className="p-2">
              <Card className="text-center RecentProjectsCard">
                <Card.Img variant="top" src={BabyImage2} alt="Baby Photo - 2" />
                <Card.Body>
                  <Card.Title className="RecentProjectsCardTitle">Card Title</Card.Title>
                  <Card.Text className="RecentProjectsCardSubTitle">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Details</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12} className="p-2">
              <Card className="text-center RecentProjectsCard">
                <Card.Img variant="top" src={BabyImage3} alt="Baby Photo - 3" />
                <Card.Body>
                  <Card.Title className="RecentProjectsCardTitle">Card Title</Card.Title>
                  <Card.Text className="RecentProjectsCardSubTitle">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Details</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Portfolio;