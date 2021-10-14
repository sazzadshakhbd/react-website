import React, { Component, Fragment } from 'react';
import '../../asset/css/bootstrap.min.css';
import '../../asset/css/custom.css';
import whiteLogo from '../../asset/image/navlogo.svg';
import blueLogo from '../../asset/image/navlogoScroll.svg';
import {Navbar, Container, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'

class TopNavigation extends Component {

  constructor(props) {
    super();
    this.state={
      navbarBrand: 'navTitle',
      navbarBrandLogo: [whiteLogo],
      menuIcon: 'dark',
      navbarBackground: 'navbarTransparent',
      navLinkColor: 'linkColorWhite',
      PageBarTitle: props.title
    }
  }

  onScrollMethod = () => {
    if(window.scrollY > 100) {
      this.setState({menuIcon: 'dark', navbarBrand: 'navTitleScroll', navbarBrandLogo: [blueLogo], navbarBackground: 'navbarWhite', navLinkColor: 'linkColorBlack'})
    } 
    else if (window.scrollY < 100) {
      this.setState({menuIcon: 'light', navbarBrand: 'navTitle', navbarBrandLogo: [whiteLogo], navbarBackground: 'navbarTransparent', navLinkColor: 'linkColorWhite'})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScrollMethod)
  }

  render() {
    return (
      <Fragment>
        <title>{this.props.PageBarTitle}</title>
        <Navbar navMenuIcon={this.state.menuIcon} className={this.state.navbarBackground} fixed="top" collapseOnSelect expand="lg">
          <Container fluid={true}>
            <Navbar.Brand><NavLink className={this.state.navbarBrand} to="/"><img src={this.state.navbarBrandLogo} alt="Navbar Brand Logo"></img> Sazzad Shakh</NavLink></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto"></Nav>
              <Nav>
                <Nav.Link><NavLink exact activeStyle={{color:'00a8ee'}} className={this.state.navLinkColor} to="/">home</NavLink></Nav.Link>
                <Nav.Link><NavLink exact activeStyle={{color:'00a8ee'}}  className={this.state.navLinkColor} to="/services">services</NavLink></Nav.Link>
                <Nav.Link><NavLink exact activeStyle={{color:'00a8ee'}}  className={this.state.navLinkColor} to="/courses">courses</NavLink></Nav.Link>
                <Nav.Link><NavLink exact activeStyle={{color:'00a8ee'}}  className={this.state.navLinkColor} to="/portfolio">portfolio</NavLink></Nav.Link>
                <Nav.Link><NavLink exact activeStyle={{color:'00a8ee'}}  className={this.state.navLinkColor} to="/contact">contact</NavLink></Nav.Link>
                <Nav.Link><NavLink exact activeStyle={{color:'00a8ee'}}  className={this.state.navLinkColor} to="/about">about</NavLink></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}

export default TopNavigation;