"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randInt = exports.isUnAuthorizedStatus = exports.isValidTokenFormat = void 0;
/**
 * @name isValidTokenFormat
 * @description It returns true if the token is a string that
 * match the format of a three strings separated by a period
 * @param {string} token - The token to validate.
 * @author @omar-elsayed97
 * @returns A boolean value.
 */
function isValidTokenFormat(token) {
    return typeof token === 'string' && !!token.match(/^[\w-]*\.[\w-]*\.[\w-]*$/);
}
exports.isValidTokenFormat = isValidTokenFormat;
/**
 * @name isUnAuthorizedStatus
 * @description It returns true if the status code is 403 or 401
 * @param {number | string} status - The status code of the response.
 * @author @omar-elsayed97
 * @returns A boolean value.
 */
function isUnAuthorizedStatus(status) {
    return [403, 401].includes(+status);
}
exports.isUnAuthorizedStatus = isUnAuthorizedStatus;
/**
 * Return a random integer between two numbers, inclusive.
 * @param {number | string} [no1=0] - The first number.
 * @param {number | string} [no2=1000] - The second number.
 * @author @omar-elsayed97
 * @returns A random integer between two numbers.
 */
function randInt(no1 = 0, no2 = 1000) {
    if ((typeof no1 !== 'string' && typeof no1 !== 'number') ||
        (typeof no2 !== 'string' && typeof no2 !== 'number')) {
        throw TypeError('Not a number');
    }
    const minInt = Math.ceil(+no1 > +no2 ? +no2 : +no1);
    const maxInt = Math.floor(+no1 > +no2 ? +no1 : +no2);
    return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
}
exports.randInt = randInt;
//# sourceMappingURL=main.js.map