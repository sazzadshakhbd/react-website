import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

class Video extends Component {
  constructor(){
    super();
    this.state = {
      VideoModal: false
    }
  }
  VideoModalOpen=()=>{
    this.setState({VideoModal: true})
  }
  VideoModalClose=()=>{
    this.setState({VideoModal: false})
  }
  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col>
              <Card className="VideoCard">
                <Card.Body>
                    <Card.Title className="VideoCardTitle">How I Do</Card.Title>
                    <Card.Text className="VideoCardDes">
                    First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i start coding. Testing is also going on with coding. Final testing take place after finishing coding part. After successful implementation i provide 6 month free bug fixing service for corresponding project.
                    </Card.Text>
                    <span><FontAwesomeIcon onClick={this.VideoModalOpen} className="VideoPlayIcon" icon={faPlayCircle} /></span> 
                  </Card.Body>
                </Card>
            </Col>
          </Row>
        </Container>
        <Modal show={this.state.VideoModal} onHide={this.VideoModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.VideoModalClose}>
              Close
            </Button>
           
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

export default Video;