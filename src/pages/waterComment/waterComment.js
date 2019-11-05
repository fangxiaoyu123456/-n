import React, { Component } from 'react'
import Back from '../../views/back/back'
import './waterComment.styl'
import { Input, Button } from 'antd';
import API from '../../common/js/api'
const { TextArea } = Input;
class Blog extends Component {
    state = {
        user : {
            username : "",
            content : "",
            time: new Date().getTime(),
            waterId:localStorage.getItem('waterId')
        }
    }
    setUser(e,prop){
        var user = this.state.user;
        user[prop] = e.target.value;
        this.setState({
            user:user
        })
    }
    btn(){
        console.log(this.state.user)
        this.$axios({
            url:API.addComment,
            method:"get",
            params:this.state.user
        }).then(res=>{
            console.log(res)
            if(res.data.isok){
                alert('评价成功')
                this.props.history.go(-1)
            }
        })
    }
    render() {
        return (
            <div>
                <div className="header">
                    <Back></Back>
                    <h2>写评论</h2>
                </div>
                <div className="com_com">
                    <Input placeholder="Basic usage" placeholder="用户名称" onChange={(e)=>this.setUser(e,'username')} />
                    <TextArea rows={4} placeholder="评论" className="textArea" onChange={(e)=>this.setUser(e,'content')} />
                </div>
                <div className="com_btn">
                    <Button type="primary" onClick={()=>this.btn()}>评论</Button>
                </div>
            </div>
        )
    }
}
export default Blog