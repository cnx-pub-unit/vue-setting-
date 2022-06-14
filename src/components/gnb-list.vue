<template>
  <nav class="gnb" >
    <ul class="gnb-list">
      <gnb-item :lists="gnbList" />
    </ul>
  </nav>
</template>

<script>
import { useI18n } from 'vue-i18n';
import GnbItem from '@/components/gnb-item.vue';

export default {
  name: 'gnbList',
  components: {
    GnbItem,
  },
  props: {
    list: Array,
  },
  setup() {
    const { t } = useI18n({ useScope: 'global' });
    const gnbList = [
      {
        name: 'gnb.menu1.name',
        key: 0,
        children: [
          { src: '/whatwedo/Strategy', name: 'Strategy' },
          { src: '/whatwedo/Analytics', name: 'Analytics' },
          { src: '/whatwedo/Operation', name: 'Operation' },
          { src: '/whatwedo/ContentsAndDesign', name: 'Contents and Design' },
          { src: '/whatwedo/TechnologySolution', name: 'Technology Solution' },
        ],
      },
      {
        name: 'gnb.menu2.name',
        key: 1,
        children: [
          { src: '/aboutus/aboutus', name: 'About us' },
          { src: '/aboutus/newsroom', name: 'Newsroom' },
        ],

      },
      { key: 2, src: '/careers', name: 'gnb.menu3.name' },
      { key: 3, src: '/contactus', name: 'gnb.menu4.name' },
    ];

    return { t, gnbList };
  },
  mounted() {
    /* console.log(this.gnbList[]); */
  },
};
</script>

<style scoped lang="scss">

</style>
