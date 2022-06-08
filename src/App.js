import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";
import MediaQuery from 'react-responsive';
import Foot from "./Components/Foot";
import Sign_in from "./Components/Sign_in";
import Form from "./Components/Form";
import { IconName } from "react-icons/fa";
import Imgage from "./Components/Imgage";
import CheckBox from "./Components/CheckBox";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
  }

  componentDidMount() {
    const handler = e => this.setState({matches: e.matches});
    window.matchMedia("(min-width: 768px)").addEventListener('change', handler);
  }
  render() {
    return (
      <div style={{background:'white'}} >
      {this.state.matches && (
        <div className="full">
      <div className="size">
        <Imgage />
      </div>
      <div className="size">
        <div className="sign">
          <Sign_in />
          <Form /><br></br><br></br>
          <CheckBox  />
<br></br><br></br>
          <Foot />
        </div>
      </div>
    </div>
)}
      {!this.state.matches && (
        <div className="sizem">
      <div className="signm">
        <Sign_in />
        <Form /><br></br><br></br>
        <CheckBox  /><br></br><br></br>
        <Foot />
      </div>
    </div>)}
      </div>
    );
  }
}


export default App;
