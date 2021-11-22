<template>
  <section class="section-stories">
    <div class="u-center-text u-margin-bottom-big">
      <h2 class="heading-secondary">We make people genuinely happy</h2>
    </div>
    <review
      v-for="review in firstThreeReviews"
      :key="review._id"
      :review="review"
    />

  </section>
</template>

<script>
import Review from "./Review.vue";
export default {
  props: ["reviews"],
  components: {
    Review,
  },
  computed: {
    firstThreeReviews() {
      return this.reviews.slice(0, 3);
    },
  },
};
</script>

<style scoped>
</style>