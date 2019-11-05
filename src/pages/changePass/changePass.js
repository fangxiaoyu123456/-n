import React, { Component } from 'react'
import { Input,Button } from 'antd';
import './changepass.styl'
import store from '../../store/index'
import API from '../../common/js/api'
import Back from '../../views/back/back'
class Blog extends Component {
    state={
        user:{
            name:store.getState().name,
            oldpass:"",
            newpass:""
        }
    }
    setUser(e,prop){
        var user = this.state.user
        user[prop] = e.target.value
        this.setState({
            user:user
        })
    }
    change(){
        console.log(this.state.user)
        this.$axios({
            url:API.changePassUser,
            method:"post",
            data:this.state.user
        }).then(res=>{
            console.log(res)
            if(res.data.isok){
                alert(res.data.info)
                this.props.history.push('/login')
            }else{
                alert(res.data.info)
            }
        })
    }
    render() {
        return (
            <div>
                <div className="header">
                    <Back></Back>
                    <h2>修改密码</h2>
                </div>
                <Input placeholder="default size" className="input121" onChange={(e)=>this.setUser(e,'name')} value={this.state.user.name} disabled/>
                <Input placeholder="default size" placeholder="密码" className="input121" onChange={(e)=>this.setUser(e,'oldpass')} />
                <Input placeholder="default size" placeholder="新密码" className="input121" onChange={(e)=>this.setUser(e,'newpass')} />
                <div className="xiugaimima">
                <Button type="primary" onClick={()=>this.change()}>修改密码</Button>
                </div>
            </div>
        )
    }
}
export default Blog