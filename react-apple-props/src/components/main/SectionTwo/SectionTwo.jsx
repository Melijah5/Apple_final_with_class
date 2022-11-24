import React, { Component } from 'react'
import Main1 from '../Main1'
import LearnMore from '../LearnMore'

export class SectionTwo extends Component {
    render() {
    
        return (
            
                <section className="second-hightlight-wrapper">
                    <div className="new-alert"> New </div>

                    <Main1
                        ProductTitle='MacBook Air'
                    />
                    <h3 className="black">Twice the speed. Twice the storage.</h3>
                     <Main1
                    price='From $999'
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

export default SectionTwo

