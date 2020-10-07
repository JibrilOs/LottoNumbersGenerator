import React, { Component } from "react";
import "./Lottoballs.css";
class LottoBalls extends Component {
  render() {
    return (
      <div className="balls">
        <div> {this.props.nur}</div>
      </div>
    );
  }
}

export default LottoBalls;
