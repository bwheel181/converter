import { useState, useEffect } from 'react'
import './App.css';
import {
  fahrenheitTranslator,
  celsiusTranslator,
  rankineTranslator,
  literTranslator,
  tablespoonTranslator,
  cubicInchTranslator,
  cupTranslator,
  cubicFeetTranslator,
  gallonsTranslator
} from './conversions'

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
        type="number"
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
        <option key={-1} value="DEFAULT"> -- select an option -- </option>
        {measureValues.map((v, i) => <option key={i} value={v}>{v}</option>)}
        {volumeValues.map((v, i) => <option key={i} value={v}>{v}</option>)}
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
    if (inputMeasurement === "Fahrenheit" && targetMeasurement === "Celsius") {
      setIsResponseCorrect(fahrenheitTranslator(inputValue, studentResponse, "C"))
    }

    if (inputMeasurement === "Fahrenheit" && targetMeasurement === "Rankine") {
      setIsResponseCorrect(fahrenheitTranslator(inputValue, studentResponse, "R"))
    }

    if (inputMeasurement === "Fahrenheit" && targetMeasurement === "Kelvin") {
      setIsResponseCorrect(fahrenheitTranslator(inputValue, studentResponse, "K"))
    }

    if (inputMeasurement === "Celsius" && targetMeasurement === "Fahrenheit") {
      setIsResponseCorrect(celsiusTranslator(inputValue, studentResponse, "F"))
    }

    if (inputMeasurement === "Celsius" && targetMeasurement === "Rankine") {
      setIsResponseCorrect(celsiusTranslator(inputValue, studentResponse, "R"))
    }

    if (inputMeasurement === "Celsius" && targetMeasurement === "Kelvin") {
      setIsResponseCorrect(celsiusTranslator(inputValue, studentResponse, "K"))
    }

    if (inputMeasurement === "Rankine" && targetMeasurement === "Fahrenheit") {
      setIsResponseCorrect(rankineTranslator(inputValue, studentResponse, "F"))
    }

    if (inputMeasurement === "Rankine" && targetMeasurement === "Celsius") {
      setIsResponseCorrect(rankineTranslator(inputValue, studentResponse, "C"))
    }

    if (inputMeasurement === "Rankine" && targetMeasurement === "Kelvin") {
      setIsResponseCorrect(rankineTranslator(inputValue, studentResponse, "K"))
    }

    if (inputMeasurement === "Liters" && targetMeasurement === "Tablespoons") {
      setIsResponseCorrect(literTranslator(inputValue, studentResponse, "T"))
    }

    if (inputMeasurement === "Liters" && targetMeasurement === "Cubic-Inches") {
      setIsResponseCorrect(literTranslator(inputValue, studentResponse, "CI"))
    }

    if (inputMeasurement === "Liters" && targetMeasurement === "Cups") {
      setIsResponseCorrect(literTranslator(inputValue, studentResponse, "C"))
    }

    if (inputMeasurement === "Liters" && targetMeasurement === "Cubic-Feet") {
      setIsResponseCorrect(literTranslator(inputValue, studentResponse, "CF"))
    }

    if (inputMeasurement === "Liters" && targetMeasurement === "Gallons") {
      setIsResponseCorrect(literTranslator(inputValue, studentResponse, "G"))
    }

    if (inputMeasurement === "Tablespoons" && targetMeasurement === "Liters") {
      setIsResponseCorrect(tablespoonTranslator(inputValue, studentResponse, "L"))
    }

    if (inputMeasurement === "Tablespoons" && targetMeasurement === "Cubic-Inches") {
      setIsResponseCorrect(tablespoonTranslator(inputValue, studentResponse, "CI"))
    }

    if (inputMeasurement === "Tablespoons" && targetMeasurement === "Cups") {
      setIsResponseCorrect(tablespoonTranslator(inputValue, studentResponse, "C"))
    }

    if (inputMeasurement === "Tablespoons" && targetMeasurement === "Cubic-Feet") {
      setIsResponseCorrect(tablespoonTranslator(inputValue, studentResponse, "CF"))
    }

    if (inputMeasurement === "Tablespoons" && targetMeasurement === "Gallons") {
      setIsResponseCorrect(tablespoonTranslator(inputValue, studentResponse, "G"))
    }

    if (inputMeasurement === "Cubic-Inches" && targetMeasurement === "Liters") {
      setIsResponseCorrect(cubicInchTranslator(inputValue, studentResponse, "L"))
    }

    if (inputMeasurement === "Cubic-Inches" && targetMeasurement === "Tablespoons") {
      setIsResponseCorrect(cubicInchTranslator(inputValue, studentResponse, "T"))
    }

    if (inputMeasurement === "Cubic-Inches" && targetMeasurement === "Cups") {
      setIsResponseCorrect(cubicInchTranslator(inputValue, studentResponse, "C"))
    }

    if (inputMeasurement === "Cubic-Inches" && targetMeasurement === "Cubic-Feet") {
      setIsResponseCorrect(cubicInchTranslator(inputValue, studentResponse, "CF"))
    }

    if (inputMeasurement === "Cubic-Inches" && targetMeasurement === "Gallons") {
      setIsResponseCorrect(cubicInchTranslator(inputValue, studentResponse, "G"))
    }

    if (inputMeasurement === "Cups" && targetMeasurement === "Liters") {
      setIsResponseCorrect(cupTranslator(inputValue, studentResponse, "L"))
    }

    if (inputMeasurement === "Cups" && targetMeasurement === "Tablespoons") {
      setIsResponseCorrect(cupTranslator(inputValue, studentResponse, "T"))
    }

    if (inputMeasurement === "Cups" && targetMeasurement === "Cubic-Inches") {
      setIsResponseCorrect(cupTranslator(inputValue, studentResponse, "CI"))
    }

    if (inputMeasurement === "Cups" && targetMeasurement === "Cubic-Feet") {
      setIsResponseCorrect(cupTranslator(inputValue, studentResponse, "CF"))
    }

    if (inputMeasurement === "Cups" && targetMeasurement === "Gallons") {
      setIsResponseCorrect(cupTranslator(inputValue, studentResponse, "G"))
    }

    if (inputMeasurement === "Cubic-Feet" && targetMeasurement === "Liters") {
      setIsResponseCorrect(cubicFeetTranslator(inputValue, studentResponse, "L"))
    }

    if (inputMeasurement === "Cubic-Feet" && targetMeasurement === "Tablespoons") {
      setIsResponseCorrect(cubicFeetTranslator(inputValue, studentResponse, "T"))
    }

    if (inputMeasurement === "Cubic-Feet" && targetMeasurement === "Cubic-Inches") {
      setIsResponseCorrect(cubicFeetTranslator(inputValue, studentResponse, "CI"))
    }

    if (inputMeasurement === "Cubic-Feet" && targetMeasurement === "Cups") {
      setIsResponseCorrect(cubicFeetTranslator(inputValue, studentResponse, "C"))
    }

    if (inputMeasurement === "Cubic-Feet" && targetMeasurement === "Gallons") {
      setIsResponseCorrect(cubicFeetTranslator(inputValue, studentResponse, "G"))
    }

    if (inputMeasurement === "Gallons" && targetMeasurement === "Liters") {
      setIsResponseCorrect(gallonsTranslator(inputValue, studentResponse, "L"))
    }

    if (inputMeasurement === "Gallons" && targetMeasurement === "Tablespoons") {
      setIsResponseCorrect(gallonsTranslator(inputValue, studentResponse, "T"))
    }

    if (inputMeasurement === "Gallons" && targetMeasurement === "Cubic-Inches") {
      setIsResponseCorrect(gallonsTranslator(inputValue, studentResponse, "CI"))
    }

    if (inputMeasurement === "Gallons" && targetMeasurement === "Cups") {
      setIsResponseCorrect(gallonsTranslator(inputValue, studentResponse, "C"))
    }

    if (inputMeasurement === "Gallons" && targetMeasurement === "Cubic-Feet") {
      setIsResponseCorrect(gallonsTranslator(inputValue, studentResponse, "CF"))
    }
  }

  const getResponseString = () => {
    switch (isResponseCorrect) {
      case true:
        return "correct"
      case false:
        return "incorrect"
      default:
        return "invalid"
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
          <div>Current Response: {getResponseString()}</div>
        </header>
      </div>
    </>
  );
}

export default App;
