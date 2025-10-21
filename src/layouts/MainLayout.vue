<template>
  <q-layout view="lHh Lpr lFf">
    <Nav />
    <q-page-container>
      <router-view />
    </q-page-container>
    <Footer />
  </q-layout>
</template>

<script setup>
import Nav from 'components/Nav.vue';
import Footer from 'components/Footer.vue';

</script>

<style lang="scss">
.q-layout {
  background-image: url('../assets/f.png');
  background-repeat: repeat;
  background-size: auto;
}
</style>
