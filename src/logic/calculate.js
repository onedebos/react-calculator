// eslint-disable-next-line
import Big from 'big.js';
import operate from './operate';

const calculate = (calcDataObj, buttonName) => {
  const isNumber = item => /[0-9]+/.test(item);

  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (isNumber(buttonName)) {
    if (buttonName === '0' && calcDataObj.next === '0') {
      return {};
    }

    if (calcDataObj.operation) {
      if (calcDataObj.next) {
        return { next: calcDataObj.next + buttonName };
      }
      return { next: buttonName };
    }
    if (calcDataObj.next) {
      const next = calcDataObj.next === '0' ? buttonName : calcDataObj.next + buttonName;
      return {
        next,
        total: null,
      };
    }
    return {
      next: buttonName,
      total: null,
    };
  }

  if (buttonName === '%') {
    if (calcDataObj.operation && calcDataObj.next) {
      const result = operate(calcDataObj.total, calcDataObj.next, calcDataObj.operation);
      return {
        total: Big(result)
          .div(Big('100'))
          .toString(),
        next: null,
        operation: null,
      };
    }
    if (calcDataObj.next) {
      return {
        next: Big(calcDataObj.next)
          .div(Big('100'))
          .toString(),
      };
    }
    return {};
  }

  if (buttonName === '.') {
    if (calcDataObj.next) {
      if (calcDataObj.next.includes('.')) {
        return {};
      }
      return { next: `${calcDataObj.next}.` };
    }
    return { next: '0.' };
  }
  if (buttonName === '=') {
    if (calcDataObj.next && calcDataObj.operation) {
      return {
        total: operate(calcDataObj.total, calcDataObj.next, calcDataObj.operation),
        next: null,
        operation: null,
      };
    }
    return {};
  }

  if (buttonName === '+/-') {
    if (calcDataObj.next) {
      return { next: (-1 * parseFloat(calcDataObj.next)).toString() };
    }
    if (calcDataObj.total) {
      return { total: (-1 * parseFloat(calcDataObj.total)).toString() };
    }
    return {};
  }

  if (calcDataObj.operation) {
    return {
      total: operate(calcDataObj.total, calcDataObj.next, calcDataObj.operation),
      next: null,
      operation: buttonName,
    };
  }

  if (!calcDataObj.next) {
    return { operation: buttonName };
  }

  return {
    total: calcDataObj.next,
    next: null,
    operation: buttonName,
  };
};

export default calculate;
