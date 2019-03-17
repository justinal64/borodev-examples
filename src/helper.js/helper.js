const Add = (num, num2) => {
  let val = isNaN(parseFloat(num)) ? 0 : parseFloat(num);
  let val2 = isNaN(parseFloat(num2)) ? 0 : parseFloat(num2);
  return val + val2;
};

// const Add = (num, num2) => {
//   return num + num2;
// };

const Subtract = (num, num2) => {
  return num - num2;
};

const Multiply = (num, num2) => {
  return num * num2;
};

const Divide = (num, num2) => {
  return num / num2;
};

// function to check data
const IsNumber = (num, num2) => {
  if (!isNaN(num) && !isNaN(num2)) {
    return true;
  } else {
    return false;
  }
};

const GetData = async url => {
  const response = await fetch(
    url || "https://api.spacexdata.com/v3/launches/latest",
    {}
  ).catch(error => {
    return error;
  });
  let data;
  if (response.ok) data = response.json();
  else data = "I think the url is wrong...";
  return data;
};

const Concat = (val, val2) => {
  return val.concat(val2);
};

const NeverDoThis = (
  [add1, add2],
  [sub1, sub2],
  [div1, div2],
  [mul1, mul2]
) => {
  const add = add1 + add2;
  const sub = sub1 - sub2;
  const div = div1 / div2;
  const mul = mul1 * mul2;

  return [add, sub, div, mul];
};

const RandomApiKey = maxRange => {
  return Math.floor(Math.random() * maxRange);
};

export {
  Add,
  Subtract,
  Multiply,
  Divide,
  IsNumber,
  GetData,
  Concat,
  NeverDoThis,
  RandomApiKey
};
