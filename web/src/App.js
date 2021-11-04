import { useState } from 'react'
import './App.css';

const measureValues = [
  "Kelvin",
  "Celsius",
  "Fahrenheit",
  "Rankine",
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
      <select onSelect={(e) => setSelectedValue(e.currentTarget.value)}>
        {measureValues.map(v => <option value={v}>{v}</option>)}
      </ select>
    </>
  )
}

function App() {
  const [inputValue, setInputValue] = useState('')
  const [inputMeasurement, setInputMeasurement] = useState(undefined)
  const [targetMeasurement, setTargetMeasurement] = useState(undefined)
  const [studentResponse, setStudentResponse] = useState('')

  return (
    <>
      <div className="App">
        <header className="App-header">
          <ValueInput
            label={"Input Numerical Value"}
            inputValue={inputValue}
            setInputValue={setInputValue}
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
            inputValue={studentResponse}
            setInputValue={setStudentResponse}
          />
        </header>
      </div>
      <div>
        <button type="button">Click Me!</button>
      </div>
    </>
  );
}

export default App;
