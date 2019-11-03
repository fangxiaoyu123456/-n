import React, { Component } from 'react'
import './waterDetail.styl'
import { Icon, Rate } from 'antd';
import API from '../../common/js/api'
class Blog extends Component {
    back() {
        this.props.history.go(-1)
    }
    state = {
        msg : [],
        comment:[]
    }
    componentDidMount(){
        // console.log(this.props.match.params.id)
        this.$axios({
            url:API.findWater,
            params:{
                id:this.props.match.params.id
            }
        }).then(res=>{
            // console.log(res)
            this.setState({
                msg:res.data.data[0]
            })
        })

        this.$axios({
            url:API.findComment,
            params:{
                waterId:this.props.match.params.id
            }
        }).then(res=>{
            console.log(res)
            
        })
    }
    render() {
        return (
            <div>
                <div className="header">
                    <Icon type="left" className="left" onClick={() => this.back()} />
                    <h2>详细</h2>
                    <Icon type="user" className="user" />
                </div>
                <div className="water_main">
                    <div className="water_box">
                        <div className="water_left">
                            <div className="water_img">
                                <img src={this.state.msg.img} alt="" />
                            </div>
                        </div>
                        <div className="water_right">
                            <h2>{this.state.msg.name}</h2>
                            <Rate disabled defaultValue={5} className="xingxing" />
                            <h3>月售{this.state.msg.count}桶</h3>
                            <h4>￥{this.state.msg.price}<i>/桶</i></h4>
                            <h5><Icon type="like" />&nbsp;{this.state.msg.likeNum}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;浏览数：{this.state.msg.readNum}&nbsp;&nbsp;&nbsp;&nbsp;</h5>
                        </div>
                    </div>
                    <div className="water_address">
                        <div className="water_didian">
                            <Icon type="environment" className="water_didian_icon" />
                            <p>{this.state.msg.len}m</p>
                            <p>{this.state.msg.address}</p>
                        </div>
                        <a href={'tel:'+this.state.msg.tel}><Icon type="phone" className="water_phone" /></a>
                        
                    </div>
                    <div className="water_msg">
                        <h2 className="water_msg_title">商家信息</h2>
                        <div className="water_message">
                            <p>{this.state.msg.des}</p>
                        </div>
                    </div>
                    {/* 评论 */}
                    <div className="water_comment">
                        <div className="water_comment_title">
                            <div className="water_comment_title_left">TA们都在说</div>
                            <div className="water_comment_title_right"><Icon type="highlight" className="water_comment_icon" />写评论</div>
                        </div>
                        <div className="waterDetail_list">
                            <div className="waterDetail_list_left">
                                <div className="waterDetail_list_img">
                                    <img src="http://img4.imgtn.bdimg.com/it/u=3277066189,634094919&fm=26&gp=0.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="waterDetail_list_right">
                                <div className="waterDetail_list_right_title">
                                    <div className="waterDetail_list_right_title_left">娃娃脸wq</div>
                                    <div className="waterDetail_list_right_title_right">1小时前</div>
                                </div>
                                <p>这家水店服务特别好，送水速度快，水喝着也不错，而且还经济实惠。。。</p>
                            </div>
                        </div>
                        <div className="waterDetail_list">
                            <div className="waterDetail_list_left">
                                <div className="waterDetail_list_img">
                                    <img src="http://img4.imgtn.bdimg.com/it/u=3277066189,634094919&fm=26&gp=0.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="waterDetail_list_right">
                                <div className="waterDetail_list_right_title">
                                    <div className="waterDetail_list_right_title_left">娃娃脸wq</div>
                                    <div className="waterDetail_list_right_title_right">1小时前</div>
                                </div>
                                <p>这家水店服务特别好，送水速度快，水喝着也不错，而且还经济实惠。。。</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <div className="water_main">
                    <div className="water_box">
                        <div className="water_left">
                            <div className="water_img">
                                <img src="http://img4.imgtn.bdimg.com/it/u=3277066189,634094919&fm=26&gp=0.jpg" alt="" />
                            </div>
                        </div>
                        <div className="water_right">
                            <h2>【石景山】百岁山水站</h2>
                            <Rate disabled defaultValue={5} className="xingxing" />
                            <h3>月售1580桶</h3>
                            <h4>￥40<i>/桶</i></h4>
                            <h5><Icon type="like" />&nbsp;105&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;浏览数：105&nbsp;&nbsp;&nbsp;&nbsp;</h5>
                        </div>
                    </div>
                    <div className="water_address">
                        <div className="water_didian">
                            <Icon type="environment" className="water_didian_icon" />
                            <p>500m</p>
                            <p>石景山区总工会2层前行</p>
                        </div>
                        <Icon type="phone" className="water_phone" />
                    </div>
                    <div className="water_msg">
                        <h2 className="water_msg_title">商家信息</h2>
                        <div className="water_message">
                            <p>
                            "百岁山水站简单介绍描述百岁山水站简单介绍描述百岁山水站简单介绍描述百岁山水站...
                            </p>
                        </div>
                    </div>
                    <div className="water_comment">
                        <div className="water_comment_title">
                            <div className="water_comment_title_left">TA们都在说</div>
                            <div className="water_comment_title_right"><Icon type="highlight" className="water_comment_icon" />写评论</div>
                        </div>
                        <div className="waterDetail_list">
                            <div className="waterDetail_list_left">
                                <div className="waterDetail_list_img">
                                    <img src="http://img4.imgtn.bdimg.com/it/u=3277066189,634094919&fm=26&gp=0.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="waterDetail_list_right">
                                <div className="waterDetail_list_right_title">
                                    <div className="waterDetail_list_right_title_left">娃娃脸wq</div>
                                    <div className="waterDetail_list_right_title_right">1小时前</div>
                                </div>
                                <p>这家水店服务特别好，送水速度快，水喝着也不错，而且还经济实惠。。。</p>
                            </div>
                        </div>
                        <div className="waterDetail_list">
                            <div className="waterDetail_list_left">
                                <div className="waterDetail_list_img">
                                    <img src="http://img4.imgtn.bdimg.com/it/u=3277066189,634094919&fm=26&gp=0.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="waterDetail_list_right">
                                <div className="waterDetail_list_right_title">
                                    <div className="waterDetail_list_right_title_left">娃娃脸wq</div>
                                    <div className="waterDetail_list_right_title_right">1小时前</div>
                                </div>
                                <p>这家水店服务特别好，送水速度快，水喝着也不错，而且还经济实惠。。。</p>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="water_foot">
                    <div className="water_foot1">分享</div>
                    <div className="water_foot2">与我联系</div>
                </div>
            </div>
        )
    }
}
export default Blog