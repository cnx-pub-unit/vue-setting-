<template >
    <header-wrap />
    <main id="main" class="main" style="height:1000px">
        <router-view />
    </main>

    <footer-wrap />

    <scroll-top />
</template>

<script>
import { useI18n } from 'vue-i18n';
import headerWrap from '@/components/layout/header.vue';
import footerWrap from '@/components/layout/footer.vue';
import scrollTop from '@/components/scroll-top.vue';

export default {
  components: {
    headerWrap,
    footerWrap,
    scrollTop,
  },
  setup() {
    const { t } = useI18n({ useScope: 'global' });
    return {
      t,
    };
  },
  methods: {
    handleScroll() {
      const header = document.querySelector('.header');
      // eslint-disable-next-line no-unused-expressions
      if(window.scrollY > 58) {
        header.classList.add('is-fixed');
      } else {
        header.classList.remove('is-fixed');
      }
    },
  },
  mounted() {
    this.$axios.get('https://dummyjson.com/products').then((res) => { console.log(res.data.products); });
    document.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}
.wrap {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  .main {
    padding-top:64px;
  }
}
nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}

.test-slide {
    .swiper-slide{
        height: 300px;
        line-height: 300px;
        font-size: 30px;
        text-align: center;
        background-color: pink;
    }
}
</style>
