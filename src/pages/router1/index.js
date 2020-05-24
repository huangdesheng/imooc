import React, { Component } from 'react'

import {Link} from 'react-router-dom'
export default class Home extends Component{
    
    render() {
        return(
          <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topic">topic</Link>
            </li>
          </ul>
           {this.props.children}
        </nav>
       
      )
        
    }
}