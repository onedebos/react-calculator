// eslint-disable-next-line
import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  switch (operation) {
    case '-':
      return Number(Big(numberOne)) - Number(Big(numberTwo));
    case '+':
      return Number(Big(numberOne)) + Number(Big(numberTwo));
    case '/':
      return Number(Big(numberOne)) / Number(Big(numberTwo));
    case '/0':
      return 'err';
    case '%':
      return Number(Big(numberOne)) % Number(Big(numberTwo));
    default:
      return Number(Big(numberOne)) * Number(Big(numberTwo));
  }
};

export default operate;
