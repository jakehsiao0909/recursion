// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === null || typeof obj === 'number' || typeof obj === 'boolean') {
    return String(obj);
  }
  if (typeof obj === 'undefined' || typeof obj === 'function') {
    return null;
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (Array.isArray(obj)) {
    obj = obj.map(function(element) {
      return stringifyJSON(element)
    });
    return '[' + obj + ']';
  }

  var output = '';
    var count = Object.values(obj);
    var objLength = count.length;
    for (var prop in obj) {
      if (typeof obj[prop] === 'undefined' || typeof obj[prop] === 'function') {
        objLength--;
      }
      else if (objLength > 1) {
        output += stringifyJSON(prop) + ':' + stringifyJSON(obj[prop]) + ',';
        objLength--;
      }
      else {
        output += stringifyJSON(prop) + ':' + stringifyJSON(obj[prop]);
      }
    }
    return '{' + output + '}';
};