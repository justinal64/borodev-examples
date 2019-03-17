import * as React from "react";
import { randomApiKey, Person } from "./apikey";

export class ApiKey extends React.Component {
  // randomApiKey;

  render() {
    const test = new Person("justin", "leggett", "blue");
    return <h1>Hello {randomApiKey}</h1>;
  }
}
