<template>
 

    <nav>
      <ul>

        <li><router-link to="/MainApiPage">MainApiPage</router-link></li>
        <li><router-link to="/SelfPractice">SelfPractice</router-link></li>
        <li><router-link to="/CollectionsPractice">CollectionsPractice</router-link></li>        
        <li><router-link to="/ParentWithChild">ParentWithChild</router-link></li>
        <li><router-link to="/SlotExample">SlotExample</router-link></li>
      </ul>
    </nav>
    <router-view></router-view> <!-- This is where your routed components will render -->
  
</template>

<script>


export default {
  name: 'App',
  
  data(){
     document.title =  'Vue3 - Landing Page';  
  },
  setup(){
     //document.title =  'Vue3 - Landing Page';
  }
};
</script>

<style>
nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 10px;
}
nav ul li {
  display: inline;
}
</style>
