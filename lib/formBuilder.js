import { getKeys } from './keys/getKeys.js';

const keys = getKeys();

const form = document.querySelector('form');

export default function formBuilder() {
    for (const key of Object.keys(keys)) {
        const label = document.createElement('label');
        label.textContent = `${key.toUpperCase()}: `;
        label.name = key;

        const input = document.createElement('input');
        input.className = 'ans-input';
        input.type = 'text';
        input.name = key;
        input.id = `input_${key}`;

        label.appendChild(input);
        form.appendChild(label);
    }

    const submit = document.createElement('input');
    submit.type = 'submit';
    submit.textContent = 'Submit answers';

    const numDisplay = document.createElement('p');
    numDisplay.id = 'correct';

    const incorrectDisplay = document.createElement('ul');
    incorrectDisplay.id = 'incorrect';

    form.append(submit, numDisplay, incorrectDisplay);
}
