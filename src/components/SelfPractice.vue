<style scoped>
.redAndItalic {
  font-style: italic;
  color: red;
}
</style>
<template>
  <h1>{{ message }} from Self practice ({{ fullName }})</h1>
  <h2 :class="dynamicRedColor">This part is dynamic color</h2>
  <br>ref content:<span ref="myOwnRef"></span>
  <input
    type="text"
    v-model="surName"
    v-on:change="inputChangeEvent"
    placeholder="please input surname"
  />
  <input
    type="text"
    v-model="giveName"
    @change="inputChangeEvent2"
    placeholder="please input lastname"
  />
  <input
    type="text"
    v-model="address"
    placeholder="please input your address"
  />
  <br />Click Count {{ clickCount }} <br />{{ surName }} {{ giveName }} <br />
  Address is {{ address }}
  <button v-on:click="bindClickEvent">TestButton</button>
  <div v-if="commonSurname">
    <h1>You have a common surname</h1>    
  </div>
  <div v-else>
    <h1>You don't have a common surname</h1>
  </div>
</template>
<script>
//import { ref } from 'vue';
export default {
  mounted() {
    this.$refs.myOwnRef.textContent="dddd";
    console.log("in setup ",this.$refs.myOwnRef.textContent );
  },
 
  data() {
    return {
      clickCount: 0,
      surName: "",
      giveName: "",
      address: "",
      //commonSurname: ref(false),
      commonSurname: false,
      message: "XXXHello WorldXXX",
      fullName: "William Wang",
      dynamicRedColor: "redAndItalic",
    };
  },
  methods: {
    bindClickEvent() {
      this.clickCount++;
    },
    inputChangeEvent() {

      const curSurname = this.surName.toLowerCase();
      const commonSurnamelist = ["wang", "chen", "huang"];

      this.commonSurname = false;

      if (commonSurnamelist.includes(curSurname)) {
        this.commonSurname = true;
      }

      console.info("you have entered surName", this.surName);
    },
    inputChangeEvent2() {
      console.info("you have entered giveName", this.giveName);
    },
  },
};
</script>
