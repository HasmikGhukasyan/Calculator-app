import "./calculatorItem.css"
const CalculatorItem = ({text,className = ""}) => {
    return (
        <button className={`calcItem ${className} `}>
            <span>{text}</span>
        </button>
    )
}

export default CalculatorItem