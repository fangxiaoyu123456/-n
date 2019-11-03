import React, { Component } from 'react'
import './homeDetail.styl'
import { Icon } from 'antd';
import home_nav from '../../common/img/home_nav.png'
class Blog extends Component {
    back(){
        this.props.history.go(-1)
    }
    render() {
        return (
            <div>
                <div className="header">
                    <Icon type="left" className="left" onClick={()=>this.back()} />
                    <h2>月嫂</h2>
                    <Icon type="search" className="user" />
                </div>
                <div className="home_nav">
                    <img src={home_nav} alt="" />
                </div>

                <div className="homeDetail_list">
                    <div className="homeDetail_left">
                        <div className="homeDetail_img">
                            <img src="https://ss1.bdstatic.com/6OF1bjeh1BF3odCf/it/u=2237052141,3262683216&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=1566c36d3db705d41dbad2f35b8ee1ad" alt=""/>
                        </div>
                    </div>
                    <div className="homeDetail_right">
                        <h2>王语嫣</h2>
                        <h3>V3</h3>
                        <p className="homeDetail_weizhi">南京 | 47岁 | 大专 | 3年经营</p>
                        <p className="homeDetail_jieshao">资深的数学高级教师，毕业于师范大学，曾经带过两届高三班讲课细致耐心....</p>
                        <span className="homeDetail_guanzhu">
                        &nbsp;<Icon type="eye" />&nbsp;关注&nbsp;&nbsp;49290&nbsp;&nbsp;<Icon type="heart" />&nbsp;好评&nbsp;&nbsp;120
                        </span>
                        <div className="homeDetail_didian">
                        <Icon type="environment" />距你3.8公里
                        </div>
                        <div className="homeDetail_jiaqian">
                        ￥160<i>/小时</i>
                        </div>
                    </div>
                </div>

                <div className="homeDetail_list">
                    <div className="homeDetail_left">
                        <div className="homeDetail_img">
                            <img src="https://ss1.bdstatic.com/6OF1bjeh1BF3odCf/it/u=2237052141,3262683216&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=1566c36d3db705d41dbad2f35b8ee1ad" alt=""/>
                        </div>
                    </div>
                    <div className="homeDetail_right">
                        <h2>王语嫣</h2>
                        <h3>V3</h3>
                        <p className="homeDetail_weizhi">南京 | 47岁 | 大专 | 3年经营</p>
                        <p className="homeDetail_jieshao">资深的数学高级教师，毕业于师范大学，曾经带过两届高三班讲课细致耐心....</p>
                        <span className="homeDetail_guanzhu">
                        &nbsp;<Icon type="eye" />&nbsp;关注&nbsp;&nbsp;49290&nbsp;&nbsp;<Icon type="heart" />&nbsp;好评&nbsp;&nbsp;120
                        </span>
                        <div className="homeDetail_didian">
                        <Icon type="environment" />距你3.8公里
                        </div>
                        <div className="homeDetail_jiaqian">
                        ￥160<i>/小时</i>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Blog