import { Component } from "react";
import CalculatorItem from "../CalculatorItem";
import "./calculator.css";

class Calculator extends Component {
  state = {
    result: "",
    isEqualActive: false,
  };

  clickHandler = (whichClicked) => {
    if (this.state.isEqualActive) {
      this.setState({ result: "" + whichClicked, isEqualActive: false });
    } else {
      this.setState({
        result: this.state.result + whichClicked,
        isEqualActive: false,
      });
    }
  };
  clearHandler = () => {
    this.setState({ result: "" });
  };
  backHandler = () => {
    this.setState({
      result: this.state.result.slice(0, this.state.result.length - 1),
    });
  };
  equalHandler = () => {
    this.setState({ result: eval(this.state.result), isEqualActive: true });
  };
  render() {
    return (
      <div className="calculator">
        <div className="result-container">
          <h1 className="result">{this.state.result}</h1>
        </div>
        <div className="count-container">
          <div className="operations">
            <CalculatorItem
              onClick={this.clearHandler}
              text="&#67;"
              className="green-text"
            />
            <CalculatorItem
              onClick={this.backHandler}
              text="&#60;"
              className="green-text"
            />
            <CalculatorItem
              onClick={() => this.clickHandler("/")}
              text="&#8725;"
              className="purple-text"
            />
            <CalculatorItem
              onClick={() => this.clickHandler("*")}
              text="&#215;"
              className="purple-text"
            />
          </div>
          <div className="operations">
            <CalculatorItem onClick={() => this.clickHandler(7)} text="7" />
            <CalculatorItem onClick={() => this.clickHandler(8)} text="8" />
            <CalculatorItem onClick={() => this.clickHandler(9)} text="9" />
            <CalculatorItem
              onClick={() => this.clickHandler("-")}
              text="&#8722;"
              className="purple-text"
            />
          </div>
          <div className="operations">
            <CalculatorItem onClick={() => this.clickHandler(4)} text="4" />
            <CalculatorItem onClick={() => this.clickHandler(5)} text="5" />
            <CalculatorItem onClick={() => this.clickHandler(6)} text="6" />
            <CalculatorItem
              onClick={() => this.clickHandler("+")}
              text="&#43;"
              className="purple-text"
            />
          </div>
          <div className="oper-structured">
            <div>
              <div className="operations">
                <CalculatorItem onClick={() => this.clickHandler(1)} text="1" />
                <CalculatorItem onClick={() => this.clickHandler(2)} text="2" />
                <CalculatorItem onClick={() => this.clickHandler(3)} text="3" />
              </div>
              <div className="operations">
                <CalculatorItem
                  onClick={() => this.clickHandler(0)}
                  text="0"
                  className="zero-btn"
                />
                <CalculatorItem
                  onClick={() => this.clickHandler(".")}
                  className="bullet-sign"
                  text="&#8729;"
                />
              </div>
            </div>
            <CalculatorItem
              onClick={this.equalHandler}
              className="equal-sign green-text"
              text="&#61;"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
