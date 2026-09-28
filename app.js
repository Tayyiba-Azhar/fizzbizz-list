// DOM Elements
const limitInput = document.getElementById('limitInput');
const generateBtn = document.getElementById('generateBtn');
const fizzBuzzList = document.getElementById('fizzBuzzList');

function generateFizzBuzz() {

    fizzBuzzList.innerHTML = '';

    const limit = parseInt(limitInput.value) || 30;

    for (let i = 1; i <= limit; i++) {
        const li = document.createElement('li');

        if (i % 3 === 0 && i % 5 === 0) {
            li.textContent = 'FizzBuzz';
            li.className = 'fizzbuzz';
        } else if (i % 3 === 0) {
            li.textContent = 'Fizz';
            li.className = 'fizz';
        } else if (i % 5 === 0) {
            li.textContent = 'Buzz';
            li.className = 'buzz';
        } else {
            li.textContent = i;
        }

        fizzBuzzList.appendChild(li);
    }
}

generateBtn.addEventListener('click', generateFizzBuzz);

generateFizzBuzz();
