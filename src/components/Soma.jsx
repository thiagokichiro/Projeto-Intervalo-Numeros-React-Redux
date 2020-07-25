import React from "react";

import Card from "./Card";

export default (props) => {
  // destructure de variáveis existentes no props
  const min = props.min;
  const max = props.max;
  return (
    <Card title="Soma dos Números" blue>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{max + min}</strong>
        </span>
      </div>
    </Card>
  );
};
