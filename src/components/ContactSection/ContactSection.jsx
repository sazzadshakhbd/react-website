import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';

class ContactSection extends Component {
  render() {
    return (
      <Fragment>
        <Container className="ContactSection">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <h3>Quick Connect</h3>
              <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"/>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email"/>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control as="textarea" rows={5} />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <h3>Discuss Now</h3>
              <ul>
                <li>House No - 243/1, Ward No - 5, Village: Sazzankanda, District: Rajbari.</li>
                <li><FontAwesomeIcon icon={faEnvelope} /> sazzadshakhbd@hotmail.com</li>
                <li><FontAwesomeIcon icon={faPhone} /> +8801718188425</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default ContactSection;