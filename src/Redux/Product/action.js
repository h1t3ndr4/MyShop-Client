import axios from "axios";
import { API } from "../../Components/API";

// action type

export const ALL_PRODUCTS = "ALL_PRODUCTS";
export const SINGLE_PRODUCT = "SINGLE_PRODUCT";

// action creator

export const getAllProducts = (payload) => ({ type: ALL_PRODUCTS, payload });

// action as a function
export const getAllProductsFunc = () => (dispatch) => {
  axios.get(`${API}/products`).then((res) => {
    dispatch(getAllProducts(res.data));
  });
};

export const getFilterData = (value) => (dispatch) => {
  let newData = [];
  axios.get(`${API}/products`).then((res) => {
    newData = res.data.filter((item) => {
      if (value !== "all") {
        if (item.type === value) {
          return item;
        }
      } else {
        return item;
      }
    });
    dispatch(getAllProducts(newData));
  });
};

export const gettingCartItems = (_id, fn) => (dispatch) => {
  axios
    .get(`${API}/cart/${_id}`)
    .then((res) => {
      fn(res.data.products);
    })
    .catch((e) => {
      console.log("error in getting cart item");
    });
};

export const addedToCart = (_id, item_id) => (dispatch) => {
  axios
    .post(`${API}/cart/${_id}`, { itemId: item_id })
    .then((res) => {
      alert("item added to cart");
    })
    .catch((e) => {
      alert("something went wrong while item added into cart");
      console.log("something went wrong while item added into cart");
    });
};

export const removeFromCart = (_id, item_id, fn) => (dispatch) => {
  axios
    .patch(`${API}/cart/${_id}`, { itemId: item_id })
    .then((res) => {
      fn(res.data.products);
    })
    .catch((e) => {
      console.log("error in removing cart item");
    });
};

//detailspage

export const gettingProductDetails = (_id) => (dispatch) => {
  axios.get(`${API}/products/${_id}`).then((res) => {
    console.log(res.data, "details");
    dispatch(getAllProducts(res.data));
  });
};
