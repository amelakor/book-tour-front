<template>
  <section class="section-description">
    <div class="overview-box">
      <div>
        <div class="overview-box__group">
          <h2 class="heading-secondary ma-bt-lg">Quick facts</h2>
          <div class="overview-box__detail"><svg class="overview-box__icon">
              <use xlink:href="/img/icons.svg#icon-calendar"></use>
            </svg><span class="overview-box__label">Next date</span><span class="overview-box__text">{{startDate}}</span></div>
          <div class="overview-box__detail"><svg class="overview-box__icon">
              <use xlink:href="/img/icons.svg#icon-trending-up"></use>
            </svg><span class="overview-box__label">Difficulty</span><span class="overview-box__text">{{tour.difficulty}}</span></div>
          <div class="overview-box__detail"><svg class="overview-box__icon">
              <use xlink:href="/img/icons.svg#icon-user"></use>
            </svg><span class="overview-box__label">Participants</span><span class="overview-box__text">{{tour.maxGroupSize}} people</span></div>
          <div class="overview-box__detail"><svg class="overview-box__icon">
              <use xlink:href="/img/icons.svg#icon-star"></use>
            </svg><span class="overview-box__label">Rating</span><span class="overview-box__text">{{tour.ratingsAverage}} / 5</span></div>
        </div>
        <div class="overview-box__group">
          <h2 class="heading-secondary ma-bt-lg">Your tour guides</h2>
          <div class="overview-box__detail"><span class="overview-box__label">Tour guide</span>
            <span
              class="overview-box__text"
              v-for="guide in tour.guides"
              :key="guide._id"
            >{{guide.name}} </span>
          </div>
        </div>
      </div>
    </div>
    <div class="description-box">
      <h2 class="heading-secondary ma-bt-lg">About {{tour.name}} tour</h2>
      <p class="description__text">{{tour.summary}}</p>
    </div>
  </section>
</template>

<script>
import moment from "moment";

export default {
  props: ["tour"],
  computed: {
    startDate() {
      return moment(this.tour.startDates[0]).format("MMM Do YY");
    },
  },
};
</script>

<style scoped>
</style>