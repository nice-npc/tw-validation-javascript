export function validateTaxID(taxId) {
  // 檢查統編長度是否為8碼
  if (taxId === undefined || taxId === null) {
    return false;
  }

  if (taxId.length !== 8) {
    return false;
  }

  // 檢查統編是否為數字
  if (!/^\d+$/.test(taxId)) {
    return false;
  }

  let lastTwoDigitIsSeven = false;
  if (taxId[6] === "7") {
    lastTwoDigitIsSeven = true;
  }

  const sum = [];
  const multipliers = [1, 2, 1, 2, 1, 2, 4, 1]; // 邏輯乘數

  for (let i = 0; i < multipliers.length; i++) {
    let digit = parseInt(taxId.charAt(i));
    sum.push(digit * multipliers[i]);
  }

  const oneDigit = sum.filter((digit) => digit < 10);
  const twoDigit = sum
    .filter((digit) => digit > 9)
    .map((item) => {
      const str = item.toString();
      return parseInt(str[0]) + parseInt(str[1]);
    });

  const resultList = [...oneDigit, ...twoDigit];
  const resultSum = resultList.reduce((total, item) => (total += item), 0);

  if (resultSum % 10 === 0) {
    return true;
  } else if (lastTwoDigitIsSeven && (resultSum + 1) % 10 === 0) {
    return true;
  } else {
    return false;
  }
}
