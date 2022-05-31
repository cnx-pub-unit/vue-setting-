<template>
    <div>중첩 라우팅 입니다.</div>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  name: 'test-first',
  setup() {
    const { t } = useI18n();
    return { t };
  },
};
</script>

<style scoped lang="scss">

</style>