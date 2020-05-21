import React from 'react'
import Header from './components/header'
import Footer from './components/footer'
import NavLeft from './components/navLeft'
import Home from './pages/home'
import { Row, Col } from 'antd';
import './style/commom.less'

export default class Admin extends React.Component{
    render(){
        return(
           <Row className="container">
              <Col span="4" className="nav-left">
                  <NavLeft></NavLeft>
              </Col>
              <Col span="20" className="main">
                  <Header></Header>
                  <Row className="content">
                      <Home></Home>
                  </Row>
                  <Footer></Footer>
              </Col>
           </Row>
        )
    }
}