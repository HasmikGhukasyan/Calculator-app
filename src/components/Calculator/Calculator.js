import CalculatorItem from "../CalculatorItem/CalculatorItem"
import "./calculator.css"

const Calculator = () => {
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
                    <CalculatorItem text="&#55;" />
                    <CalculatorItem text="&#56;" />
                    <CalculatorItem text="&#57;" />
                    <CalculatorItem text="&#8722;" className="purple-text" />
                </div>
                <div className="operations">
                    <CalculatorItem text="&#52;" />
                    <CalculatorItem text="&#53;" />
                    <CalculatorItem text="&#54;" />
                    <CalculatorItem text="&#43;" className="purple-text" />
                </div>
                <div className="oper-structured">
                    <div>
                        <div className="operations">
                            <CalculatorItem text="&#49;" />
                            <CalculatorItem text="&#50;" />
                            <CalculatorItem text="&#51;" />
                        </div>
                        <div className="operations">
                            <CalculatorItem text="&#48;" className="zero-btn"/>
                            <CalculatorItem className="bullet-sign" text="&#8729;" />
                        </div>
                    </div>
                    <CalculatorItem className="equal-sign green-text" text="&#61;" />
                </div>
            </div>
        </div>
    )
}

export default Calculator
