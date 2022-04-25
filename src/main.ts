/**
 * @name isValidTokenFormat
 * @description It returns true if the token is a string that
 * match the format of a three strings separated by a period
 * @param {string} token - The token to validate.
 * @author @omar-elsayed97
 * @returns A boolean value.
 */
export function isValidTokenFormat(token: string): boolean {
  return typeof token === 'string' && !!token.match(/^[\w-]*\.[\w-]*\.[\w-]*$/);
}

/**
 * @name isUnAuthorizedStatus
 * @description It returns true if the status code is 403 or 401
 * @param {number | string} status - The status code of the response.
 * @author @omar-elsayed97
 * @returns A boolean value.
 */
export function isUnAuthorizedStatus(status: number | string): boolean {
  return [403, 401].includes(+status);
}

/**
 * Return a random integer between two numbers, inclusive.
 * @param {number | string} [no1=0] - The minimum number to return.
 * @param {number | string} [no2=1000] - The maximum number to return.
 * @returns A random integer between two numbers.
 */
export function randInt(
  no1: number | string = 0,
  no2: number | string = 1000
): number {
  if (
    (typeof no1 !== 'string' && typeof no1 !== 'number') ||
    (typeof no2 !== 'string' && typeof no2 !== 'number')
  ) {
    throw TypeError('Not a number');
  }

  const minInt = Math.ceil(+no1 > +no2 ? +no2 : +no1);
  const maxInt = Math.floor(+no1 > +no2 ? +no1 : +no2);
  return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
}
