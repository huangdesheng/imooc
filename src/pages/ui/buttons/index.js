import React, { Component } from 'react'
import {Card,Button} from 'antd'
import './../index.less'
import { PlusOutlined,EditOutlined ,DeleteOutlined} from '@ant-design/icons';
export default class Buttons extends Component{
    state = {
        loadingStatus:true
    }
    handleLoading=()=>{
        this.setState({
            loadingStatus:false
        })
    }
    render() {
        return (
            <div className="content-wrap">
                <Card title="基础按钮" className="card-wrap">
                    <Button type="primary">imooc</Button>
                    <Button >imooc</Button>
                    <Button type="danger">imooc</Button>
                    <Button type="dashed">imooc</Button>
                    <Button type="dashed">imooc</Button>
                </Card>

                <Card title="图形按钮" className="card-wrap">
                    <Button type="primary" icon={<PlusOutlined />}>创建</Button>
                    <Button type="primary" icon={<EditOutlined />}>编辑</Button>
                    <Button type="primary"  icon={<DeleteOutlined />}>删除</Button>
                </Card>

                <Card title="Loading按钮" className="card-wrap">
                    <Button type="primary" loading={this.state.loadingStatus}>Loading</Button>
                    <Button type="primary" loading={this.state.loadingStatus}></Button>
                    <Button type="" loading={this.state.loadingStatus}>点击加载</Button>
                    <Button type="danger" onClick={this.handleLoading}>关闭</Button>
                </Card>
            </div>
        )
      
    }
}