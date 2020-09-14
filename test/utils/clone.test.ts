import { expect } from 'chai';
import { Collection } from '@bluejay/collection';
import { clone } from '../../src';

describe('.clone()', () => {
  it('should clone a collection', () => {
    const data = { foo: 'bar' };
    const collection = new Collection([data]);
    const cloned = clone(collection);
    expect(cloned).to.deep.equal(collection);
    expect(cloned).to.not.equal(collection);
    expect(cloned.getAt(0)).to.equal(data);
  });
  it('should clone an object', () => {
    const data = { foo: 'bar' };
    const obj = { data };
    const cloned = clone(obj);
    expect(cloned).to.deep.equal(obj);
    expect(cloned).to.not.equal(obj);
    expect(cloned.data).to.equal(data);
  });
});
