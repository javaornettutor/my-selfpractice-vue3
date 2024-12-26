<style scoped>
.redAndItalic {
  font-style: italic;
  color: red;
}
.card-component {
  padding: 10px;
  background-color: burlywood;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
<template>
  <br />ref content:<span ref="myOwnRef"></span>
  <div class="card-component">
    <fieldset>
      <legend>Others</legend>
      <h1>{{ message }} from Self practice ({{ fullName }})</h1>

      <br />Click Count {{ clickCount }} <br />{{ surName }} {{ giveName }}
      <br />
      <p>
        Ternary example - Address is
        {{ address === "" ? "No Address" : address }}
      </p>
    </fieldset>
    <fieldset>
      <legend>v-XXX or :XXX</legend>
      <p><button :disabled="isButtonDisabled">buttonExample</button></p>
      <h2 :class="dynamicRedColor">This part is dynamic color</h2>
      <input
        type="text"
        v-model="address"
        placeholder="please input your address"
      />
      <p v-html="rawHtml"></p>
      <p v-bind="paragraphProps">v-bind to multiple attribute example</p>

      <h3>Hyperlink</h3>
      <br /><a :href="googleUrl" :target="newGoogle">Google Link</a> <br /><a
        v-bind:href="googleUrl"
        v-bind:target="newGoogle2"
        >Google Link</a
      >
      <br /><a v-bind="linkProps">All link property - Google Link</a>

      <h3>v-if or v-else</h3>
      <div v-if="commonSurname">
        <h1>You have a common surname</h1>
      </div>
      <div v-else>
        <h1>You don't have a common surname</h1>
      </div>
    </fieldset>

    <fieldset>
      <legend>Bind event</legend>

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
      <button @click="testClick">testClick</button>
      <button v-on:click="bindClickEvent">TestButton</button>
    </fieldset>
  </div>
</template>
<script>
//import { ref } from 'vue';
export default {
  setup() {},
  mounted() {
    this.$refs.myOwnRef.textContent = "dddd";
    console.log("in setup ", this.$refs.myOwnRef.textContent);
    document.title = "Self Practice222";
  },

  data() {
    return {
      googleUrl: "http://google.com",
      paragraphProps: {
        id: "testParagraphId",
        style: "border: 2px solid black;  padding: 10px;",
      },

      newGoogle2: "frameName",
      newGoogle: "frameName2",

      isButtonDisabled: true,
      rawHtml: "<button>buttonExample</button>",
      clickCount: 0,
      surName: "",
      giveName: "",
      address: "",
      //commonSurname: ref(false),
      commonSurname: false,
      message: "Hello World",
      fullName: "William Wang",
      dynamicRedColor: "redAndItalic",
    };
  },
  computed: {
    linkProps() {
      return {
        href: this.googleUrl || "#",
        target: "newGoogle3",
      };
    },
  },
  methods: {
    testClick() {
      alert("hi");
    },
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
