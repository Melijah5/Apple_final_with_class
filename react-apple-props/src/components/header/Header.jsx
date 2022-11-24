
import Logo from '../../commonResources/images/icons/logo-sm.png';
import Cart from '../../commonResources/images/icons/cart-sm.png';
import Search from '../../commonResources/images/icons/search-icon-sm.png';
import HeaderLink from './HeaderLink/HeaderLink';

import '../../commonResources/css/bootstrap.css';
import '../../commonResources/css/styles.css';

import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div className="nav-wrapper fixed-top">
                <div className="container">
                    <nav className="navbar navbar-toggleable-sm navbar-expand-md">
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                            ☰
                        </button>
                        <a className="navbar-brand mx-auto" href="#"><img src={Logo} /></a>

                        <div className="navbar-collapse collapse">
                            <ul className="navbar-nav nav-justified w-100 nav-fill">
                                <HeaderLink  linkName='Mac' linkUrl='#' />
                                <HeaderLink linkName='iphone' linkUrl='#' />
                                <HeaderLink linkName='ipad' linkUrl='#' />
                                <HeaderLink linkName='watch' linkUrl='#' />
                                <HeaderLink linkName='tv' linkUrl='#' />
                                <HeaderLink linkName='Music' linkUrl='#' />
                                <HeaderLink linkName='Support' linkUrl='#' />
                                <HeaderLink linkUrl='#' Image ={Search} />
                                <HeaderLink Image={Cart} />
                            </ul>
                        </div>
                    </nav>
                </div>

            </div>

        )
    }
}

export default Header
