let expect = require('chai').expect;
let solution = require('../solutions/14').solution;

 describe('Diagonal Array', () => {
    it('should return an array of diagonal values', () => {
       expect(solution([[1,2,3],[2,3,4],[3,4,5]])).to.eql([1,3,5]);
    });
 });
