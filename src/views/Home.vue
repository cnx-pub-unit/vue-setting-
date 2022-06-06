<template>
  <div class="home">
    <h1>{{ t('title.h1.home') }}</h1>

    <key-visual-swiper
        :swiperLists="keyVisualLists"
        :swiperOptions="keyVisualSwiperOptions" />

  </div>
</template>

<script>
import keyVisualSwiper from '@/components/vendor/swiper-default.vue';
import { useI18n } from 'vue-i18n';

export default {
  name: 'HomeView',
  components: {
    keyVisualSwiper,
  },
  data() {
    return {
      keyVisualLists: [
        {
          name: 'carousel.mainKeyVisual.name[0]', src: 'https://southkorea.concentrix.com/wp-content/uploads/2019/02/home-panel-1.svg', alt: '', text: 'carousel.mainKeyVisual.text[0]',
        },
        {
          name: 'carousel.mainKeyVisual.name[1]', src: 'https://southkorea.concentrix.com/wp-content/uploads/2019/02/home-panel-2.svg', alt: '', text: 'carousel.mainKeyVisual.text[1]',
        },
        {
          name: 'carousel.mainKeyVisual.name[2]', src: 'https://southkorea.concentrix.com/wp-content/uploads/2019/02/home-panel-3.svg', alt: '', text: 'carousel.mainKeyVisual.text[2]',
        },
        {
          name: 'carousel.mainKeyVisual.name[2]', src: 'https://southkorea.concentrix.com/wp-content/uploads/2019/02/home-panel-4.svg', alt: '', text: 'carousel.mainKeyVisual.text[2]',
        },
      ],
    };
  },
  mounted() {
    console.log();
  },
  setup() {
    const { t } = useI18n({ useScope: 'global' });
    const keyVisualSwiperOptions = {
      classAdd: 'key-visual-swiper',
      slidesPerView: 1,
      spaceBetween: 0, // swiper-slide 사이의 간격 지정
      loop: false,
      centeredSlides: false,
    };
    return { t, keyVisualSwiperOptions };
  },
};
</script>

<style lang="scss">
.key-visual-swiper {
    .swiper-slide {
        height:600px;
        background-size:cover;
        background-position:center top ;
        background-repeat:no-repeat;
    }
}
</style>
