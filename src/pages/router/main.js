import React from 'react'


export default class Main extends React.Component{
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        return (
            <div>
                this is main
            </div>
        )
    }
}