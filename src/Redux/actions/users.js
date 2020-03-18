import Axios from "axios";

export const register = userData => {
  return {
    type: "REGISTER",
    payload: Axios.post(`/api/v1/users/register`, userData)
  };
};
