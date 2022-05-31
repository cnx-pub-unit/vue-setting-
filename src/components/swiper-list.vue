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
            :item="item"
            :style="{'background-image':'url(' + item.src + ')'}">

            <strong v-if="item.name !== ''">{{ item.name }}</strong>

            <p v-if="item.text !== ''">{{ item.text }}</p>

        </swiper-slide>
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/swiper-bundle.min.css'

export default {
    name: 'swiper-list',
    props: {
        swiperOptions: Object,
        swiperLists: Array
    },
    data() {
        return {};
    },
    components: {
        Swiper,
        SwiperSlide
    },
    methods: {
        onSwiper(swiper) {
            // console.log(swiper)
        },
        onSlideChange() {
            // console.log('slide change')
        },
    },
}
</script>

<style scoped lang="scss">

</style>