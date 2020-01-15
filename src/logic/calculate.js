import operate from './operate';

const calculate = (calcDataObj, buttonName) => {
  if (buttonName === '+/-') {
    calcDataObj.total *= -1;
    calcDataObj.next *= -1;
  } else {
    calcDataObj.total = operate(calcDataObj.total, calcDataObj.next, buttonName).toString();
  }
  return calcDataObj;
};

export default calculate;
