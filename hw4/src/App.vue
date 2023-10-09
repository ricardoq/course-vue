<template>
  <div>
    <Logo></Logo>
    <transition name="slide">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import HomePage from './pages/HomePage/HomePage.vue';
import Logo from './components/LogoComponent/LogoComponent.vue';

export default {
  name: 'App',
  components: {
    Logo,
  }
};
</script>

<style>
#app {

}
</style>
