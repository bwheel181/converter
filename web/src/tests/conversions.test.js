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
} from '../conversions'

// Fahrenheit Translator Tests
test("F to C", () => {
  expect(fahrenheitTranslator(32, 0, "C")).toBe(true)
  expect(fahrenheitTranslator(32, 100, "C")).toBe(false)
  expect(fahrenheitTranslator('bl2', 100, "C")).toBe(-1)
})
test("F to R", () => {
  expect(fahrenheitTranslator(10, 469.67, "R")).toBe(true)
  expect(fahrenheitTranslator(10, 98, "R")).toBe(false)
  expect(fahrenheitTranslator('bl2', 100, "R")).toBe(-1)
})
test("F to K", () => {
  expect(fahrenheitTranslator(10, 260.93, "K")).toBe(true)
  expect(fahrenheitTranslator(0, 98, "K")).toBe(false)
  expect(fahrenheitTranslator('bl2', 100, "K")).toBe(-1)
})

// Celsius Translator Tests
test("C to F", () => {
  expect(celsiusTranslator(0, 32, "F")).toBe(true)
  expect(celsiusTranslator(0, 98, "F")).toBe(false)
  expect(celsiusTranslator('83n', 98, "F")).toBe(-1)
})
test("C to R", () => {
  expect(celsiusTranslator(20, 527.67, "R")).toBe(true)
  expect(celsiusTranslator(20, 980, "R")).toBe(false)
  expect(celsiusTranslator('83n', 98, "R")).toBe(-1)
})
test("C to K", () => {
  expect(celsiusTranslator(20, 293.15, "K")).toBe(true)
  expect(celsiusTranslator(20, 980, "K")).toBe(false)
  expect(celsiusTranslator('asn', 98, "K")).toBe(-1)
})

// Rankine Translator Tests
test("R to F", () => {
  expect(rankineTranslator(10, -449.67, "F")).toBe(true)
  expect(rankineTranslator(10, 98, "F")).toBe(false)
  expect(rankineTranslator('83n', 98, "F")).toBe(-1)
})
test("R to C", () => {
  expect(rankineTranslator(20, -262.04, "C")).toBe(true)
  expect(rankineTranslator(20, 980, "C")).toBe(false)
  expect(rankineTranslator('83n', 98, "C")).toBe(-1)
})
test("R to K", () => {
  expect(rankineTranslator(20, 11.11, "K")).toBe(true)
  expect(rankineTranslator(20, 980, "K")).toBe(false)
  expect(rankineTranslator('asn', 98, "K")).toBe(-1)
})

// Liter Translator Tests
test("L to T", () => {
  expect(literTranslator(1, 67.63, "T")).toBe(true)
  expect(literTranslator(10, 98, "T")).toBe(false)
  expect(literTranslator('83n', 98, "T")).toBe(-1)
})
test("L to CI", () => {
  expect(literTranslator(1, 61.02, "CI")).toBe(true)
  expect(literTranslator(20, 980, "CI")).toBe(false)
  expect(literTranslator('83n', 98, "CI")).toBe(-1)
})
test("L to C", () => {
  expect(literTranslator(1, 4.167, "C")).toBe(true)
  expect(literTranslator(20, 980, "C")).toBe(false)
  expect(literTranslator('asn', 98, "C")).toBe(-1)
})
test("L to CF", () => {
  expect(literTranslator(20, 0.71, "CF")).toBe(true)
  expect(literTranslator(20, 980, "CF")).toBe(false)
  expect(literTranslator('asn', 98, "CF")).toBe(-1)
})
test("L to G", () => {
  expect(literTranslator(1, 0.26, "G")).toBe(true)
  expect(literTranslator(20, 980, "G")).toBe(false)
  expect(literTranslator('asn', 98, "G")).toBe(-1)
})

// Tablespoon Translator Tests
test("T to L", () => {
  expect(tablespoonTranslator(1, .014, "L")).toBe(true)
  expect(tablespoonTranslator(10, 98, "L")).toBe(false)
  expect(tablespoonTranslator('83n', 98, "L")).toBe(-1)
})
test("T to CI", () => {
  expect(tablespoonTranslator(1, .902, "CI")).toBe(true)
  expect(tablespoonTranslator(20, 980, "CI")).toBe(false)
  expect(tablespoonTranslator('83n', 98, "CI")).toBe(-1)
})
test("T to C", () => {
  expect(tablespoonTranslator(1, .06, "C")).toBe(true)
  expect(tablespoonTranslator(20, 980, "C")).toBe(false)
  expect(tablespoonTranslator('asn', 98, "C")).toBe(-1)
})
test("T to CF", () => {
  expect(tablespoonTranslator(500, 0.26, "CF")).toBe(true)
  expect(tablespoonTranslator(20, 980, "CF")).toBe(false)
  expect(tablespoonTranslator('asn', 98, "CF")).toBe(-1)
})
test("T to G", () => {
  expect(tablespoonTranslator(500, 1.95, "G")).toBe(true)
  expect(tablespoonTranslator(20, 980, "G")).toBe(false)
  expect(tablespoonTranslator('asn', 98, "G")).toBe(-1)
})

