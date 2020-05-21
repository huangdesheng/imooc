import React from 'react'
import { Row, Col } from 'antd'
import './index.less'
import Utils from '../../utils/utils'
export default class Header extends React.Component {
    state = {}
    componentWillMount() {
        this.setState({
            userName: '黄德生'
        })
        setInterval(() => {
            let currentTime = Utils.formateDate(new Date().getTime())
            this.setState({
                currentTime
            })
        }, 1000)
    }
    render() {
        // http://api.map.baidu.com/telematics/v3/weather?location=广东&output=json&ak=7etNqQsTRg4j4UdfbGKtI3XIqujbA2Qp
        // http://api.map.baidu.com/telematics/v3/weather?location=foshan&output=json&ak=7etNqQsTRg4j4UdfbGKtI3XIqujbA2Qp
        // http://api.map.baidu.com/reverse_geocoding/v3/?output=json&coordtype=wgs84ll&location=31
        // https://restapi.amap.com/v3/weather/weatherInfo?key=962128c46f91fc0e04bd891a54b59b38&city=310115
        // https://restapi.amap.com/v3/weather/weatherInfo?city=310115&output=JSON&key=c6c3f3d131c790f8d1469da70ea07f11
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span='24' className="name">
                        <span className="welcome">欢迎,           {this.state.userName}</span>
                        <span className="login-out">退出</span>
                    </Col>
                </Row>
                <Row className="header-bread">
                    <Col span="4" className="bread-title">首页</Col>
                    <Col span="20" className="weather">
                        <span className="Timer">{this.state.currentTime}</span>
                        <span className="clode">晴转多云</span>
                    </Col>
                </Row>
            </div>
        )
    }
}