import React, { Component } from 'react'
import './homeDetail.styl'
import { Icon } from 'antd';
import home_nav from '../../common/img/home_nav.png'
import Back from '../../views/back/back'
import API from '../../common/js/api'
import querystring from 'querystring'
class Blog extends Component {
    state = {
        message:[],
        type:""
    }
    componentDidMount(){
        var params=querystring.parse(this.props.location.search.slice(1))
        this.setState({
            type:params.type
        })
        console.log(params)
        this.$axios({
            url:API.findHomeWorker,
            params:{
                type:params.type
            }
        }).then(res=>{
            console.log(res)
            this.setState({
                message:res.data.data
            })
        })
    }
    toCom(id){
        this.props.history.push('/homecom/'+id)
    }
    render() {
        return (
            <div className="body">
                <div className="header">
                    <Back></Back>
                    <h2>{this.state.type}</h2>
                    <Icon type="search" className="user" />
                </div>
                <div className="home_nav">
                    <img src={home_nav} alt="" />
                </div>
                {
                    this.state.message.map(item=>{
                        return (
                    <div className="homeDetail_list" key={item.id} onClick={()=>this.toCom(item.id)}>
                    <div className="homeDetail_left">
                        <div className="homeDetail_img">
                            <img src={item.img} alt=""/>
                        </div>
                    </div>
                    <div className="homeDetail_right">
                        <h2>{item.name}</h2>
                        <h3>{item.vNum}</h3>
                        <p className="homeDetail_weizhi">{item.city} | {item.age}岁 | {item.edu} | {item.year}年经营</p>
                        <p className="homeDetail_jieshao">资深的数学高级教师，毕业于师范大学，曾经带过两届高三班讲课细致耐心....</p>
                        <span className="homeDetail_guanzhu">
                        &nbsp;<Icon type="eye" />&nbsp;关注&nbsp;&nbsp;{item.readNum}&nbsp;&nbsp;<Icon type="heart" />&nbsp;好评&nbsp;&nbsp;{item.likeNum}
                        </span>
                        <div className="homeDetail_didian">
                        <Icon type="environment" />距你{item.len}公里
                        </div>
                        <div className="homeDetail_jiaqian">
                        ￥{item.price}<i>/小时</i>
                        </div>
                    </div>
                </div>
                        )
                    })
                }
                
                {/* age: "2"
                city: "432"
                edu: "初中"
                experience: "324"
                id: "1572230858414255696"
                img: "http://pzpj1ev9k.bkt.clouddn.com/1572230769310.jpeg"
                info: "432"
                len: "234"
                likeNum: "324"
                name: "2143"
                price: "3245"
                qualification: "["学位证","家政管理师","健康证"]"
                readNum: "234"
                tel: "3"
                type: "["家电清洗","保姆","钟点工","保洁"]"
                vNum: "324"
                year: "234" */}
                {/* <div className="homeDetail_list">
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
                </div> */}
                
            </div>
        )
    }
}
export default Blog