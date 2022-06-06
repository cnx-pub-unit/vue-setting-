<template>
  <li v-for="(item, i) in lists" :key="i">
    <router-link
      :to="item.src"
      @click="scrollTopHandle">
      {{ t(item.name) }}
    </router-link>
  </li>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  name: 'gnb-item',
  props: {
    lists: Array,
  },
  setup() {
    const { t } = useI18n({ useScope: 'global' });

    const scrollTopHandle = () => {
      window.scrollTo(0, 0);
    };
    return { t, scrollTopHandle };
  },
};
</script>

<style scoped lang="scss">
.gnb-list {
  li {
    position:relative;
    & + li {
      &::before {
        content:"";
        position:absolute;
        top:50%;
        left:0;
        width:1px;
        height:50%;
        background: #d5d5d5;
        transform: translateY(-50%);
      }
      padding-left:1px;
    }

    > a {
      display:flex;
      align-items: center;
      padding:0 1rem;
      height:4rem;
      line-height:1;
      color:#fff;
      text-decoration: none;
      &.router-link-exact-active,
      &:hover {
        background:#ff6633;
        color:#fff;
      }
    }
  }
}

</style>
