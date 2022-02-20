async function add(operator1, operator2) {
  return "Result: ", operator1 + operator2;
}
async function substract(operator1, operator2) {
  return "Result: ", operator1 - operator2;
}
async function asyncCall() {
  console.log("calling");
  const result = await add(2, 3);
  console.log(result);
}
asyncCall();
