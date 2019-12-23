const fi = (function() {
  return {
    libraryMethod: function() {
      return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
    },

    each: function(collection, func) {
      let destructCollection = collection instanceof Array ? collection : Object.values(collection);

      for (let i = 0; i < destructCollection.length; i++) {
        func(destructCollection[i]);
      }
      return collection;
    },

    map: function(collection, func) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection);
      }

      let returnValue = [];
      for (let i = 0; i < collection.length; i++) {
        returnValue.push(func(collection[i]));
      }

      return returnValue;
    },

    reduce: function(collection, func, startingPoint) {
      let destructCollection = collection.slice();
      let value = startingPoint || destructCollection.shift();

      for (let i = 0; i < destructCollection.length; i++) {
        value = func(value, destructCollection[i]);
      }

      return value;
    },

    find: function(collection, func) {
      for (let i = 0; i < collection.length; i++) {
        if (func(collection[i])) {
          return collection[i];
        }
      }
    },

    filter: function(collection, func) {
      let returnValue = [];

      for (let i = 0; i < collection.length; i++) {
        if (func(collection[i])) {
          returnValue.push(collection[i]);
        }
      }

      return returnValue;
    },

    size: function(collection) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection);
      }

      let size = 0;
      for (let i = 0; i < collection.length; i++) {
        size++;
      }
      return size;
    },

    first: function(collection, n) {
      return n ? collection.slice(0, n) : collection[0]

    },

    last: function(collection, n) {
      return n ? collection.slice(collection.length - n) : collection[collection.length-1]
    },

    compact: function(collection) {
      let returnValue = []

      for (let i = 0; i < collection.length; i++) {
        if (collection[i]) {
          returnValue.push(collection[i])
        }
      }

      return returnValue
    },

    sortBy: function(collection, func) {
      let destructibleCollection = collection.slice();
      return destructibleCollection.sort(function(a, b) {
        return func(a) - func(b);
      });
    },

    flatten: function(collection, shallow) {
      if (shallow) {
        return collection.flat(1)
      } else {
        return collection.flat(Infinity)
      }

    },

    uniq: function(collection, isSorted, callback) {
      let returnValue = []
      if (callback) {
        let iteratedValues = []      
        collection.map(item => {
          let iteratedValue = callback(item);
          iteratedValues.push(iteratedValue);
          if (iteratedValues.filter(element => element === iteratedValue).length == 1) {
            returnValue.push(item)
          }
        })
      } else {
        returnValue = [...new Set(collection)]
      }
      return returnValue
    },

    keys: function(obj) {
      let destructibleObj = Object.assign({}, obj)
      return Object.keys(destructibleObj)
    },

    values: function(obj) {
      let destructibleObj = Object.assign({}, obj)
      return Object.values(destructibleObj)
    },

    functions: function(obj) {
      let returnValue = []

      for (const key in obj) {
        if (typeof obj[`${key}`] === "function") {
          returnValue.push(key);
        }
      }

      return returnValue;
    }
  };
})()

fi.libraryMethod()