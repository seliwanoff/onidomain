<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/footer.vue';
</script>

<template>
  <div>
  <div class="routerclass">
  <RouterView/>
  </div>
  <Footer v-if="$route.path!='/account/dashboard'"/>

 
  </div>
  

</template>

<script>
export default {
    name:'Header-app',
    components:{
        Footer,
        RouterLink,
        RouterView,

    },
    
}

</script>

<style>
@import '@/assets/base.css';

#app {
  max-width: 1519.20px;
  margin: 0 auto;
  font-weight: normal;
  width:100%;
  background: #F2F3F4 !important;
}
body{
  width:100%;
  background:#F2F3F4 !important;
  font-family:"Graphik Dan Web", "-apple-system, BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
}
.routerclass{
min-height:650px
}


</style>
