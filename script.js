function leftRight(arrBig, arrSmall) {
  let sumLeft = [];
  let temp = 0;
  let tempArr = [];
  let lengthDifference = arrBig.length - arrSmall.length;
  let rightSideArr = arrBig.slice(lengthDifference, arrBig.length);
  for (let i = rightSideArr.length - 1; i >= 0; i--) {
    if ((rightSideArr[i] + arrSmall[i] + temp) >= 10) {
      let currentVal = rightSideArr[i] + arrSmall[i] + temp;
      tempArr.unshift(currentVal - 10);
      temp = 1;
    } else {
      tempArr.unshift(rightSideArr[i] + arrSmall[i] + temp);
      temp = 0;
    }
  }

  let leftSideArr = arrBig.slice(0, lengthDifference);
  for (let i = leftSideArr.length - 1; i >= 0; i--) {
    if ((leftSideArr[i] + temp) >= 10) {
      let currentVal = leftSideArr[i] + temp;
      sumLeft.unshift(currentVal - 10);
      temp = 1;
    } else {
      sumLeft.unshift(leftSideArr[i] + temp);
      temp = 0;
    }
  }

  if (temp === 1) {
    sumLeft.unshift(1);
  }

  let sum = sumLeft.concat(tempArr);

  return sum.join('');
}

function equal(arrOne, arrTwo) {
  let temp = 0;
  let sum = [];
  for (let i = arrOne.length - 1; i >= 0; i--) {
    if ((arrOne[i] + arrTwo[i] + temp) >= 10) {
      let currentVal = arrOne[i] + arrTwo[i] + temp;
      sum.unshift(currentVal - 10);
      temp = 1;
    } else {
      sum.unshift(arrOne[i] + arrTwo[i] + temp);
      temp = 0;
    }
  }
  if (temp === 1) {
    sum.unshift(1);
  }
  return sum.join('');
}

function sum(num1,num2) {
  let arrNum1 = num1.split('').map(function(element){return parseInt(element)});
  let arrNum2 = num2.split('').map(function(element){return parseInt(element)});
  if (arrNum1.length > arrNum2.length) {
    return leftRight(arrNum1, arrNum2);
  } else if (arrNum1.length < arrNum2.length) {
    return leftRight(arrNum2, arrNum1);
  } else {
    return equal(arrNum1, arrNum2);
  }
}