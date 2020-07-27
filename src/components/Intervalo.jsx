import React from "react";
import { connect } from "react-redux";

import "./Intervalo.css";
import Card from "./Card";

//Action Crators
import {
  alterarNumeroMinimo,
  alterarNumeroMaximo,
} from "../store/actions/numerosActions";

const Intervalo = (props) => {
  // faz a desestruturação dos valores de props para variáveis
  const { min, max } = props;

  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <span>
          <strong>Mínimo:</strong>
          <input
            type="number"
            value={min}
            onChange={(e) => props.alterarMinimo(+e.target.value)}
          />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input
            type="number"
            value={max}
            onChange={(e) => props.alterarMaximo(+e.target.value)}
          />
        </span>
      </div>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
};

// Objetivo: mapear os ActionCrators para dentro das props do componente
// chamar o dispatch da action que acabou de acontecer
// Notificar todos os Reducers para evoluir o estado da aplicação
const mapDispatchToProps = (dispatch) => {
  // pode retornar chave/valor ou função
  // no caso está retornando função
  return {
    alterarMinimo(novoNumero) {
      // chama action creator que irá retornar uma action
      const action = alterarNumeroMinimo(novoNumero);
      dispatch(action);
    },
    alterarMaximo(novoNumero) {
      // chama action creator que irá retornar uma action
      // action recebe o type e payload retornado na actionCreator alterarNumeroMaximo
      const action = alterarNumeroMaximo(novoNumero);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo);
