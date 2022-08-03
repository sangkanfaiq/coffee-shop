import axios from "axios";

const GetProductsRequest = () => {
  return {
    type: "GET_PRODUCT_REQUEST",
  };
};

const GetProductsSuccess = (data) => {
  return {
    type: "GET_PRODUCT_SUCCESS",
    payload: data,
  };
};

const GetProductsError = (error) => {
  return {
    type: "GET_PRODUCT_ERROR",
    payload: error,
  };
};

export const GetProducts = () => {
  return (dispatch) => {
    dispatch(GetProductsRequest());
    axios({
      method: "GET",
      url: "http://localhost:3069/api/v1/products/",
    })
      .then((res) => {
        dispatch(GetProductsSuccess(res.data));
      })
      .catch((err) => {
        dispatch(GetProductsError(err.response));
      });
  };
};