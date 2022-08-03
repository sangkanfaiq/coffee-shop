const initialState = {
    loading: false,
    data: {
      results: [],
    },
  };
  
  const Products = (state = initialState, action = {}) => {
    switch (action.type) {
      case "GET_PRODUCTS_REQUEST":
        return { ...state, loading: true };
      case "GET_PRODUCTS_ERROR":
        return { ...state, loading: false, error: action.payload };
      case "GET_PRODUCTS_SUCCESS":
        return { ...state, loading: false, data: action.payload };
  
      default:
        return state
    }
  };
  
  export default Products  