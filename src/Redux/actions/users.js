import Axios from "axios";

export const register = userData => {
  return {
    type: "POST_REGISTER",
    payload: Axios.post(`/api/v1/users/register`, userData)
  };
};

export const login = (userData, history) => {
  return {
    type: "POST_LOGIN",
    payload: Axios.post(`/api/v1/users/login`, userData)
      .then(result => {
        console.log("token" + result.data.result.token);
        if (result.status === 200) {
          alert("Login Success");
          try {
            localStorage.setItem("KEY_TOKEN", result.data.result.token);
            localStorage.setItem("id", result.data.result.id);
            localStorage.setItem("fullname", result.data.result.fullname);
            history.push("/home");
          } catch (error) {
            alert("Oops something went wrong!");
          }
        }
      })
      .catch(error => {
        console.log(error);
        alert("Email or Password is Wrong");
      })
  };
};
