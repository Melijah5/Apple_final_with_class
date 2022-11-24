import React, { Component } from 'react'
import LearnMore from '../LearnMore'
import Main2 from '../Main2'

export class SectionFour extends Component {
    render() {
        
        return (
            <div>
                <section className="fourth-heghlight-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="left-side-wrapper col-sm-12 col-md-6">
                                <div className="left-side-container">
                                    <Main2 
                                        ProductTitle="iPhone 11"
                                    />
                                    <p>Just the right amount of everything.</p>
                                    <Main2 price="From $18.70/mo. or $499 with trade‑in.1" />
                                    <LearnMore
                                        urlLearn="#"
                                        learn="Learn More"
                                        urlBuy="#"
                                        buy_Order="Order" />

                                </div>
                            </div>
                            <div className="right-side-wrapper col-sm-12 col-md-6">
                                <div className="right-side-container white">
                                    <Main2 
                                        ProductTitle="Get the latest CDC response to COVID-19."
                                    />
                                    <div className='links-wrapper white'>
                                    <ul>
                                        <li><a href='#' >Watch the PSA </a></li>
                                    </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default SectionFour