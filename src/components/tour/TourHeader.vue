<template>
  <section class="section-header">
    <div class="header__hero">
      <div class="header__hero-overlay">&nbsp;</div><img
        class="header__hero-img"
        src="/img/tours/tour-60c235297815a4066b484fea-1623369999578-cover.jpeg"
        alt="The Mountain Biker"
      >
    </div>
    <div class="heading-box">
      <h1 class="heading-primary"><span>{{tour.name}}</span></h1>
      <div class="heading-box__group">
        <div class="heading-box__detail"><svg class="heading-box__icon">
            <use xlink:href="/img/icons.svg#icon-clock"></use>
          </svg><span class="heading-box__text">{{tour.duration}} days</span></div>
        <div class="heading-box__detail"><svg class="heading-box__icon">
            <use xlink:href="/img/icons.svg#icon-map-pin"></use>
          </svg><span class="heading-box__text">{{tour.startLocation.description}}</span></div>
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