import { ALL_PRODUCTS, SINGLE_PRODUCT } from "./action";

const initState = {
  products: [],
};

export const prodReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ALL_PRODUCTS:
      return {
        ...state,
        products: [...payload],
      };
    default:
      return state;
  }
};

//details page
export const detailsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SINGLE_PRODUCT:
      return {
        ...state,
        product: [...payload],
      };
    default:
      return state;
  }
};
