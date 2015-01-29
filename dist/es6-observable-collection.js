"use strict";
(function(angular) {
  'use strict';
  angular.module('ObservableCollection', []).factory('ObservableCollection', [function() {
    var $__1;
    var _collection = Symbol();
    var _onAddListeners = Symbol();
    var _onUpdateListeners = Symbol();
    var _onRemoveListeners = Symbol();
    var ObservableCollection = function ObservableCollection() {
      this[_collection] = new Map();
      this[_onAddListeners] = [];
      this[_onUpdateListeners] = [];
      this[_onRemoveListeners] = [];
    };
    ($traceurRuntime.createClass)(ObservableCollection, ($__1 = {}, Object.defineProperty($__1, "onAdd", {
      value: function(callback) {
        if (!(typeof callback === 'function')) {
          throw new Error('on add callback must be function.');
        }
        this[_onAddListeners].push(callback);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__1, "onUpdate", {
      value: function(callback) {
        if (!(typeof callback === 'function')) {
          throw new Error('on update callback must be function.');
        }
        this[_onUpdateListeners].push(callback);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__1, "onRemove", {
      value: function(callback) {
        if (!(typeof callback === 'function')) {
          throw new Error('on remove callback must be function.');
        }
        this[_onRemoveListeners].push(callback);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__1, "get", {
      value: function(key) {
        return this[_collection].get(key);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__1, "count", {
      value: function() {
        return this[_collection].size;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__1, "exist", {
      value: function(key) {
        return this[_collection].has(key);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__1, "keys", {
      value: function() {
        return this[_collection].keys();
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__1, "values", {
      value: function() {
        return this[_collection].values();
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__1, "clear", {
      value: function() {
        this[_collection].clear();
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__1, "toArray", {
      value: function() {
        var $__4 = this;
        return (function() {
          var $__2 = 0,
              $__3 = [];
          for (var $__5 = $__4[_collection].values()[$traceurRuntime.toProperty(Symbol.iterator)](),
              $__6; !($__6 = $__5.next()).done; ) {
            var n = $__6.value;
            $__3[$__2++] = n;
          }
          return $__3;
        }());
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__1, Symbol.iterator, {
      value: function() {
        return this[_collection].entries();
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__1, "add", {
      value: function(key, value) {
        this[_collection].set(key, value);
        for (var $__5 = this[_onAddListeners][$traceurRuntime.toProperty(Symbol.iterator)](),
            $__6; !($__6 = $__5.next()).done; ) {
          var listener = $__6.value;
          {
            listener(key, value);
          }
        }
        return true;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__1, "update", {
      value: function(key, value) {
        this[_collection].set(key, value);
        for (var $__5 = this[_onUpdateListeners][$traceurRuntime.toProperty(Symbol.iterator)](),
            $__6; !($__6 = $__5.next()).done; ) {
          var listener = $__6.value;
          {
            listener(key, value);
          }
        }
        return true;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__1, "remove", {
      value: function(key) {
        var value = this[_collection].get(key);
        if (value === undefined) {
          return false;
        }
        if (!this[_collection].delete(key)) {
          return false;
        }
        for (var $__5 = this[_onRemoveListeners][$traceurRuntime.toProperty(Symbol.iterator)](),
            $__6; !($__6 = $__5.next()).done; ) {
          var listener = $__6.value;
          {
            listener(key, value);
          }
        }
        return true;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), $__1), {});
    return ObservableCollection;
  }]);
}(window.angular));
//# sourceURL=observable-collection.js
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9ic2VydmFibGUtY29sbGVjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImVzNi1vYnNlcnZhYmxlLWNvbGxlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSB0emFjaGl0IG9uIDI4LzAxLzE1LlxyXG4gKi9cclxuXHJcbihmdW5jdGlvbihhbmd1bGFyKXtcclxuXHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgYW5ndWxhci5tb2R1bGUoJ09ic2VydmFibGVDb2xsZWN0aW9uJywgW10pXHJcbiAgICAgICAgLmZhY3RvcnkoJ09ic2VydmFibGVDb2xsZWN0aW9uJywgW1xyXG4gICAgICAgICAgICBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBfY29sbGVjdGlvbiA9IFN5bWJvbCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IF9vbkFkZExpc3RlbmVycyA9IFN5bWJvbCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IF9vblVwZGF0ZUxpc3RlbmVycyA9IFN5bWJvbCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IF9vblJlbW92ZUxpc3RlbmVycyA9IFN5bWJvbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNsYXNzIE9ic2VydmFibGVDb2xsZWN0aW9uIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tfY29sbGVjdGlvbl0gPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbX29uQWRkTGlzdGVuZXJzXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW19vblVwZGF0ZUxpc3RlbmVyc10gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tfb25SZW1vdmVMaXN0ZW5lcnNdID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBvbkFkZChjYWxsYmFjayl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCEodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ29uIGFkZCBjYWxsYmFjayBtdXN0IGJlIGZ1bmN0aW9uLicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW19vbkFkZExpc3RlbmVyc10ucHVzaChjYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBvblVwZGF0ZShjYWxsYmFjayl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCEodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ29uIHVwZGF0ZSBjYWxsYmFjayBtdXN0IGJlIGZ1bmN0aW9uLicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW19vblVwZGF0ZUxpc3RlbmVyc10ucHVzaChjYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBvblJlbW92ZShjYWxsYmFjayl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCEodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ29uIHJlbW92ZSBjYWxsYmFjayBtdXN0IGJlIGZ1bmN0aW9uLicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW19vblJlbW92ZUxpc3RlbmVyc10ucHVzaChjYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBnZXQoa2V5KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbX2NvbGxlY3Rpb25dLmdldChrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbX2NvbGxlY3Rpb25dLnNpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBleGlzdChrZXkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1tfY29sbGVjdGlvbl0uaGFzKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBrZXlzKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW19jb2xsZWN0aW9uXS5rZXlzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbX2NvbGxlY3Rpb25dLnZhbHVlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXIoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tfY29sbGVjdGlvbl0uY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRvQXJyYXkoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtmb3IobiBvZiB0aGlzW19jb2xsZWN0aW9uXS52YWx1ZXMoKSkgbl07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBbU3ltYm9sLml0ZXJhdG9yXSgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1tfY29sbGVjdGlvbl0uZW50cmllcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYWRkKGtleSwgdmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW19jb2xsZWN0aW9uXS5zZXQoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgbGlzdGVuZXIgb2YgdGhpc1tfb25BZGRMaXN0ZW5lcnNdKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyKGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZShrZXksIHZhbHVlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tfY29sbGVjdGlvbl0uc2V0KGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGxpc3RlbmVyIG9mIHRoaXNbX29uVXBkYXRlTGlzdGVuZXJzXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcihrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZW1vdmUoa2V5KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gdGhpc1tfY29sbGVjdGlvbl0uZ2V0KGtleSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih2YWx1ZSA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXNbX2NvbGxlY3Rpb25dLmRlbGV0ZShrZXkpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBsaXN0ZW5lciBvZiB0aGlzW19vblJlbW92ZUxpc3RlbmVyc10pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZUNvbGxlY3Rpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdKTtcclxuXHJcbn0od2luZG93LmFuZ3VsYXIpKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=