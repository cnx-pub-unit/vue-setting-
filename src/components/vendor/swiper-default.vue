<template>
  <swiper
    :class="swiperOptions.classAdd"
    :slides-per-view="swiperOptions.slidesPerView"
    :space-between="swiperOptions.spaceBetween"
    :loop="swiperOptions.loop"
    :centeredSlides="swiperOptions.centeredSlides"
    :direction="swiperOptions.direction"
    :scrollbar="swiperOptions.scrollbar"
    :mousewheeel="swiperOptions.mousewheel"
    :pagination="{ clickable: true }"
    :freeMode="swiperOptions.freeMode"
    navigation
    @swiper="onSwiper"
    @slideChange="onSlideChange">

    <swiper-slide
      class="ani"
      v-for="(item, i) in swiperLists"
      :key="i"
      :style="{'background-image':`url( ${item.backgroundSrc})`}">
      <div class="slide-inner">

        <div class="content-box" v-if="item.backgroundSrc">
          <strong class="title" v-show="item.name !== ''">{{ t(item.name) }}</strong>

          <p class="desc" v-show="item.text !== ''">{{ t(item.text) }}</p>

          <p class="desc" v-show="item.router !== ''">
            <router-link class="more-btn btn round"
                         :to="item.router">
              {{ t(item.routeName) }}
            </router-link>
          </p>
        </div>

        <div class="video-box" v-if="item.videoSrc">

        </div>
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
  data() {
    return {
      isActive: false,
    };
  },
  setup() {
    const { t } = useI18n();
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = (swiper) => {
      console.log(swiper);
    };

    return {
      t, onSwiper, onSlideChange,
    };
  },
};
</script>

<style scoped lang="scss">
.swiper-container {
  .swiper-slide {
    position:relative;
    &.swiper-slide-active {
      &.ani {
        .slide-inner {
          animation: fade-in .6s ease forwards;
        }
        .title {
          animation: text-move-down .4s linear forwards;
        }
        .desc {
          animation: text-move-right .5s linear forwards;
          & + .desc {
            animation: fade-in .6s linear forwards;
          }
        }
      }
    }

    .slide-inner {
      position:relative;
      width:100%;
      height:100%;
      .content-box {
        .title {
          display:block;
          font-weight:800;
          color: inherit;
          & + .desc {
            margin-top:20px;
          }
        }
        .desc {
          letter-spacing: -.025em;
          color: inherit;
          & + .desc {
            margin-top:40px;
          }
        }
        .more-btn {
          color: inherit;
        }
      }
    }
  }
}
</style>
