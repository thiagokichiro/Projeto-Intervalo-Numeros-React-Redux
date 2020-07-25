import React from "react";
import { connect } from "react-redux";

import "./Intervalo.css";
import Card from "./Card";

const Intervalo = (props) => {
  // faz a desestruturação dos valores de props para variáveis
  const { min, max } = props;

  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <span>
          <strong>Mínimo:</strong>
          <input type="number" value={min} readOnly />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input type="number" value={max} readOnly />
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

export default connect(mapStateToProps)(Intervalo);
