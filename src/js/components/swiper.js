import Swiper, { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, EffectFade, Autoplay]);

const swiper = new Swiper(".destination-hero__swiper", {
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: ".destination-hero__nav",
    clickable: true,
    renderBullet: function (index, className) {
      if (index == 0) {
        return '<span class="' + className + " destination-hero__bullet" + '">' + ("MOON") + "</span>";
      }
      if (index == 1) {
        return '<span class="' + className + " destination-hero__bullet" + '">' + ("MARS") + "</span>";
      }
      if (index == 2) {
        return '<span class="' + className + " destination-hero__bullet" + '">' + ("EUROPA") + "</span>";
      }
      if (index == 3) {
        return '<div class="' + className + " destination-hero__bullet" + '">' + ("TITAN") + "</div>";
      }
    },
  },
});

const SwiperCrew = new Swiper(".crew-hero__swiper", {
  allowTouchMove: false,

  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

  autoplay: {
    delay: 5000,
  },
  pagination: {

    el: ".crew-hero__nav",
    clickable: true,

    renderBullet: function (index, className) {
      return '<span class="' + "crew-hero__bullet " + className + '">' + '' + "</span>";
    }
  }
})

const SwiperTechnology = new Swiper(".technology-hero__swiper", {
  slidesPerView: "1",
  direction: 'vertical',
  autoHeight: true,

  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: ".technology-hero__nav",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + "technology-hero__bullet " + className + '">' + (index + 1) + "</span>";
    }
  }
})
