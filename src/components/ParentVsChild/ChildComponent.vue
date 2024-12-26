<script>
export default {
  props: {
    msg: String,
    surName: String,
    giveName: String,
  },
};
</script>

<template>
    <h1>Child Component</h1>
    <h2>{{ msg || "No props passed yet" }}</h2>
    <h2>{{ surName || "No surname" }} {{ giveName || "No givename" }}</h2>
    <p>FullName {{ surName + '' + giveName }}</p>
</template>
