const length = document.getElementById("length");
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")

const btn = document.getElementById("btn")

const input = document.getElementById("input-number").value

const conversionRate = {
    length: {
        metersToFeet: 3.281,
        feetToMeters: 0.3048
    },
    volume: {
        litersToGallons: 0.264,
        gallonsToLiters: 3.785
    },
    weight: {
        kilogramsToPounds: 2.204,
        poundsToKilograms: 0.4536
    }
};



btn.addEventListener( "click", convert );

function convert() {
	let lengthResult = `${input} meters = ${input * metersToFeet} | ${} feet = ${} `
	let volumeResult = `${input} litersToGallons = ${} | ${} gallonsToLiters = ${} `
	let weightResult = `${input} kilogramsToPounds = ${} | ${} poundsToKilograms = ${} `
	
	

}
console.log(convert)