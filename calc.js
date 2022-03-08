
let microButton = document.getElementById("_microCalc")

let microfaradCalc = ()=> {
  let volts = document.getElementById("_volts").value
  let amps = document.getElementById("_amps").value
  let microfarads
 
  microfarads = (amps*2652)/volts

  let microValue = document.getElementById("_microfarads")

  microValue.value = microfarads.toFixed(3)
}

let TempRiseMethod = () => {
  let BTHU = document.getElementById("_BTHU").value
  let supplyTemp = document.getElementById("_SupplyTemp").value
  let returnTemp = document.getElementById("_ReturnTemp").value
  let CFM

  tempChange = supplyTemp - returnTemp

  CFM = BTHU/(1.08 * tempChange)

  let CFM1 = document.getElementById("_CFM1")

  CFM1.value = CFM.toFixed(3)
}


let ahTempRiseMethod = () => {
  let volts = document.getElementById("_ahVolts").value
  let amps = document.getElementById("_ahAmpDraw").value
  let supplyTemp = document.getElementById("_ahSupplyTemp").value
  let returnTemp = document.getElementById("_ahReturnTemp").value

  let BTUH
  let CFM 

  let deltaT = Math.abs(supplyTemp-returnTemp)

  BTUH = volts * amps * 3.414

  CFM = BTUH/(1.08*deltaT)

  let ahCFM = document.getElementById("_ahCFM")

  ahCFM.value = CFM.toFixed(3)
}