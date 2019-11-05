import React, { Component } from 'react'
import Back from '../../views/back/back'
import { Icon, Rate } from 'antd';
import repair_nav from '../../common/img/repair_nav.png'
import './repair.styl'
import API from '../../common/js/api'
class Blog extends Component {
    state = {
        message: []
    }
    
    componentDidMount() {
        this.$axios({
            url: API.findRepair
        }).then(res => {
            console.log(res)
            this.setState({
                message: res.data.data
            })
        })
    }
    toRepair(id){
        this.props.history.push('/repairdetail/'+id)
    }
    render() {
        return (
            <div>
                <div className="header">
                    <Back></Back>
                    <h2>商家列表</h2>
                    <Icon type="search" className="user" />
                </div>
                <div className="home_nav">
                    <img src={repair_nav} alt="" />
                </div>
                {
                    this.state.message.map(item => {
                        return (
                            <div className="repair_list" key={item.id} onClick={()=>this.toRepair(item.id)}>
                                <div className="repair_list_item">
                                    <h2>{item.name}</h2>
                                    <h5>
                                        <Rate disabled defaultValue={2} className="repair_xing" />
                                    </h5>
                                    <p>{item.info}</p>
                                    <h3>{item.address}</h3>
                                    <Icon type="environment" className="repair_didian" />
                                    <a href={'tel:' + this.state.message.tel} className="repair_phone">
                                        <Icon type="phone" />
                                    </a>
                                    <h4 className="repair_address">{item.len}</h4>
                                </div>
                            </div>
                        )
                    })
                }


                {/* <div className="repair_list">
                    <div className="repair_list_item">
                        <h2>百佳手机维修中心</h2>
                        <h5>
                            <Rate disabled defaultValue={2} className="repair_xing" />
                        </h5>
                        <p>电脑、办公设备、网络、监控、门禁、数据恢复......</p>
                        <h3>石景山古城地铁北星座大厦201</h3>
                        <Icon type="environment" className="repair_didian" />
                        <div className="repair_phone">
                            <Icon type="phone" />
                        </div>
                        <h4 className="repair_address">200米</h4>
                    </div>
                </div> */}
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
            </div>
        )
    }
}
export default Blog