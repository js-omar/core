import { IValidate } from '../interfaces/validate.interface';
import { isValidSlug } from './is-valid-slug';

test('isValidSlug Function', () => {
  const SLUGS: IValidate = {
    // cspell:disable
    valid: [
      'test',
      'hot-mo12',
      '23asmdosadopja-23as-23',
      'create-new-app',
      'short23',
      '123',
      'fa',
      'f',
      '0',
    ],
    invalid: [
      '-sadaa',
      '-sadaa-',
      'sadaa-',
      'sad=aa',
      'asdasdas.sadasda',
      'omatsa.121e12d.`21`4`',
      '',
      '1234894291.123412.312.312.312.312',
      0,
      {},
      231.123,
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

  SLUGS.valid.forEach((slug) => {
    expect(isValidSlug(slug)).toBe(true);
  });

  SLUGS.invalid.forEach((slug) => {
    expect(isValidSlug(slug)).toBe(false);
  });
});
