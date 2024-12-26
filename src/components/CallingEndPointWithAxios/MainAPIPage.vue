<template>
  <div>
    
    <nav>
      <ul>
        <li><router-link to="/ListData">ListData</router-link></li>        
        <li><router-link to="/CreateData">CreateData</router-link></li>        
      </ul>
    </nav>

    <router-view></router-view>
    
  </div>
</template>

<script>

export default {
  setup() {},
  components: {
    
  },
};
</script>
