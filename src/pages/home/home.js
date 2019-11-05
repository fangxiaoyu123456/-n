import React, { Component } from 'react'
// import './home.css'
import './home.styl'
import { Icon, Input, Button } from 'antd';
import API from '../../common/js/api'
import Swipe from '../../views/swipe/swipe'
import a from '../../common/img/a.png'
import b from '../../common/img/b.png'
import c from '../../common/img/c.png'
import d from '../../common/img/d.png'
import e from '../../common/img/e.png'
import f from '../../common/img/f.png'
import g from '../../common/img/g.png'
import h from '../../common/img/h.png'
import i from '../../common/img/i.png'
import Back from '../../views/back/back'
const { Search } = Input;
class Blog extends Component {
    state = {
        home: []
    }
    componentDidMount() {
        this.$axios({
            url: API.homeBanner
        }).then(res => {
            console.log(res)
            this.setState({
                home: res.data.data
            })
        })
    }
    baomu(type){
        this.props.history.push('/homedetail?type='+type)
    }
    render() {
        return (
            <div>
                <div className="header">
                    <Back></Back>
                    <h2>找家政</h2>
                    <Icon type="user" className="user" />
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
                <div className="home_list">
                    <ul>
                        <li>
                            <img src={a} alt=""  onClick={()=>this.props.history.push('/homedetail?type='+'钟点工')}/>
                            <h3>钟点工</h3>
                        </li>
                        <li>
                            {/* <img src={b} alt="" onClick={()=>this.baomu('保姆')} /> */}
                            <img src={b} alt="" onClick={()=>this.props.history.push('/homedetail?type='+'保姆')} />
                            <h3>保姆</h3>
                        </li>
                        <li>
                            <img src={c} alt=""  onClick={()=>this.props.history.push('/homedetail?type='+'月嫂')} />
                            <h3>月嫂</h3>
                        </li>
                        <li>
                            <img src={d} alt=""  onClick={()=>this.props.history.push('/homedetail?type='+'专业保洁')} />
                            <h3>专业保洁</h3>
                        </li>
                        <li>
                            <img src={e} alt=""  onClick={()=>this.props.history.push('/homedetail?type='+'家电清洗')} />
                            <h3>家电清洗</h3>
                        </li>
                        <li>
                            <img src={f} alt=""  onClick={()=>this.props.history.push('/homedetail?type='+'家居保养')} />
                            <h3>家居保养</h3>
                        </li>
                        <li>
                            <img src={g} alt=""  onClick={()=>this.props.history.push('/homedetail?type='+'新居开荒')} />
                            <h3>新居开荒</h3>
                        </li>
                        <li>
                            <img src={h} alt="" />
                            <h3>更多</h3>
                        </li>
                    </ul>
                </div>

                <div className="home_foot">
                    <div className="home_one">
                        <div className="home_smBox">
                            <img src={i} alt="" />
                        </div>
                    </div>
                    <div className="home_two">
                        <div className="home_smBox">
                            <img src={i} alt="" />
                        </div>
                    </div>
                    {/* <div className="home_one">
                        <div className="home_smBox">
                            <img src={i} alt="" />
                        </div>
                    </div>
                    <div className="home_two">
                        <div className="home_smBox">
                            <img src={i} alt="" />
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
}
export default Blog