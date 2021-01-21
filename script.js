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

// Upwork stars lottie
document.querySelectorAll('.upwork .lottie-stars').forEach((singleStarsContainer) => {
  const upworkStars = lottie.loadAnimation({
    container: singleStarsContainer,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'lotties/stars.json',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet'
    }
  });
  
  startOnScrollReach(upworkStars, document.querySelector('.upwork'));
});

// Testimonials stars lottie
document.querySelectorAll('.testimonials .lottie-stars').forEach((singleStarsContainer) => {
  const testimonialsStars = lottie.loadAnimation({
    container: singleStarsContainer,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'lotties/stars.json',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet'
    }
  });

  startOnScrollReach(testimonialsStars, document.querySelector('.testimonials-cards-container'));
});

// Apostrophe lottie
document.querySelectorAll('.lottie-apostrophe').forEach((singleApostropheContainer) => {
  const apostrophe = lottie.loadAnimation({
    container: singleApostropheContainer,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'lotties/apostrophe.json',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet'
    }
  });

  apostrophe.addEventListener('enterFrame', function (animation) {
    if (animation.currentTime > (apostrophe.totalFrames - 100)) {
      apostrophe.pause();
    }
  });

  startOnScrollReach(apostrophe, document.querySelector('.quote'));
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
  const fireworks = lottie.loadAnimation({
    container: container,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'lotties/fireworks.json',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet'
    }
  });

  startOnScrollReach(fireworks, document.querySelector('.testimonials-cards-container'), 1000);
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

// Contact form validation & submit handling
const form = document.querySelector('#contact-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    event.stopPropagation();
  } else {
    submitForm();
  }
  form.classList.add('was-validated');
});

function submitForm() {
  const formData = {
    name: form.querySelector('#name').value,
    email: form.querySelector('#email').value,
    subject: form.querySelector('#subject').value,
    message: form.querySelector('#message').value
  };

  fetch('send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    body: JSON.stringify(formData),
  })
  .then(response => response)
  .then(data => {
    if (data.status !== 404) {
      form.querySelector('#name').value = '';
      form.querySelector('#email').value = '';
      form.querySelector('#subject').value = '';
      form.querySelector('#message').value = '';
      form.classList.remove('was-validated');
      document.querySelector('#email-sent').classList.remove('d-none');
    } else {
      throw(data);
    }
  })
  .catch((error) => {
    document.querySelector('#email-not-sent').classList.remove('d-none');
  });
}

// Debounce function
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

// Fire off when scroll is beyond parents position
function startOnScrollReach(animation, parentElement, delay = 0) {
  window.addEventListener('scroll', debounce(() => {
    if (parentElement.getBoundingClientRect().top < 700) {
      setTimeout(() => {
        animation.play();
      }, delay);
    }
  }));
}

// Video modals
const modals = document.querySelectorAll('.modal');
modals.forEach(modal => {
  $(modal).on('show.bs.modal', () => {
    const video = modal.querySelector('video');
    if (!video) return;
    video.play();
  });

  $(modal).on('hide.bs.modal', () => {
    const video = modal.querySelector('video');
    if (!video) return;
    video.pause();
  });
});

// Loader lottie
lottie.loadAnimation({
  container: document.querySelector('#lottie-loader'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'lotties/loader.json',
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid meet'
  }
});

// Show loader animation untill the fonts are ready
document.fonts.ready.then(() => {
  const wrapper = document.querySelector('#wrapper');
  const bodyEl = document.querySelector('body');
  const loaderContainer = document.querySelector('#loader-container');

  bodyEl.classList.remove('overflow-hidden');
  loaderContainer.remove();
  wrapper.classList.remove('disabled-div');
  wrapper.classList.add('animation-fade-in');
  const body = new Scrooth();
});
