import React, { Component } from 'react'
import { Icon } from 'antd';
import Back from '../../views/back/back'
import './homecom.styl'
import API from '../../common/js/api'
class Blog extends Component {
    state = {
        msg:[]
    }
    componentDidMount(){
        this.$axios({
            url:API.findHomeWorker,
            method:"get",
            params:{
                id:this.props.match.params.id
            }
        }).then(res=>{
            console.log(res)
            this.setState({
                msg:res.data.data[0]
            })
        })
    }
    render() {
        return (
            <div>
                <div className="header">
                    <Back></Back>
                    <h2>{this.state.msg.name}</h2>
                    <Icon type="search" className="user" />
                </div>

                <div className="homeDetail_list">
                    <div className="homeDetail_left">
                        <div className="homeDetail_img">
                            <img src={this.state.msg.img} alt="" />
                        </div>
                    </div>
                    <div className="homeDetail_right">
                        <h2>{this.state.msg.name}</h2>
                        <h3>{this.state.msg.vNum}</h3>
                        <p className="homeDetail_weizhi">{this.state.msg.city} | {this.state.msg.age}岁 | {this.state.msg.edu} | {this.state.msg.experience}年经营</p>
                        {/* <p className="homeDetail_jieshao">资深的数学高级教师，毕业于师范大学，曾经带过两届高三班讲课细致耐心....</p> */}
                        <div className="homecom">
                            <div className="btn_left">关注</div>
                            <div className="btn_right">向Ta提问</div>
                        </div>
                        <span className="homeDetail_guanzhu">
                            &nbsp;<Icon type="eye" />&nbsp;关注&nbsp;&nbsp;{this.state.msg.readNum}&nbsp;&nbsp;<Icon type="heart" />&nbsp;好评&nbsp;&nbsp;{this.state.msg.likeNum}
                        </span>
                        <div className="homeDetail_didian">
                            <Icon type="environment" />距你{this.state.msg.len}公里
                        </div>
                        <div className="homeDetail_jiaqian">
                            ￥{this.state.msg.price}<i>/小时</i>
                        </div>
                    </div>
                </div>
                {/* age: "22222"
                city: "上海"
                edu: "博士"
                experience: "32"
                id: "1572610741196293880"
                img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573215453&di=fd873cde37913370bee4e18e14677a73&imgtype=jpg&er=1&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn21%2F725%2Fw440h285%2F20180327%2F2bf0-fysqfnh5930199.jpg"
                info: "人见人爱，花见花开22"
                len: "4.62"
                likeNum: "9992"
                name: "柯基"
                price: "1802"
                qualification: "学位证,产后恢复师证,助理家政管理师,高级家政管理师,健康证,上岗证,身份证"
                readNum: "9992"
                tel: "18888888888"
                type: "钟点工,保洁,家电清洗,月嫂,家具保养,新居开荒"
                vNum: "V62"
                year: "32" */}
            </div>
        )
    }
}
export default Blog