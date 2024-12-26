<template>
  <div>
    <!-- Header slot -->
    <!-- <div class="header"> -->
      <slot name="header">Default Header</slot>
    <!-- </div> -->

    <!-- Main slot -->
    <!-- <div class="main"> -->
      <slot name="main">Default Main Content</slot>
    <!-- </div> -->

    <!-- Footer slot -->
    <!-- <div class="footer"> -->
      <slot name="footer">Default Footer</slot>
    <!-- </div> -->
  </div>
</template>

<script>
export default {};
</script>

<style>
/* Example styling */
.header {
  background: #f0f0f0;
  padding: 10px;
}
.main {
  margin: 20px 0;
}
.footer {
  background: #e0e0e0;
  padding: 10px;
  text-align: center;
}
</style>
