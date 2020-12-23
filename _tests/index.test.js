const chai = require('chai');
const hello = require('../src');

const { expect } = chai;

describe('Index file', () => {
  it('should return the text "hello world"', () => {
    expect(hello()).to.equal('hello world');
  });
});
