const validate = (val, response) => {
  const parsedStudentResponse = parseFloat(response).toFixed(2)
  const parsedInputResponse = parseFloat(val).toFixed(2)

  return parsedStudentResponse === parsedInputResponse
}

const celsiusToFahrenheit = (val, response) => {
  const c = (val * 1.8) + 32
  return validate(c, response)
}

const fahrenheitToCelsius = (val, response) => {
  const c = (val - 32) / 1.8
  return validate(c, response)
}

module.exports = {fahrenheitToCelsius, celsiusToFahrenheit}