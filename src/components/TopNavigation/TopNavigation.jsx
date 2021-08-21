import React, { Component, Fragment } from 'react';
import '../../asset/css/bootstrap.min.css';
import '../../asset/css/custom.css';
import whiteLogo from '../../asset/image/navlogo.svg';
import blueLogo from '../../asset/image/navlogoScroll.svg';
import {Navbar, Container, Nav} from 'react-bootstrap';

class TopNavigation extends Component {

  constructor() {
    super();
    this.state={
      navbarBrand: 'navTitle',
      navbarBrandLogo: [whiteLogo],
      navbarBackground: 'navbarTransparent',
      navLinkColor: 'linkColorWhite'
    }
  }

  onScrollMethod = () => {
    if(window.scrollY > 100) {
      this.setState({navbarBrand: 'navTitleScroll', navbarBrandLogo: [blueLogo], navbarBackground: 'navbarWhite', navLinkColor: 'linkColorBlack'})
    } 
    else if (window.scrollY < 100) {
      this.setState({navbarBrand: 'navTitle', navbarBrandLogo: [whiteLogo], navbarBackground: 'navbarTransparent', navLinkColor: 'linkColorWhite'})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScrollMethod)
  }

  render() {
    return (
      <Fragment>
        <Navbar className={this.state.navbarBackground} fixed="top" collapseOnSelect expand="lg" variant="dark">
          <Container fluid={true}>
            <Navbar.Brand className={this.state.navbarBrand}><img src={this.state.navbarBrandLogo} alt="Navbar Brand Logo"></img> Sazzad Shakh</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto"></Nav>
              <Nav>
                <Nav.Link className={this.state.navLinkColor} href="#home">home</Nav.Link>
                <Nav.Link className={this.state.navLinkColor} href="#services">services</Nav.Link>
                <Nav.Link className={this.state.navLinkColor} href="#courses">courses</Nav.Link>
                <Nav.Link className={this.state.navLinkColor} href="#portfolio">portfolio</Nav.Link>
                <Nav.Link className={this.state.navLinkColor} href="#contact">contact</Nav.Link>
                <Nav.Link className={this.state.navLinkColor} href="#about">about</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}

export default TopNavigation;