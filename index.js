const length = document.getElementById("length");
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")

const btn = document.getElementById("btn")

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
	const input = document.getElementById("input-number").value

	let lengthResult = ` ${input} meters = ${input * conversionRate.length.feetToMeters.toFixed(2)} | ${input} feet = ${input * conversionRate.length.metersToFeet.toFixed(2)} `
	length.innerHTML = lengthResult

	let volumeResult = `${input} litersToGallons = ${input * conversionRate.volume.litersToGallons.toFixed(2)} | ${input} gallonsToLiters = ${input * conversionRate.volume.gallonsToLiters.toFixed(2)} `
	volume.innerHTML = volumeResult

	let massResult = `${input} kilogramsToPounds = ${input * conversionRate.weight.kilogramsToPounds.toFixed(2)} | ${input} poundsToKilograms = ${input * conversionRate.weight.poundsToKilograms.toFixed(2)} `
	mass.innerHTML = massResult
	
}
