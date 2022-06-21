<template >
  <header-wrap />

  <main id="main" class="main" data-scroll-container>
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
      if(window.scrollY > 90) {
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
    &::-webkit-scrollbar {
      display:none;
    }
    .section {
      & + .section {
        margin-top:5rem;
      }
      &.mt0 {
        margin-top:0;
      }
      .section-title {
        font-size:3rem;
        margin-bottom:30px;
      }
    }
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

.footer {
  height:300px;
}
</style>
