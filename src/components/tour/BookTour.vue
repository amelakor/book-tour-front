<template>
  <section class="section-cta">
    <div class="cta">

      <div class="cta__content">
        <h2 class="heading-secondary">What are you waiting for?</h2>
        <p class="cta__text">{{tour.duration}} days. 1 adventure. Infinite memories. Make it yours today!</p><a
          class="btn btn--green span-all-rows"
          href="/login"
        >Log in to book tour </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["tour"],
};
</script>

<style scoped>
</style>