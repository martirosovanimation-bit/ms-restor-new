const burger = document.querySelector('.burger');
const menu = document.querySelector('nav ul');
burger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

const faders = document.querySelectorAll('.fade-in');
const options = { threshold: 0.2 };
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, options);

faders.forEach(fader => { appearOnScroll.observe(fader); });
