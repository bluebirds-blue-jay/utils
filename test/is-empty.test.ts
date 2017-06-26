import { isEmpty } from '../src';

describe('Utils.isEmpty', function () {
  it('should return true for an empty string', function () {
    expect(isEmpty('')).to.equal(true);
  });
  it('should return true for a string composed of spaces only', function () {
    expect(isEmpty('     ')).to.equal(true);
  });
  it('should return true for an empty array', function () {
    expect(isEmpty([])).to.equal(true);
  });
  it('should return false for a regular string', function () {
    expect(isEmpty('foo')).to.equal(false);
  });
});