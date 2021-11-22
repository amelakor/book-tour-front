import { createRouter, createWebHistory } from "vue-router";
import ToursSearch from "./pages/ToursSearch";
import SingleTour from "./components/tour/SingleTour";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: ToursSearch },
    {
      path: "/tour/:id",
      component: SingleTour,
    },
  ],
});

export default router;
