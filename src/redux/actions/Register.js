import axios from "axios";
import Swal from "sweetalert2";

const RegisterRequest = () => {
  return {
    type: "REGISTER_REQUEST",
  };
};

const RegisterSuccess = (data) => {
  return {
    type: "REGISTER_SUCCESS",
    payload: data,
  };
};

const RegisterError = (error) => {
  return {
    type: "REGISTER_ERROR",
    payload: error,
  };
};

export const AuthRegister = (formData) => {
  return (dispatch) => {
    dispatch(RegisterRequest());
    axios({
      method: "POST",
      url: "http://localhost:3069/api/v1/auth/register",
      data: {
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
      },
    })
      .then((res) => {
        dispatch(RegisterSuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(RegisterError(err.response.data));
      });
  };
};
