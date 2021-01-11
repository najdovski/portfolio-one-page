// Hero bg lottie
lottie.loadAnimation({
  container: document.querySelector('#hero-bg-lottie'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  width: 1920,
  height: 1080,
  path: 'lotties/hero-bg.json',
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
});

// Stars lottie
lottie.loadAnimation({
  container: document.querySelector('#stars-lottie'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  width: 1920,
  height: 1080,
  path: 'lotties/stars.json',
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
});

// Videos
const videoContainers = document.querySelectorAll('.video');
for (let i=0; i<videoContainers.length; i++) {
  const videoThumbnail = videoContainers[i].querySelector('.video-thumbnail');
  const playButton = videoContainers[i].querySelector('.play-button');
  const youtubeVideo = videoContainers[i].querySelector('.youtube-video');

  [videoThumbnail, playButton].forEach(function(item) {
    item.addEventListener('click', function() {
      youtubeVideo.src += '?autoplay=1';
      videoThumbnail.style.display = 'none';
      playButton.style.display = 'none';
      youtubeVideo.style.display = 'block';
      videoContainers[i].style.filter = "brightness(100%)";
    })
  });
}