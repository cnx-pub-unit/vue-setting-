<template>
  <li
    v-for="(item, index ) in lists"
    :key="index"
    :class="{'is-on': this.isActive && index === this.realIndex}"
    @mouseover="toggleClass(index)"
    @mouseleave="toggleClass"
  >
    <router-link
      v-if="item.src"
      :to="item.src"
      @click="scrollTopHandle">
      {{ t(item.name) }}
    </router-link>

    <a v-else href="javascript:void(0)">
      {{ t(item.name) }}
    </a>

    <ul class="sub-list"
        v-if="item.children">
      <li
        v-for="(list, i) in item.children"
      :ket="i">
        <router-link
          :to="list.src">
          {{ list.name }}
        </router-link>
      </li>
    </ul>
  </li>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  name: 'gnb-item',
  props: {
    lists: Array,
  },
  data() {
    return {
      realIndex: null,
      isActive: false,
    };
  },
  setup() {
    const { t } = useI18n({ useScope: 'global' });
    const scrollTopHandle = () => {
      window.scrollTo(0, 0);
    };
    return {
      t, scrollTopHandle,
    };
  },
  methods: {
    toggleClass(idx = null) {
      this.isActive = !this.isActive;
      if(this.isActive) {
        this.realIndex = idx;
      }
    },
  },
};
</script>

<style scoped lang="scss">

</style>
