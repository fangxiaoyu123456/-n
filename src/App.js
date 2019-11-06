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
import WaterComment from './pages/waterComment/waterComment'
import Repair from './pages/repair/repair'
import RepairDetail from './pages/repairdetail/repairdetail'
import Repaircomment from './pages/repairComment/repairComment'
import Homecom from './pages/homecom/homecom'
import ChangePass from './pages/changePass/changePass'
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
                <Route path="/watercomment" component={WaterComment}></Route>
                <Route path="/repair" component={Repair}></Route>
                <Route path="/repairdetail/:id" component={RepairDetail}></Route>
                <Route path="/repaircomment" component={Repaircomment}></Route>
                <Route path="/homecom/:id" component={Homecom}></Route>
                <Route path="/changepass" component={ChangePass}></Route>
                <Redirect to="/login" ></Redirect>
            </Switch>
        )
    }
}
export default Blog