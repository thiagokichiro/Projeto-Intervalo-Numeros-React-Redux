import React from "react";

import Card from "./Card";

export default (props) => {
  // destructure de variáveis existentes no props
  const min = props.min;
  const max = props.max;
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
