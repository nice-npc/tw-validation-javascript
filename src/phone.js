export function validateInternationalPhoneNumber(phoneNumber) {
    // 定義不同國家的電話號碼格式
    const patterns = [
        // { country: '美國', regex: /^\+1\d{10}$/ }, // 美國號碼格式：+1後接10位數字
        // { country: '英國', regex: /^\+44\d{10}$/ }, // 英國號碼格式：+44後接10位數字
        { country: '台灣', regex: /^\+886\d{9}$/ }   // 台灣號碼格式：+886後接9位數字
    ];

    // 遍歷所有國家的號碼格式，檢查是否有匹配
    for (let pattern of patterns) {
        if (pattern.regex.test(phoneNumber)) {
            console.log(`號碼有效，來自${pattern.country}`);
            return true;
        }
    }

    console.log('號碼無效');
    return false;
}

// 測試函數
validateInternationalPhoneNumber('+12025550111'); // 美國號碼測試
validateInternationalPhoneNumber('+441632960961'); // 英國號碼測試
validateInternationalPhoneNumber('+886912345678'); // 台灣號碼測試
validateInternationalPhoneNumber('+886138123456'); // 中國號碼測試（假設為無效格式）
