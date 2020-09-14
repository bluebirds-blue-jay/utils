import { expect } from 'chai';
import { DeepPartial } from '../../src/types/deep-partial';

describe('DeepPartial', function () {
  it('should allow deep partial definitions', async function () {
    type TInner = {
      value: number
    }
    type TOuter = {
      value: number;
      inner: TInner;
    }
    const test: DeepPartial<TOuter> = { // Note just "Partial<TOuter>" does not compile!
      value: 1,
      inner: {
        /* Intentionally left empty! */
      }
    };
    expect(test).to.exist;
  });
});
