function sort(array) {
  if (array.length <= 1) {
    return array;
  }

  var mid = array.length / 2 | 0;
  var left = [];
  for (var i = 0; i < mid; i++) {
    left.push(array[i]);
  }
  var right = [];
  for (var j = mid; j < array.length; j++) {
    right.push(array[j]);
  }

  left = sort(left);
  right = sort(right);

  return merge(left, right);
}

function merge(left, right) {
  var result = [];
  while (left.length !== 0 && right.length !== 0) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length !== 0) {
    result.push(left.shift());
  }
  while (right.length !== 0) {
    result.push(right.shift());

  }
  return result;
}


module.exports = function(array) {
  return sort(array);
};
