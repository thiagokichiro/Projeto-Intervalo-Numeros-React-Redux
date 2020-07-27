import { NUM_MAX_ALTERADO, NUM_MIN_ALTERADO } from "./actionTypes";

//Funções que representam os actionCreators

// Action Creators
// Papel: retornar uma ACTION

export function alterarNumeroMinimo(novoNumero) {
  return { type: NUM_MIN_ALTERADO, payload: novoNumero };
}

export function alterarNumeroMaximo(novoNumero) {
  return { type: NUM_MAX_ALTERADO, payload: novoNumero };
}
