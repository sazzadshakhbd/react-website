import React, { Component, Fragment } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {BarChart, Bar, ResponsiveContainer, Tooltip, XAxis} from 'recharts';

class Analysis extends Component {
  constructor(){
    super()
    this.state={
      barChartData: [
        {technology: 'Java', Projects: '100'},
        {technology: 'Kotlin', Projects: '40'},
        {technology: 'SQL', Projects: '80'},
        {technology: 'Bootstrap', Projects: '90'},
        {technology: 'Jquery', Projects: '60'},
        {technology: 'React', Projects: '80'},
        {technology: 'PHP', Projects: '100'},
        {technology: 'Angular', Projects: '50'},
      ]
    }
  }
  render() {
    var blueColor = 'rgba(0,115,230,0.8)'
    return (
      <Fragment>
        <Container>
          <h1 className="globalTitle">Technology Used</h1>
          <Row>
            <Col lg={6} md={12} sm={12} style={{width:'100%', height:'300px'}}>
              <ResponsiveContainer>
                <BarChart width={100} height={300} data={this.state.barChartData}>
                  <XAxis dataKey='technology'></XAxis>
                  <Tooltip></Tooltip>
                  <Bar dataKey='Projects' fill={blueColor}></Bar>
                </BarChart>
              </ResponsiveContainer>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div className="analysisContent">
                <p className="text-justify">
                To build native android apps i use Java as well as kotlin mainly. React JS is used for cross platform mobile application. I use MySQL database for relational database system. To build NoSQL application i use MongoDB. Firebase database system is used where it is necessary to provide realtime data flow facilities.
                </p>
                <p className="text-justify">
                I always build dynamic application. Admin panel is the heart of such kinds of application. I always try to provide sufficient features in admin panel to dominate application. According to client demand I use PHP OOP, CodeIgniter and Laravel to build admin panel section.
                </p>
                <p className="text-justify">
                Application security is a big deal for commercial application. I always ensure security portion of my application, moreover i build a security alert system, to notify admin when his system at risk.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Analysis;