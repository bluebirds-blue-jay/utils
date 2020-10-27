import { expect } from 'chai';
import { pluck } from '../../src/utils/pluck';

describe('.pluck()', function () {
  it('should pluck from an array' +
    '', async function () {
    const source = [{
      a: '1'
    }, {
      a: '2'
    }];
    const expected = [
      '1',
      '2'
    ];
    const actual = pluck(source, 'a');
    expect(expected).to.eql(actual);
  });
});
