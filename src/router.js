import React, { Component } from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/buttons'
import Nomatch from './pages/nomatch'
export default class IRouter extends Component{
    render() {
        return(
            <HashRouter>
                <App>
                    <Route path='/login' component={Login}></Route>
                    <Route path="/admin" render={()=>
                        <Admin>
                            <Switch>
                            <Route path='/admin/ui/buttons' component={Buttons}></Route>
                            <Route component={Nomatch}></Route>
                            </Switch>
                        </Admin>
                    } />
                </App>
            </HashRouter>
        )
    }
}