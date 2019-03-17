import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import "../../styles/Calculator.css";
import {
  Add,
  Subtract,
  Multiply,
  Divide,
  IsNumber
} from "../../helper.js/helper";

export const Calculator = () => {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState(0);
  const [input1, setInput1] = useState(0);

  const setInputZero = e => setInput(e.target.value);
  const setInputOne = e => setInput1(e.target.value);
  const getResult = () => setResult(input + input1);

  return (
    <div className="hook">
      <div className="current-count">
        <span className="display-4">Result</span>
        <span className="result">{result}</span>
      </div>
      <div>
        <input className="input-value" value={input} onChange={setInputZero} />
        <input value={input1} onChange={setInputOne} />
      </div>
      <div className="action-buttons">
        <button type="button" className="btn btn-success" onClick={getResult}>
          Add
        </button>
      </div>
    </div>
  );
};
