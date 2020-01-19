import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  switch (operation) {
    case '+':
      return Big(numberOne)
        .plus(numberTwo)
        .toString();

    case '-':
      return Big(numberOne)
        .minus(numberTwo)
        .toString();

    case 'x':
      return Big(numberOne)
        .times(numberTwo)
        .toString();
    case '/':
      if (Big(numberTwo) === '0') {
        return '0';
      }
      return Big(numberOne)
        .div(Big(numberTwo))
        .toString();

    default:
      return '0';
  }
};

export default operate;
