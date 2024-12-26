<script>
import ChildComponent from "./ChildComponent.vue";

export default {
  components: {
    ChildComponent,
  },
  data() {
    return {
      msg: "Hello from parent",
      giveName: "cheng-te",
      surName: "wang",
    };
  },
};
</script>

<template>
  <h1>Parents</h1>
  <ChildComponent :msg="msg" :surName="surName" :giveName="giveName" />
</template>
