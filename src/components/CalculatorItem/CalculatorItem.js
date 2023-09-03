import { Component } from "react";
import "./calculatorItem.css";

class CalculatorItem extends Component {
  render() {
    const { text, onClick, className = "" } = this.props;

    return (
      <button onClick={onClick} className={`calcItem ${className} `}>
        <span>{text}</span>
      </button>
    );
  }
}

export default CalculatorItem;
