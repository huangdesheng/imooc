import React from 'react'
import {HashRouter,Route} from 'react-router-dom'
import Main from './main'
import About from './about'
import Topic from './topic'
import Home from './index'
export default class IRouter extends React.Component{
    render() {
        return (
            <HashRouter>
            <Home>
                <Route path="/" component={Main}>
                    <Main>
                        <Route exact path='/a' component={About}>

                        </Route>
                    </Main>
                </Route>
                <Route  path="/about" component={About}></Route>
                <Route  path="/topic" component={Topic}></Route>
            </Home>
        </HashRouter>
        )
      
    }
}