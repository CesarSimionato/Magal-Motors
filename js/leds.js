const on = document.querySelector('#on');

const marchs = document.querySelector('.marchs');
const range = document.querySelector('.range');
const envelope = document.querySelector('.envelope');
const speedPosition = document.querySelector('.speedPosition');
const speedNobe = document.querySelector('.speedNobe');
const radioLed = document.querySelector('.radio');

on.addEventListener('click', () => {
  marchs.classList.toggle('on');
  range.classList.toggle('on');
  envelope.classList.toggle('on');
  speedPosition.classList.toggle('on');
  speedNobe.classList.toggle('on');
  radioLed.classList.toggle('on');
})