/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = document.getElementById("input-El")
const convertBtn = document.getElementById("convert-btn")

const meterFeet = document.getElementById("meter-feet") 
const litersGallons = document.getElementById("liters-gallons")
const kilogramsPounds = document.getElementById("kilograms-pounds")

convertBtn.addEventListener("click",function(){
  const value = Number(inputEl.value)

  //Length
  const meterToFeet = (value * 3.281).toFixed(3)
  const feetToMeter = (value / 3.281).toFixed(3)
  
  meterFeet.textContent = `${value} meters = ${meterToFeet} feet | ${value} feet = ${feetToMeter}`

  //Volume
  const litersToGallons = ( value * 0.264).toFixed(3)
  const gallonsToLiters =(value / 0.264).toFixed(3)

  litersGallons.textContent = `${value} liters = ${litersToGallons} gallons | ${value} gallons = ${gallonsToLiters} liters`
    

  //MAss
  const kilogramToPund = (value * 2.204).toFixed(3)
  const poundstoKilograms = (value / 2.204).toFixed(3)

  kilogramsPounds.textContent =`${value} kg = ${kilogramToPund} pounds | ${value} pounds = ${poundstoKilograms}`
})





















 //   let value = Number(inputEl.value)
// //Length
//     const metersToFeet = (value * 3.281).toFixed(3)
//     const feetToMeter = (value / 3.281).toFixed(3)

//     meterFeet.textContent =`${value} meters = ${metersToFeet} eet | ${value} feet= ${feetToMeter} meters`

//     //Volume
//     const litersToGallons = (value * 0.264).toFixed(3)
//     const gallonsToLiters = (value / 0.264).toFixed(3)

//     litersGallons.textContent =`${value} liters = ${litersToGallons} gallons | ${value} gallons = ${gallonsToLiters} liters`

//     //Mass
//     const kilogramtoPounds = (value * 2.202).toFixed(3)
//     const poundstoKilograms = (value / 2.202).toFixed(3)

//     kilogramsPounds.textContent = `${value} kg = ${kilogramtoPounds} | ${value} pounds = ${poundstoKilograms} kg`