import axios from 'axios';

export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const INCREMENT = "INCREMENT";
export const LOAD = "LOAD";

export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const add = (product) => {
  return {
    type: ADD,
    result: product
  };
};

export const remove = (product) => {
  return {
    type: REMOVE,
    result: product
  };
};

export const load = () => {
  return {
    type: LOAD
  };
};

export const loadTrue = () => {
  return dispatch => {
    setTimeout( () => {
      dispatch(remove());
    }, 1000 );
  }
};

// export const load = () => {
//   return function (dispatch) {
//     {
//       dispatch(add)
//
//     }
//   }
// };
