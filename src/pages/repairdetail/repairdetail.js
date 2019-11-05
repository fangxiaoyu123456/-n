import React, { Component } from 'react'
import './repairdetail.styl'
import Back from '../../views/back/back'
import { Icon, Rate } from 'antd';
import API from '../../common/js/api'
class Blog extends Component {
    state = {
        msg: [],
        comment: []
    }
    componentDidMount() {
        this.$axios({
            url: API.findRepair,
            method: "get",
            params: {
                id: this.props.match.params.id
            }
        }).then(res => {
            console.log(res)
            this.setState({
                msg: res.data.data[0]
            })
        })
        //评论
        this.$axios({
            url: API.findRepairComment,
            method: "get",
            params: {
                repairId: this.props.match.params.id
            }
        }).then(res => {
            console.log(res)
            this.setState({
                comment:res.data.data
            })
        })
    }
    com() {
        this.props.history.push('/repaircomment')
        localStorage.setItem('repairId', this.state.msg.id)
    }
    render() {
        return (
            <div className="body">
                <div className="header">
                    <Back></Back>
                    <h2>商家详情</h2>
                    <Icon type="user" className="user" />
                </div>
                <div className="repair_detail_top">
                    <div className="repair_detail_top_title">
                        <h2>{this.state.msg.name}</h2>
                        <h3>
                            <Rate disabled defaultValue={2} className="repair_detail_xing" />
                        </h3>
                    </div>
                    <div className="repair_detail_top_main">
                        <Icon type="environment" className="repair_detail_top_main_address" />
                        <h2>距你{this.state.msg.len}公里</h2>
                        <h3>{this.state.msg.address}</h3>
                        <h4>营业时间：09:00-18:00</h4>
                        <div className="btn_left">关注</div>
                        <div className="btn_right">向Ta提问</div>
                        <h6 className="homeDetail_guanzhu">
                            &nbsp;<Icon type="eye" />&nbsp;关注&nbsp;&nbsp;{this.state.msg.readNum}&nbsp;&nbsp;<Icon type="heart" />&nbsp;好评&nbsp;&nbsp;{this.state.msg.likeNum}
                        </h6>
                    </div>
                </div>
                <div className="water_main">
                    <div className="water_msg">
                        <h2 className="water_msg_title">商家信息</h2>
                        <div className="water_message">
                            <p>{this.state.msg.info}</p>
                        </div>
                    </div>
                    <div className="water_comment">
                        <div className="water_comment_title">
                            <div className="water_comment_title_left">TA们都在说</div>
                            <div className="water_comment_title_right" onClick={() => this.com()}><Icon type="highlight" className="water_comment_icon" onClick={() => this.com()} />写评论</div>
                        </div>
                        {
                            this.state.comment.map(item => {
                                return (
                                    <div className="waterDetail_list" key={item.id}>
                                        <div className="waterDetail_list_left">
                                            <div className="waterDetail_list_img">
                                                <img src={item.ava} alt="" />
                                            </div>
                                        </div>
                                        <div className="waterDetail_list_right">
                                            <div className="waterDetail_list_right_title">
                                                <div className="waterDetail_list_right_title_left">{item.name}</div>
                                                <div className="waterDetail_list_right_title_right">{item.time}</div>
                                            </div>
                                            <p>{item.content}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }


                        {/* <div className="waterDetail_list">
                            <div className="waterDetail_list_left">
                                <div className="waterDetail_list_img">
                                    <img src="http://img4.imgtn.bdimg.com/it/u=3277066189,634094919&fm=26&gp=0.jpg" alt="" />
                                </div>
                            </div>
                            <div className="waterDetail_list_right">
                                <div className="waterDetail_list_right_title">
                                    <div className="waterDetail_list_right_title_left">娃娃脸wq</div>
                                    <div className="waterDetail_list_right_title_right">1小时前</div>
                                </div>
                                <p>这家水店服务特别好，送水速度快，水喝着也不错，而且还经济实惠。。。</p>
                            </div>
                        </div> */}
                    </div>
                </div>
                {/* address: "北京市 朝阳区"
                id: "1572510144587434897"
                info: "维修电脑、手机、ipad"
                len: "3.1km"
                likeNum: "300"
                name: "维修1"
                readNum: "20"
                score: "4"
                tel: "400-100-2223"
                type: "手机、电脑" */}
                {/* ava: null
                content: "123"
                id: "1572604171181251516"
                name: "123"
                repairId: "1572510144587434897"
                time: "1572604090000"
                userId: "1572519873849133615" */}
                <div className="water_foot">
                    <div className="water_foot1">分享</div>
                    <div className="water_foot2">与我联系</div>
                </div>
            </div>
        )
    }
}
export default Blog