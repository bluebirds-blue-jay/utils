import { Utils } from '../';

describe('Utils', function () {
  describe('.makeArray()', function () {
    it('should return the same array', function () {
      const arr = ['foo'];
      expect(Utils.makeArray<string>(arr)).to.equal(arr);
    });
    it('should wrap the value in an array', function () {
      const val = 'foo';
      expect(Utils.makeArray(val)).to.deep.equal([val]);
    });
    it('should map a set to an array', function () {
      const arr = ['foo'];
      const set = new Set(arr);
      expect(Utils.makeArray(set)).to.deep.equal(arr);
    });
    it('should map an arguments object to an array', function () {
      function foo(...args: any[]) {
        return Utils.makeArray(arguments);
      }
      expect(foo('foo')).to.deep.equal(['foo']);
    });
  });

  describe('.wait()', function () {
    it('should wait for appr. 100ms', async function () {
      const target = 100;
      const now = Date.now();
      await Utils.wait(target);
      const elapsed = Date.now() - now;
      expect(elapsed).to.be.within(target - 10, target + 10);
    });
  });
});