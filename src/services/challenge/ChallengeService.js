import axios from "axios";

export const getAll = () => {
  return axios.get().catch((e) => e.response);
};
