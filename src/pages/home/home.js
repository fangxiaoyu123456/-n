import React, { Component } from 'react'
import './home.css'
import { Icon,Input,Button } from 'antd';
import API from '../../common/js/api'
import Swipe from '../../views/swipe/swipe'
const { Search } = Input;
class Blog extends Component {
    state={
        home:[]
    }
    componentDidMount(){
        this.$axios({
            url:API.homeBanner
        }).then(res=>{
            console.log(res)
            this.setState({
                home:res.data.data
            })
        })
    }
    render() {
        return (
            <div>
                <div className="header">
                    <Icon type="left" className="left" />
                    <h2>找家政</h2>
                    <Icon type="user" className="user"/>
                </div>
                <div className="top">
                    <Search className="input1"
                        placeholder="search"
                        onSearch={value => console.log(value)}
                        style={{ width: 200 }}
                    />
                    <Button type="primary" className="btn1">我要发布</Button>
                </div>
                <Swipe item={this.state.home}></Swipe>
                
            </div>
        )
    }
}
export default Blog