<template>
  <header id="header" class="header">
    <div class="inner">
      <logo-area />
      <gnb-list />
      <util-list />
    </div>
  </header>
</template>

<script>
import logoArea from '@/components/logo.vue';
import gnbList from '@/components/gnb-list.vue';
import UtilList from '@/components/util-list.vue';
import { useI18n } from 'vue-i18n';

export default {
  name: 'header-wrap',
  components: {
    logoArea,
    gnbList,
    UtilList,
  },
  setup() {
    const { t } = useI18n({ useScope: 'global' });
    return {
      t,
    };
  },
};
</script>

<style scoped lang="scss">
.header {
  position:fixed;
  left:0;
  top:0;
  width:100%;
  box-shadow: 10px 10px 10px rgba(0,0,0,.1);
  z-index:10;
  &.is-fixed {
    .inner {
      background:rgba(0,0,0,.6);
      transition: background-color .2s linear;
    }
  }
  .inner {
    position:relative;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:0 1rem 0 1rem;
    background:#464646;
    transition: background-color .2s linear;
  }
}
</style>
