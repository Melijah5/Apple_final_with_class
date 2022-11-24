import React, { Component } from 'react'
import Apple from '../../../commonResources/images/icons/apple-tv-logo.png'
import Banker from '../../../commonResources/images/home/banker.png'
import Watch from '../../../commonResources/images/icons/watch-series5-logo.png'
import Main2 from '../Main2'
import LearnMore from '../LearnMore'

export class SectionFive extends Component {
    render() {
        return (
            <div>
                <section className="fifth-heghlight-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="left-side-wrapper col-sm-12 col-md-6">
                                <div className="left-side-container">
                                    <Main2
                                        ProductTitle=<img src={Apple} />
                                    />
                                    <div className='tvshow-logo-wraper'>
                                    <Main2
                                        ProductTitle=<img src={Banker} />
                                    /></div>
                                    <div className='watch-more-wrapper'><a href="#">Watch now on the Apple TV App</a></div>
                                    
                                </div>
                            </div>
                            <div className="right-side-wrapper col-sm-12 col-md-6">
                                <div className="right-side-container">
                                    <Main2
                                        ProductTitle=<img src={Watch}/>
                                    />
                                    <p>With the Always-On Retina display.<br/>
                                    You’ve never seen a watch like this.</p>
                                    <LearnMore
                                        urlLearn="#"
                                        learn="Learn More"
                                        urlBuy="#"
                                        buy_Order="Buy" />

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default SectionFive