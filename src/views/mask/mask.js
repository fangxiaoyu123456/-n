import React, { Component } from 'react'
import './mask.styl'
import store from '../../store/index'
import API from '../../common/js/api'
import * as qiniu from 'qiniu-js'
import {withRouter} from 'react-router-dom'
class Blog extends Component {
    state = {
        img:''
    }
    con(e) {
        e.stopPropagation();
    }
    componentDidMount(){
        this.$axios({
            url:API.findUser,
            method:"post",
            data:{
                name:store.getState().name
            }
        }).then(res=>{
            this.setState({
                img:res.data.data[0].img
            })
        })
    }
    upload(e){
        // console.log(e.target.files[0])
        var file = e.target.files[0]
        //判断文件大小
        if(file.size>2*1024*1024){
            alert('文件过大')
            return
        }
        //查看后缀名   .jpg
        var extname = file.name.slice(file.name.lastIndexOf('.'))  
        if(!(extname==='.jpg'||extname==='.png'||extname==='.gif'||extname==='.jpeg')){
            alert('文件类型错误')
            return 
        }

        //上班上传头像
        // var params = URLSearchParams()
        // params.append('name',store.getState().name)
        // params.append('img',file)
        // this.$axios({
        //     url:API.updateUser,
        //     method:"post",
        //     data:params
        // }).then(res=>{
        //     console.log(res)
        // })

        //七牛云把图片变成在线链接上传
        var filename = new Date().getTime() + extname
        this.$axios({
            url:"/getToken",
            method:"get"
        }).then(res=>{
            var token = res.data.token
            var url = res.data.url
            qiniu.upload(file, filename,token).subscribe(r=>{
                console.log(r)
                if(r.total.percent==100){   //100是完成了
                    var img = url + '/' + filename
                    this.setState({
                        img:img
                    })
                    this.$axios({
                        url:API.updateUser,
                        method:"post",
                        data:{
                            img:img,
                            name:store.getState().name
                        }
                    }).then(res=>{
                        alert(res.data.info)
                    })
                }
            })
        })

    }
    xiugai(){
        this.props.history.push('/changepass')
    }
    out(){
        this.props.history.push('/login')
    }
    render() {
        var style = this.props.isShowMask ? { left: '0px' } : { left: "-100vw" }
        return (

            <div className="mask" onTouchEnd={(e) => this.props.hideMask(e)} style={style}>
                <div className="con" onTouchEnd={(e) => this.con(e)}>
                    <div className="img_box111">
                        <img src={this.state.img?this.state.img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2326454435,2093786059&fm=26&gp=0.jpg'} alt=""/>
                        <input type="file" onChange={(e)=>this.upload(e)}/>
                    </div>
                    <span onClick={()=>this.out()}>退出登录</span><br/>
                    <span onClick={()=>this.xiugai()}>修改密码</span>
                </div>
            </div>
        )
    }
}
export default withRouter(Blog)