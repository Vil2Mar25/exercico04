import React from "react";
import { useState } from "react";
import "./index.css";

function App(){
    const[contador, setContador] = useState(0);

    return(
        <div className="mostrador">
            <h1 className="valor">{contador}</h1>
            <div className="interacao">
                <button className="soma" onClick={() => { setContador(contador + 1)}}>+</button>
                <button className="subtrai" onClick={() => { setContador(contador - 1)}}>-</button>
            </div>
        </div>
    );
}

export default App;
