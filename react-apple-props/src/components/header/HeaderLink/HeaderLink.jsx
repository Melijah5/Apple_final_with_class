import React, { Component } from 'react'

export class HeaderLink extends Component {
  render() {
    return (
      
      <li className="nav-item"><a className="nav-link js-scroll-trigger " href={this.props.linkUrl}>
      {this.props.linkName} <img src={this.props.Image} />
      </a>
      </li>
     
    )
  }
}

export default HeaderLink