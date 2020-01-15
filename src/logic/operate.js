import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  switch (operation) {
    case '-':
      return Number(Big(numberOne)) - Number(Big(numberTwo));
    case '+':
      return Number(Big(numberOne)) + Number(Big(numberTwo));
    case '/':
      return Number(Big(numberOne)) / Number(Big(numberTwo));
    case '%':
      return Number(Big(numberOne)) % Number(Big(numberTwo));
    default:
      return Big(Number(numberOne)) * Big(Number(numberTwo));
  }
};

export default operate;
