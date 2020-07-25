import React, { useState } from "react";
import Media from "./components/Media";
import Soma from "./components/Soma";
import Sorteio from "./components/Sorteio";
import Intervalo from "./components/Intervalo";

import "./App.css";

function App() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(20);

  return (
    <div className="App">
      <h1> Exercício React-Redux Simples </h1>
      <div className="linha">
        <Intervalo
          min={min}
          max={max}
          onMinChanged={setMin}
          onMaxChanged={setMax}
        ></Intervalo>
      </div>
      <div className="linha">
        <Media min={min} max={max}></Media>
        <Soma min={min} max={max}></Soma>
        <Sorteio min={min} max={max}></Sorteio>
      </div>
    </div>
  );
}

export default App;
