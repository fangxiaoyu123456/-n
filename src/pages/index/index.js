import React, { Component } from 'react'
import './index.css'
import { Input, Button, Icon, Radio, Drawer } from 'antd';
import API from '../../common/js/api'
import Swipe from '../../views/swipe/swipe'
import one from '../../common/img/1.jpg'
import two from '../../common/img/2.jpg'
import three from '../../common/img/3.jpg'
import four from '../../common/img/4.jpg'
import five from '../../common/img/5.jpg'
import six from '../../common/img/6.jpg'
import Time from '../../views/time/time'
import Mask from '../../views/mask/mask'
import store from '../../store/index'
const RadioGroup = Radio.Group;
const { Search } = Input;
class Blog extends Component {
    state = {
        banner: [],
        city: "",
        visible: false,
        placement: 'left',
        time:"2",
        isShowMask:false,
    }
    componentDidMount() {
        //轮播图数据
        this.$axios({
            url: API.banner,
        }).then(res => {
            console.log(res)
            // this.state.banner = res.data.data
            this.setState({
                banner: res.data.data
            })
        })
        var BMap = window.BMap
        var myCity = new BMap.LocalCity();
        myCity.get(result => {
            console.log(result.name)  //城市名称
            // let city=this.state.city;
            // city=result.name
            this.setState({
                city: result.name
            })
        })
        console.log(store.getState().name)
        console.log('111')
    }
    changpass(){
        this.props.history.push('/changepass')
    }
    toRoute(url){
        this.props.history.push(url)
    }
    //touch
    startY = 0;
    endY = 0
    start(e){
        this.startY = e.touches[0].clientY
        // console.log('start')
        this.endY = 0
    }
    move(e){
        this.endY = e.touches[0].clientY
        // console.log('move')
    }
    end(e){
        // console.log('end')
        // console.log(this.startY,this.endY)
        if(this.startY>this.endY){
            console.log('上滑')
        }
        if(this.endY>this.startY){
            console.log('下滑')
        }

        if(this.endY != 0 ){   //不等于0就是上滑下滑
            e.stopPropagation();   //阻止事件传播
        }
    }

    showMask(){
        this.setState({
            isShowMask:true
        })
    }
    hideMask(e){
        e.preventDefault()
        this.setState({
            isShowMask:false
        })
    }
    
    // showDrawer = () => {
    //     this.setState({
    //         visible: true,
    //     });
    // };

    // onClose = () => {
    //     this.setState({
    //         visible: false,
    //     });
    // };

    // onChange = e => {
    //     this.setState({
    //         placement: e.target.value,
    //     });
    // };

    render() {
        return (
            <div>
                <Mask isShowMask={this.state.isShowMask} hideMask={(e)=>this.hideMask(e)}
                 changepass={()=>this.changepass()}
                ></Mask>
                <div className="header">
                    <Icon type="unordered-list" className="unordered-list" onTouchEnd={()=>this.showMask()}  hideMask={(e)=>this.hideMask(e)}/>
                    <h2>龙山花园</h2>
                    <div className="header_right">
                        <span>
                            <Icon type="environment" />
                        </span>
                        <span>{this.state.city}</span>
                    </div>
                </div>
                <div className="top">
                    <Search className="input11"
                        placeholder="search"
                        onSearch={value => console.log(value)}
                        style={{ width: 200 }}
                    />
                    <Button type="primary" className="btn11" onClick={()=>this.changpass()}>我要发布</Button>
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
                            {/* <span className="p_two2">{this.state.time}</span> */}
                            <Time></Time>
                        </p>
                    </div>
                </div>
                {/* 先触发里面，冒到外面     要先触发外面  再出触发里面  需要onTouchStartCapture  加Capture */}
                <div className="nav_box"
                    onTouchStartCapture={(e)=>this.start(e)}
                    onTouchMoveCapture={(e)=>this.move(e)}
                    onTouchEndCapture={(e)=>this.end(e)}
                >
                    <ul>
                        <li onTouchEndCapture={() => this.toRoute('/teacher')}>
                            <img src={one} alt="" />
                            <h5>找家教</h5>
                        </li>
                        <li onTouchEndCapture={() => this.toRoute('/water')}>
                            <img src={two} alt="" />
                            <h5>送水到家</h5>
                        </li>
                        <li onTouchEndCapture={() => this.toRoute('repair')}>
                            <img src={three} alt="" />
                            <h5>维修服务</h5>
                        </li>
                        <li onTouchEndCapture={() => this.toRoute('/home')}>
                            <img src={four} alt="" />
                            <h5>家政</h5>
                        </li>
                        <li>
                            <img src={five} alt="" />
                            <h5>社区互动</h5>
                        </li>
                        <li>
                            <img src={six} alt="" />
                            <h5>更多服务</h5>
                        </li>
                    </ul>
                </div>
                {/* <RadioGroup
                    style={{ marginRight: 8 }}
                    defaultValue={this.state.placement}
                    onChange={this.onChange}
                >
                </RadioGroup>
                <Drawer
                    placement={this.state.placement}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <div className="side">
                        <div className="side_left"></div>
                        <div className="side_right">呵呵哒</div>
                    </div>
                    <ul className="side_main">
                        <li><span>找家教</span></li>
                        <li><span>找家教</span></li>
                        <li><span>找家教</span></li>
                        <li><span>找家教</span></li>
                        <li><span>找家教</span></li>
                        <li><span>找家教</span></li>
                        <li><span>找家教</span></li>
                        <li><span>找家教</span></li>
                        <li onClick={()=>this.changpass()}><span>账号设置</span></li>
                        <li><span>退出登录</span></li>
                    </ul>
                </Drawer> */}
            </div>
        )
    }
}
export default Blog