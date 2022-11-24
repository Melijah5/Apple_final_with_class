import React, { Component } from 'react'
import Main1 from '../Main1'
import LearnMore from '../LearnMore'

export class SectionThree extends Component {
    render() {
        return (
            < section className="third-hightlight-wrapper" >

                <Main1 
                    ProductTitles='iPhone 11 Pro'
                />
                <h3 >Pro cameras. Pro display. Pro performance.</h3>
                <Main1
                    prices='From $24.95/mo. or $599 with trade‑in.'
                />
                <LearnMore
                    urlLearn="#"
                    learn="Learn More"
                    urlBuy="#"
                    buy_Order="Buy" />
            </section>
        )
    }
}

export default SectionThree