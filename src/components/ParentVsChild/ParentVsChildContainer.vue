<template>
  <ParentsComponent />
  <ChildComponent />  
</template>

<script>
import ParentsComponent from "./ParentsComponent.vue";
import ChildComponent from "./ChildComponent.vue";

export default {
    components:{
        ParentsComponent,
        ChildComponent
    }
};
</script>
