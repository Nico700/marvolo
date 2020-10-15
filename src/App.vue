<template>
  <div id="nav">
    <TheHeader/>
  </div>
  <router-view />

</template>

<script>
import TheHeader from './components/TheHeader.vue'
export default {
  name: 'App',
  components: {
    TheHeader
  }
}
</script>

<style>
@import 'assets/css/style.css';
@import 'assets/css/bootstrap.min.css';
</style>
