const validate = (val, response) => {
  const roundedInputResponse = Math.round(val * 10) / 10
  const roundedStudentResponse = Math.round(response * 10) / 10;

  if (Number.isNaN(roundedInputResponse) || Number.isNaN(roundedStudentResponse)) {
    return -1
  }

  return roundedInputResponse === roundedStudentResponse
}

const fahrenheitTranslator = (val, response, to) => {
  switch (to) {
    case 'C':
      const c = (val - 32) * 5 / 9;
      return validate(c, response)
    case 'R':
      const r = val + 459.67
      return validate(r, response)
    case 'K':
      const k = (val + 459.67) * 5 / 9
      return validate(k, response)
  }
}

const celsiusTranslator = (val, response, to) => {
  switch (to) {
    case 'F':
      const f = (val * 1.8) + 32
      return validate(f, response)
    case 'R':
      const r = (val + 273.15) * 9 / 5
      return validate(r, response)
    case 'K':
      const k = val + 273.15
      return validate(k, response)
  }
}

const rankineTranslator = (val, response, to) => {
  switch (to) {
    case 'F':
      const f = val - 459.67
      return validate(f, response)
    case 'C':
      const c = (val - 491.67) * 5 / 9
      return validate(c, response)
    case 'K':
      const k = val * 5 / 9
      return validate(k, response)
  }
}

// liters, tablespoons, cubic-inches, cups, cubic-feet, gallons
const literTranslator = (val, response, to) => {
  switch (to) {
    case 'T':
      const t = val * 67.628
      return validate(t, response)
    case 'CI':
      const ci = val * 61.024
      return validate(ci, response)
    case 'C':
      const c = val * 4.167
      return validate(c, response)
    case 'CF':
      const cf = val / 28.317
      return validate(cf, response)
    case 'G':
      const g = val / 3.785
      return validate(g, response)
  }
}

const tablespoonTranslator = (val, response, to) => {
  switch (to) {
    case 'L':
      const l = val / 67.628
      return validate(l, response)
    case 'CI':
      const ci = val / 1.108
      return validate(ci, response)
    case 'C':
      const c = val / 16.231
      return validate(c, response)
    case 'CF':
      const cf = val / 1915
      return validate(cf, response)
    case 'G':
      const g = val / 256
      return validate(g, response)
  }
}

const cubicInchTranslator = (val, response, to) => {
  switch (to) {
    case 'L':
      const l = val / 61.024
      return validate(l, response)
    case 'T':
      const t = val * 1.108
      return validate(t, response)
    case 'C':
      const c = val / 14.646
      return validate(c, response)
    case 'CF':
      const cf = val / 1728
      return validate(cf, response)
    case 'G':
      const g = val / 231
      return validate(g, response)
  }
}

const cupTranslator = (val, response, to) => {
  switch (to) {
    case 'L':
      const l = val / 4.167
      return validate(l, response)
    case 'T':
      const t = val * 16.231
      return validate(t, response)
    case 'CI':
      const ci = val * 14.646
      return validate(ci, response)
    case 'CF':
      const cf = val / 118
      return validate(cf, response)
    case 'G':
      const g = val / 15.773
      return validate(g, response)
  }
}

const cubicFeetTranslator = (val, response, to) => {
  switch (to) {
    case 'L':
      const l = val * 28.317
      return validate(l, response)
    case 'T':
      const t = val * 1915
      return validate(t, response)
    case 'CI':
      const ci = val * 1728
      return validate(ci, response)
    case 'C':
      const c = val * 118
      return validate(c, response)
    case 'G':
      const g = val * 7.481
      return validate(g, response)
  }
}

const gallonsTranslator = (val, response, to) => {
  switch (to) {
    case 'L':
      const l = val * 3.785
      return validate(l, response)
    case 'T':
      const t = val * 256
      return validate(t, response)
    case 'CI':
      const ci = val * 231
      return validate(ci, response)
    case 'C':
      const c = val * 15.773
      return validate(c, response)
    case 'CF':
      const cf = val / 7.481
      return validate(cf, response)
  }
}

module.exports = {
  fahrenheitTranslator,
  celsiusTranslator,
  rankineTranslator,
  literTranslator,
  tablespoonTranslator,
  cubicInchTranslator,
  cupTranslator,
  cubicFeetTranslator,
  gallonsTranslator
}