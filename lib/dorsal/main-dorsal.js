import dorFormBuilder from './dorFormBuilder.js';
import dorsalKey from '../keys/dorsal.js';

dorFormBuilder();

const form = document.querySelector('form');
const inputs = {};

for (const key of Object.keys(dorsalKey)) {
    inputs[key] = document.getElementById(`input_${key}`);
    console.log(inputs);
}

form.onsubmit = e => {
    e.preventDefault();
    let correct = 0;

    for (const i of Object.keys(inputs)) {
        if (inputs[i].value.toLowerCase() === dorsalKey[inputs[i].name])
            correct += 1;
    }

    const num = document.getElementById('correct');
    num.textContent = `You got ${correct} out of ${
        Object.keys(dorsalKey).length
    } correct!`;
};
