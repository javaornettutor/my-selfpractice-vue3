<template>
  <ChildSlot>
    <template #header>
      <h1>This is the header content</h1>
    </template>
    <template #main>
      <p>This is the main content</p>
    </template>
    <template #footer>
      <footer>This is the footer content</footer>
    </template>
  </ChildSlot>
</template>z

<script>
import ChildSlot from './ChildSlot.vue';

export default {
  components: {
    ChildSlot: ChildSlot,
  },
};
</script>
