<template>
  <div class="logo">
    <router-link to="/">
      <img :src="logoImage" alt="Logo image"/>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'logo-area',
  setup() {
    const logoImage = "../assets/images/logo-cnx-catalyst-navy.png";

    return { logoImage }
  }
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
