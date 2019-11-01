import React, { Component } from 'react'
import './swipe.css'
import {  Carousel } from 'antd';
class Blog extends Component {
    render() {
        return (
            <div className="swipe">
                <Carousel autoplay>
                    {
                        this.props.item.map(item => {
                            return (
                                <div key={item.id}>
                                    <img src={item.img} alt="" />
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
        )
    }
}
export default Blog