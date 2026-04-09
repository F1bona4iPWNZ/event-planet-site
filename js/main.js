const swiper = new Swiper(".hero__container", {
  direction: "vertical",
  slidesPerView: 1,
  // autoplay: {
  //   delay: 3000,
  // },
  // speed: 800,
  loop:true,
});

const thumb = document.querySelector(".hero__scrollbar-thumb");

swiper.on("slideChange", () => {
  const totalSlides = swiper.slides.length;
  const currentIndex = swiper.activeIndex;

  const movePercent = (currentIndex / (totalSlides - 1)) * 100;

  thumb.style.transform = `translateY(${movePercent}%)`;
});
// const thumbHeight = 100 / swiper.slides.length;
// thumb.style.height = `${thumbHeight}%`;

// var swiper = new Swiper(".benefits__container", {
//   slidesPerView: 1,
//   loop: true,
//   spaceBetween: 20,
//   speed: 1600,
//   autoplay: {
//     delay: 3000,
//   },

//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// var swiperTour = new Swiper(".tours__container", {
//   slidesPerView: "auto",
//   spaceBetween: 30,
//   centeredSlides: false,

//   loop: true,
//   speed: 2000,
//   autoplay: {
//     delay: 2000,
//   },

//   grabCursor: true,
// });

// // rating
// document.querySelectorAll(".tours__ratio").forEach((rateBlock) => {
//   const reviewId = rateBlock.dataset.reviewId;
//   const storageKey = `tours-rating-${reviewId}`;

//   const savedRating = localStorage.getItem(storageKey);

//   if (savedRating) {
//     const savedInput = rateBlock.querySelector(
//       `.rating__input[value="${savedRating}"]`,
//     );
//     if (savedInput) {
//       savedInput.checked = true;
//     }
//   }

//   rateBlock.querySelectorAll(".rating__input").forEach((input) => {
//     input.addEventListener("change", () => {
//       localStorage.setItem(storageKey, input.value);
//     });
//   });
// });

// const header = document.querySelector('.header');

// window.addEventListener('scroll', () => {
//   if (window.scrollY > 50) {
//     header.style.background = 'rgba(0,0,0,0.7)';
//     header.style.backdropFilter = 'blur(10px)';
//   } else {
//     header.style.background = 'transparent';
//   }
// });

document.querySelector('.hero__arrow').addEventListener('click', () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  });
});

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
  el.style.opacity = 0;
  el.style.transform = 'translateY(50px)';
  el.style.transition = 'all 0.8s ease';
  observer.observe(el);
});