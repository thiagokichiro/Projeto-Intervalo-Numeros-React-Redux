import React from "react";
import { connect } from "react-redux";

import Card from "./Card";

const Media = (props) => {
  // faz a desestruturação dos valores de props para variáveis
  const { min, max } = props;

  return (
    <Card title="Média dos Números" green>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{(max + min) / 2}</strong>
        </span>
      </div>
    </Card>
  );
};

/* recebe o state como parâmetro
  mapeia o que está no estado para os props do componente,
  com isso possibilita acessar via propriedades do componente o que está no estado da aplicação
*/
function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
}

export default connect(mapStateToProps)(Media);
