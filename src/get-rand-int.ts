/**
 * @name getRandInt
 * @description Return a random integer between two numbers, inclusive.
 * @param {number | string} [no1=0] - The first number.
 * @param {number | string} [no2=1000] - The second number.
 * @author @omar-elsayed97
 * @returns A random integer between two numbers.
 */
export function getRandInt(
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
