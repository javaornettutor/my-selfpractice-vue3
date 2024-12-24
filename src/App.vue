<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <self-practice></self-practice>
  <CollectionsPractice></CollectionsPractice>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SelfPractice from './components/SelfPractice.vue';
import CollectionsPractice from './components/CollectionsPractice.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    SelfPractice,
    CollectionsPractice
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
