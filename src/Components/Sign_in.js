
import { FaArrowLeft } from "react-icons/fa";
import { HiOutlineAdjustments} from "react-icons/hi";

import React, { Component } from 'react'

 class Sign_in extends Component {
  render() {
    return (
      <div >
      <div className="main"  >

      <button className="arrow" ><h2><FaArrowLeft /></h2></button>
     <h2 className="sub2" >Sign In</h2>
      <button className="menu" ><img src='symbol.png' className="track" /></button>
    </div>
    <p className="lets">Let's verify that it's you</p> 
    </div>
    
    )
  }
}

export default Sign_in
 