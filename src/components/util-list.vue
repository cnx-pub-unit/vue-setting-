<template>
  <div class="util-list">
    <lang-change />

  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';
import langChange from '@/components/lang-change.vue';

export default {
  name: 'util-list',
  components: {
    langChange,
  },
  setup() {
    const { t } = useI18n({ useScope: 'global' });
    return { t };
  },
};
</script>

<style scoped lang="scss">
.util-list {
  min-width:168px;
  display:flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
