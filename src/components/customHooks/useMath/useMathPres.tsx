import React from "react";
import { useMath } from "./useMath";

export function useMathPres() {
  const number = useMath([1, 2, 3, 4, 5], "add");
  return <div>{number}</div>;
}
