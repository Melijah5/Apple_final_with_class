import React, { Component } from 'react'
import Arcade from '../../../commonResources/images/icons/arcade.png'
import LearnMore from '../LearnMore'
import Main2 from '../Main2'

export class SectionSix extends Component {
    render() {
        return (
            <div>
                <section className="sixth-heghlight-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="left-side-wrapper col-sm-12 col-md-6">
                                <div className="left-side-container">
                                    <Main2
                                        ProductTitle=<img src={Arcade} />
                                    />
                                    <div class="description-wraper white"> Agent 8 is a small hero on a big mission. </div>
                                    
                                    <LearnMore
                                        urlLearn="#"
                                        learn="Play now"
                                        urlBuy="#"
                                        buy_Order=" Learn about Apple Arcade" />

                                </div>
                            </div>
                            <div className="right-side-wrapper col-sm-12 col-md-6">
                                <div className="right-side-container">
                                    <Main2
                                        ProductTitle='Apple Card Monthly Installments'
                                    />
                                    <p>Pay for your next iPhone over<br />
                                        time, interest-free with Apple <br />
                                        Card.</p>
                                    <LearnMore
                                        urlLearn="#"
                                        learn="Learn More"
                                        urlBuy="#"
                                        buy_Order="Apply now" />

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default SectionSix