
/**
 * Test dependencies.
 */

var clone = require('..');
var assert = require('assert');




describe('clone', function(){
  it('should clone an Array', function(){
    var arr = ['olivier', 'bredele'];
    var copy = clone(arr);
    assert.equal(copy[0], 'olivier');
    assert.equal(copy[1],'bredele');
  });

  it('should clone an Object', function(){
    var obj = {
      name : 'olivier',
      github : {
        name : 'olivier'
      }
    };
    var copy = clone(obj);
    assert.equal(copy.name, 'olivier');
    assert.equal(copy.github.name,'olivier');

    obj.country = 'canada';
    assert.equal(copy.country, undefined);
  });
});
