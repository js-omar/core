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
