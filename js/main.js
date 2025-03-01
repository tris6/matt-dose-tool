const form = document.getElementById('form');
form.addEventListener("submit", (event) => {
    event.preventDefault();
})

/* MAKE IT DARK/LIGHT */

const iconToggle = document.getElementById('icon-toggle');
const button = document.querySelectorAll('.btn');
const input = document.querySelectorAll('.input-field');

let colorMode = "light";

function invertColor() {
    if (colorMode === "light") {
        setDark();
    } else {
         setLight();
    }
}

function setDark() {
    colorMode = "dark";

    document.body.style.color = 'white';
    document.body.style.backgroundColor = 'black';

    button.forEach((btn) => {
        btn.classList.remove('light-mode');
        btn.classList.add('dark-mode');
    })
    if (doseSelected !== "") {
        const doseButton = document.getElementById(doseSelected.id);
        doseButton.classList.remove('dark-mode');
        doseButton.classList.add('light-mode');
    }
    if (infusionSelected !== "") {
        const infusionButton = document.getElementById(infusionSelected.id);
        infusionButton.classList.remove('dark-mode');
        infusionButton.classList.add('light-mode');
    }
    

    input.forEach((field) => {
        field.classList.remove('light-mode');
        field.classList.add('dark-mode');
    })
    
    iconToggle.classList.add('rotate');
}

function setLight() {
    colorMode = "light";
    
    document.body.style.color = 'black';
    document.body.style.backgroundColor = 'white';

    button.forEach((btn) => {
        btn.classList.remove('dark-mode');
        btn.classList.add('light-mode');
    })
    if (doseSelected !== "") {
        const doseButton = document.getElementById(doseSelected.id);
        doseButton.classList.remove('light-mode');
        doseButton.classList.add('dark-mode');
    }
    if (infusionSelected !== "") {
        const infusionButton = document.getElementById(infusionSelected.id);
        infusionButton.classList.remove('light-mode');
        infusionButton.classList.add('dark-mode');
    }

    input.forEach((field) => {
        field.classList.remove('dark-mode');
        field.classList.add('light-mode');
    })

    iconToggle.classList.remove('rotate');
}

/* HANDLE BUTTONS */

const doseChoices = document.querySelectorAll('.dose-choices');
const infusionChoices = document.querySelectorAll('.infusion-choices');
let doseSelected = "";
let infusionSelected = "";

function chooseDose(event) {
    doseSelected = document.getElementById(event.target.id);
    updateDoseColors();
}

function chooseInfusion(event) {
    infusionSelected = document.getElementById(event.target.id);
    updateInfusionColors();
}

function updateDoseColors() {
    if (colorMode === "light") {
        doseChoices.forEach((dose) => {
            dose.classList.remove('dark-mode');
            dose.classList.add('light-mode');
        })
        if (doseSelected !== "") {
            const doseButton = document.getElementById(doseSelected.id);
            doseButton.classList.remove('light-mode');
            doseButton.classList.add('dark-mode');
        }
    }

    if (colorMode === "dark") {
        doseChoices.forEach((dose) => {
            dose.classList.remove('light-mode');
            dose.classList.add('dark-mode');
        })
        if (doseSelected !== "") {
            const doseButton = document.getElementById(doseSelected.id);
            doseButton.classList.remove('dark-mode');
            doseButton.classList.add('light-mode');
        }
    }
}

function updateInfusionColors() {
    if (colorMode === "light") {
        infusionChoices.forEach((infusion) => {
            infusion.classList.remove('dark-mode');
            infusion.classList.add('light-mode');
        })
        if (doseSelected !== "") {
            const infusionButton = document.getElementById(infusionSelected.id);
            infusionButton.classList.remove('light-mode');
            infusionButton.classList.add('dark-mode');
        }
    }

    if (colorMode === "dark") {
        infusionChoices.forEach((infusion) => {
            infusion.classList.remove('light-mode');
            infusion.classList.add('dark-mode');
        })
        if (doseSelected !== "") {
            const infusionButton = document.getElementById(infusionSelected.id);
            infusionButton.classList.remove('dark-mode');
            infusionButton.classList.add('light-mode');
        }
    }
}

/********************************************/

const inputs = document.querySelectorAll('input');

let inputWeight = document.getElementById('input-weight');
let inputVolume = document.getElementById('input-volume');
let inputDose = document.getElementById('input-dose');
let inputInfRate = document.getElementById('input-inf-rate');
let inputInfDose = document.getElementById('input-inf-dose');

let valueWeight = inputWeight.value;
let valueVolume = inputVolume.value;
let valueDose = inputDose.value;
let valueInfRate = inputInfRate.value;
let valueInfDose = inputInfDose.value;

function checkInputs(event) {
    let count = 0;
    inputs.forEach((input) => {
        if (input.value !== "") count++;
    })
    
    if (count === 4) {
        updateFields();
        inputs.forEach((input) => {
            if (input.value === "") {
                const blankField = input.id;
                calcValue(blankField);
            }
        })
    }
}

function updateFields() {
    valueWeight = inputWeight.value;
    valueVolume = inputVolume.value;
    valueDose = inputDose.value;
    valueInfRate = inputInfRate.value;
    valueInfDose = inputInfDose.value;
}

function calcValue(blankField) {
    let number = 0.0;
    if (blankField === "input-weight") number = calcWeight();
    if (blankField === "input-volume") number = calcVolume();
    if (blankField === "input-dose") number = calcDose();
    if (blankField === "input-inf-rate") number = calcInfRate();
    if (blankField === "input-inf-dose") number = calcInfDose();
    if (countDecimals(number) > 4) number = number.toFixed(4);
    printValue(blankField, number);
}

function printValue(blankField, number) {
    document.getElementById(blankField).value = number;

    const originalColor = document.getElementById(blankField).style.backgroundColor;

    document.getElementById(blankField).style.backgroundColor = 'lime';
    document.getElementById(blankField).style.fontWeight = '700';

    setTimeout(function() {
        document.getElementById(blankField).style.backgroundColor = originalColor;
        document.getElementById(blankField).style.fontWeight = '400';
    }, 500);
}

function clearForm() {
    inputs.forEach((input) => {
        input.value = "";
    })
}

function calcWeight() {
    const value = (valueDose / valueVolume) * (valueInfRate / valueInfDose * 1000);
    return value;
}

function calcVolume() {
    const value = (valueDose * valueInfRate) / (valueInfDose * valueWeight / 1000);
    return value;
}

function calcDose() {
    const value = (valueInfDose * valueInfRate * valueVolume) / 50;
    return value;
}

function calcInfRate() {
    const value = (valueDose / valueVolume) / (valueWeight * valueInfDose) * 1000;
    return value;
}

function calcInfDose() {
    const value = (valueDose / valueVolume) / valueWeight * valueInfRate * 1000;
    return value;
}

function countDecimals(number) {
    let decimalIndex = number.toString().indexOf(".");
    decimalValue = number.toString().substring(decimalIndex + 1);
    return decimalValue.length;
}

/* PREVENT SCROLL */
setTimeout(function() {
    window.scrollTo(x, y);
}, 0);