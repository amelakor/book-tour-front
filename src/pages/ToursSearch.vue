<template>
  <main-header />
  <main class="main">
    <div class="card-container">
      <tour-card
        v-for="tour in tours"
        :key="tour._id"
        :info="tour"
      />
    </div>
  </main>
</template>

<script>
import MainHeader from "../components/MainHeader.vue";
import TourCard from "../components/TourCard";
export default {
  components: {
    TourCard,
    MainHeader,
  },
  computed: {
    tours() {
      return this.$store.getters["tours/getTours"].data;
    },
  },
  methods: {
    async getTours() {
      await this.$store.dispatch("tours/getTours");
    },
  },
  created() {
    this.getTours();
  },
};
</script>

<style scoped>
</style>