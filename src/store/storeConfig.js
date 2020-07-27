import { createStore, combineReducers } from "redux";
import numerosReducer from "../store/reducers/numerosReducer";

const reducers = combineReducers({
  numeros: numerosReducer,
});

// CRIA O ESTADO DA APLICAÇÃO A PARTIR DOS REDUCERS
function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
