import React from 'react'

import {Card , Spin, Alert} from 'antd'
export default class Loadings extends React.Component{
    render() {
        return (
            <div className="content-wrap">
                <Card title="spin的基础用法" className="card-wrap">
                   {/* <Spin /> */}
                   <Spin tip="loading....">
                        <Alert 
                        message="Alert Message Titler"
                        description="Furter details about a context of alert"
                        type="danger"
                        >
                        </Alert >
                   </Spin>
                </Card>
            </div>
        )
    }
}