// Мобильное меню
const burger = document.querySelector('.burger');
const menu = document.querySelector('nav ul');

burger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Анимации при скролле
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

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Закрытие меню при клике на ссылку
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});
