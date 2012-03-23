//     Hipster.js 0.0.0

(function(){
  // Save a reference to the global object (`window` in the browser, `global`
  // on the server).
  var root = this;
  
  // The top-level namespace. All public Hipster classes and modules will
  // be attached to this. Exported for both CommonJS and the browser.
  var Hipster;
  if (typeof exports !== 'undefined') {
    Hipster = exports;
  } else {
    Hipster = root.Hipster = {};
  }
  
  // Current version of the library. Keep in sync with `package.json`.
  Hipster.VERSION = '0.0.0';
}).call(this);