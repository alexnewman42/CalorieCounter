const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

function cleanInputString(str) {
    const regex = /[+-\s]/g;
    return str.replace(regex, '');
}

function isValidInput(str) {
    const regex = /\d+e\d+/i;
    return str.match(regex);
}

function addEntry() {
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
    console.log(targetInputContainer); //why the space on input-container?!?!
    const enrtyNumber = targetInputContainer.querySelectorAll('input[type="text"]').length;
    const HTMLString = `<label for="${entryDropdown.value}-${enrtyNumber}-name">Entry ${entryNumber} Name</label>`;
}