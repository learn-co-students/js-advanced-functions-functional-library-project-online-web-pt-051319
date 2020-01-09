const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {
      let newCollection = collection instanceof Array ? collection.slice() : Object.values(collection)

      for (let i = 0; i < newCollection.length; i++)
        iteratee(newCollection[i])

      return collection
    },


    map: function(collection, func) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection);
      }

      let arrCollection = [];
      for (let i = 0; i < collection.length; i++) {
        arrCollection.push(func(collection[i]));
      }
      return arrCollection;
    },

    reduce: function(c = [], callback = () => {}, accum) {
			let currentVal = c.slice(0)

			if (!accum) {
				accum = currentVal[0]
				currentVal = currentVal.slice(1)
			}

			let currValLength = currentVal.length;

			for (let i = 0; i < currValLength; i++) {
				accum = callback(accum, currentVal[i], currentVal)
			}
			return accum;
    },

    find: function(collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
      return undefined
    },

    filter: function(collection, predicate) {
      let val = [];

      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          val.push(collection[i]);
        }
      }

      return val;
    },

    size: function(collection) {
      if(collection instanceof Array) {
        return collection.length
      } else {
        return Object.keys(collection).length
      }
    },

    first: function(collection, n) {
      if(n) {
        return collection.slice(0, n)
      } else {
        return collection[0]
      }
    },

    last: function(collection, n) {
      if(n) {
        return collection.slice(collection.length - n, collection.length)
      } else {
        return collection[collection.length-1]
      }
    },

    compact: function(collection) {
      let val = []

      for (let i = 0; i < collection.length; i++) {
        if (collection[i]) {
          val.push(collection[i])
        }
      }
      return val
    },

    sortBy: function(collection, callback) {
      let newCollection = collection.slice();
      return newCollection.sort(function(a, b) {
        return callback(a) - callback(b);
      });
    },

    flatten: function(collection, shallow) {
      return (shallow) ? collection.flat(1) : collection.flat(Infinity)
    },

    // uniq: function(arr, iteratee) {
    //   let a = [];

    //   if (!iteratee) {
    //     for (let i=0, l=arr.length; i<l; i++) {
    //       if (a.indexOf(arr[i]) === -1 && arr[i] !== '') {
    //           a.push(arr[i]); 
    //       }
    //     }
    //   } else {
    //     // return  Array.from(new Set(arr));
    //     a = [...new Set(arr)]
    //   }
    //   return a;
    // },

    uniq: function(collection, sorted, iteratee) {
      let val = []
      
      if (!iteratee) {
        val = Array.from(new Set(collection));
      } else {
        let iteratedValues = []      
        collection.map(item => {
          let iteratedValue = iteratee(item);
          iteratedValues.push(iteratedValue);
          if (iteratedValues.filter(element => element === iteratedValue).length == 1) {
            val.push(item)
          }
        })
      }
      return val
    },
    
    keys: function(obj) {
      const keys = []
      for (let key in obj){
        keys.push(key)
      }
      return keys
    },

    values: function(obj) {
      const val = []
      
      for (let key in obj){
        val.push(obj[key])
      }
      return this.map(obj, (val) => val)
    },

    functions: function(obj) {
      let val = []

      for (let key in obj) {
        if (typeof obj[key] === "function"){
          val.push(key)
        }
      }

      return val.sort()
    },

  }
})()

fi.libraryMethod()
