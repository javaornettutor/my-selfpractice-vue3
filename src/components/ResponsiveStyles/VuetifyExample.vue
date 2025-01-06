<!-- src/App.vue -->
<!-- <template>
  <v-app>
    <v-main>
      <v-container>
        <v-btn color="primary">Primary Button</v-btn>
        <v-card class="mt-5" outlined>
          <v-card-title>Welcome to Vuetify in Vue 3</v-card-title>
          <v-card-text>This is a simple card example.</v-card-text>
          <v-card-actions>
            <v-btn text color="secondary">Action</v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template> -->
<template>
  <v-card>
    <template #title>
      Title
    </template>
    <v-card-text>Some text</v-card-text>
  </v-card>
</template>


<script>
export default {
  name: 'VuetifyExamplePage',
};
</script>

<style>
/* Add any custom styles if needed */
</style>
