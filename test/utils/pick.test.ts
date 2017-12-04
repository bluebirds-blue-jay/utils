import { pick } from '../../src/utils/pick';

describe('.pick()', function () {
  it('should pick a property from an object', async function () {
    const source = {
      a: '1',
      b: '2',
      c: '3'
    };
    const expected = {
      c: '3'
    };
    const actual = pick(source, 'c');
    expect(expected).to.eql(actual);
  });

  it('should pick properties from an object', async function () {
    const source = {
      a: '1',
      b: '2',
      c: '3'
    };
    const expected = {
      b: '2',
      c: '3'
    };
    const actual = pick(source, ['b', 'c']);
    expect(expected).to.eql(actual);
  });
});
