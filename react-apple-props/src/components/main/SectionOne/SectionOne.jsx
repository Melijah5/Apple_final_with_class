import React, { Component } from 'react'
import Main1 from '../Main1'
import LearnMore from '../LearnMore'


export class SectionOne extends Component {
    render() {
        return (
            <section className="first-hightlight-wrapper">
               
                    <div className="new-alert"> New </div>

                    <Main1
                        ProductTitle='iPad Pro'
                    />

                    <LearnMore
                        urlLearn="#"
                        learn="Learn More"
                        urlBuy="#"
                        buy_Order="Order" />

                    <div className="ipod-caption row">
                        <div className="col-sm-12 col-md-6 text-md-right">iPad Pro available starting 3.25</div>
                        <div className="col-sm-12 col-md-6 text-md-left">Magic Keyboard coming in May</div>
                    </div>
               
            </section>
        )
    }
}

export default SectionOne

