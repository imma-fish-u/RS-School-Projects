const title = document.getElementById('curr-song-name'),
  music = document.getElementById('music'),
  currentTimeEl = document.getElementById('current-time'),
  durationEl = document.getElementById('duration'),
  progress = document.querySelectorAll('.progress'),
  progressAudio = document.getElementById('progress-audio'),
  progressVolume= document.getElementById('progress-volume'),
  prevBtn = document.getElementById('play-prev'),
  playBtn = document.getElementById('play'),
  nextBtn = document.getElementById('play-next'),
  volumeBtn = document.getElementById('volume'),
  playlist = document.getElementById('song-list');

const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const wave1 = document.querySelector('.circle__back-1');
const wave2 = document.querySelector('.circle__back-2');

// Music
const songs = [
  {
    name: 'Aqua',
    displayName: 'Aqua Caelestis'
  },
  {
    name: 'Ennio',
    displayName: 'Ennio Morricone'
  },
  {
    name: 'River',
    displayName: 'River Flows In You'
  },
  {
    name: 'Summer',
    displayName: 'Summer Wind'
  },
];

function setPlaylist() {
  for (let i = 1; i <= songs.length; i++){
    let label = document.createElement('label');
    label.className = 'radio play-radio';
    label.setAttribute('for', `radio-${i}`);
    label.innerHTML =  `<input id="radio-${i}" type="radio"  name="radio" value="${i}" ${(i == 1) ? "checked" : ""}>
    <span class="circle__btn small-play-btn" id="small-btn-${i}">
      <i class="uil uil-play play"></i>
      <i class="uil uil-pause pause"></i>
    </span>
    <p class="radio__text">${songs[i-1].displayName}</p>`;
    playlist.appendChild(label);
  }
}

setPlaylist();

let currSmallPlayerBtn = document.getElementById("small-btn-1");
let lastSongId = 1;
const playRadios = document.querySelectorAll('.play-radio');

function setSmallPlayerBtn(icon) {
  icon.children[0].classList.toggle('visibility');
  icon.children[1].classList.toggle('visibility');
  icon.classList.toggle('shadow');
}

function setSongFromPlaylist(e) {
  const item = e.currentTarget;
  const radio = item.children[0];
  const icon = item.children[1];
  currSmallPlayerBtn = icon;

  if (radio.value != lastSongId) {
    loadSong(songs[radio.value-1]);
    lastSongId = radio.value;
  }

  if (isPlaying) pauseSong(); 
  else playSong();
  setSmallPlayerBtn(icon); 
}

for (var plays of playRadios)
  plays.addEventListener('mousedown', setSongFromPlaylist);

// Check if Playing
let isPlaying = false;

// Play
function playSong() {
  if (!isPlaying) {
    setBtnIcon();
    setWave();
  }
  isPlaying = true;
  music.play();
}

// Pause
function pauseSong() {
  isPlaying = false;
  setBtnIcon();
  setWave();
  music.pause();
}

/*  play button  */
function setBtnIcon() {
  pause.classList.toggle('visibility');
  play.classList.toggle('visibility');
  playBtn.classList.toggle('shadow');
}

function setWave() {
  wave1.classList.toggle('paused');
  wave2.classList.toggle('paused');
}

for (var progressItem of progress) {
  progressItem.addEventListener('input', function() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, var(--primary) 0%, var(--primary) ${value}%, transparent ${value}%, transparent 100%)`;
  })
}

function changeRangeValue(range, value) {
  range.value = value;
  range.style.background = `linear-gradient(to right, var(--primary) 0%, var(--primary) ${value}%, transparent ${value}%, transparent 100%)`;
}

// Update DOM
function loadSong(song) {
  title.textContent = song.displayName;
  music.src = `./assets/sounds/${song.name}.mp3`;
}

// Current Song
let songIndex = 0;

// Previous Song
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// Next Song
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// On Load - Select First Song
loadSong(songs[songIndex]);
setWave();

function calculateDuration(duration) {
  const durationMinutes = Math.floor(duration / 60);
  let durationSeconds = Math.floor(duration % 60);
  if (durationSeconds < 10) {
    durationSeconds = `0${durationSeconds}`;
  }
  // Delay switching duration Element to avoid NaN
  if (durationSeconds) {
    durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
  }
}

// Update Progress Bar & Time
function updateProgressBar(e) {
  if (isPlaying) {
    const { duration, currentTime } = e.srcElement;
    // Update progress bar width
    const progressPercent = (currentTime / duration) * 100;

    changeRangeValue(progressAudio, progressPercent);
    calculateDuration(duration);

    // Calculate display for currentTime
    const currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    if (currentSeconds < 10) {
      currentSeconds = `0${currentSeconds}`;
    }
    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
  }
}

// Set Progress Bar
function setProgressBar(e) {
  const { duration } = music;
  const newTime = (e.offsetX / progressAudio.offsetWidth) * 100;
  changeRangeValue(progressAudio, newTime);
  music.currentTime = newTime * duration / 100;
}

function setPlayBtn() {
  if (isPlaying) pauseSong();
  else playSong();
  setSmallPlayerBtn(currSmallPlayerBtn);
}

// Event Listeners
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('ended', nextSong);
music.addEventListener('timeupdate', updateProgressBar);
progressAudio.addEventListener('click', setProgressBar);
playBtn.addEventListener('click', setPlayBtn);

//Volume Controls
let lastVolume = 1;

function changeVolume(e) {
  let volume = e.offsetX / progressVolume.offsetWidth * 100;
  // Rounding value up or down
  if (volume < 10) {
    volume = 0;
    volumeBtn.classList.replace('uil-volume', 'uil-volume-mute');
  } else {
    volumeBtn.classList.replace('uil-volume-mute', 'uil-volume');
  }
  changeRangeValue(progressVolume, volume);
  if (volume > 100) music.volume = 1;
  else music.volume = volume / 100;
  lastVolume = music.volume;
}

function toggleVolumeBtn() {
  if (music.volume) {
    lastVolume = music.volume;
    changeRangeValue(progressVolume, music.volume = 0);
    volumeBtn.classList.replace('uil-volume', 'uil-volume-mute');
  } else {
    music.volume = lastVolume;
    changeRangeValue(progressVolume, lastVolume * 100);
    volumeBtn.classList.replace('uil-volume-mute', 'uil-volume');
  }
}

progressVolume.addEventListener('click', changeVolume);
volumeBtn.addEventListener('click', toggleVolumeBtn);