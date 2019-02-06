import * as actionType from './actions/actions';
import axios from 'axios';

const initialState = {
  counter : 0,
  products: [
    {
      name: '',
      description: '',
      cod: '',
      price: 0
    }
  ]
}

const reducer = (state=initialState, action) => {
  if (action.type === actionType.INCREMENT) {
    return {
      ...state,
      counter : state.counter + 1
    }
  }

  if (action.type === actionType.ADD) {
    return {
      counter : state.counter + 1,
      products: state.products.concat(action.result)
    }
  }

  if (action.type === actionType.REMOVE) {

    for (var i =0; i < state.products.length; i++)
       if (state.products[i].cod === action.result.cod) {
          state.products.splice(i,1);
          break;
       }
    return {
      counter : state.counter + 1,
      //products: state.products.concat(action.result)
    }
  }

  if (action.type === actionType.LOAD) {
    axios.get('http://localhost:8090/process/getProducts')
    .then( response => {
      return {
        ...state,
        products:response.data}
      })
    }
    return state;
  }


  export default reducer;
