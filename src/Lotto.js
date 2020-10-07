import React, { Component } from "react";
import LottoBalls from "./LottoBalls";
import "./Lottoballs.css";

class Lotto extends Component {
  // state = { num1: 1, num2: 2, num3: 3 };

  static defaultProps = { NumBall: 6, title: "lotto numbers", MaxNum: 40 };
  state = { num: Array.from({ length: this.props.NumBall }) };

  setran = () => {
    this.setState((Curstate) => {
      return {
        num: Curstate.num.map((n) => {
          return Math.floor(Math.random() * this.props.MaxNum) + 1;
        }),
      };
    });
  };
  render() {
    return (
      <div>
        <p>
          {this.state.num.map((n) => (
            <LottoBalls nur={n} />
          ))}
          balls here go
        </p>

        <button onClick={this.setran}>Generate 💚 </button>
      </div>
    );
  }
}

export default Lotto;
