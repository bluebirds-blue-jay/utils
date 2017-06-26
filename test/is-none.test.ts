import { isNone } from '../src';

describe('isNone()', function () {
  it('should be true for null', function () {
    expect(isNone(null)).to.equal(true);
  });

  it('should be true for undefined', function () {
    expect(isNone(undefined)).to.equal(true);
  });

  it('should NOT be true for empty string', function () {
    expect(isNone('')).to.equal(false);
  });
});