const assert = require('chai').assert;
require('../IBL.js');

describe('String', function() {
  describe('#reverse()', function() {
    it('should reverse a string', function() {
      assert.equal('hello', IBL.reverse('hello'));
    });
  });
});

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});