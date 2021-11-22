<template>
  <tour-header :tour="tour" />
  <tour-info :tour="tour" />
  <tour-images />
  <reviews :reviews="tour.reviews" />
  <book-tour :tour="tour" />
</template>

<script>
import TourHeader from "./TourHeader.vue";
import TourInfo from "./TourInfo.vue";
import TourImages from "./TourImages.vue";
import BookTour from "./BookTour.vue";
import Reviews from "../reviews/Reviews.vue";
export default {
  components: {
    TourInfo,
    TourHeader,
    TourImages,
    BookTour,
    Reviews,
  },
  data() {
    return {
      tourId: null,
    };
  },
  computed: {
    tour() {
      return this.$store.getters["tours/getTour"].data;
    },
  },
  methods: {
    async getTour() {
      await this.$store.dispatch("tours/getTour", this.tourId);
    },
  },
  created() {
    this.tourId = this.$route.params.id;
    this.getTour();
  },
};
</script>

<style scoped>
</style>