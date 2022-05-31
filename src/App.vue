<template>
    <header-wrap />
    <main id="main" class="main">
        <router-view/>
    </main>

    <footer-wrap />
</template>

<script>
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import gsap from 'gsap';
import { useI18n } from 'vue-i18n';
import headerWrap from '@/components/layout/header.vue';
import footerWrap from '@/components/layout/footer.vue';

import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation, Pagination, A11y]);

export default {
    data() {
        return {
        };
    },
    components: {
        headerWrap,
        footerWrap,
        Swiper,
        SwiperSlide
    },
    setup() {
        const {t} = useI18n({useScope: 'global'});
        return {t}
    },
    mounted() {
        this.$axios.get('https://dummyjson.com/products').then((res) => {console.log(res.data.products)});//axios 사용
        gsap.to('.main', {duration: 1, y: 100, opacity: 1 });//gsap 사용
    }
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
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
