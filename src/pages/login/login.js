import React, { Component } from 'react'
import { Icon } from 'antd';
import './login.css'
import API from '../../common/js/api' 
import Back from '../../views/back/back'
import store from  '../../store/index'
class Blog extends Component {
    state = {
        user:{
            name:"",
            pass:"",
            type:"2"
        }
    }
    setUser(e,prop){
        var user = this.state.user
        user[prop] = e.target.value
        this.setState({
            user:user
        })
    }
    login(){
        // console.log(this.state.user)
        this.$axios({
            url:API.login,
            method:'post',
            data:this.state.user
        }).then(res=>{
            console.log(res)
            if(res.data.isok){
                alert(res.data.info)
                this.props.history.push('/index')
                store.dispatch({
                    type:"change",
                    payload:this.state.user.name
                })
            }else{
                alert(res.data.info)
            }
        }).catch(err=>{
            console.log(err)
        })
    }
    render() {
        return (
            <div>
                <div className="header">
                    <Back></Back>
                    <span>登录</span>
                </div>
                <div className="box1">
                    <ul>
                        <li>
                            <span className="con"></span>
                            <input type="text" placeholder="邮箱/手机号" onChange={(e)=>this.setUser(e,'name')} />
                        </li>
                        <li>
                            <span className="con"></span>
                            <input type="text" placeholder="密码" onChange={(e)=>this.setUser(e,'pass')} />
                        </li>
                    </ul>
                </div>
                <div className="btn" onClick={()=>this.login()}>登录</div>
                
            </div>
        )
    }
}
export default Blog