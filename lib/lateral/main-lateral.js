import latFormBuilder from './latFormBuilder.js';
import lateralKey from '../keys/lateral.js';

latFormBuilder();

const form = document.querySelector('form');
const inputs = {};

for (const key of Object.keys(lateralKey)) {
    inputs[key] = document.getElementById(`input_${key}`);
    console.log(inputs);
}

form.onsubmit = e => {
    e.preventDefault();
    let correct = 0;

    for (const i of Object.keys(inputs)) {
        if (inputs[i].value.toLowerCase() === lateralKey[inputs[i].name])
            correct += 1;
    }

    const num = document.getElementById('correct');
    num.textContent = `You got ${correct} out of ${
        Object.keys(lateralKey).length
    } correct!`;
};
