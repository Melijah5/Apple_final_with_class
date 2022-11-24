import React, { Component } from 'react'
import './App.css'
import './commonResources/css/bootstrap.css'
import './commonResources/css/styles.css'
import Header from './components/header/Header'
import Alert from './components/main/Alert/Alert'
import SectionOne from './components/main/SectionOne/SectionOne'
import SectionTwo from './components/main/SectionTwo/SectionTwo'
import SectionThree from './components/main/SectionThree/SectionThree'
import SectionFour from './components/main/SectionFour/SectionFour'
import SectionFive from './components/main/SectionFive/SectionFive'
import SectionSix from './components/main/SectionSix/SectionSix'
import Footer from './components/footer/Footer'


export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Alert />
        <SectionOne />
        <SectionTwo />

        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <Footer />



      </div>
    )
  }
}
