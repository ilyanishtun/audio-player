let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');
let nextButton = document.getElementById('nextButton');
let prevButton = document.getElementById('prevButton');
let isPlaying = false;
let currentTrackIndex = 0;
let playlist = [
  {
    title: "DDT",
    artist: "What is autumn",
    src: './assets/audio/track1.mp3'
  },
  {
    title: "DDT",
    artist: "White river",
    src: './assets/audio/track2.mp3'
  },
  {
    title: "Sector Gaza",
    artist: "Demobilization",
    src: './assets/audio/track3.mp3'
  }
];
let coverImages = [
  './assets/img/cover1.gif',
  './assets/img/cover2.gif',
  './assets/img/cover3.gif'
];

function loadTrack(trackIndex) {
  song.src = playlist[trackIndex].src;
  song.load();
  song.onloadeddata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
  };
  currentTrackIndex = trackIndex;

  // Изображение обложки
  let songImg = document.querySelector('.song-img');
  songImg.src = coverImages[trackIndex];

  // Название трека и исполнитель
  let songName = document.querySelector('.song-name');
  songName.textContent = playlist[trackIndex].title;
  let artistName = document.querySelector('.artist-name');
  artistName.textContent = playlist[trackIndex].artist;
}

loadTrack(currentTrackIndex);

function playPause() {
  if (isPlaying) {
    song.pause();
    ctrlIcon.classList.remove('fa-pause');
    ctrlIcon.classList.add('fa-play');
  } else {
    song.play();
    ctrlIcon.classList.add('fa-pause');
    ctrlIcon.classList.remove('fa-play');
  }
  isPlaying = !isPlaying;
}

const currentTimeElement = document.querySelector('.current-time');
const durationElement = document.querySelector('.duration');

setInterval(() => {
  if (isPlaying) {
    progress.value = song.currentTime;

    // Текущее время
    const currentTime = formatTime(song.currentTime);
    currentTimeElement.textContent = currentTime;

    // Продолжительность
    const duration = formatTime(song.duration);
    durationElement.textContent = duration;
  }
}, 500);

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  return formattedTime;
}

progress.oninput = function () {
  song.currentTime = progress.value;
};

song.onended = function () {
  ctrlIcon.classList.remove('fa-pause');
  ctrlIcon.classList.add('fa-play');
  isPlaying = false;
  // Переключаемся на следующий трек
  playNextTrack();
};

function playNextTrack() {
  currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
  loadTrack(currentTrackIndex);
  playPause();
}

function playPrevTrack() {
  currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
  loadTrack(currentTrackIndex);
  playPause();
}

nextButton.addEventListener('click', function() {
  playNextTrack();
  playPause(); 
});

prevButton.addEventListener('click', function() {
  playPrevTrack();
  playPause(); 
});




// let progress = document.getElementById('progress');
// let song = document.getElementById('song');
// let ctrlIcon = document.getElementById('ctrlIcon');






// song.onloadeddata = function(){
//   progress.max = song.duration;
//   progress.value = song.currentTime;
   
// }

// function playPause() {
//   if (ctrlIcon.classList.contains("fa-pause")) {
//     song.pause();
//     ctrlIcon.classList.remove('fa-pause');
//     ctrlIcon.classList.add('fa-play');
//   } else {
//     song.play();
//     ctrlIcon.classList.add('fa-pause');
//     ctrlIcon.classList.remove('fa-play');
//   }
// }

// if (song.play()) {
//   setInterval(() => {
//     progress.value = song.currentTime;
//   }, 500);
// }

// progress.onchange = function() {
//   song.play();
//   song.currentTime = progress.value;
//   ctrlIcon.classList.add('fa-pause');
//   ctrlIcon.classList.remove('fa-play');
// }