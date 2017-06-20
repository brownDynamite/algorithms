const expect = require('chai').expect;
let solution1 = require('../solutions/18').solution1;
solution2 = require('../solutions/18').solution2;
solution3 = require('../solutions/18').solution3;

describe('Find missing number in array', () => {
it.only('should return 7 for [5,6,8,9]', () => {
  const result1 = solution1([5,6,8,9]),
        result2 = solution2([5,6,8,9]);
        result3 = solution3([5,6,8,9]);
  expect(result1).to.equal(7);
  expect(result2).to.equal(7);
  expect(result3).to.equal(7);
});

it.only('should return 94 for [89,90,91,92,93,95]', () => {
const result1 = solution1([89,90,91,92,93,95]),
      result2 = solution2([89,90,91,92,93,95]);
      result3 = solution3([89,90,91,92,93,95]);
expect(result1).to.equal(94);
expect(result2).to.equal(94);
expect(result3).to.equal(94);
});

it.only('should return null if there is no missing number', () => {
const result1 = solution1([1,2,3,4,5]),
      result2 = solution2([1,2,3,4,5]);
      result3 = solution3([1,2,3,4,5]);
expect(result1).to.equal(null);
expect(result2).to.equal(null);
expect(result3).to.equal(null);
});

it.only('should return -8 for [-10,-9,-7,-6,-5]', () => {
const result1 = solution1([-10,-9,-7,-6,-5]),
      result2 = solution2([-10,-9,-7,-6,-5]);
      result3 = solution3([-10,-9,-7,-6,-5]);
expect(result1).to.equal(-8);
expect(result2).to.equal(-8);
expect(result3).to.equal(-8);
});
});

