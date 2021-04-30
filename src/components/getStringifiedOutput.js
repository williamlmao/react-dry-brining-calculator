// Convert salt weight in grams into tbsp/tsp 
const getStringifiedOutput = (tbsps) => {

  if (tbsps === 0) {
    return 'ERROR: TBSPS 0'
  }

  //  Rounding for tsps. Rounds either up or down. 
  const roundToNearestEighthOrSixth = (num) => {
    const qs = Math.abs(num - (Math.round(num * 8) / 8))
    const ts = Math.abs(num - (Math.round(num * 6) / 6))
    if (qs < ts) {
      return (Math.round(num * 8) / 8)
    } else {
      return (Math.round(num * 6) / 6)
    }
  }

  // Rounding for cups. Rounds down. 
  const roundDownToNearestQuarterOrThird = (num) => {
    const quarters = (Math.floor(num * 4) / 4)
    const sixths = (Math.floor(num * 3) / 3)
    return (num - quarters > num - sixths) ? sixths : quarters
  }

  // Rounding for tbsps. Rounds down. 
  const roundDownToNearestHalfOrWhole = (num) => {
    const half = (Math.floor(num * 2) / 2)
    const whole = Math.floor(num)
    return (num - half < num - whole) ? half : whole
  }

  let cups = 0
  let tsps = 0

  // Find number of cups
  const cupsCalc = tbsps / 16
  // If the number of cups is > 0.25 (quarter cup)
  if (cupsCalc > 0.25) {
    // Then determine number of cups, rounded down to the nearest quarter or third
    cups = roundDownToNearestQuarterOrThird(tbsps / 16)
    // Convert back and pass any amount rounded down into tbsps 
    tbsps = ((cupsCalc - cups)*16)
  }

  // Process tbsps & tsps
  const tbspsCalc = tbsps
  tbsps = roundDownToNearestHalfOrWhole(tbsps)
  tsps = roundToNearestEighthOrSixth((tbspsCalc - tbsps) * 3)

  const output = []

  const formatString = (measurement, value) => {
    value = value.toFixed(2)
    const table = {
      ".00":'',
      ".13":'⅛',
      ".17":'⅛',
      ".25":'¼',
      ".33": '⅓',
      ".38": '⅜',
      ".50": '½',
      ".63": '⅝',
      ".67": '⅔',
      ".75":'¾',    
      ".83":'¾',
      ".88": '⅞',
    }

    if (value) {
      if (value > 1) {
        // Make measurement plural if greater than one
        measurement = `${measurement}s`
      } else {
        // Remove leading 0 if value is less than one
        if(value[0] === '0') {
          value = value.replace("0","")
        }
      }
      
      if (value > 0) {
        value = value.replace(value.slice(-3),table[value.slice(-3)])
        output.push(`${value} ${measurement}`)
      }
    }
  }

  // Format numbers 
  formatString('cup', cups)
  formatString('tablespoon', tbsps)
  formatString('teaspoon', tsps)

  return (output.length > 0) ? output.join(" + ") : 'Your inputs are yielding close to 0 grams of salt!'
}

export default getStringifiedOutput

  