import React, { Component } from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import Register from './pages/register/register'
import Login from './pages/login/login'
import Index from './pages/index/index'
import Teacher from './pages/teacher/teacher'
import Home from './pages/home/home'
import HomeDetail from './pages/homeDetail/homeDetail'
import Water from './pages/water/water'
import WaterDetail from './pages/waterDetail/waterDetail'

class Blog extends Component {
    
    render() {
        return (
            <Switch>
                <Route path="/register" component={Register}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/index" component={Index}></Route>
                <Route path="/teacher" component={Teacher}></Route>
                <Route path="/home" component={Home}></Route>
                <Route path="/homedetail" component={HomeDetail}></Route>
                <Route path="/water" component={Water}></Route>
                <Route path="/waterdetail/:id" component={WaterDetail}></Route>
            </Switch>
        )
    }
}
export default Blog