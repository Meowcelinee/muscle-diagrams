import lateralKey from '../keys/lateral.js';

const form = document.querySelector('form');

export default function latFormBuilder() {
    for (const key of Object.keys(lateralKey)) {
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

    form.appendChild(submit);

    const numDisplay = document.createElement('p');
    numDisplay.id = 'correct';
    form.appendChild(numDisplay);
    
    const incorrectDisplay = document.createElement('ul');
    incorrectDisplay.id = 'incorrect';
    form.appendChild(incorrectDisplay);
}
