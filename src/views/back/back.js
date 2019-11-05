import React, { Component } from 'react'
import {Icon} from 'antd'
import './back.styl'
import {withRouter} from 'react-router-dom'
class Blog extends Component {
    back(){
        this.props.history.go(-1)
    }
    render() {
        return (
            <div>
                <Icon type="left" className="left" onClick={()=>this.back()} />
            </div>
        )
    }
}
export default withRouter(Blog)