'use strict';

function MakeRed () {
  const colorIt = document.querySelectorAll('.color-change');

  for (const el of colorIt) {
    el.classList.toggle('red'); // Like toggle behavior more.
  }
}

function ValidateNum (evt) {
  evt.preventDefault();

  const rawNumber = document.querySelector('input[name="number"]');
  const userNum = Number(rawNumber.value); // typecast to num

  const formFeedback = document.querySelector('#formFeedback');  // 91 <span id="formFeedback" class="bold">
  // Oops solution doesn't work for userNum == 0  (Handles -1 and 1 and 11 okay. I'll fix it.)
  if (isNaN(userNum)) {
    formFeedback.innerText = 'Please enter a number';
  } else if (userNum < 10) {
    formFeedback.innerText = 'Ahh, that feels better.';
  } else if (userNum >= 10) {
    formFeedback.innerText = 'Please enter a smaller number';
  }
}


document.querySelector('.color-changer').addEventListener('click', MakeRed);  // 61 <button type="button" class="color-changer">Click Me!</button>
document.querySelector('.number-form').addEventListener('submit', ValidateNum); // 75 <form class="number-form">   98 <input type="submit">
