import React, { Component } from 'react'

export class Main2 extends Component {
    render() {
        return (

            <div className="title-wraper ">
                {this.props.ProductTitle}
                {this.props.children}

                <div className="price-wrapper ">
                    {this.props.price}
                </div>
            </div>


        )
    }
}

export default Main2


