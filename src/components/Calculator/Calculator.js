import { Component } from "react"
import CalculatorItem from "../CalculatorItem"
import "./calculator.css"


class Calculator extends Component {
    render() {
        return (
            <div className="calculator">
                <div className="result-container">
                    <h1 className="result">0</h1>
                </div>
                <div className="count-container">
                    <div className="operations">
                        <CalculatorItem text="&#67;" className="green-text" />
                        <CalculatorItem text="&#60;" className="green-text" />
                        <CalculatorItem text="&#8725;" className="purple-text" />
                        <CalculatorItem text="&#215;" className="purple-text" />
                    </div>
                    <div className="operations">
                        <CalculatorItem text="7" />
                        <CalculatorItem text="8" />
                        <CalculatorItem text="9" />
                        <CalculatorItem text="&#8722;" className="purple-text" />
                    </div>
                    <div className="operations">
                        <CalculatorItem text="4" />
                        <CalculatorItem text="5" />
                        <CalculatorItem text="6" />
                        <CalculatorItem text="&#43;" className="purple-text" />
                    </div>
                    <div className="oper-structured">
                        <div>
                            <div className="operations">
                                <CalculatorItem text="1" />
                                <CalculatorItem text="2" />
                                <CalculatorItem text="3" />
                            </div>
                            <div className="operations">
                                <CalculatorItem text="0" className="zero-btn" />
                                <CalculatorItem className="bullet-sign" text="&#8729;" />
                            </div>
                        </div>
                        <CalculatorItem className="equal-sign green-text" text="&#61;" />
                    </div>
                </div>
            </div>
        )
    }
}


export default Calculator
