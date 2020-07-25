import React from "react";

import Card from "./Card";
import { connect } from "react-redux";

const Sorteio = (props) => {
  // faz a desestruturação dos valores de props para variáveis
  const { min, max } = props;
  const resultado = parseInt(Math.random() * (max - min)) + min;

  return (
    <Card title="Sorteio de um Número" purple>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{resultado}</strong>
        </span>
      </div>
    </Card>
  );
};

/* recebe o state como parâmetro
  mapeia o que está no estado para os props do componente,
  com isso possibilita acessar via propriedades do componente o que está no estado da aplicação
*/
const mapStateToProps = (state) => {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
};

export default connect(mapStateToProps)(Sorteio);
