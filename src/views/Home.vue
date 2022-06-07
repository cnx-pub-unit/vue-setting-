<template>
  <div class="home">

    <section class="section" id="section1">
      <swiper-default
          :swiperLists="keyVisualLists"
          :swiperOptions="keyVisualSwiperOptions" />
    </section>

    <section class="section" id="section2">
      <h3 class="section-title">제목</h3>
      <swiper-default
        :swiperLists="cardLists"
        :swiperOptions="cardSwiperOptions" />
    </section>

    <section class="section" id="section3">
      <h3 class="section-title">제목</h3>

      <div class="gsap-test-div" style="background:#efefef;">
        <div class="animation-wrap" style="height:3000px;">
          <div class="msg-panel1" style="display:table;width:100%;height:1000px;background:url(https://icepipeled.com/wp-content/uploads/2020/03/1.-ICEPIPE_2020_4_PC_bg.png) center center/cover no-repeat;;color:#000;">
            <p style="display:table-cell;vertical-align: middle;">안녕하세요 멘트 입니다.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="section4" style="margin-top:0">
      <h3 class="section-title">제목</h3>

      <div class="gsap-test-div" style="background:#efefef;" >
        <div class="animation-wrap" style="height:3000px;">
          <div class="msg-panel2" style="display:table;width:100%;height:1000px;background:url(https://icepipeled.com/wp-content/uploads/2020/03/2.-ICEPIPE_2020_4_PC_bg_calendar-type.png) center center/cover no-repeat;;color:#fff;">
            <p style="display:table-cell;vertical-align: middle;">안녕하세요 두번째 멘트 입니다.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="section5" style="margin-top:0">
      <h3 class="section-title">제목</h3>

      <div class="gsap-test-div" style="background:#efefef;">
        <div class="animation-wrap"  style="height:3000px;">
          <div class="msg-panel3" style="display:table;width:100%;height:1000px;background:#000;color:#fff;">
            <p style="display:table-cell;vertical-align: middle;">안녕하세요 세번째 멘트 입니다.</p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import swiperDefault from '@/components/vendor/swiper-default.vue';
import { useI18n } from 'vue-i18n';
import scrollTriger from 'gsap/ScrollTrigger'
import {gsap, Linear} from "gsap/all";

