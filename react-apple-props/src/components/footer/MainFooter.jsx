import React, { Component } from 'react'

class MainFooter extends Component {
  render() {
    
    return (
            <li><a href={this.props.linkUrl}>{this.props.listName}</a></li>
    )
  }
}

export default MainFooter


