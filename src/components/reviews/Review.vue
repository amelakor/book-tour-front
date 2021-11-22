<template>
  <div class="row">
    <div class="story">
      <div class="story__text">
        <h3 class="heading-tertiary u-margin-bottom-small">John Doe</h3>
        <p>{{review.review}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["review"],
};
</script>

<style scoped>
</style>