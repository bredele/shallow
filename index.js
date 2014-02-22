
/**
 * Expose 'clone'
 * @param  {Object} obj 
 * @api public
 */

module.exports = function(obj) {
  var cp = null,
      fn = Object.create;
  if(obj instanceof Array) {
    cp = obj.slice(0);
  } else {
    cp = fn ? fn(obj) : clone(obj);
  }
  return cp;
};


/**
 * Clone object.
 * @param  {Object} obj 
 * @api private
 */

function clone(obj){
  if(typeof obj === 'object') {
    var copy = {};
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = clone(obj[key]);
      }
    }
    return copy;
  }
  return obj;
}