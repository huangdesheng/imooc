import React from 'react'
import {Link} from 'react-router-dom'
export default class Login extends React.Component{
    handleIndex=(index)=>{
       console.log(index)
       this.props.history.push({
           pathname:`/index/${index}`,
           state:{
               id:index
           }
       })
    }
    render() {
        return (
            <div>
               <Link to="/index/3">去首页</Link>
               <button onClick={this.handleIndex.bind(this,10)}>去首页</button>
            </div>
        )
    }
}