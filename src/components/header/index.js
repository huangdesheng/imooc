import React from 'react'
import { Row, Col } from 'antd'
import './index.less'
import Utils from '../../utils/utils'
import axios from '../../axios'
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
        this.getWeatherApiData()
    }


    getWeatherApiData() {
        // let city = '北京'
        axios.jsonp({ url: `https://restapi.amap.com/v3/weather/weatherInfo?city=440106&output=JSON&key=fe7cccdafaafdd1938433695e0d9cf08` }).then(res => {
            console.log(res)
            this.setState({
                weather: res.lives[0].weather
            })
        })
    }
    render() {
        // http://api.map.baidu.com/telematics/v3/weather?location=广东&output=json&ak=4RyQSmvEpmHGRiIRcoyEyzDpZLwBi11y
        // http://api.map.baidu.com/telematics/v3/weather?location=foshan&output=json&ak=7etNqQsTRg4j4UdfbGKtI3XIqujbA2Qp
        // http://api.map.baidu.com/reverse_geocoding/v3/?output=json&coordtype=wgs84ll&location=31
        // https://restapi.amap.com/v3/weather/weatherInfo?key=962128c46f91fc0e04bd891a54b59b38&city=310115
        // https://restapi.amap.com/v3/weather/weatherInfo?city=310115&output=JSON&key=fe7cccdafaafdd1938433695e0d9cf08
        // https://restapi.amap.com/v3/config/district?keywords=北京&subdistrict=2&key=c6c3f3d131c790f8d1469da70ea07f11
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
                        <span className="clode">{this.state.weather}</span>
                    </Col>
                </Row>
            </div>
        )
    }
}