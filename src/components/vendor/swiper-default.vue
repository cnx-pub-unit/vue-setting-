<template>
  <swiper
    :class="swiperOptions.classAdd"
    :slides-per-view="swiperOptions.slidesPerView"
    :space-between="swiperOptions.spaceBetween"
    :loop="swiperOptions.loop"
    :centeredSlides="swiperOptions.centeredSlides"
    navigation
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange">

    <swiper-slide
      v-for="(item, i) in swiperLists"
      :key="i"
      :style="{'background-image':'url(' + item.src + ')'}">
      <div class="content-box">
        <strong class="title" v-show="item.name !== ''">{{ t(item.name) }}</strong>

        <p class="desc" v-show="item.text !== ''">{{ t(item.text) }}</p>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useI18n } from 'vue-i18n';

import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation, Pagination, A11y]);

export default {
  name: 'swiper-list',
  props: {
    swiperOptions: Object,
    swiperLists: Array,
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const { t } = useI18n();
    const findActiveSlide = (slide) => {
      if(slide.classList.contains('swiper-slide-active') ){
        slide.classList.add('ani');
      } else {
        slide.classList.remove('ani');
      }
    };
    const onSwiper = (swiper) => {
      swiper.slides.forEach((value) => {
        findActiveSlide(value);
      });
    };
    const onSlideChange = (swiper) => {
      swiper.slides.forEach((value) => {
        findActiveSlide(value);
      });
    };

    return {
      t, onSwiper, onSlideChange, findActiveSlide,
    };
  },
};
</script>

<style scoped lang="scss">
  .swiper-slide {
    position:relative;
    &.ani {
      .title {
        animation: text-down .7s forwards;
      }
      .desc {
        animation: text-move-right .7s forwards;
      }
    }
    .content-box {
      padding-top:200px;
      text-align:left;
      text-indent:100px;
      .title {
        display:block;
        font-size: 5rem;
        color:#fff;
        & + .desc {
          margin-top:10px;
        }
      }
      .desc {
        font-size: 1rem;
        color: #fff;
      }
    }
  }
</style>
