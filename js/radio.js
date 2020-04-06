const radio = document.querySelector('#radio');

let count = 0;
let playerOn = false;

function radioStart() {

  const sound = sounds[count];

  radio.innerHTML = `
    <div class="panelRadio">
      <div class="screen">
        <div class="sep">
          <h2>
            ${sound.name}
          </h2>
        </div>
        <div class="sep">
          <h2>
            ${sound.author}
          </h2>
        </div>
      </div>
  </div>
  <div class="buttons">
    <label id="btnPlay" class="radioButton">
      <span class="btn"></span>
      <i id="pp" class="material-icons">${playerOn ? 'pause' : 'play_arrow'}</i>
    </label>
    <label id="btnStop" class="radioButton">
      <span class="btn"></span>
      <i class="material-icons">stop</i>
    </label>
    <label id="btnPrev" class="radioButton">
      <span class="btn"></span>
      <i class="material-icons">skip_previous</i>
    </label>
    <label id="btnNext" class="radioButton">
      <span class="btn"></span>
      <i class="material-icons">skip_next</i>
    </label>
  </div>
  <audio id="player" src="sounds/${sound.file}"></audio>
  `;

  const pp = document.querySelector('#pp');

  let btnPlay = document.querySelector('#btnPlay');
  let btnStop = document.querySelector('#btnStop');
  let btnPrev = document.querySelector('#btnPrev');
  let btnNext = document.querySelector('#btnNext');

  btnPlay.addEventListener('click', play)
  btnStop.addEventListener('click', stop)
  btnPrev.addEventListener('click', prev)
  btnNext.addEventListener('click', next)

  function play() {
    playerOn = !playerOn;
    if (playerOn) {
      player.play();
      pp.innerHTML = 'pause';
    } else {
      player.pause();
      pp.innerHTML = 'play_arrow';
    }
  }

  function stop() {
    player.pause();
    player.currentTime = 0;
    playerOn = false;
    pp.innerHTML = 'play_arrow';
  }

  function prev() {
    if (count === 0) {
      count = (sounds.length - 1);
    } else {
      count -= 1;
    }
    radioStart();
    if (playerOn) {
      player.play();
    }
  }

  function next() {
    if (count === (sounds.length - 1)) {
      count = 0;
    } else {
      count += 1;
    }
    radioStart();
    if (playerOn) {
      player.play();
    }
  }

}