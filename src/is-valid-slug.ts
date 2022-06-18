import { VALID_SLUG_PATTERN } from './regex';

/**
 * @name isValidSlug
 * @description If the input is a string and is a valid slug,
 * return true, otherwise return
 * @param {string} input - The string to be tested.
 * @author @omar-elsayed97
 * @returns A function that takes a string as an argument and returns a boolean.
 */
export function isValidSlug(input: string): boolean {
  return typeof input === 'string' && VALID_SLUG_PATTERN.test(input);
}
