import { greeting } from '../src/main';

describe('testing main file', () => {
  it("should return 'core' as string", () => {
    expect(greeting()).toBe('core');
  });
});