export default {
  name: 'HomeView',
  components: {
    swiperDefault,
  },
  data() {
    return {
      keyVisualLists: [
        {
          name: 'carousel.mainKeyVisual.name[0]', backgroundSrc: 'https://southkorea.concentrix.com/wp-content/uploads/2019/02/home-panel-1.svg', alt: '', text: 'carousel.mainKeyVisual.text[0]', routeName:'common.more', router:'/about'
        },
        {
          name: 'carousel.mainKeyVisual.name[1]', backgroundSrc: 'https://southkorea.concentrix.com/wp-content/uploads/2019/02/home-panel-2.svg', alt: '', text: 'carousel.mainKeyVisual.text[1]', routeName:'common.more', router:'/home'
        },
        {
          name: 'carousel.mainKeyVisual.name[2]', backgroundSrc: 'https://southkorea.concentrix.com/wp-content/uploads/2019/02/home-panel-3.svg', alt: '', text: 'carousel.mainKeyVisual.text[2]', routeName:'common.more', router:'/about'
        },
        {
          name: 'carousel.mainKeyVisual.name[2]', backgroundSrc: 'https://southkorea.concentrix.com/wp-content/uploads/2019/02/home-panel-4.svg', alt: '', text: 'carousel.mainKeyVisual.text[2]', routeName:'common.more', router:'/home'
        },
      ],
      cardLists: [
        {
          name: 'carousel.mainKeyVisual.name[0]', backgroundSrc: 'https://southkorea.concentrix.com/wp-content/uploads/2019/02/home-panel-1.svg', alt: '', text: 'carousel.mainKeyVisual.text[0]', routeName:'common.more', router:'/about'
        },
        {
          name: 'carousel.mainKeyVisual.name[1]', backgroundSrc: 'https://southkorea.concentrix.com/wp-content/uploads/2019/02/home-panel-2.svg', alt: '', text: 'carousel.mainKeyVisual.text[1]', routeName:'common.more', router:'/about'
        },
        {
          name: 'carousel.mainKeyVisual.name[2]', backgroundSrc: 'https://southkorea.concentrix.com/wp-content/uploads/2019/02/home-panel-3.svg', alt: '', text: 'carousel.mainKeyVisual.text[2]', routeName:'common.more', router:'/home'
        },
        {
          name: 'carousel.mainKeyVisual.name[2]', backgroundSrc: 'https://southkorea.concentrix.com/wp-content/uploads/2019/02/home-panel-4.svg', alt: '', text: 'carousel.mainKeyVisual.text[2]', routeName:'common.more', router:'/home'
        },
      ],
    };
  },
  setup() {
    const { t } = useI18n({ useScope: 'global' });
    const keyVisualSwiperOptions = {
      classAdd: 'key-visual-swiper',
      slidesPerView: 1,
      spaceBetween: 0, // swiper-slide 사이의 간격 지정
      loop: false,
      centeredSlides: true,
      scrollbar: false,
      direction: 'horizontal',
      mousewheel: false,
      freeMode: false,
    };

    const cardSwiperOptions = {
      classAdd: 'card-banner-swiper',
      slidesPerView: 'auto',
      spaceBetween: 50, // swiper-slide 사이의 간격 지정
      loop: false,
      centeredSlides: true,
      scrollbar: false,
      direction: 'horizontal',
      mousewheel: false,
      freeMode: false,
    }

    return { t, keyVisualSwiperOptions, cardSwiperOptions };
  },
  mounted() {
    gsap.timeline({
      scrollTrigger: {
        trigger: '#section3',
        start: 'top top',
        pin: '.gsap-test-div',
        pinSpacing: false,
        invalidateOnRefresh: true,
      }
    });
    gsap.timeline({
      scrollTrigger: {
        trigger: '.msg-panel1',
        start: 'top top',
        end: 'bottom 50%',
        scrub: .0001,
      }
    })
    .to('.msg-panel1', {scale:1.2, duration:3}, 0)
    .fromTo('.msg-pane1', {opacity:0}, {opacity:1, duration:3, }, 0)

    gsap.timeline({
      scrollTrigger: {
        trigger: '#section4',
        start: 'top top',
        pin: '.gsap-test-div',
        pinSpacing: false,
        invalidateOnRefresh: true,
      }
    })

    gsap.timeline({
      scrollTrigger: {
        trigger: '.msg-panel2',
        start: 'top top',
        end: 'bottom 50%',
        scrub: .0001,
      }
    })
    .to('.msg-panel2', {scale:1.2, duration:5}, 0)
    .fromTo('.msg-pane2', {opacity:0}, {opacity:1, duration:5, }, 0)

    gsap.timeline({
      scrollTrigger: {
        trigger: '#section5',
        start: 'top top',
        pin: '.gsap-test-div',
        pinSpacing: false,
        invalidateOnRefresh: true,
      }
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.msg-panel3',
        start: 'top top',
        end: 'bottom 50%',
        scrub: .0001,
      }
    })
    .to('.msg-panel3', {scale:1.5, duration:1}, 0)
    .fromTo('.msg-pane3', {opacity:0}, {opacity:1, duration:3, }, 0)

  }
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
    .swiper-button-prev {
      right:10px;
      left:auto;
      transform: translateY(-32px);
    }
    .swiper-button-next {
      transform: translateY(32px);
    }
    .swiper-button-prev,
    .swiper-button-next {
      right:10px;
      width:60px;
      height:60px;
      background-color:rgba(255,255,255,1);
      &:after {
        color:#000;
        font-size:1.4rem;
      }
    }
    .swiper-pagination {
      bottom:auto;
      top:50%;
      left:auto;
      right:80px;
      width:auto;
      transform: translateY(-50%);
      .swiper-pagination-bullet {
        display:block;
        width:12px;
        height:12px;
        border-radius:0;
        &.swiper-pagination-bullet-active{
          background:#fff;
        }
        & + .swiper-pagination-bullet {
          margin-top:10px;
        }
      }
    }
    .swiper-slide {
      height:600px;
      .slide-inner {
        padding:180px 0 20px;
        background:rgba(0,0,0,.5);
        .content-box {
          margin:0 auto;
          color:#fff;
          text-align:left;
          max-width:1200px;
          padding:2rem 6rem 1rem 1rem;
        }
        .title {
          font-size:3.4rem;
        }
        .desc {
          font-size:1.4rem;
          line-height:1.3;
        }
        .more-btn {
          background:#ff564d;
          font-size:1.2rem;
          text-decoration: none;
        }
      }
    }
  }

  .card-banner-swiper {
    padding:50px 0;
    .swiper-button-next,
    .swiper-button-prev {
      display:none;
    }
    .swiper-pagination {
      display:none;
    }
    .swiper-slide {
      height:350px;
      min-width:200px;
      max-width:400px;
      background-position:50% 50%;
      background-repeat: no-repeat;
      border-radius:1rem;
      overflow:hidden;
      opacity:.6;
      &.swiper-slide-active {
        opacity:1;
        transform: scale(1.2);
        transition: transform .3s,  opacity .3s;
        z-index: 11;

        .slide-inner {
          &:after {
            width: 100%;
            height: 100%;
            transition: width .2s, height .2s, background .2s;
          }
        }
      }
      .slide-inner {
        &:after {
          content:'';
          position:absolute;
          top:50%;
          left:50%;
          width:0;
          height:0;
          transform: translate( -50%, -50%);
          background:rgba(0,0,0, .4);
          z-index:-1;
          transition: width .2s, height .2s, background .2s;
        }

        .content-box {
          color:#fff;
          text-align:left;
          padding:2rem 1rem 1rem;
        }
        .title {
          font-size:1.4rem;
        }
        .desc {
          font-size:1rem;
          line-height:1.2;
        }
        .more-btn {
          display:inline-block;
          font-size:.8rem;
          padding:0;
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
</style>
