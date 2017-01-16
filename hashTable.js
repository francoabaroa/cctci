/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 1000;
  result.insert = function(key, value) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[index] || [];
    var replaced = false;

    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] =  value;
        replaced = true;
      }
    }

    if (!replaced) {
      bucket.push([key, value]);
    }
    storage[index] = bucket;
  };

  result.retrieve = function(key) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[index];
    if (!bucket) { return; }
    var tuple;
    for (var i = 0; i < bucket.length; i++) {
      tuple = bucket[i];
      if (tuple && tuple[0] === key) {
        return tuple[1];
      }
    }
  };

  result.remove = function(key) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[index];
    var tuple;

    for (var i = 0; i < bucket.length; i++) {
      tuple = bucket[i];
      if (tuple[0] === key) {
        var val = tuple[1];
        delete bucket[i];
        return val;
      }
    }
  };
  return result;
};




