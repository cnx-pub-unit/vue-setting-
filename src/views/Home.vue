<template>
  <div class="home">
    <h1>{{ t('title.h1.home') }}</h1>

    <key-visual-swiper
        :swiperLists="keyVisualLists"
        :swiperOptions="keyVisualSwiperOptions" />
  </div>
</template>

<script>
import keyVisualSwiper from '@/components/swiper-list';
import { useI18n } from 'vue-i18n';

export default {
  name: 'HomeView',
  data() {
    return {
        keyVisualSwiperOptions: {
            classAdd: 'key-visual-swiper',
            slidesPerView: 3,
            spaceBetween: 0, // swiper-slide 사이의 간격 지정
            loop: true,
            centeredSlides: true
        },
        keyVisualLists: [
            { name:'slide1', src:'data:image/png;base64,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', alt:'', text:'컨텐츠 테스트' },
            { name:'slide2', src:'', alt:'', text:'컨텐츠 테스트' },
            { name:'slide3', src:'', alt:'', text:'컨텐츠 테스트' }
        ]
    }
  },
  components: {
      keyVisualSwiper
  },
  setup() {
    const { t } = useI18n();
    return { t };
  },
};
</script>

<style lang="scss">
.key-visual-swiper {
    .swiper-slide {
        height:400px;
        background-size:contain;
        background-position:center center ;
        background-repeat:no-repeat;
    }
}
</style>
