import { IValidate } from './interfaces/validate.interface';
import { isValidTokenFormat } from './is-valid-token-format';

test('isValidTokenFormat Function', () => {
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
