import React, { Component } from 'react'

export class LearnMore extends Component {
    render() {
        return (
            <div class="links-wrapper">
                <ul>
                    <li><a href={this.props.urlLearn}>{this.props.learn}</a></li>
                    <li><a href={this.props.urlBuy}>{this.props.buy_Order}</a></li>
                </ul>
            </div>
        )
    }
}

export default LearnMore