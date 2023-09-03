import { Component } from "react"
import "./calculatorItem.css"

class CalculatorItem extends Component {
    state = {
        isClicked: false
    }

    isClicked = () => {
        this.setState({
            isClicked: true

        })
    }

    render() {
        const { text, className = "" } = this.props
        const { isClicked } = this.state

        return (
            <button className={`calcItem ${className} `} onClick={this.isClicked}>
                <span>{text}</span>
            </button>
        )
    }
}


export default CalculatorItem