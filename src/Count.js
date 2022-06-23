import React, { Component } from 'react'
import Button from './Button'
import connect from './connect'

class Count extends Component {
    render() {
        return (
            <div>
                <Button type="inc">+</Button>
                <span>{this.props.count}</span>
                <Button type="dec">-</Button>
            </div>
        )
    }
}

export default connect(Count)
