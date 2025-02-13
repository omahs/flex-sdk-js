"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decimalFromNumAndDenomAsPowerOf10 = exports.priceToUnits = exports.toUnits = exports.toUnitsString = exports.uint256 = void 0;
const decimal_js_light_1 = __importDefault(require("decimal.js-light"));
const BIGINT_0 = BigInt(0);
const BIGINT_1 = BigInt(1);
const BIGINT_10 = BigInt(10);
function uint256(value) {
    if (value.startsWith("0x") || value.startsWith("0X")) {
        return value;
    }
    return `0x${value}`;
}
exports.uint256 = uint256;
function decToInt(dec) {
    const f = toMulDiv(dec);
    return f.mul / f.div;
}
function applyExp(n, exp) {
    let e = exp;
    while (e !== BIGINT_0) {
        if (e > 0) {
            n.mul *= BIGINT_10;
            e -= BIGINT_1;
        }
        else {
            n.div *= BIGINT_10;
            e += BIGINT_1;
        }
    }
}
function toMulDiv(decimal) {
    let [decimalPart, exponentPart] = decimal.toString().split("e");
    let exp = exponentPart ? BigInt(exponentPart) : BIGINT_0;
    if (decimalPart.indexOf(".") >= 0) {
        while (decimalPart.endsWith("0")) {
            decimalPart = decimalPart.substring(0, decimalPart.length - 1);
        }
        if (decimalPart.endsWith(".")) {
            decimalPart = decimalPart.substring(0, decimalPart.length - 1);
        }
    }
    let isNegate;
    if (decimalPart.startsWith("-")) {
        decimalPart = decimalPart.substring(1);
        isNegate = true;
    }
    else if (decimalPart.startsWith("+")) {
        decimalPart = decimalPart.substring(1);
        isNegate = false;
    }
    else {
        isNegate = false;
    }
    while (decimalPart.length > 1 && decimalPart.startsWith("0")) {
        decimalPart = decimalPart.substring(1);
    }
    let [intPart, fractionalPart] = decimalPart.split(".");
    if (fractionalPart) {
        intPart = `${intPart}${fractionalPart}`;
        exp -= BigInt(fractionalPart.length);
    }
    const result = {
        mul: BigInt(intPart),
        div: BIGINT_1,
    };
    applyExp(result, exp);
    if (isNegate) {
        result.mul = -result.mul;
    }
    return result;
}
function mulDivToString(value) {
    if (value.div === BIGINT_1) {
        return value.mul.toString();
    }
    decimal_js_light_1.default.set({
        precision: 100,
    });
    let d = new decimal_js_light_1.default(value.mul.toString());
    d = d.div(value.div.toString());
    return d.toFixed();
}
function toUnitsMulDiv(value, decimals) {
    let result;
    if (typeof value === "number" || typeof value === "string" || typeof value === "bigint") {
        result = tokensToUnitsMulDiv(value, decimals);
    }
    else if ("tokens" in value) {
        result = tokensToUnitsMulDiv(value.tokens, decimals);
    }
    else {
        result = toMulDiv(value.units);
    }
    return result;
}
function toUnitsString(value, decimals) {
    return mulDivToString(toUnitsMulDiv(value, decimals));
}
exports.toUnitsString = toUnitsString;
function tokensToUnitsMulDiv(value, decimals) {
    const f = toMulDiv(value);
    applyExp(f, decToInt(decimals));
    return f;
}
function toUnits(value, decimals = 9) {
    const f = toUnitsMulDiv(value, decimals);
    return (f.mul / f.div).toString();
}
exports.toUnits = toUnits;
function priceToUnits(price, denominator, majorDecimals, minorDecimals) {
    const denominatorInt = decToInt(denominator);
    const majorDecimalsInt = decToInt(majorDecimals);
    const minorDecimalsInt = decToInt(minorDecimals);
    if (typeof price === "number" || typeof price === "string" || typeof price === "bigint") {
        return tokenPriceToUnits(toMulDiv(price), denominatorInt, majorDecimalsInt, minorDecimalsInt);
    }
    if ("tokens" in price) {
        return tokenPriceToUnits(toMulDiv(price.tokens), denominatorInt, majorDecimalsInt, minorDecimalsInt);
    }
    return mulDivPriceToUnits(toMulDiv(price.units), denominatorInt);
}
exports.priceToUnits = priceToUnits;
function tokenPriceToUnits(price, denominator, majorDecimals, minorDecimals) {
    applyExp(price, minorDecimals - majorDecimals);
    return mulDivPriceToUnits(price, denominator);
}
function mulDivPriceToUnits(price, denominator) {
    return {
        num: ((price.mul * denominator) / price.div).toString(),
        denum: denominator.toString(),
    };
}
function decimalFromNumAndDenomAsPowerOf10(intNum, powerOf10) {
    let num = intNum;
    while (num.startsWith("0")) {
        num = num.substring(1);
    }
    let len = num.length;
    if (len == 0) {
        return "0";
    }
    if (powerOf10 === 0) {
        return num;
    }
    let dec;
    const d = len - powerOf10;
    if (d === 0) {
        dec = `0.${num}`;
    }
    else if (len > powerOf10) {
        dec = `${num.substring(0, len - powerOf10)}.${num.substring(len - powerOf10)}`;
    }
    else {
        dec = `0.${"0".repeat(powerOf10 - len)}${num}`;
    }
    while (dec.endsWith("0")) {
        dec = dec.substring(0, dec.length - 1);
    }
    if (dec.endsWith(".")) {
        dec = dec.substring(0, dec.length - 1);
    }
    return dec;
}
exports.decimalFromNumAndDenomAsPowerOf10 = decimalFromNumAndDenomAsPowerOf10;
//# sourceMappingURL=utils.js.map