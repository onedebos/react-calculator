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
        .times(numberTwo || (operation === 'x' ? '1' : '0'))
        .toString();
    case '/':
      if (numberTwo === '0') {
        return 'divide by 0 err';
      }
      return Big(numberOne)
        .div(numberTwo || (operation === '/' ? '1' : '0'))
        .toString();

    default:
      return '0';
  }
};

export default operate;
