import { IValidate } from '../interfaces/validate.interface';
import { getRandInt } from './get-rand-int';

test('getRandInt Function', () => {
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
    const randNoResult = getRandInt(randNo.no1, randNo.no2);

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
    const randNoResult = getRandInt(randNo.no1, randNo.no2);

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
