const expect = require('chai').expect;
let solution = require('../solutions/11').solution;

describe('repeating elements', () => {
  it.only('should return repeating elements of an array', () => {
    expect(solution([1,8,8,8,7,7,1,3])).to.deep.equal([1,7,8]);
  });
});

/*
const expect = require('chai').expect;
let solution = require('../solutions/11').solution;
// solution = require('./yourSolution').solution;

describe('repeating elements', () => {
  it('should return repeating elements of an array', () => {
    const result = solution([1,8,8,8,7,7,1,3]);
    expect(result).to.deep.equal([8,7,1]);
  });
});
*/
