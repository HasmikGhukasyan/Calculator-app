import { Component } from "react";
import CalculatorItem from "../CalculatorItem";
import "./calculator.css";

class Calculator extends Component {
  state = {
    result: "",
    isEqualActive: false,
  };

  clickHandler = (whichElement = "") => {
    if (this.state.isEqualActive) {
      this.setState({ result: whichElement, isEqualActive: false });
    } else {
      this.setState({
        result: this.state.result + whichElement,
        isEqualActive: false,
      });
    }
  };

  clearHandler = () => {
    this.setState({ result: "" });
  };

  equalHandler = () => {
    this.setState({ result: eval(this.state.result), isEqualActive: true });
  };

  backHandler = () => {
    this.setState({
      result: this.state.result.slice(0, this.state.result.length - 1),
    });
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
              text="&#67;"
              onClick={this.clearHandler}
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
            <CalculatorItem text="7" onClick={() => this.clickHandler(7)} />
            <CalculatorItem text="8" onClick={() => this.clickHandler(8)} />
            <CalculatorItem text="9" onClick={() => this.clickHandler(9)} />
            <CalculatorItem
              text="&#8722;"
              onClick={() => this.clickHandler("-")}
              className="purple-text"
            />
          </div>
          <div className="operations">
            <CalculatorItem text="4" onClick={() => this.clickHandler(4)} />
            <CalculatorItem text="5" onClick={() => this.clickHandler(5)} />
            <CalculatorItem text="6" onClick={() => this.clickHandler(6)} />
            <CalculatorItem
              text="&#43;"
              onClick={() => this.clickHandler("+")}
              className="purple-text"
            />
          </div>
          <div className="oper-structured">
            <div>
              <div className="operations">
                <CalculatorItem text="1" onClick={() => this.clickHandler(1)} />
                <CalculatorItem text="2" onClick={() => this.clickHandler(2)} />
                <CalculatorItem text="3" onClick={() => this.clickHandler(3)} />
              </div>
              <div className="operations">
                <CalculatorItem
                  text="0"
                  onClick={() => this.clickHandler(0)}
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
