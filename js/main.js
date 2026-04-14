const swiper = new Swiper(".hero__container", {
  direction: "vertical",
  slidesPerView: 1,
  autoplay: {
    delay: 3000,
  },
  speed: 2000,
  loop:true,
});

const thumb = document.querySelector(".hero__scrollbar-thumb");

swiper.on("slideChange", () => {
  const totalSlides = swiper.slides.length;
  const currentIndex = swiper.activeIndex;

  const movePercent = (currentIndex / (totalSlides - 1)) * 100;

  thumb.style.transform = `translateY(${movePercent}%)`;
});


document.querySelector('.hero__arrow').addEventListener('click', () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  });
});



document.querySelectorAll('[data-select]').forEach(select => {
  const trigger = select.querySelector('[data-select-trigger]');
  const text = select.querySelector('.custom-select__text');
  const options = select.querySelectorAll('.custom-select__option');
  const input = select.querySelector('input[type="hidden"]');

  // toggle dropdown
  trigger.addEventListener('click', e => {
    e.stopPropagation();

    // інші select
    document.querySelectorAll('[data-select]').forEach(s => {
      if (s !== select) s.classList.remove('active');
    });

    select.classList.toggle('active');
  });

  // вибір опції
  options.forEach(option => {
    option.addEventListener('click', () => {
      text.textContent = option.textContent;
      input.value = option.dataset.value;

      select.classList.remove('active');
    });
  });

  // keyboard support (Enter / Space)
  trigger.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      trigger.click();
    }
  });
});

// клік поза select
document.addEventListener('click', () => {
  document.querySelectorAll('[data-select]').forEach(select => {
    select.classList.remove('active');
  });
});