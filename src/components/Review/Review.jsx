import React, { Component, Fragment } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from 'react-bootstrap';
import userImage1 from '../../asset/image/image-1.jpg';
import userImage2 from '../../asset/image/image-2.jpg';
import userImage3 from '../../asset/image/image-3.jpg';

class Review extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      speed: 3000,
      slidesToScroll: 1,
      verticalSwiping: true,
      vertical: true,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <Fragment>
        <Container>
        <h1 className="globalTitle">client says</h1>
          <Slider {...settings}>
            <div>
              <Row className="ReviewSlider">
                <Col sm={12} md={12} lg={7}>
                    <img src={userImage1} alt="UserImage" className="ReviewImage" />
                    <h1 className="ReviewSliderTitle">Web Development</h1>
                    <h1 className="ReviewSliderDes">Enforce img alt attribute does not contain the word image, picture, or photo. Screensavers already announce img elements as an image. There is no need to use words such as image, photo, and/or picture.</h1>
                </Col>
              </Row>
            </div>
            <div>
              <Row className="ReviewSlider">
                <Col sm={12} md={12} lg={7}>
                    <img src={userImage2} alt="UserImage" className="ReviewImage" />
                    <h1 className="ReviewSliderTitle">Web Development</h1>
                    <h1 className="ReviewSliderDes">Enforce img alt attribute does not contain the word image, picture, or photo. Screensavers already announce img elements as an image. There is no need to use words such as image, photo, and/or picture.</h1>
                </Col>
              </Row>
            </div>
            <div>
              <Row className="ReviewSlider">
                <Col sm={12} md={12} lg={7}>
                    <img src={userImage3} alt="UserImage" className="ReviewImage" />
                    <h1 className="ReviewSliderTitle">Web Development</h1>
                    <h1 className="ReviewSliderDes">Enforce img alt attribute does not contain the word image, picture, or photo. Screensavers already announce img elements as an image. There is no need to use words such as image, photo, and/or picture.</h1>
                </Col>
              </Row>
            </div>
          </Slider>
        </Container>
      </Fragment>
    );
  }
}

export default Review;