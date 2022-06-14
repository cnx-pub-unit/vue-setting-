<template>
  <router-view></router-view>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  name: 'about-page',
  setup() {
    const { t } = useI18n();
    return { t };
  },
};
</script>

<style scoped lang="scss">

</style>
