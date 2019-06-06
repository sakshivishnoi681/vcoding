/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _giphyService = __webpack_require__(1);
	
	var _giphyService2 = _interopRequireDefault(_giphyService);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var grid = document.getElementById('grid');
	var search = document.getElementById('search');
	
	function setGridData(imgData) {
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;
	
	  try {
	
	    for (var _iterator = imgData[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var data = _step.value;
	
	
	      var stillURL = data.images.fixed_height_still.url; // still url 
	      var gifURL = data.images.fixed_height.url; // moving url
	      var title = data.title;
	      var img = document.createElement('IMG');
	      setAttributes(img, { "src": stillURL, "data-src": gifURL, "title": title });
	      var node = document.createElement("div");
	      setAttributes(node, { 'class': 'play' });
	      grid.appendChild(node).appendChild(img);
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	}
	
	search.addEventListener("keyup", function (event) {
	  event.preventDefault();
	  if (event.keyCode === 13) {
	    removeGallery();
	    _giphyService2.default.getSearchData(event.target.value).then(function (respnsoe) {
	      return setGridData(respnsoe.data);
	    }).catch(function (error) {
	      return console.error(error);
	    });
	  }
	});
	
	grid.addEventListener('click', function (event) {
	
	  var target = event.target;
	  if (target.tagName != 'IMG') return;
	  target.parentElement.classList.toggle("play");
	  var src = target.getAttribute('src');
	  target.setAttribute('src', target.getAttribute('data-src'));
	  target.setAttribute('data-src', src);
	});
	
	function removeGallery() {
	  while (grid.hasChildNodes()) {
	    grid.removeChild(grid.lastChild);
	  }
	}
	
	function setAttributes(el, attrs) {
	  for (var key in attrs) {
	    el.setAttribute(key, attrs[key]);
	  }
	}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _constants = __webpack_require__(2);
	
	var constants = _interopRequireWildcard(_constants);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var GiphyService = function () {
	  function GiphyService() {
	    _classCallCheck(this, GiphyService);
	  }
	
	  _createClass(GiphyService, [{
	    key: 'getSearchData',
	    value: function getSearchData(keywords) {
	      var searchUrl = '' + constants.GIPHY_URLS.search + keywords + '&api_key=' + constants.API_KEY; /* + '&limit=15';*/
	      return fetch(searchUrl).then(function (response) {
	        return response.json();
	      });
	    }
	  }]);
	
	  return GiphyService;
	}();
	
	var giphyService = new GiphyService();
	Object.freeze(giphyService);
	
	exports.default = giphyService;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var API_KEY = exports.API_KEY = 'lctLJ4YNcUuwWyXClswWZHxyrQTwD7IC';
	var GIPHY_URLS = exports.GIPHY_URLS = { 'search': 'https://api.giphy.com/v1/gifs/search?q=' };
	var LIMIT = exports.LIMIT = 15;

/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map