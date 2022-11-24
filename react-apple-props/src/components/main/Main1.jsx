import React, { Component } from 'react'

export class Main1 extends Component {
  render() {
    return (
            <div className="container">
            <div className="title-wraper bold black"> {this.props.ProductTitle} </div>
                {this.props.children}
            <div className="title-wraper bold"> {this.props.ProductTitles} </div>
            <div className="price-wrapper grey">{this.props.price}</div>
            <div className="price-wrapper">{this.props.prices}</div>
            </div>
    )
  }
}

export default Main1