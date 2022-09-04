const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("unit-input")
const meterFeetEl = document.getElementById("meter-feet-el")
const literGallonEl = document.getElementById("liter-gallon-el")
const kgLbEl = document.getElementById("kg-lb-el")


convertBtn.addEventListener( "click", function() {
    meterFeetEl.textContent = convert("meter", "feet", 3.281, inputEl.value)
    literGallonEl.textContent = convert("liter", 'gallon', 0.264, inputEl.value)
    kgLbEl.textContent = convert("kilo", 'pound', 2.204, inputEl.value)
})

function convert(fromUnit, toUnit, conVal, inputVal) {
    return `
        ${inputVal} ${fromUnit} = ${Number(inputVal * conVal).toFixed(3)} ${toUnit} | 
        ${inputVal} ${toUnit} = ${Number(inputVal / conVal).toFixed(3)} ${fromUnit}    
    `
}

