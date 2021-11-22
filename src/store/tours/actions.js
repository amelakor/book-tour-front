import axios from "axios";
export default {
  async getTours(context) {
    const response = await axios("http://localhost:3000/app/v1/tours");

    context.commit("setTours", response.data.data);
  },
  async getTour(context, payload) {
    const response = await axios(
      `http://localhost:3000/app/v1/tours/${payload}`
    );
    context.commit("setTour", response.data.data);

    return response.data.data;
  },
};
