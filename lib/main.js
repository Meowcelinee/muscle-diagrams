import formBuilder from './formBuilder.js';
import { getKeys } from './keys/getKeys.js';

const form = document.querySelector('form');
const inputs = {};
const keys = getKeys();

formBuilder();

for (const key of Object.keys(keys))
    inputs[key] = document.getElementById(`input_${key}`);

form.onsubmit = e => {
    e.preventDefault();
    const incorrect = [];
    let correct = 0;

    // count correct answers, push incorrect answers to a string array to be displayed later
    for (const i of Object.keys(inputs)) {
        const userAns = inputs[i].value.toLowerCase().trim();
        const ans = keys[inputs[i].name];

        if (userAns === ans) correct += 1;
        else incorrect.push(ans);
    }

    const num = document.getElementById('correct');
    num.textContent = `You got ${correct} out of ${
        Object.keys(keys).length
    } correct!`;

    const incorrectDisplay = document.getElementById('incorrect');
    incorrectDisplay.textContent = 'Incorrect/missing:';

    // display list of incorrect answers using string array
    incorrect.map(ans => {
        const li = document.createElement('li');
        li.textContent = ans;
        incorrectDisplay.appendChild(li);
    });
};
