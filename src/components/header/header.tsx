import React from "react";

interface Props {
  name: string;
}

export function Header(props: Props) {
  return <h1>Hello, {props.name}</h1>;
}
