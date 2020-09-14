import { expect } from 'chai';
import * as Utils from '../../src/utils/wait';

describe('.wait()', function () {
  it('should wait for appr. 100ms', async function () {
    const target = 100;
    const now = Date.now();
    await Utils.wait(target);
    const elapsed = Date.now() - now;
    expect(elapsed).to.be.within(target - 10, target + 10);
  });
});
