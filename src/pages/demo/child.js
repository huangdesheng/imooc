import React from 'react'

export default class Index extends React.Component{
    state = {
        count:0
    }


    render() {
        return <div>
            <h2>生命周期函数</h2>
    <p>{this.state.count}</p>
        </div>
    }
}