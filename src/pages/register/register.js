import React, { Component } from 'react'
import './register.css'
import { Icon } from 'antd';
import API from '../../common/js/api'
class Blog extends Component {
    state = {
        user:{
            name:"",
            pass:"",
            tel:""
        }
    }
    setUser(e,prop){
        var user = this.state.user
        user[prop] = e.target.value
        this.setState({
            user:user
        })
    }
    register(){
        // console.log(this.state.user)
        console.log('1')
        this.$axios({
            url:API.register,
            method:"post",
            data:this.state.user
        }).then(res=>{
            // console.log(res)
            alert(res.data.info)
            this.props.history.push('/login')
        }).catch(err=>{
            console.log(err)
        })
    }
    render() {
        return (
            <div>
                <div className="header">
                    <Icon type="left" className="left" />
                    <span>注册</span>
                </div>
                <div className="box">
                    <ul>
                        <li>
                            <span className="con"></span>
                            <input type="text" placeholder="用户账号" onChange={(e)=>this.setUser(e,'name')} />
                        </li>
                        <li>
                            <span className="con"></span>
                            <input type="text" placeholder="6-32位密码" onChange={(e)=>this.setUser(e,'pass')} />
                        </li>
                        <li>
                            <span className="con"></span>
                            <input type="text" placeholder="手机号码/邮箱" onChange={(e)=>this.setUser(e,'tel')} />
                        </li>
                    </ul>
                </div>
                <div className="btn" onClick={()=>this.register()}>注册</div>
            </div>
        )
    }
}
export default Blog