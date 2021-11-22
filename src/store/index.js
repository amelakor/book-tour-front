import { createStore } from "vuex";

import toursModule from "./tours/index";

const store = createStore({
  modules: {
    tours: toursModule,
  },
  //   state() {
  //     return {};
  //   },
});

export default store;
