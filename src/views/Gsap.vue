<template>
  <div class="about gsap-wrap">

    <section class="section" id="aniBox1">
      <div class="hold-box">
        <div class="resize-box center">
          <p class="title">ani box 1</p>
          <p class="desc">hold</p>
        </div>
      </div>
    </section>

    <section class="section" id="aniBox2">
      <div class="scroll-box">
        <p class="title">안녕하세요.</p>
      </div>
    </section>

    <section class="section" id="aniBox3">
      <div class="hold-box">
        <div class="resize-box">
          <p class="title">hold-box</p>
          <p class="desc">closer</p>
          <p class="desc">closer</p>
          <p class="desc">closer</p>
          <p class="desc">closer</p>
          <p class="desc">tiny scroller</p>
          <p class="desc">tiny scroller</p>
          <p class="desc">tiny scroller</p>
        </div>
      </div>
    </section>

    <section class="section" id="aniBox4">
      <div class="scroll-box">
        <p class="title">안녕하세요.</p>
      </div>
    </section>

    <section class="section" id="aniBox5">
      <div class="scroll-box">
        <p class="title">More coming soon... maybe</p>
      </div>
    </section>



  </div>
</template>

<script>
import { gsap } from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'Gsap-wrap',
  mounted() {
    const text = document.querySelectorAll('.resize-box > *');

    gsap.timeline({
      scrollTrigger: {
        trigger: '#aniBox1',
        pin: true,
        pinSpacing: false,
        start: 'top top',
        end: 'center +=2000',
        scrub: 1,
      },
    })
      .fromTo('#aniBox1 .resize-box', {
        width: 0, height: 0, padding: 0, duration: 1,
      }, {
        width: 300, height: 300, padding: 1, duration: 6, 
      })
      .fromTo('#aniBox1 .resize-box > .title', {
        x: 0, opacity: 0, duration: 6, scale: 1, 
      }, {
        x: 90, opacity: 1, scale: 3, duration: 1, 
      })
      .fromTo('#aniBox1 .resize-box .desc', {
        y: -200, opacity: 0, duration: 6, scale: 1,
      }, {
        y: 0, opacity: 1, scale: 3, duration: 1,
      });


    gsap.timeline({
      scrollTrigger: {
        trigger: '#aniBox2',
        pin: true,
        pinSpacing: false,
        start: 'center center',
        end: '-64 bottom',
        scrub: 1,
      },
    }).fromTo('#aniBox2 .title', { opacity: 0, x: -200 }, { opacity: 1, x: 0 });

    gsap.timeline({
      scrollTrigger: {
        trigger: '#aniBox3',
        pin: true,
        pinSpacing: false,
        start: 'center center',
        end: '+=2000 bottom',
        scrub: 1,
        markers: true,
      },
    })
      .to('#aniBox3 .resize-box', { width: 150, height: 150 })
      .fromTo(text, { x: -150 }, { x: 0, stagger: 0.3 });

    gsap.timeline({
      scrollTrigger: {
        trigger: '#aniBox5',
        pin: true,
        pinSpacing: false,
        start: 'center center',
        end: '+=2000 bottom',
        scrub: 1,
        markers: true,
      },
    })
      .fromTo('#aniBox5 .title', { scale: 1 }, { scale: 5 });
  },
};
</script>

<style scoped lang="scss">
.center {
  text-align:center;
}
.gsap-wrap {
  background: #666;
}
.section {
  text-align:center;

  .hold-box {
    width:100%;
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ff9e9e;
  }

  .resize-box {
    width: 0;
    height: 0;
    border-radius:50%;
    background: #616161;
    padding: 1rem;
    color: white;
    overflow: hidden;
    .title {
      font-size:1.2rem;
      color:#fff;
    }
    .desc {
      font-size:.8rem;
    }
    .sub-desc {
      font-size:1rem;
    }
  }
  .scroll-box {
    width:100%;
    min-height: 100vh;
    background: #666;
    display:flex;
    align-items: center;
    justify-content: center;
    .title {
      color:#fff;

    }
  }
}
</style>