const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Play & Pause video
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Update play/pause icon
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

// Update progress & timestamp
function updateProgress() {
  const duration = video.duration;
  const currentTime = video.currentTime;
  progress.value = (currentTime / duration) * 100;

  /*  const seconds = Math.floor(currentTime);
  const milliSeconds = Math.floor((currentTime % 1) * 100);
  console.log(milliSeconds);

  timestamp.innerHTML =
    seconds === 0 && milliSeconds === 0
      ? '00:00'
      : seconds < 10 && milliSeconds < 10
      ? `0${seconds} : 0${Math.floor(milliSeconds)}`
      : seconds < 10 && milliSeconds >= 10
      ? `0${seconds} : ${Math.floor(milliSeconds)}`
      : seconds >= 10 && milliSeconds < 10
      ? `${seconds} : 0${Math.floor(milliSeconds)}`
      : `${seconds} : ${Math.floor(milliSeconds)}`; */

  // Get minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = '0' + String(mins);
  }
  // Get seconds
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = '0' + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}

// Stop the video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

// Set video time to progress
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

// Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);
