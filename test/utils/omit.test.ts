import { expect } from 'chai';
import { omit } from '../../src/utils/omit';

describe('.omit()', function () {
  it('should omit a property from an object', async function () {
    const source = {
      a: '1',
      b: '2',
      c: '3'
    };
    const expected = {
      a: '1',
      b: '2'
    };
    const actual = omit(source, 'c');
    expect(expected).to.eql(actual);
  });

  it('should omit properties from an object', async function () {
    const source = {
      a: '1',
      b: '2',
      c: '3'
    };
    const expected = {
      a: '1'
    };
    const actual = omit(source, ['b', 'c']);
    expect(expected).to.eql(actual);
  });
});
