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

// Placeholder lottie
lottie.loadAnimation({
  container: document.querySelector('#lottie-placeholder'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'lotties/placeholder.json',
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
});

// Blue lottie
lottie.loadAnimation({
  container: document.querySelector('#lottie-blue'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'lotties/blue.json',
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid meet'
  }
});

// Yellow lottie
lottie.loadAnimation({
  container: document.querySelector('#lottie-yellow'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'lotties/yellow.json',
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid meet'
  }
});

// Stars lottie
document.querySelectorAll('.lottie-stars').forEach((singleStarsContainer) => {
  lottie.loadAnimation({
    container: singleStarsContainer,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'lotties/stars.json',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet'
    }
  });
});

// Apostrophe lottie
document.querySelectorAll('.lottie-apostrophe').forEach((singleApostropheContainer) => {
  lottie.loadAnimation({
    container: singleApostropheContainer,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'lotties/apostrophe.json',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet'
    }
  });
});

// Pink lottie
lottie.loadAnimation({
  container: document.querySelector('#lottie-pink'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'lotties/pink.json',
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid meet'
  }
});

// Yellow2 lottie
lottie.loadAnimation({
  container: document.querySelector('#lottie-yellow-2'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'lotties/yellow2.json',
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid meet'
  }
});

// White lottie
lottie.loadAnimation({
  container: document.querySelector('#lottie-white'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'lotties/white.json',
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid meet'
  }
});

// Fireworks lottie
document.querySelectorAll('.lottie-fireworks').forEach(container => {
  lottie.loadAnimation({
    container: container,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'lotties/fireworks.json',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet'
    }
  });
});

// Pink 2 lottie
lottie.loadAnimation({
  container: document.querySelector('#lottie-pink-2'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'lotties/pink2.json',
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid meet'
  }
});
