import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
  numeros: function (state, action) {
    return {
      min: 3,
      max: 20,
    };
  },
});

// CRIA O ESTADO DA APLICAÇÃO A PARTIR DOS REDUCERS
function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
