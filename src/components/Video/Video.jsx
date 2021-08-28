import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import 'video-react/dist/video-react.css';
import {Player, BigPlayButton} from 'video-react';

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
        <Modal size="lg" show={this.state.VideoModal} onHide={this.VideoModalClose}>
          <Modal.Body>
            <Player  poster="https://video-react.js.org/assets/poster.png"
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
              <BigPlayButton position="center"></BigPlayButton>
            </Player>
          </Modal.Body>
          <Modal.Footer className="justify-content-start">
            <Button variant="primary" onClick={this.VideoModalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

export default Video;