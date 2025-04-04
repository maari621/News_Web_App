import React, { Component } from 'react'
import Navbar from "../Navbar/Navbar";
import Footer from '../Footer/Footer';
import Body from './Body';
export default class BodyContent extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Body />
        <Footer/>
      </div>
    )
  }
}
