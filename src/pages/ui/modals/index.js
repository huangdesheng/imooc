import React from 'react'
import {Modal,Button,Card} from 'antd'
import './../index.less'
export default class Modals extends React.Component{
    state = {
        visible:false
    }

    handleModals=()=>{
        this.setState({
            visible:true
        })
    }
    handleOk=()=>{
        this.setState({
            visible:false
        })
    }
    handleCancel=()=>{
        this.setState({
            visible:false
        })
    }
    render() {
        return (
            <div className="content-wrap">
                <Card title="基础模态框" className="card-wrap">
                    <Button type="primary" onClick={this.handleModals}>Open</Button>
                </Card> 
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    centered={this.state.visible}
                    >
                   <p>欢迎学习慕课网推出的React高级课程</p>
                </Modal>
            </div>
        )
    }
}