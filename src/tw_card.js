export function validateIDNumber(idNumber) {
    // 驗證身分證號碼格式
    const formatRegex = /^[A-Z][12]\d{8}$/;
    if (!formatRegex.test(idNumber)) {
        return false;
    }

    // 計算驗證碼
    const letters = 'ABCDEFGHJKLMNPQRSTUVXYWZIO';
    const idNumberArray = idNumber.split('');
    let letterValue = letters.indexOf(idNumberArray[0]) + 10;
    let sum = letterValue / 10 + (letterValue % 10) * 9;

    for (let i = 1; i < 9; i++) {
        sum += parseInt(idNumberArray[i]) * (9 - i);
    }

    const checkDigit = (10 - Math.floor(sum % 10)) % 10;
    const lastChar = idNumberArray[9];

    // 驗證碼比對
    if (checkDigit === parseInt(lastChar)) {
        return true;
    } else {
        return false;
    }
}
