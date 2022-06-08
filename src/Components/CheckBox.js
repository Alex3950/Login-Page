import React, { Component } from 'react'
import Icon from 'react-icons-kit';
import { BsCircle } from "react-icons/bs";
export class CheckBox extends Component {
  render() {
    return (
     
       
          
        <div>
    <div className='container'>
      <div className='checkbox-style'>
      <div className="round" >
         <input type="checkbox" id="checkbox" />
          <label for="checkbox" ></label>
      </div>
      <div ><label className='staysign'>
      Stay Signed in</label></div></div>
</div>
      
<p className='forgot'>
Forget your Password? Click to <a href="" className="resend">Resend</a>
</p>
      
      </div>
        
    )
  }
}

export default CheckBox