import { isUnAuthorizedStatus, isValidTokenFormat, randInt } from '../src/main';
import { IValidate } from './interfaces/validate.interface';

describe('Start Testing Functions', () => {
  // Test isValidToken Function
  test('IsValidToken Function', () => {
    const Tokens: IValidate = {
      // cspell:disable
      valid: [
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
        'asdasdas.asdasdasdas.dsadasd',
      ],
      invalid: [
        'asdasdas.sadasda',
        'omatsa.121e12d.`21`4`',
        '',
        '1234894291.123412.312.312.312.312',
        {},
        231.123,
        0,
        false,
        true,
        ['asdas'],
        { match: (_: string) => !!(_ || true) },
        { match: (_: string) => !(_ || true) },
        () => true,
        () => false,
        NaN,
        Infinity,
      ],
      // cspell:enable
    };

    Tokens.valid.forEach((token) => {
      expect(isValidTokenFormat(token)).toBe(true);
    });

    Tokens.invalid.forEach((token) => {
      expect(isValidTokenFormat(token)).toBe(false);
    });
  });

  // Test isUnAuthorizedStatus Function
  test('isUnAuthorizedStatus Function', () => {
    const Statuses: IValidate = {
      valid: [403, 401, '403', '401'],
      invalid: [
        400,
        406,
        '400',
        'omar',
        '1',
        false,
        true,
        () => true,
        () => false,
        {},
        [],
        { match: (_: string) => !!(_ || true) },
        { match: (_: string) => !(_ || true) },
        NaN,
        Infinity,
      ],
    };

    Statuses.valid.forEach((status) => {
      expect(isUnAuthorizedStatus(status)).toBe(true);
    });

    Statuses.invalid.forEach((status) => {
      expect(isUnAuthorizedStatus(status)).toBe(false);
    });
  });

  // Test randInt Function
  test('randInt Function', () => {
    const RandNo: IValidate = {
      valid: [
        { no1: 403, no2: 700 },
        { no1: '403', no2: '700' },
        { no1: -1540602561.516, no2: 6100158165 },
        { no1: 403, no2: -700 },
        { no1: 0, no2: 0 },
        { no1: 2, no2: 6.651 },
        { no1: -2.51651, no2: -6 },
        { no1: '-2', no2: '-60.561' },
        { no1: '+2', no2: '+6.51' },
      ],
      invalid: [
        { no1: '2', no2: '=23.123' },
        { no1: 'omar', no2: '-6' },
        { no1: 'omar', no2: '=23' },
        { no1: Infinity, no2: Infinity },
        { no1: 'omar', no2: '+23' },
      ],
    };

    RandNo.valid.forEach((randNo) => {
      const randNoResult = randInt(randNo.no1, randNo.no2);

      const minInt = Math.ceil(
        +randNo.no1 > +randNo.no2 ? +randNo.no2 : +randNo.no1
      );
      const maxInt = Math.floor(
        +randNo.no1 > +randNo.no2 ? +randNo.no1 : +randNo.no2
      );

      expect(randNoResult).toBeGreaterThanOrEqual(minInt);
      expect(randNoResult).toBeLessThanOrEqual(maxInt);
    });

    RandNo.invalid.forEach((randNo) => {
      const randNoResult = randInt(randNo.no1, randNo.no2);

      const minInt = Math.ceil(
        +randNo.no1 > +randNo.no2 ? +randNo.no2 : +randNo.no1
      );
      const maxInt = Math.floor(
        +randNo.no1 > +randNo.no2 ? +randNo.no1 : +randNo.no2
      );

      expect(randNoResult).not.toBeGreaterThanOrEqual(minInt);
      expect(randNoResult).not.toBeLessThanOrEqual(maxInt);
    });
  });
});
