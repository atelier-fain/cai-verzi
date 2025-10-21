<template>
  <div class="nav">
    <div class="container">
      <q-img src="../assets/logo.svg"
             class="logo"
             alt="logo"
             fit="contain"
      />
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
.nav {
  padding: 70px 0 0 0;
  .logo {
    margin-right: auto;
    display: flex;
    max-width: 290px;
  }
  @media only screen and (max-width: 1200px) {
    padding: 40px 0 0 0;
    .logo {
      max-width: 200px;
    }

  }
}
</style>
