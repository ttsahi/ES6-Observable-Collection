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