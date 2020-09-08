// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
var string = "\n/* \u9996\u5148\u753B\u76AE\u5361\u4E18\u7684\u76AE */\n.skin *{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n.skin *::before{\n    box-sizing: border-box;\n}\n.skin *::after{\n    box-sizing: border-box;\n}\nbody {\n    \n}\n.skin {\n    position: relative;\n    background: #ffe600;\n    min-height: 100vh;\n}\n /* \u63A5\u7740\u662F\u5B83\u7684\u9F3B\u5B50 */\n.nose {\n    width: 0px;\n    height: 0px;\n    border: 10px solid black;\n    /* border-bottom: blue; */\n    position: absolute;\n    left: 50%;\n    top: 145px;\n    margin-left: -10px;\n    border-color: black transparent transparent transparent;\n    z-index: 10;\n}\n@keyframes wave {\n    0%{\n        transform: rotate(0deg);\n    }\n    33%{\n        transform: rotate(5deg);\n    }\n    50%{\n        transform: rotate(0deg);\n    }\n    66%{\n        transform: rotate(-5deg);\n    }\n    100%{\n        transform: rotate(0deg);\n    }\n}\n.nose:hover {\n    transform-origin: center bottom;\n    animation: wave 0.5s infinite;\n}\n.nose .yuan {\n    position: absolute;\n    width: 20px;\n    height: 8px;\n    top: -15px;\n    left: -10px;\n    border-radius: 50%;\n    background-color: black;\n}\n /* \u4E24\u53EA\u773C\u775B\u4E5F\u522B\u5FD8\u4E86 */\n.eye-left {\n    position: absolute;\n    border: 1px solid grey;\n    width: 64px;\n    height: 64px;\n    left: 50%;\n    margin-left: -32px;\n    top: 100px;\n    transform: translateX(-100px);  \n    background-color: #2E2E2E;\n    border-radius: 50%;\n    z-index: 10;\n}\n.eye-right {\n    position: absolute;\n    border: 1px solid grey;\n    width: 64px;\n    height: 64px;\n    left: 50%;\n    margin-left: -32px;\n    top: 100px;\n    transform: translateX(100px);  \n    background-color: #2E2E2E;\n    border-radius: 50%;\n    z-index: 10;\n}\n.eye-left::after{\n    content: \"\";\n    width: 32px;\n    height: 32px;\n    border: 2px solid #000;\n    display: block;\n    background-color: white;\n    border-radius: 50%;\n    position: absolute;\n    left: 5px;\n    top: 3px;\n}\n.eye-right::after{\n    content: \"\";\n    width: 32px;\n    height: 32px;\n    border: 2px solid #000;\n    display: block;\n    background-color: white;\n    border-radius: 50%;\n    position: absolute;\n    left: 5px;\n    top: 3px;\n}\n /* \u8FD8\u6709\u5B83\u7684\u5634\u5507 */\n.mouth {\n    width: 150px;\n    height: 150px;\n    /* border: 1px solid red; */\n    position: absolute;\n    left: 50%;\n    margin-left: -75px;\n    top: 170px;\n}\n.mouth .up {\n    position: relative;\n    top: -5px;\n    z-index: 1;\n} \n.mouth .up .zzz {\n    position: absolute;\n    /* border: 1px solid blue; */\n    width: 160px;\n    height: 14px;\n    z-index: 20;\n    left: 50%;\n    margin-left: -80px;\n    top: -12px;\n    background-color: #ffe600;\n} \n.lip-left{\n    border: 4px solid black;\n    width: 80px;\n    height: 20px;\n    border-radius: 0 0 0 50px;\n    border-top-color: transparent;\n    border-right-color: #ffe600;\n    transform: rotate(-20deg);\n    background-color: #ffe600;\n}\n.lip-right{\n    position: absolute;\n    right: 0;\n    border:4px solid black;\n    width: 80px;\n    height: 20px;\n    border-radius: 0 0 50px 0;\n    border-top-color: transparent;\n    border-left-color: #ffe600;\n    transform: rotate(20deg);\n    top: 0px;\n    background-color: #ffe600;\n}\n.lip-left::after{\n    content: \"\";\n    display: block;\n    width: 20px;\n    height: 20px;\n    /* border: 1px solid blue; */\n    border-radius: 50%;\n    position: absolute;\n    top: -15px;\n    /* right: 2px; */\n    z-index: 30;\n    background-color: #ffe600;;\n    z-index: 30;\n  }\n.lip-right::after{\n    content: \"\";\n    display: block;\n    width: 20px;\n    height: 20px;\n    /* border: 1px solid blue; */\n    border-radius: 50%;\n    position: absolute;\n    top: -15px;\n    right: 0px;\n    z-index: 30;\n    background-color: #ffe600;;\n    z-index: 30;\n  }\n.mouth .down {\n    width: 150px;\n    height: 140px;\n    position: absolute;\n    top: -1px;\n    overflow: hidden;\n  }\n.mouth .down .yuan1{\n    position: absolute;\n    border: 1px solid black;\n    width: 100px;\n    height: 1000px;\n    bottom: 0;\n    left: 50%;\n    margin-left: -50px;\n    border-radius: 300px/1200px;\n    background-color: #9b000a;\n    overflow: hidden;\n}\n.yuan2 {\n    position: absolute;\n    width: 200px;\n    height: 300px;\n    bottom: -185px;\n    left: 50%;\n    margin-left: -100px;\n    background-color: #ff485f;\n    border-radius: 50%;\n}\n /* \u6700\u540E\u662F\u4E24\u4E2A\u8138\u988A\u55BD */\n.face-left {\n    position: absolute;\n    width: 80px;\n    height: 80px;\n    border: 2px solid black;\n    left: 50%;\n    margin-left: -40px;\n    top: 180px;\n    transform: translateX(-150px);\n    border-radius: 50%;\n    background-color: red;\n}\n.face-right {\n    position: absolute;\n    width: 80px;\n    height: 80px;\n    border: 2px solid black;\n    left: 50%;\n    margin-left: -40px;\n    top: 180px;\n    transform: translateX(150px);\n    border-radius: 50%;\n    background-color: red;\n}\n";
var n = 0;
var time = 100;

var run = function run() {
  {
    n = n + 1;

    if (n > string.length) {
      return;
    }

    demo.innerHTML = string.substr(0, n);
    demo2.innerText = string.substr(0, n);
    demo2.scrollTop = 999999;
  }
};

var id = setInterval(function () {
  return run();
}, time);

btnPause.onclick = function () {
  window.clearInterval(id);
};

btnPlay.onclick = function () {
  id = setInterval(function () {
    return run();
  }, time);
  console.log(n);
};

btnSlow.onclick = function () {
  time = 200;
  window.clearInterval(id);
  id = setInterval(function () {
    return run();
  }, time);
};

btnNormal.onclick = function () {
  time = 50;
  window.clearInterval(id);
  id = setInterval(function () {
    return run();
  }, time);
};

btnFast.onclick = function () {
  time = 0;
  window.clearInterval(id);
  id = setInterval(function () {
    return run();
  }, time);
};
},{}],"../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52243" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map