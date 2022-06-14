<template>
  <div class="logo">
    <router-link to="/">
      <img src="../assets/images/logo-cnx-catalyst-navy.png" alt=""/>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'logo-area',
};
</script>

<style scoped lang="scss">
  .logo {
    position:relative;
    display:inline-block;
    max-width:168px;
    width:100%;
    vertical-align: top;
    a {
      display:block;
      img {
        display:block;
        width:100%;
        max-width:100%;
      }
    }
  }
</style>
