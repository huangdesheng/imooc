import React from 'react'
import './index.less'
import {Button} from 'antd'
import 'antd/dist/antd.less'
export default class Index extends React.Component{
    state = {
        count:0
    }

    handleAdd=()=>{
        this.setState({
            count:this.state.count+1
        })
    }

    render() {
        return <div>
            <h2>生命周期函数</h2>
            <p>{this.state.count}</p>
            <Button type="primary">Primary</Button>
            <button onClick={this.handleAdd}>count加</button>
        </div>
    }
}