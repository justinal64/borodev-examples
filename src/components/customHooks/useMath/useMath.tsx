import React, { useState, useEffect } from "react";

type operator = "add" | "subtract" | "multiply" | "divide";

interface Props {
  values: number[];
  operator: operator;
}

export function useMath(values: number[], operator: operator) {
  const [answer, setAnswer] = useState(0);

  const mathAnswerSet = (newValue: number) => setAnswer(newValue);

  let add = (val: number[]) => {
    mathAnswerSet(
      val.reduce((accumulator, currentValue) => accumulator + currentValue)
    );
  };

  let subtract = (val: number[]) => {
    mathAnswerSet(
      val.reduce((accumulator, currentValue) => accumulator - currentValue)
    );
  };

  useEffect(() => {
    calculate(operator);
  });

  let calculate = (operator: operator) => {
    switch (operator) {
      case "add":
        add(values);
        break;
      case "divide":
        // divide function
        break;
      case "multiply":
        // mul function
        break;
      case "subtract":
        subtract(values);
        break;
    }
  };
  return answer;
}
