<template>
  <div class="scroll-top">
    <button type="button" @click="scrollTopHandle">위로</button>
  </div>
</template>

<script>
export default {
  name: 'scroll-top',
  setup() {
    const scrollTopHandle = () => {
      window.scrollTo(0, 0);
    };
    return { scrollTopHandle };
  },
};
</script>

<style scoped lang="scss">
  .scroll-top {
    position:fixed;
    bottom:3rem;
    right:1rem;
    z-index:1;
  }
</style>
