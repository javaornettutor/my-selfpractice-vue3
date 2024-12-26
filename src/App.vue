<template>
  <RoutePractice />
  <!-- <div id="slotApp" />
  <div id="MainApp">
    
    <div class="card">
      <h2 class="card-title">card layout Title</h2>
      <p class="card-content">
        card layout #1
      </p>
      
      <SelfPractice />
    </div>

    <div class="card">
      <h2 class="card-title">card layout Title</h2>
      <p class="card-content">
        card layout #2
      </p>
       
      <CollectionsPractice />
    </div>
  </div> -->
</template>

<script>
import RoutePractice from  "./components/RoutePractice.vue";
// import SelfPractice from "./components/SelfPractice.vue";
// import CollectionsPractice from "./components/CollectionsPractice.vue";

export default {
  name: "App",
  components: {    
    // SelfPractice,
    // CollectionsPractice,
    RoutePractice,
  },
};
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
/* Simple styles for the card layout */
.card {
  width: 300px;
  padding: 20px;
  margin: 30px auto;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
}

.card-content {
  font-size: 16px;
  margin-bottom: 15px;
}
</style>
