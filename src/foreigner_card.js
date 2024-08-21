function validateSIN(sin) {
    // 去掉空格或其他分隔符
    sin = sin.replace(/\s+/g, '');
    
    // 檢查 SIN 是否是9位數字
    if (!/^\d{9}$/.test(sin)) {
        return false;
    }

    let sum = 0;

    for (let i = 0; i < sin.length; i++) {
        let digit = parseInt(sin[i], 10);

        // 偶數位數字 (index 是奇數)
        if (i % 2 !== 0) {
            digit *= 2;
            // 如果乘積大於9，則減去9（相當於將其結果的各位數相加）
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
    }

    // 檢查總和是否能被10整除
    return (sum % 10) === 0;
}

// 測試範例
console.log(validateSIN("046454286")); // true
console.log(validateSIN("329 123 517")); // false
