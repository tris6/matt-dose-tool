const form = document.getElementById('form');
form.addEventListener("submit", (event) => {
    event.preventDefault();
})

/********************************************/

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

/********************************************/

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