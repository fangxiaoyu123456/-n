import React, { Component } from 'react'
import { Icon, Rate } from 'antd'
import './water.styl'
import watertitle from '../../common/img/water.png'
import API from '../../common/js/api'
class Blog extends Component {
    state = {
        water: []
    }
    componentDidMount() {
        this.$axios({
            url: API.findWater
        }).then(res => {
            console.log(res)
            this.setState({
                water: res.data.data
            })
        })
    }
    toWaterDetail(id){
        this.props.history.push('/waterdetail/'+id)
    }
    render() {
        return (
            <div>
                <div className="header">
                    <Icon type="left" className="left" />
                    <h2>送水到家</h2>
                </div>
                <div className="water_title">
                    <img src={watertitle} alt="" />
                </div>
                {
                    this.state.water.map(item => {
                        return (
                            <div className="water_list" key={item.id} onClick={()=>this.toWaterDetail(item.id)}>
                                <div className="water_left">
                                    <div className="water_img">
                                        <img src={item.img} alt="" />
                                    </div>
                                </div>
                                <div className="water_right">
                                    <h2>{item.name}<Rate disabled defaultValue={5} className="xingxing" /></h2>
                                    <p>{item.des}</p>
                                    <h3><Icon type="environment" className="water_didian" />{item.address}</h3>
                                    <div className="water_phone">
                                        <Icon type="phone" className="phone_icon" />
                                    </div>
                                    <h4>{item.len}米</h4>
                                </div>
                            </div>
                        )
                    })
                }

                {/* address: "北京市 朝阳区"
                count: "100"
                des: "信誉好 值得信赖"
                id: "1572506170281526343"
                img: "http://img4.imgtn.bdimg.com/it/u=3277066189,634094919&fm=26&gp=0.jpg"
                len: "10m"
                likeNum: "200"
                name: "水站1"
                price: "70元/桶"
                readNum: "300"
                score: "5"
                tel: "400-100-1111" */}
                {/* <div className="water_list">
                    <div className="water_left">
                        <div className="water_img">
                            <img src="https://paimgcdn.baidu.com/841A90CB0E06BFE4?src=http%3A%2F%2Fms.bdimg.com%2Fdsp-image%2F1653178858.jpg&rz=urar_2_968_600&v=0" alt=""/>
                        </div>
                    </div>
                    <div className="water_right">
                        <h2>农夫山泉水站<Rate disabled defaultValue={3.5} className="xingxing" /></h2>
                        <p>用一份良心，送一份纯净，农夫山泉老百姓最放心的桶装水。。</p>
                        <h3><Icon type="environment" className="water_didian" />石景山古城地铁北星座大厦201</h3>
                        <div className="water_phone">
                            <Icon type="phone" className="phone_icon" />
                        </div>
                        <h4>200米</h4>
                    </div>
                </div> */}
            </div>
        )
    }
}
export default Blog