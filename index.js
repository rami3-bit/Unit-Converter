/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


const length = document.getElementById("length");
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")

const btn = document.getElementById("btn")
const number = document.getElementById("number")

// length
const metersToFeet = 3.281; // 1 meter = 3.281 feet
const feetToMeters = 0.3048; // 1 foot = 0.3048 meter
// volume
const litersToGallons = 0.264; // 1 liter = 0.264 gallon
const gallonsToLiters = 3.785; // 1 gallon = 3.785 liter
// weight
const kilogramsToPounds = 2.204; // 1 kilogram = 2.204 pounds
const poundsToKilograms = 0.4536; // 1 pound = 0.4536 kilogram

btn.addEventListener( "click", convert );

function convert() {
	
}