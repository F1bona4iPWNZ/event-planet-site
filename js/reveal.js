const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.2 });

reveals.forEach(el => {
  el.style.opacity = 1;
  el.style.transform = 'translateY(50px)';
  el.style.transition = 'all 0.8s ease';
  observer.observe(el);
});