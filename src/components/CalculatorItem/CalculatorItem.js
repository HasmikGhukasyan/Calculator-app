import { Component } from "react"
import "./calculatorItem.css"

class CalculatorItem extends Component {
    
    render() {
        const { text, onClick, className = "" } = this.props

        return (
            <button className={`calcItem ${className} `} onClick={onClick}>
                <span>{text}</span>
            </button>
        )
    }
}


export default CalculatorItem