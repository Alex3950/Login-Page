import React, { Component } from "react";
import { Icon } from "react-icons-kit";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa";
import useForm from "./UseForm";
import Valid from "./Valid";

export class Form extends Component {
  constructor(props)
  {
    super(props)

    this.state = {
       number:'',
       password:''
    }

    }

  num = (event) => {
    this.setState({
      number: event.target.value,
    });
  };
  pass = (event) => {
    this.setState({
      password: event.target.value,
    });
  };


  validate=(values) => {
    let errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!EmailValidator.validate(values.email)) {
      errors.email = "Invalid email address";
    }

    const passwordRegex = /(?=.*[0-9])/;
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be 8 characters long.";
    } else if (!passwordRegex.test(values.password)) {
      errors.password = "Invalida password. Must contain one number";
    }

    return errors;
  };

 

  render() {
    return (
      <form>
        <div className="form-inputs">
          <label className="module">Phone Number</label>
          <div className='form-input'>
              <div className='symbol'><label>+91</label></div>

              <input type='text' pattern='' className={{errors.email && touched.email && "error"},'input'}  value={values.email} onChange={handleChange} minLength={10} maxLength={10} onBlur={handleBlur} placeholder='00000 00000'
               />
                
                
        </div>
          <br></br>

          <label className="module">Temporary Password </label>

          <div className='form-input'>
              <div className='form-inputn'>
              <input  type='password' pattern="" value={this.state.password} onchange={this.pass} placeholder="* * * *" className='input' minLength={8}/>

              
              <div  > <label><button className='eye' >< AiOutlineEyeInvisible style={{color:'grey'}}/></button></label></div></div></div>
          
        </div>  
        

         
      </form>
    );
  }
}


export default Form;


// <div className="form2">
//           <input type='checkbox' className="checkbox"></input>
//           <span>Stay SignedIN</span>
//         </div>