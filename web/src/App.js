import { useState, useEffect } from 'react'
import './App.css';
import {fahrenheitToCelsius, celsiusToFahrenheit} from './conversions'

const measureValues = [
  "Kelvin",
  "Celsius",
  "Fahrenheit",
  "Rankine",
]

const volumeValues = [
  "Liters",
  "Tablespoons",
  "Cubic-Inches",
  "Cups",
  "Cubic-Feet",
  "Gallons",
]

const ValueInput = ({label, value, setValue}) => {
  return (
    <>
      <label>{label}</label>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </>
  )
}

const ValueDropdown = ({label, setSelectedValue}) => {
  return (
    <>
      <div>{label}</div>
      <select onChange={(e) => setSelectedValue(e.target.value)}>
        <option disabled selected value> -- select an option -- </option>
        {measureValues.map(v => <option value={v}>{v}</option>)}
        {volumeValues.map(v => <option value={v}>{v}</option>)}
      </ select>
    </>
  )
}

function App() {
  const [inputValue, setInputValue] = useState('')
  const [inputMeasurement, setInputMeasurement] = useState(undefined)
  const [targetMeasurement, setTargetMeasurement] = useState(undefined)
  const [studentResponse, setStudentResponse] = useState('')
  const [isValid, setIsValid] = useState(false)
  const [isResponseCorrect, setIsResponseCorrect] = useState(false)

  useEffect(() => {
    const valid = (volumeValues.includes(inputMeasurement) && volumeValues.includes(targetMeasurement)) ||
      (measureValues.includes(inputMeasurement) && measureValues.includes(targetMeasurement))

    setIsValid(valid && (studentResponse && inputValue) && (inputMeasurement !== targetMeasurement))
  }, [inputMeasurement, targetMeasurement, studentResponse, inputValue])

  const handleClick = () => {
    const parsedStudentResponse = parseFloat(studentResponse).toFixed(2)
    const parsedInputResponse = parseFloat(inputValue).toFixed(2)

    if (inputMeasurement === "Fahrenheit" && targetMeasurement === "Celsius") {
      setIsResponseCorrect(fahrenheitToCelsius(parsedInputResponse, parsedStudentResponse))
    }

    if (inputMeasurement === "Celsius" && targetMeasurement === "Fahrenheit") {
      setIsResponseCorrect(celsiusToFahrenheit(parsedInputResponse, parsedStudentResponse))
    }
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <ValueInput
            label={"Input Numerical Value"}
            value={inputValue}
            setValue={setInputValue}
          />
          <ValueDropdown
            label={"Input Unit of Measure"}
            setSelectedValue={setInputMeasurement}
          />
          <ValueDropdown
            label={"Target Unit of Measure"}
            setSelectedValue={setTargetMeasurement}
          />
          <ValueInput
            label={"Student Response"}
            value={studentResponse}
            setValue={setStudentResponse}
          />
          <div>
            <button disabled={!isValid} type="button" onClick={handleClick}>Check</button>
          </div>
          <div>Current Response: {isResponseCorrect ? 'correct' : 'incorrect'}</div>
        </header>
      </div>
    </>
  );
}

export default App;