// Cubic-Inches Translator Tests
test("CI to L", () => {
  expect(cubicInchTranslator(1, .016, "L")).toBe(true)
  expect(cubicInchTranslator(10, 98, "L")).toBe(false)
  expect(cubicInchTranslator('83n', 98, "L")).toBe(-1)
})
test("CI to T", () => {
  expect(cubicInchTranslator(1, 1.10, "T")).toBe(true)
  expect(cubicInchTranslator(20, 980, "T")).toBe(false)
  expect(cubicInchTranslator('83n', 98, "T")).toBe(-1)
})
test("CI to C", () => {
  expect(cubicInchTranslator(1, .06, "C")).toBe(true)
  expect(cubicInchTranslator(20, 980, "C")).toBe(false)
  expect(cubicInchTranslator('asn', 98, "C")).toBe(-1)
})
test("CI to CF", () => {
  expect(cubicInchTranslator(500, 0.26, "CF")).toBe(true)
  expect(cubicInchTranslator(20, 980, "CF")).toBe(false)
  expect(cubicInchTranslator('asn', 98, "CF")).toBe(-1)
})
test("CI to G", () => {
  expect(cubicInchTranslator(500, 2.16, "G")).toBe(true)
  expect(cubicInchTranslator(20, 980, "G")).toBe(false)
  expect(cubicInchTranslator('asn', 98, "G")).toBe(-1)
})

// Cup Translator Tests
test("C to L", () => {
  expect(cupTranslator(1, .24, "L")).toBe(true)
  expect(cupTranslator(10, 98, "L")).toBe(false)
  expect(cupTranslator('83n', 98, "L")).toBe(-1)
})
test("C to T", () => {
  expect(cupTranslator(1, 16.23, "T")).toBe(true)
  expect(cupTranslator(20, 980, "T")).toBe(false)
  expect(cupTranslator('83n', 98, "T")).toBe(-1)
})
test("C to CI", () => {
  expect(cupTranslator(1, 14.64, "CI")).toBe(true)
  expect(cupTranslator(20, 980, "CI")).toBe(false)
  expect(cupTranslator('asn', 98, "CI")).toBe(-1)
})
test("C to CF", () => {
  expect(cupTranslator(100, 0.84, "CF")).toBe(true)
  expect(cupTranslator(20, 980, "CF")).toBe(false)
  expect(cupTranslator('asn', 98, "CF")).toBe(-1)
})
test("C to G", () => {
  expect(cupTranslator(100, 6.34, "G")).toBe(true)
  expect(cupTranslator(20, 980, "G")).toBe(false)
  expect(cupTranslator('asn', 98, "G")).toBe(-1)
})

// Cubic-Feet Translator Tests
test("CF to L", () => {
  expect(cubicFeetTranslator(1, 28.31, "L")).toBe(true)
  expect(cubicFeetTranslator(10, 98, "L")).toBe(false)
  expect(cubicFeetTranslator('83n', 98, "L")).toBe(-1)
})
test("CF to T", () => {
  expect(cubicFeetTranslator(1, 1915.01, "T")).toBe(true)
  expect(cubicFeetTranslator(20, 980, "T")).toBe(false)
  expect(cubicFeetTranslator('83n', 98, "T")).toBe(-1)
})
test("CF to CI", () => {
  expect(cubicFeetTranslator(1, 1728, "CI")).toBe(true)
  expect(cubicFeetTranslator(20, 980, "CI")).toBe(false)
  expect(cubicFeetTranslator('asn', 98, "CI")).toBe(-1)
})
test("CF to C", () => {
  expect(cubicFeetTranslator(1, 117.99, "C")).toBe(true)
  expect(cubicFeetTranslator(20, 980, "C")).toBe(false)
  expect(cubicFeetTranslator('asn', 98, "C")).toBe(-1)
})
test("CF to G", () => {
  expect(cubicFeetTranslator(1, 7.48, "G")).toBe(true)
  expect(cubicFeetTranslator(20, 980, "G")).toBe(false)
  expect(cubicFeetTranslator('asn', 98, "G")).toBe(-1)
})

// Gallons Translator Tests
test("G to L", () => {
  expect(gallonsTranslator(1, 3.79, "L")).toBe(true)
  expect(gallonsTranslator(10, 98, "L")).toBe(false)
  expect(gallonsTranslator('83n', 98, "L")).toBe(-1)
})
test("G to T", () => {
  expect(gallonsTranslator(1, 256, "T")).toBe(true)
  expect(gallonsTranslator(20, 980, "T")).toBe(false)
  expect(gallonsTranslator('83n', 98, "T")).toBe(-1)
})
test("G to CI", () => {
  expect(gallonsTranslator(1, 231, "CI")).toBe(true)
  expect(gallonsTranslator(20, 980, "CI")).toBe(false)
  expect(gallonsTranslator('asn', 98, "CI")).toBe(-1)
})
test("G to C", () => {
  expect(gallonsTranslator(1, 15.77, "C")).toBe(true)
  expect(gallonsTranslator(20, 980, "C")).toBe(false)
  expect(gallonsTranslator('asn', 98, "C")).toBe(-1)
})
test("G to CF", () => {
  expect(gallonsTranslator(1, .13, "CF")).toBe(true)
  expect(gallonsTranslator(20, 980, "CF")).toBe(false)
  expect(gallonsTranslator('asn', 98, "CF")).toBe(-1)
})
