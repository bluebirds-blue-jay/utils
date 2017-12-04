import { makeArray } from '../../src/utils/make-array';

describe('.makeArray()', function () {
  it('should return the same array', function () {
    const arr = ['foo'];
    expect(makeArray<string>(arr)).to.equal(arr);
  });
  it('should wrap the value in an array', function () {
    const val = 'foo';
    expect(makeArray(val)).to.deep.equal([val]);
  });
  it('should map a set to an array', function () {
    const arr = ['foo'];
    const set = new Set(arr);
    expect(makeArray(set)).to.deep.equal(arr);
  });
  it('should map an arguments object to an array', function () {
    function foo(...args: any[]) {
      return makeArray(arguments);
    }

    expect(foo('foo')).to.deep.equal(['foo']);
  });
});
