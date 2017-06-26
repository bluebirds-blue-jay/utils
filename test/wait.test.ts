import { wait } from '../src';

describe('Utils.wait', function () {
  it('should wait for appr. 100ms', async function () {
    const target = 100;
    const now = Date.now();
    await wait(target);
    const elapsed = Date.now() - now;
    expect(elapsed).to.be.within(target - 10, target + 10);
  });
});