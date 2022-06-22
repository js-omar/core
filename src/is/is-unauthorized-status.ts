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
