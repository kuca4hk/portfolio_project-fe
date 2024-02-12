<template>
  <the-header title="Portfolio FR"></the-header>
  <router-view></router-view>
</template>

<script>
// import TestPageBootStrap from "@/pages/TestPageBootStrap.vue";
import TheHeader from '@/componenets/layout/TheHeader.vue'

export default {
  components: {
    // TestPageBootStrap,
    TheHeader
  },
 created() {
    this.$store.dispatch('tryLogin')
    this.$store.dispatch('getUserData')
 }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}

.router-enter-from{
  opacity: 0;
  transform: translateY(-30px);
}

.router-leave-to{
  opacity: 0;
  transform: translateY(30px);
}

.router-enter-to{
  opacity: 1;
  transform: translateY(0);
}

.router-leave-from{
  opacity: 1;
  transform: translateY(0);
}

.router-enter-active{
  transition: all 0.3s ease-out;
}

.router-leave-active{
  transition: all 0.3s ease-in;
}
</style>