'use strict'
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b**2-4*a*c;
  let x1;
  let x2;

  if (discriminant < 0) {
    return arr;
  } else if (discriminant == 0) {
    x1 = -b / 2 * a;
    arr.push(x1);

  } else if (discriminant > 0) {
    x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(x1, x2);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
 
  let percentage = parseInt(percent, 10);
  let payment = parseInt(contribution, 10);
  let creditSum = parseInt(amount, 10);
  let currentDate = new Date();
  let dateToPay = Date.parse(date);
  
  if (isNaN(percentage) === true) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (isNaN(payment) === true) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (isNaN(creditSum) === true) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  } else if (dateToPay === 'undefined' || dateToPay <= Date.parse(currentDate)) {
    return `Параметр "Дата" содержит неправильное значение ${date}`;
  }

  let creditPeriod = Math.floor((dateToPay - Date.parse(currentDate)) / 86400000 / 30);
  let creditBody = creditSum - payment;
  let partPercentage = percentage / 1200;
  let monthlyPayment = creditBody * (partPercentage + partPercentage / (((1 + partPercentage)**creditPeriod) - 1));
  let totalAmount = parseFloat((monthlyPayment * creditPeriod).toFixed(2));

//console.log({percentage, partPercentage, payment, creditSum, creditPeriod, monthlyPayment, totalAmount});

  return totalAmount;
}
