import React from "react";
import { useFetch } from "./useFetch";

export function useFetchPres() {
  const data = useFetch();
  return <div>{data}</div>;
}
