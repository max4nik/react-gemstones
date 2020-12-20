import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  gemstonesProducts: [],
};

export const currentState = {
  gemstonesProducts: [],
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      state.gemstonesProducts.push(action.payload.product);
      currentState.gemstonesProducts.push(action.payload.product);
      return {
        ...state,
        gemstonesProducts: state.gemstonesProducts,
      };

    case actionTypes.REMOVE_FROM_CART:
      var removeIndex = state.gemstonesProducts
        .map((item) => item.id)
        .indexOf(action.payload.id);
      state.gemstonesProducts.splice(removeIndex, 1);
      var removeIndexCurrentState = currentState.gemstonesProducts
        .map((item) => item.id)
        .indexOf(action.payload.id);
      currentState.gemstonesProducts.splice(removeIndexCurrentState, 1);
      return {
        ...state,
        gemstonesProducts: state.gemstonesProducts,
      };
    case actionTypes.CLEAR_CART:
      state.gemstonesProducts = [];
      currentState.gemstonesProducts = [];
      return {
        ...state,
        gemstonesProducts: state.gemstonesProducts,
      };
    default:
      return state;
  }
};

export default shopReducer;
