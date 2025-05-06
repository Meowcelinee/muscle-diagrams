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
    const incorrect = [];
    let correct = 0;

    for (const i of Object.keys(inputs)) {
        const userAns = inputs[i].value.toLowerCase().trim();
        const ans = dorsalKey[inputs[i].name];

        if (userAns === ans) correct += 1;
        else incorrect.push(ans);
    }

    const num = document.getElementById('correct');
    num.textContent = `You got ${correct} out of ${
        Object.keys(dorsalKey).length
    } correct!`;

    const incorrectDisplay = document.getElementById('incorrect');
    incorrectDisplay.textContent = 'Incorrect/missing:';
    incorrect.map(ans => {
        const li = document.createElement('li');
        li.textContent = ans;
        incorrectDisplay.appendChild(li);
    });
};
