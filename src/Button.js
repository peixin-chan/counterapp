import React, { Component } from 'react'
import connect from './connect'

class Button extends Component {
    clickHandle=()=>{
        let {type,increm,decrem} =this.props;
        if(type==="inc") increm(2)
        else decrem()
    }
    render() {
        return (
            <button onClick={this.clickHandle}>
                {this.props.children}
            </button>
        )
    }
}

export default connect(Button)
