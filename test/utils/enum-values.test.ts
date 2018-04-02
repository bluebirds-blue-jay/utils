import { enumValues } from '../../src/utils/enum-values';

namespace Str {
  export const TOTO = 3;
  export function noop() {
    // Nothing
  }
}

enum Str {
  FOO = 'foo',
  BAR = 'bar'
}


enum StrWithNoise {
  FOO = 'foo',
  BAR = 'bar'
}

namespace StrWithNoise {
  export const TOTO = 3;
  export const TITI = 'titi';
  export function noop() {
    // Nothing
  }
}


enum Int {
  FOO,
  BAR
}

namespace Int {
  export const TOTO = 3;
  export const TITI = 'titi';
  export function noop() {
    // Nothing
  }
}

describe('enumValues()', () => {
  it('should extract string values', () => {
    const values: Str[] = enumValues(Str);
    expect(values).to.deep.equal([Str.FOO, Str.BAR]);
  });

  it('should extract int values', () => {
    const values: Int[] = enumValues(Int);
    expect(values).to.deep.equal([Int.FOO, Int.BAR]);
  });

  it('should extract string values and exclude noisy ones', () => {
    const values: StrWithNoise[] = enumValues(StrWithNoise, { excludeValues: [StrWithNoise.TITI] });
    expect(values).to.deep.equal([StrWithNoise.FOO, StrWithNoise.BAR]);
  });
});