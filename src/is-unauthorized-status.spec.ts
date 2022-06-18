import { IValidate } from './interfaces/validate.interface';
import { isUnAuthorizedStatus } from './is-unauthorized-status';

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
