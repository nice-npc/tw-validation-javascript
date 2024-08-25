/**
 * 驗證是否是盧恩算法
 * {@link https://zh.wikipedia.org/zh-tw/盧恩算法}
 * @param {string} number
 * @returns {boolean}
 */
function isValidLuhn(number) {
    if (typeof number !== "string") {
        return false;
    }

    const CHECKS = "0987654321";
    const chs = number.split("");
    let count = 0;

    for (let i = chs.length - 2, k = 1; i >= 0; i--, k++) {
        if (chs[i] < 0 || chs[i] > 9) {
            return false;
        }

        // 偶數位數字 * 2，奇數為不變
        let num = (chs[i] - 0) << (k & 1);

        count += (num % 10) + Math.floor(num / 10);
    }

    return chs[chs.length - 1] === CHECKS[count % 10];
}

/**
 * 驗證信用卡號碼是否正確
 * @param {string} card 信用卡號
 * @param {{ provider: keyof typeof cards }} options
 * @returns {boolean}
 */
export default function isCreditCard(card, options = {}) {
    if (typeof card !== "string") return false;

    const provider = typeof options.provider === "string" && options.provider.toLowerCase();
    const formattedCard = card.replace(/[- ]+/g, "");
    const cards = {
        /** AmEx 美國運通 */
        amex: /^3[47][0-9]{13}$/,
        /** Diners Club 大來國際 */
        dinersclub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        /** discover 發現卡 */
        discover: /^6(?:011|5[0-9][0-9])[0-9]{12,15}$/,
        /** JCB 卡 */
        jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
        /** Mastercard 萬事達卡 */
        mastercard: /^5[1-5][0-9]{2}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/,
        /** UnionPay 中國銀聯 */
        unionpay: /^(6[27][0-9]{14}|^(81[0-9]{14,17}))$/,
        /** VISA */
        visa: /^(?:4[0-9]{12})(?:[0-9]{3,6})?$/,
    };

    if (provider) {
        const cardRegExp = cards[provider];

        if (!cardRegExp || !cards[provider].test(formattedCard)) {
            return false;
        }
    } else if (!Object.values(cards).some((cardRegExp) => cardRegExp.test(formattedCard))) {
        return false;
    }
    return isValidLuhn(formattedCard);
}
