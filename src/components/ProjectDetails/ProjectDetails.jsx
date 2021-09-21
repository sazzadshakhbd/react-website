import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import elephant from '../../asset/image/elephant.jpg';

class ProjectDetails extends Component {
  render() {
    return (
      <Fragment>
        <Container className="ProjectDetails">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <img src={elephant} alt="Elephant" className="img-fluid"></img>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <h2>Foll Bazzar</h2>
              <p>Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one </p>
              <ul>
                <li>Unlimited Dynamic Product Category</li>
                <li>Unlimited Dynamic Product Category</li>
                <li>Unlimited Dynamic Product Category</li>
                <li>Unlimited Dynamic Product Category</li>
                <li>Unlimited Dynamic Product Category</li>
                <li>Unlimited Dynamic Product Category</li>
                <li>Unlimited Dynamic Product Category</li>
              </ul>
              <Button variant="primary">More Info</Button>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default ProjectDetails;