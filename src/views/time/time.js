import React, { Component } from 'react'
class Blog extends Component {
    state = {
        time: ""
    }
    componentDidMount() {
        this.time = setInterval(() => {
            var date = new Date()
            var hours = (date.getHours() + "").padStart(2, '0')
            var minutes = (date.getMinutes() + "").padStart(2, '0')
            var seconds = (date.getSeconds() + "").padStart(2, '0')
            this.setState({
                time: hours + ':' + minutes + ':' + seconds
            })
        }, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.time)
    }
    render() {
        return (
            <span className="p_two2">{this.state.time}</span>
        )
    }
}
export default Blog