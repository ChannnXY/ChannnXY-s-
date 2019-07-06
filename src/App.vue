<template>
  <div id="app" style="overflow-x: hidden;">
    <navbar></navbar>
    <!--导航栏组件-->
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/navBar';

export default {
  components: {Navbar},
  name: 'App',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  input,textarea,select,a:focus{
    outline: none;
  }
</style>
