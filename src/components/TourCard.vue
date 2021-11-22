<template>
  <div>
    <div class="card">
      <div class="card__header">
        <div class="card__picture">
          <div class="card__picture-overlay">&nbsp;</div><img
            class="card__picture-img"
            :src="info.imageCover"
            :alt="info.name"
          >
        </div>
        <h3 class="heading-tertirary"><span>{{info.name}}</span></h3>
      </div>
      <div class="card__details">
        <h4 class="card__sub-heading">{{info.difficulty}} {{info.duration}}-day tour</h4>
        <p class="card__text">{{info.summary}}</p>
        <div class="card__data"><svg class="card__icon">
            <use xlink:href=""></use>
          </svg><span>{{info.startLocation.description}}</span></div>
        <div class="card__data"><svg class="card__icon">
            <use xlink:href=""></use>
          </svg><span>{{startDate}}</span></div>
        <div class="card__data"><svg class="card__icon">
            <use xlink:href=""></use>
          </svg><span>{{info.locations.length}} stops</span></div>
        <div class="card__data"><svg class="card__icon">
            <use xlink:href=""></use>
          </svg><span>{{info.maxGroupSize}} people</span></div>
      </div>
      <div class="card__footer">
        <p><span class="card__footer-value">${{info.price}}</span> <span class="card__footer-text">per person</span></p>
        <p class="card__ratings"><span class="card__footer-value">{{info.ratingsAverage}}</span> <span class="card__footer-text">rating ({{info.ratingsQuantity}})</span></p><a
          class="btn btn--green btn--small"
          :href="`/tour/${info._id}`"
          target="_blank"
        >Details</a>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: ["info"],
  computed: {
    startDate() {
      return moment(this.info.startDates[0]).format("MMM Do YY");
    },
  },
};
</script>

<style scoped>
</style>