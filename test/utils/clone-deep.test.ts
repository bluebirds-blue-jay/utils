import { expect } from 'chai';
import { Collection } from '@bluejay/collection';
import { cloneDeep } from '../../src';

describe('.cloneDeep()', () => {
  it('should clone a collection', () => {
    const data = { foo: 'bar' };
    const collection = new Collection([data]);
    const cloned = cloneDeep(collection);
    expect(cloned).to.deep.equal(collection);
    expect(cloned).to.not.equal(collection);
    expect(cloned.getAt(0)).to.deep.equal(data);
    expect(cloned.getAt(0)).to.not.equal(data);
  });
  it('should clone an object', () => {
    const data = { foo: 'bar' };
    const obj = { data };
    const cloned = cloneDeep(obj);
    expect(cloned).to.deep.equal(obj);
    expect(cloned).to.not.equal(obj);
    expect(cloned.data).to.deep.equal(data);
    expect(cloned.data).to.not.equal(data);
  });
  it('should clone an object containing a collection', () => {
    const data = { foo: 'bar' };
    const collection = new Collection([data]);
    const obj = { collection };
    const cloned = cloneDeep(obj);
    expect(cloned).to.deep.equal(obj);
    expect(cloned).to.not.equal(obj);
    expect(cloned.collection).to.deep.equal(collection);
    expect(cloned.collection).to.not.equal(collection);
    expect(cloned.collection.getAt(0)).to.deep.equal(data);
    expect(cloned.collection.getAt(0)).to.not.equal(data);
  });
});
