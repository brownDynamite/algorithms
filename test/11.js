const expect = require('chai').expect;
let solution = require('../solutions/11').solution;
    solution2 = require('../solutions/11').solution2;

describe('repeating elements', () => {
  it('should return repeating elements of an array', () => {
    expect(solution2([1,8,8,8,7,7,1,3])).to.deep.equal([1,7,8]);
  });
});
describe('repeating elements', () => {
  it('should return repeating elements of an array', () => {
    const result = solution([1,8,8,8,7,7,1,3]);
    expect(result).to.deep.equal([8,7,1]);
  });
});

