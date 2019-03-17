import React, { useEffect, useState } from "react";
import { useFetch } from "../../components/customHooks/useFetch/useFetch";
import "../../styles/SpaceX.css";
import { GetData } from "../../helper.js/helper";

export const SpaceX = () => {
  const data = useFetch();

  GetData().then(response => {
    console.log(response);
  });

  if (data) {
    console.log("data = ", data);
  }

  let test = (arrayToMap: string[]) => {
    let result: JSX.Element[] = [];
    {
      arrayToMap.map((ele: string, index: number) => {
        // arrayToMap.map((ele: any, index: any) => { // talk about what happens if the type is any.....
        if (ele.includes("jpg") || ele.includes("png")) {
          result.push(
            <div key={index}>
              <img src={ele} />
            </div>
          );
        }
      });
    }
    return result;
  };

  return (
    <div>
      <h2>SpaceX</h2>
      {test(data || [])}
    </div>
  );
};
