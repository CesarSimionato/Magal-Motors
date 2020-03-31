const on = document.querySelector('#on');

const marchs = document.querySelector('.marchs');
const range = document.querySelector('.range');
const envelope = document.querySelector('.envelope');
const speedPosition = document.querySelector('.speedPosition');
const speedNobe = document.querySelector('.speedNobe');

on.addEventListener('click', () => {

  console.log(envelope)

  marchs.classList.toggle('on');
  range.classList.toggle('on');
  envelope.classList.toggle('on');
  speedPosition.classList.toggle('on');
  speedNobe.classList.toggle('on');
})