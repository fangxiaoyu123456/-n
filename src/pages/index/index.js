import React, { Component } from 'react'
import './index.css'
import { Input, Button, Icon } from 'antd';
import API from '../../common/js/api'
import Swipe from '../../views/swipe/swipe'
import one from '../../common/img/1.jpg'
import two from '../../common/img/2.jpg'
import three from '../../common/img/3.jpg'
import four from '../../common/img/4.jpg'
import five from '../../common/img/5.jpg'
import six from '../../common/img/6.jpg'
const { Search } = Input;
class Blog extends Component {
    state = {
        banner: []
    }
    componentDidMount() {
        //轮播图数据
        this.$axios({
            url: API.banner,
        }).then(res => {
            console.log(res)
            // this.state.banner = res.data.data
            this.setState({
                banner:res.data.data
            })
        })
    }
    zhaojiajiao(){
        this.props.history.push('/teacher')
    }
    jiazhen(){
        this.props.history.push('/home')
    }
    render() {
        return (
            <div>
                <div className="header">
                    <h2>龙山花园</h2>
                </div>
                <div className="top">
                    <Search className="input1"
                        placeholder="search"
                        onSearch={value => console.log(value)}
                        style={{ width: 200 }}
                    />
                    <Button type="primary" className="btn1">我要发布</Button>
                </div>
                {/* <div className="swipe">
                    <Carousel autoplay>
                        {
                            this.state.banner.map(item => {
                                return (
                                    <div key={item.id}>
                                        <img src={item.img} alt="" />
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div> */}
                <Swipe item={this.state.banner}></Swipe>
                <div className="weather">
                    <div className="left1">
                        <Icon type="ant-cloud" className="baiYun" />
                    </div>
                    <div className="right1">
                        <p className="p_one">
                            <span className="p_one1">多云/小雨&nbsp;&nbsp;27/30C</span>
                            <span className="p_one2">星期一</span>
                        </p>
                        <p className="p_two">
                            <span className="p_two1">3-4级/4-5级风</span>
                            <span className="p_two2">18:00</span>
                        </p>
                    </div>
                </div>
                <div className="nav_box">
                    <ul>
                        <li onClick={()=>this.zhaojiajiao()}>
                            <img src={one} alt=""/>
                            <h5>找家教</h5>
                        </li>
                        <li>
                            <img src={two} alt=""/>
                            <h5>送水到家</h5>
                        </li>
                        <li>
                            <img src={three} alt=""/>
                            <h5>维修服务</h5>
                        </li>
                        <li onClick={()=>this.jiazhen()}>
                            <img src={four} alt=""/>
                            <h5>家政</h5>
                        </li>
                        <li>
                            <img src={five} alt=""/>
                            <h5>社区互动</h5>
                        </li>
                        <li>
                            <img src={six} alt=""/>
                            <h5>更多服务</h5>
                        </li>
                    </ul>
                </div>            
            </div>
        )
    }
}
export default Blog