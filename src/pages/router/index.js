import React from 'react'
import {HashRouter,Route} from 'react-router-dom'
import Login  from './login'
import Main from './main'
import App from './app'
export default class textRouter extends React.Component{
    render() {
        return (
            <HashRouter>
                <App>
                    <Route exact path='/' component={Login}></Route>
                    <Route exact path='/index/:id' component={Main}></Route>
                </App>
            </HashRouter>
        )
    }
}