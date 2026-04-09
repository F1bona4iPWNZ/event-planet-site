// const reveals = document.querySelectorAll('.reveal');

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('reveal--active');
//       observer.unobserve(entry.target);
//     }
//   });
// }, {
//   threshold: 0.2
// });

// reveals.forEach(el => observer.observe(el));

// document.querySelectorAll('[data-reveal-group]').forEach(group => {
//   const items = group.querySelectorAll('.reveal');

//   items.forEach((el, i) => {
//     el.style.transitionDelay = `${i * 0.15}s`;
//   });
// });