/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/gallery.js":
/*!************************!*\
  !*** ./src/gallery.js ***!
  \************************/
/*! exports provided: Gallery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gallery", function() { return Gallery; });
/* harmony import */ var _photo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photo.js */ "./src/photo.js");
/* harmony import */ var _lib_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib.js */ "./src/lib.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var DeckItem =
/*#__PURE__*/
function () {
  function DeckItem(imageUrl, index, options) {
    var _this = this;

    _classCallCheck(this, DeckItem);

    this.el = document.createElement('div');
    this.el.className = 'deck-item';
    this.contentEl = document.createElement('div');
    this.contentEl.className = 'deck-item-content';
    var contentWrap = document.createElement('div');
    contentWrap.className = 'deck-item-content_wrapper';
    this.el.appendChild(contentWrap);
    contentWrap.appendChild(this.contentEl);
    this.options = options || {};
    this.narrowMode = Object(_lib_js__WEBPACK_IMPORTED_MODULE_1__["getViewportWidth"])() < this.options.breakpoint;
    this.index = index;
    window.addEventListener('resize', function (ev) {
      if (Object(_lib_js__WEBPACK_IMPORTED_MODULE_1__["getViewportWidth"])() <= _this.options.breakpoint) {
        if (!_this.narrowMode) {
          // console.log('resize, turning on')
          _this.narrowMode = true; // this.turnOnNarrowMode()
        }

        _this.photo.fitByBothSides(_this.el);
      } else {
        if (_this.narrowMode) {
          // console.log('resize, turning Off')
          _this.turnOffNarrowMode();
        }
      }
    });
    this.photo = new _photo_js__WEBPACK_IMPORTED_MODULE_0__["Photo"](imageUrl);
    this.loadPhoto().catch(function (err) {
      throw err;
    });
  }

  _createClass(DeckItem, [{
    key: "turnOnNarrowMode",
    value: function turnOnNarrowMode(mode) {// this.narrowMode = true
      // this perhaps would be better to set with css vw
      // this.el.style.width = getViewportWidth() + 'px'
      // this.photo.fitByBothSides(this.el)
    }
  }, {
    key: "turnOffNarrowMode",
    value: function turnOffNarrowMode() {
      this.narrowMode = false; // this.photo.fitByHeight(this.el)
      // this.el.style.width = this.photo.dims.width + 'px'

      this.photo.clearInlineStyles();
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.el.getBoundingClientRect().width;
    } // get position of the item, relative to the containing Deck

  }, {
    key: "getOffset",
    value: function getOffset() {
      return this.el.offsetLeft;
    } // get position of the midpoint of the item, relative to the containing deck

  }, {
    key: "getMidpoint",
    value: function getMidpoint() {
      return this.getOffset() + this.getWidth() / 2;
    }
    /**
      @param {String} height height in css syntax
    */

  }, {
    key: "setHeight",
    value: function setHeight(height) {
      this.el.style.height = height;
    }
  }, {
    key: "setWidth",
    value: function setWidth(width) {
      this.el.style.width = width;
    }
  }, {
    key: "isInView",
    value: function isInView() {
      var offset = this.getOffset();
      var deckPosition = this.options.getDeckPosition();
      console.log('deckItem.isInView, offset: ', offset);
      console.log('deckItem.isInView, width: ', this.getWidth());
      console.log('deckItem.isInView, getDeckPosition: ', this.options.getDeckPosition());
      console.log('deckItem.isInView, getGalleryViewportWidth: ', this.options.getGalleryViewportWidth()); // deckPosition could be negative

      return offset + deckPosition >= 0 && deckPosition + offset + this.getWidth() <= this.options.getGalleryViewportWidth() ? true : false; // if (
      //   this.getOffset() + this.options.getDeckPosition() > 0 &&
      //   this.getOffset() + this.getWidth() < this.options.getGalleryViewportWidth()
      // ) {
      //
      // }
    }
  }, {
    key: "loadPhoto",
    value: function loadPhoto(url) {
      var _this2 = this;

      return this.photo.load() // Photo.prototype.loadImage()
      .then(function (photo) {
        try {
          _this2.options.photoLoadCb(photo); // we don't want to see the img, but we want to be able to measure it with getBoundingClientRect (so display: none is not a fit)
          // img.style.visibility = "hidden"


          photo.hide();

          _this2.contentEl.appendChild(photo.el);

          if (!_this2.narrowMode) {// at the moment, seems like we handle all of this with css,
            // and don't need to fite the photo and set it's container's width respectively
            // this.photo.fitByHeight(this.el)
            // this.el.style.width = this.photo.dims.width + 'px'
          } else {
            _this2.photo.fitByBothSides(_this2.contentEl);
          }

          _this2.photo.show(); // img.style.visibility = 'visible'

        } catch (err) {
          Promise.reject(err);
        }
      }); // .catch((err) => {
      //   throw err
      // })
    }
  }]);

  return DeckItem;
}();

var Deck =
/*#__PURE__*/
function () {
  function Deck(imageUrls, options) {
    _classCallCheck(this, Deck);

    this.el = document.createElement('div');
    this.el.className = 'gallery-deck';
    this.options = options;
    this.breakpoint = options.breakpoint;
    this.position = 0;
    this.offset = 0;
    this.loaded = false;
    this.itemsLoaded = 0;
    this.items = this.initItems(imageUrls);
    this.appendItems(); // initialize the transform matrix styling

    this.el.style.transform = 'matrix(1, 0, 0, 1, 0, 0)'; // window.on('resize', (ev) => {
    //   if (getViewportWidth() < this.breakpoint) {
    //
    //   }
    // })
  }
  /*
  calculateDeckOffset(index) {
    if (getViewportWidth() < this.breakpoint) {
      const itemOffset = this.items[index].getOffset()
      const deckOffsetNew = -itemOffset
       return deckOffsetNew
    } else {
      const itemOffset = this.items[index].getMidpoint()
       const galleryMidpoint = this.options.getGalleryViewportWidth() / 2 // .getBoundingClientRect().width / 2
      const deckOffsetNew = -itemOffset + galleryMidpoint
       // console.log('Deck.calculateDeckOffset, index', index)
      // console.log('Deck.calculateDeckOffset, items[index]', this.items[index])
      // console.log('Deck.calculateDeckOffset, items[index]', this.items[index].getMidpoint())
      // console.log('Deck.calculateDeckOffset, itemOffset', itemOffset)
      // console.log('Deck.calculateDeckOffset, deckOffsetNew', deckOffsetNew)
       return deckOffsetNew
    }
  }
  */


  _createClass(Deck, [{
    key: "calculateDeckOffsetCentered",
    value: function calculateDeckOffsetCentered(index) {
      var itemOffset = this.items[index].getMidpoint();
      var galleryMidpoint = this.options.getGalleryViewportWidth() / 2; // .getBoundingClientRect().width / 2

      var deckOffsetNew = -itemOffset + galleryMidpoint; // console.log('Deck.calculateDeckOffset, index', index)
      // console.log('Deck.calculateDeckOffset, items[index]', this.items[index])
      // console.log('Deck.calculateDeckOffset, items[index]', this.items[index].getMidpoint())
      // console.log('Deck.calculateDeckOffset, itemOffset', itemOffset)
      // console.log('Deck.calculateDeckOffset, deckOffsetNew', deckOffsetNew)

      return deckOffsetNew;
    }
  }, {
    key: "calculateDeckOffset",
    value: function calculateDeckOffset(index) {
      var itemOffset = this.items[index].getOffset();
      var deckOffsetNew = -itemOffset;
      return deckOffsetNew;
    }
    /*
    // TODO:
    getActualPositionWhileTransitioning() {
      return this.el.getBoundingClientRect().left + window.parseInt(window.getComputedStyle(this.el)['margin-left'])
      - this.options.getGalleryPos().left
      + window.scrollX
    }
    */

    /**
    @param {boolean} centered if true - centers the item, if falsy - doesn't center
    */

  }, {
    key: "goToItem",
    value: function goToItem(index, centered) {
      if (index < 0 || index > this.items.length - 1) {
        throw new Error("can't go to unexisting item at " + index);
      }

      if (!this.loaded) {
        // throw new Error("")
        // TODO: make it so it can go to the items that are already loaded, and
        // then, adjust the position of the deck so it stays on the item we've gone to
        // as other items load (if necessary).
        // This could be impactful if the deck is right at the top of the page and user
        // wants to immediately be able to interact with things.
        // console.log("photos in the deck haven't loaded yet");
        return undefined;
      }

      var deckPositionNew = centered ? this.calculateDeckOffsetCentered(index) : this.calculateDeckOffset(index); // TODO:
      // this.offset = this.transitioning
      //   ? deckPositionNew - this.getActualPositionWhileTransitioning()
      //   : deckPositionNew - this.position

      this.offset = deckPositionNew - this.position;
      this.position = deckPositionNew;

      if (this.transitioning) {
        this.el.style.transform = this.makeMatrix(this.offset);
      } else {
        var transitionendCb = function transitionendCb() {
          this.transitionendCb();
          this.el.removeEventListener('transitionend', transitionendCb);
          this.transitioning = false;
        };

        this.el.classList.add('transition');
        this.transitioning = true;
        this.el.addEventListener('transitionend', transitionendCb.bind(this));
        this.el.style.transform = this.makeMatrix(this.offset);
      }

      return this.items[index];
    }
  }, {
    key: "makeMatrix",
    value: function makeMatrix(x) {
      return 'matrix(1, 0, 0, 1, ' + x + ', 0)';
    }
  }, {
    key: "transitionendCb",
    value: function transitionendCb() {
      this.el.style.left = this.position + 'px';
      this.el.classList.remove('transition');
      this.el.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
    }
  }, {
    key: "initItems",
    value: function initItems(urls) {
      var _this3 = this;

      return urls.map(function (url, i) {
        return new DeckItem(url, i, {
          breakpoint: _this3.breakpoint,
          photoLoadCb: function photoLoadCb() {
            // console.log("photoLoadCb, deck.itemsLoaded: ", this.itemsLoaded);
            _this3.itemsLoaded++;

            if (_this3.itemsLoaded == _this3.items.length) {
              // console.log("photoLoadCb, deck.itemsLoaded == deck.items.length, deck.itemsLoaded: ", this.itemsLoaded);
              _this3.loaded = true;

              _this3.options.loadCb();
            }
          },
          getGalleryViewportWidth: _this3.options.getGalleryViewportWidth,
          getDeckPosition: function getDeckPosition() {
            return _this3.position;
          }
        });
      });
    }
  }, {
    key: "appendItem",
    value: function appendItem(item) {
      this.el.appendChild(item.el);
    }
  }, {
    key: "appendItems",
    value: function appendItems() {
      var _this4 = this;

      this.items.forEach(function (item) {
        _this4.appendItem(item);
      });
    }
  }]);

  return Deck;
}();

var Gallery =
/*#__PURE__*/
function () {
  function Gallery(photoUrls, options) {
    var _this5 = this;

    _classCallCheck(this, Gallery);

    this.el = document.createElement('div');
    this.el.className = 'gallery';
    this.deck = new Deck(photoUrls, {
      getGalleryViewportWidth: function getGalleryViewportWidth() {
        return _this5.el.getBoundingClientRect().width;
      },
      loadCb: function loadCb() {
        _this5.activeItem = _this5.deck.goToItem(0, false); // this.goToNext.call(this)
      },
      breakpoint: options.breakpoint
    });
    this.el.appendChild(this.deck.el); // const activeItem = this.deck.goToItem(0)
    // this.activeItem = activeItem
  }

  _createClass(Gallery, [{
    key: "goToNext",
    value: function goToNext() {
      if (!this.deck.loaded) return;
      if (this.activeItem.index == this.deck.items.length - 1) return;
      this.activeItem = this.deck.goToItem(this.activeItem.index + 1, true);
    }
  }, {
    key: "goToPrevious",
    value: function goToPrevious() {
      if (!this.deck.loaded) return;
      if (this.activeItem.index == 0) return;
      this.activeItem = this.deck.goToItem(this.activeItem.index - 1, true);
    }
    /*
    // TODO:
    // get the actual position of the el, relative to body.
    getAbsPosition() {
      var position = 0
       // const computedStyle = window.getComputedStyle(this.el)
         position = this.el.getBoundingClientRect().left
          + window.parseInt(window.getComputedStyle(this.el)['margin-left'])
         return position
    }
    */

  }]);

  return Gallery;
}();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib.js */ "./src/lib.js");
/* harmony import */ var _gallery_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery.js */ "./src/gallery.js");
/* harmony import */ var _large_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./large-view.js */ "./src/large-view.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// import {slide} from './slide.js'




var ShowcaseImage =
/*#__PURE__*/
function (_Enlargable) {
  _inherits(ShowcaseImage, _Enlargable);

  function ShowcaseImage(el) {
    _classCallCheck(this, ShowcaseImage);

    return _possibleConstructorReturn(this, _getPrototypeOf(ShowcaseImage).call(this, el, Object(_lib_js__WEBPACK_IMPORTED_MODULE_0__["getBackgroundImageUrl"])(el))); // this.image = new Enlargable()
  }

  return ShowcaseImage;
}(_large_view_js__WEBPACK_IMPORTED_MODULE_2__["Enlargable"]);

function nodeListToArray(selector) {
  var els = document.querySelectorAll(selector);
  els = Array.prototype.slice.call(els, 0);
  return els;
}

function initEnlargables(selector) {
  // var els = document.querySelectorAll(selector)
  // els = Array.prototype.slice.call(els, 0)
  // console.log(els);
  var els = nodeListToArray(selector);
  els.forEach(function (el) {
    new ShowcaseImage(el);
  });
}

function initGallery(photoUrls) {
  var container = document.querySelector('.gallery-container');
  var gallery = new _gallery_js__WEBPACK_IMPORTED_MODULE_1__["Gallery"](photoUrls, {
    breakpoint: 800
  });
  container.appendChild(gallery.el);
  var arrows = document.querySelector('.gallery-wrap');
  arrows.querySelector('.icon#bwd').addEventListener('click', gallery.goToPrevious.bind(gallery));
  arrows.querySelector('.icon#fwd').addEventListener('click', gallery.goToNext.bind(gallery));
  console.log('gallery', gallery);
}

function initLangSwitch() {
  var contentEn = nodeListToArray('.text.en');
  var contentUa = nodeListToArray('.text.ua');

  function switchToEn() {
    contentUa.forEach(function (el) {
      return el.classList.add('noned');
    });
    contentEn.forEach(function (el) {
      return el.classList.remove('noned');
    });
  }

  function switchToUa() {
    contentEn.forEach(function (el) {
      return el.classList.add('noned');
    });
    contentUa.forEach(function (el) {
      return el.classList.remove('noned');
    });
  }

  var enSwitch = document.querySelector('.lang-switch #en');
  var uaSwitch = document.querySelector('.lang-switch #ua');
  enSwitch.addEventListener('click', function () {
    enSwitch.classList.add('noned');
    uaSwitch.classList.remove('noned');
    switchToEn();
  });
  uaSwitch.addEventListener('click', function () {
    uaSwitch.classList.add('noned');
    enSwitch.classList.remove('noned');
    switchToUa();
  });
}

function boot(galleryUrls) {
  initLangSwitch();
  var largeViewWrap = document.querySelector('.large-view_wrap');
  _large_view_js__WEBPACK_IMPORTED_MODULE_2__["LargeView"].init({
    transition: 'opacity 0.4s',
    display: 'block',
    wrap: largeViewWrap
  });
  largeViewWrap.classList.remove('noned');
  largeViewWrap.appendChild(_large_view_js__WEBPACK_IMPORTED_MODULE_2__["LargeView"].container);
  largeViewWrap.querySelector('.icon#cross').addEventListener('click', function () {
    _large_view_js__WEBPACK_IMPORTED_MODULE_2__["LargeView"].hide();
  });
  console.log('LargeView', _large_view_js__WEBPACK_IMPORTED_MODULE_2__["LargeView"]);
  initGallery(galleryUrls);
  initEnlargables('#out .showcase .image-thumb');
  initEnlargables('#staff .member .avatar');
  new ShowcaseImage(document.querySelector('#contact .street-view')); // els.forEach(el => {new ShowcaseImage(el)})
  // initShowcases()
}

window.addEventListener('load', function () {
  boot(['media/in/14902841_1259112727483912_3284315106318981574_o.jpg', 'media/in/19875272_10100482296286706_3883306275546166676_n.jpg', 'media/in/3b.jpg', 'media/in/6a.jpg', 'media/in/DSC_0126.jpg', 'media/in/DSC_0128.JPG', 'media/in/DSC_0350.JPG']);
});

/***/ }),

/***/ "./src/large-view.js":
/*!***************************!*\
  !*** ./src/large-view.js ***!
  \***************************/
/*! exports provided: LargeView, Enlargable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LargeView", function() { return LargeView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Enlargable", function() { return Enlargable; });
/* harmony import */ var _lib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib.js */ "./src/lib.js");
/* harmony import */ var _photo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photo.js */ "./src/photo.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var LargeView = {
  init: function init(options) {
    options = options || {};
    if (options.transition) this.transitionSetup = options.transition;
    this.options = options;
    var container = document.createElement('div'); // same as in the scss

    container.className = 'large-view_container';
    this.container = container; // if (options.clickCb)
    // this.container.addEventListener('click', () => {this.hide()})

    this.wrap = options.wrap || this.container;
    this.wrap.style.opacity = '0'; // this.wrap.classList.add('transparent')

    this.wrap.style.display = 'none'; // this.container.classList.add('noned')

    this.hidden = true; // this.photo = new Photo()
  },
  setPhoto: function setPhoto(url) {
    var _this = this;

    var photo = new _photo_js__WEBPACK_IMPORTED_MODULE_1__["Photo"](url); // this.photo = new Photo(url)

    return photo.load() // .then()
    .then(function (photo) {
      try {
        if (_this.hidden) {
          Promise.reject(new Error('the large-view container must be displayed before we can fit in the photo'));
        } else {
          // this.photo.hide(false)
          photo.hide(false);

          if (_this.photo) {
            _this.container.replaceChild(photo.el, _this.photo.el);
          } else {
            _this.container.appendChild(photo.el);
          }

          photo.fitByBothSides(_this.container);
          photo.show(false);
          _this.photo = photo;
        }
      } catch (err) {
        Promise.reject(err);
      }
    });
  },

  /*
  transitionendCb(cb) {
    cb()
    this.container.removeEventListener('transitionend', this.transitionendCb)
  }
  */

  /**
    @description If url is give, then, after show transition has ended, it loads the
    new photo
  */
  show: function show(url) {
    var _this2 = this;

    // if (this.showPending) {
    //   window.clearTimeout(this.showTimeoutId)
    //   // this.container.removeEventListener()
    //
    //   // should removeEventListener of itself
    //   this.transitionendCb()
    //
    //
    // }
    return new Promise(function (resolve, reject) {
      try {
        var transitionendCb = function transitionendCb() {
          self.wrap.removeEventListener('transitionend', transitionendCb);
          self.transitionOff(); // this.container.classList.remove('transition')

          self.hidden = false;
          console.log('LargeView.show, transitionendCb', self);
          resolve();
        };

        var self = _this2;
        _this2.wrap.style.display = _this2.options.display || 'flex'; // this.wrap.classList.remove('noned')

        _this2.wrap.addEventListener('transitionend', transitionendCb);

        _this2.transitionOn();

        _this2.showPending = true; // this is nuts

        _this2.showTimeoutId = window.setTimeout(function () {
          _this2.showPending = false;
          _this2.wrap.style.opacity = '1'; // this.container.classList.add('transition')
        }, 50); // this.container.classList.add('solid')
      } catch (err) {
        reject(err);
      }
    }).then(function () {
      if (url) {
        return _this2.setPhoto(url);
      }
    }, function (err) {
      Promise.reject(err);
    });
  },
  hide: function hide() {
    var _this3 = this;

    return new Promise(function (resolve, reject) {
      try {
        var transitionendCb = function transitionendCb() {
          self.wrap.removeEventListener('transitionend', transitionendCb);
          self.transitionOff(); // self.wrap.classList.remove('transition')

          self.wrap.style.display = 'none';
          self.photo.hide(false); // self.container.classList.add('noned')

          self.hidden = true;
          console.log('LargeView.hide, transitionendCb', LargeView);
          resolve();
        };

        var self = _this3;

        _this3.wrap.addEventListener('transitionend', transitionendCb);

        _this3.transitionOn(); // this.container.classList.add('transition')


        _this3.wrap.style.opacity = '0'; // this.container.classList.remove('solid')
      } catch (err) {
        reject(err);
      }
    });
  },
  transitionOff: function transitionOff() {
    this.wrap.style.transition = 'none';
  },
  transitionOn: function transitionOn() {
    this.wrap.style.transition = this.transitionSetup;
  }
}; // console.log('LargeView', LargeView)

var Enlargable =
/*#__PURE__*/
function () {
  function Enlargable(el, url) {
    _classCallCheck(this, Enlargable);

    this.el = el;
    this.url = url;
    this.el.addEventListener('click', this.clickCb.bind(this));
  }

  _createClass(Enlargable, [{
    key: "enlarge",
    value: function enlarge(url) {
      LargeView.show(url).then(function () {
        console.log('Enlargable.enlarge, LargeView shown');
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: "clickCb",
    value: function clickCb() {
      console.log('Enlargable.clickCb, this: ', this);
      this.enlarge(this.url);
    }
  }]);

  return Enlargable;
}();
/*
function enlargeShowcase() {
  const imageUrl = getBackgroundImageUrl(this)
  LargeView.show(imageUrl)
}

function getEnlargableElements() {
  var els = document.querySelector('#out .showcase .image-thumb')
  els = Array.prototype.slice.call(els, 0)

  els.forEach(el => {
    el.addEventListener('click', enlargeShowcaseCb)
  })
}
*/




/***/ }),

/***/ "./src/lib.js":
/*!********************!*\
  !*** ./src/lib.js ***!
  \********************/
/*! exports provided: getViewportWidth, getViewportHeight, getBackgroundImageUrl, logFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getViewportWidth", function() { return getViewportWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getViewportHeight", function() { return getViewportHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBackgroundImageUrl", function() { return getBackgroundImageUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logFactory", function() { return logFactory; });
// https://stackoverflow.com/questions/6942785/window-innerwidth-vs-document-documentelement-clientwidth
// https://bugzilla.mozilla.org/show_bug.cgi?id=156388#c14
function getViewportHeight() {
  // getElementsByTagName, if I'm not mistaken returns a livelist (hell knows what that is, but it's
  // updated live - as dom gets changed). I'm not sure about using it, it behaved misteriously once...
  // But, querySelector is not so compatible.
  // Maybe: (document.querySelector('body') || document.getElementsByTagName('body')[0].clientWidth)
  return window.innerHeight && document.documentElement.clientHeight ? Math.min(window.innerHeight, document.documentElement.clientHeight) : window.innerHeight || document.documentElement.clientHeight || document.querySelector('body') || document.getElementsByTagName('body')[0].clientHeight;
}

function getViewportWidth() {
  return window.innerWidth && document.documentElement.clientWidth ? Math.min(window.innerWidth, document.documentElement.clientWidth) : window.innerWidth || document.documentElement.clientWidth || document.querySelector('body') || document.getElementsByTagName('body')[0].clientWidth;
}
/*

NodeList to array
function toArray(obj) {
  var array = [];
  // iterate backwards ensuring that length is an UInt32
  for (var i = obj.length >>> 0; i--;) {
    array[i] = obj[i];
  }
  return array;
}
*/


function getBackgroundImageUrl(el) {
  var computedStyle = window.getComputedStyle(el);
  var regx = new RegExp(/.*url\((?:\"?'?)(.+)(?:.\'?\"?)\).*/g);
  var result = regx.exec(computedStyle['background-image']);

  if (result[1]) {
    return result[1];
  }
}

function logFactory(env) {
  return function (data) {
    if (!env.dev) return;
    console.trace();
    console.log(data);
  };
}



/***/ }),

/***/ "./src/photo.js":
/*!**********************!*\
  !*** ./src/photo.js ***!
  \**********************/
/*! exports provided: Photo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Photo", function() { return Photo; });
/* harmony import */ var _lib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib.js */ "./src/lib.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Photo =
/*#__PURE__*/
function () {
  function Photo(url) {
    _classCallCheck(this, Photo);

    this.url = url;
    this.el = document.createElement('img');
  }

  _createClass(Photo, [{
    key: "load",
    value: function load() {
      var _this = this;

      // const img = document.createElement('img')
      return new Promise(function (resolve, reject) {
        _this.el.onload = function () {
          resolve(_this);
        };

        _this.el.src = _this.url;
      });
    }
  }, {
    key: "calculateFitByBothSides",
    value: function calculateFitByBothSides(imgDims, containerDims) {
      // const imgDims = img.getBoundingClientRect()
      // const containerDims = container.getBoundingClientRect()
      imgDims.ratio = imgDims.width / imgDims.height;
      containerDims.ratio = containerDims.width / containerDims.height; // if wider than higher

      if (imgDims.ratio >= containerDims.ratio) {
        var imgDimsNew = {
          width: containerDims.width,
          height: containerDims.width / imgDims.ratio
        };
        return imgDimsNew; // if higher than wider
      } else {
        var _imgDimsNew = {
          // width: containerDims.height * imgDims.ratio,
          width: containerDims.height * imgDims.ratio,
          height: containerDims.height
        };
        return _imgDimsNew;
      }
    }
  }, {
    key: "calculateFitByHeight",
    value: function calculateFitByHeight(imgDims, containerDims) {
      // const imgDims = img.getBoundingClientRect()
      // const containerDims = container.getBoundingClientRect()
      imgDims.ratio = imgDims.width / imgDims.height;
      var imgDimsNew = {
        height: containerDims.height,
        width: containerDims.height * imgDims.ratio,
        ratio: imgDims.ratio
      };
      return imgDimsNew;
    }
  }, {
    key: "fitByHeight",
    value: function fitByHeight(container) {
      this.dims = this.calculateFitByHeight(this.el.getBoundingClientRect(), container.getBoundingClientRect()); // const imgDims = this.calculateFitByHeight(img, this.el)

      this.el.style.width = this.dims.width;
      this.el.style.height = this.dims.height;
      return this;
    }
  }, {
    key: "fitByBothSides",
    value: function fitByBothSides(container) {
      this.dims = this.calculateFitByBothSides(this.el.getBoundingClientRect(), container.getBoundingClientRect());
      this.el.style.width = this.dims.width + 'px';
      this.el.style.height = this.dims.height + 'px';
      return this;
    }
  }, {
    key: "clearInlineStyles",
    value: function clearInlineStyles() {
      if (this.el.style.removeProperty) {
        this.el.style.removeProperty('width');
        this.el.style.removeProperty('height');
      } else {
        // IE9
        this.el.style.removeAttribute('width');
        this.el.style.removeAttribute('height');
      }
    }
  }, {
    key: "hide",
    value: function hide(hard) {
      hard ? this.el.style.display = "none" : this.el.style.visibility = "hidden";
    }
  }, {
    key: "show",
    value: function show(hard) {
      if (hard) {
        this.el.style.removeProperty('display');
      } else {
        this.el.style.removeProperty('visibility');
      } // hard ? this.el.style.display = "inline" : this.el.style.visibility = "visible"

    }
  }]);

  return Photo;
}();



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXJnZS12aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Bob3RvLmpzIl0sIm5hbWVzIjpbIkRlY2tJdGVtIiwiaW1hZ2VVcmwiLCJpbmRleCIsIm9wdGlvbnMiLCJlbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImNvbnRlbnRFbCIsImNvbnRlbnRXcmFwIiwiYXBwZW5kQ2hpbGQiLCJuYXJyb3dNb2RlIiwiZ2V0Vmlld3BvcnRXaWR0aCIsImJyZWFrcG9pbnQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXYiLCJwaG90byIsImZpdEJ5Qm90aFNpZGVzIiwidHVybk9mZk5hcnJvd01vZGUiLCJQaG90byIsImxvYWRQaG90byIsImNhdGNoIiwiZXJyIiwibW9kZSIsImNsZWFySW5saW5lU3R5bGVzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJvZmZzZXRMZWZ0IiwiZ2V0T2Zmc2V0IiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJzdHlsZSIsIm9mZnNldCIsImRlY2tQb3NpdGlvbiIsImdldERlY2tQb3NpdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJnZXRHYWxsZXJ5Vmlld3BvcnRXaWR0aCIsInVybCIsImxvYWQiLCJ0aGVuIiwicGhvdG9Mb2FkQ2IiLCJoaWRlIiwic2hvdyIsIlByb21pc2UiLCJyZWplY3QiLCJEZWNrIiwiaW1hZ2VVcmxzIiwicG9zaXRpb24iLCJsb2FkZWQiLCJpdGVtc0xvYWRlZCIsIml0ZW1zIiwiaW5pdEl0ZW1zIiwiYXBwZW5kSXRlbXMiLCJ0cmFuc2Zvcm0iLCJpdGVtT2Zmc2V0IiwiZ2V0TWlkcG9pbnQiLCJnYWxsZXJ5TWlkcG9pbnQiLCJkZWNrT2Zmc2V0TmV3IiwiY2VudGVyZWQiLCJsZW5ndGgiLCJFcnJvciIsInVuZGVmaW5lZCIsImRlY2tQb3NpdGlvbk5ldyIsImNhbGN1bGF0ZURlY2tPZmZzZXRDZW50ZXJlZCIsImNhbGN1bGF0ZURlY2tPZmZzZXQiLCJ0cmFuc2l0aW9uaW5nIiwibWFrZU1hdHJpeCIsInRyYW5zaXRpb25lbmRDYiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJiaW5kIiwieCIsImxlZnQiLCJyZW1vdmUiLCJ1cmxzIiwibWFwIiwiaSIsImxvYWRDYiIsIml0ZW0iLCJmb3JFYWNoIiwiYXBwZW5kSXRlbSIsIkdhbGxlcnkiLCJwaG90b1VybHMiLCJkZWNrIiwiYWN0aXZlSXRlbSIsImdvVG9JdGVtIiwiU2hvd2Nhc2VJbWFnZSIsImdldEJhY2tncm91bmRJbWFnZVVybCIsIkVubGFyZ2FibGUiLCJub2RlTGlzdFRvQXJyYXkiLCJzZWxlY3RvciIsImVscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImluaXRFbmxhcmdhYmxlcyIsImluaXRHYWxsZXJ5IiwiY29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsImdhbGxlcnkiLCJhcnJvd3MiLCJnb1RvUHJldmlvdXMiLCJnb1RvTmV4dCIsImluaXRMYW5nU3dpdGNoIiwiY29udGVudEVuIiwiY29udGVudFVhIiwic3dpdGNoVG9FbiIsInN3aXRjaFRvVWEiLCJlblN3aXRjaCIsInVhU3dpdGNoIiwiYm9vdCIsImdhbGxlcnlVcmxzIiwibGFyZ2VWaWV3V3JhcCIsIkxhcmdlVmlldyIsImluaXQiLCJ0cmFuc2l0aW9uIiwiZGlzcGxheSIsIndyYXAiLCJ0cmFuc2l0aW9uU2V0dXAiLCJvcGFjaXR5IiwiaGlkZGVuIiwic2V0UGhvdG8iLCJyZXBsYWNlQ2hpbGQiLCJyZXNvbHZlIiwic2VsZiIsInRyYW5zaXRpb25PZmYiLCJ0cmFuc2l0aW9uT24iLCJzaG93UGVuZGluZyIsInNob3dUaW1lb3V0SWQiLCJzZXRUaW1lb3V0IiwiY2xpY2tDYiIsImVubGFyZ2UiLCJnZXRWaWV3cG9ydEhlaWdodCIsImlubmVySGVpZ2h0IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0IiwiTWF0aCIsIm1pbiIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaW5uZXJXaWR0aCIsImNsaWVudFdpZHRoIiwiY29tcHV0ZWRTdHlsZSIsImdldENvbXB1dGVkU3R5bGUiLCJyZWd4IiwiUmVnRXhwIiwicmVzdWx0IiwiZXhlYyIsImxvZ0ZhY3RvcnkiLCJlbnYiLCJkYXRhIiwiZGV2IiwidHJhY2UiLCJvbmxvYWQiLCJzcmMiLCJpbWdEaW1zIiwiY29udGFpbmVyRGltcyIsInJhdGlvIiwiaW1nRGltc05ldyIsImRpbXMiLCJjYWxjdWxhdGVGaXRCeUhlaWdodCIsImNhbGN1bGF0ZUZpdEJ5Qm90aFNpZGVzIiwicmVtb3ZlUHJvcGVydHkiLCJyZW1vdmVBdHRyaWJ1dGUiLCJoYXJkIiwidmlzaWJpbGl0eSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVB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LENBQWN1SSxlQUFkLENBQThCLFFBQTlCO0FBQ0Q7QUFDRjs7O3lCQUVJQyxJLEVBQU07QUFDVEEsVUFBSSxHQUFHLEtBQUtwSyxFQUFMLENBQVE0QixLQUFSLENBQWN5RixPQUFkLEdBQXdCLE1BQTNCLEdBQW9DLEtBQUtySCxFQUFMLENBQVE0QixLQUFSLENBQWN5SSxVQUFkLEdBQTJCLFFBQW5FO0FBQ0Q7Ozt5QkFFSUQsSSxFQUFNO0FBQ1QsVUFBSUEsSUFBSixFQUFVO0FBQ1IsYUFBS3BLLEVBQUwsQ0FBUTRCLEtBQVIsQ0FBY3NJLGNBQWQsQ0FBNkIsU0FBN0I7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLbEssRUFBTCxDQUFRNEIsS0FBUixDQUFjc0ksY0FBZCxDQUE2QixZQUE3QjtBQUNELE9BTFEsQ0FPVDs7QUFDRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHtQaG90b30gZnJvbSAnLi9waG90by5qcydcbmltcG9ydCB7Z2V0Vmlld3BvcnRXaWR0aCwgZ2V0Vmlld3BvcnRIZWlnaHQsIGxvZ0ZhY3Rvcnl9IGZyb20gJy4vbGliLmpzJ1xuXG5jbGFzcyBEZWNrSXRlbSB7XG4gIGNvbnN0cnVjdG9yKGltYWdlVXJsLCBpbmRleCwgb3B0aW9ucykge1xuICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMuZWwuY2xhc3NOYW1lID0gJ2RlY2staXRlbSdcblxuICAgIHRoaXMuY29udGVudEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLmNvbnRlbnRFbC5jbGFzc05hbWUgPSAnZGVjay1pdGVtLWNvbnRlbnQnXG5cbiAgICBjb25zdCBjb250ZW50V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGVudFdyYXAuY2xhc3NOYW1lID0gJ2RlY2staXRlbS1jb250ZW50X3dyYXBwZXInXG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZChjb250ZW50V3JhcClcbiAgICBjb250ZW50V3JhcC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnRFbClcblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgICB0aGlzLm5hcnJvd01vZGUgPSBnZXRWaWV3cG9ydFdpZHRoKCkgPCB0aGlzLm9wdGlvbnMuYnJlYWtwb2ludFxuICAgIHRoaXMuaW5kZXggPSBpbmRleFxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIChldikgPT4ge1xuICAgICAgaWYgKGdldFZpZXdwb3J0V2lkdGgoKSA8PSB0aGlzLm9wdGlvbnMuYnJlYWtwb2ludCkge1xuICAgICAgICBpZiAoIXRoaXMubmFycm93TW9kZSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNpemUsIHR1cm5pbmcgb24nKVxuICAgICAgICAgIHRoaXMubmFycm93TW9kZSA9IHRydWVcbiAgICAgICAgICAvLyB0aGlzLnR1cm5Pbk5hcnJvd01vZGUoKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5waG90by5maXRCeUJvdGhTaWRlcyh0aGlzLmVsKVxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5uYXJyb3dNb2RlKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ3Jlc2l6ZSwgdHVybmluZyBPZmYnKVxuICAgICAgICAgIHRoaXMudHVybk9mZk5hcnJvd01vZGUoKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9KVxuXG4gICAgdGhpcy5waG90byA9IG5ldyBQaG90byhpbWFnZVVybClcbiAgICB0aGlzLmxvYWRQaG90bygpLmNhdGNoKChlcnIpID0+IHt0aHJvdyBlcnJ9KVxuICB9XG5cbiAgdHVybk9uTmFycm93TW9kZShtb2RlKSB7XG4gICAgLy8gdGhpcy5uYXJyb3dNb2RlID0gdHJ1ZVxuXG4gICAgLy8gdGhpcyBwZXJoYXBzIHdvdWxkIGJlIGJldHRlciB0byBzZXQgd2l0aCBjc3MgdndcbiAgICAvLyB0aGlzLmVsLnN0eWxlLndpZHRoID0gZ2V0Vmlld3BvcnRXaWR0aCgpICsgJ3B4J1xuXG4gICAgLy8gdGhpcy5waG90by5maXRCeUJvdGhTaWRlcyh0aGlzLmVsKVxuICB9XG5cbiAgdHVybk9mZk5hcnJvd01vZGUoKSB7XG4gICAgdGhpcy5uYXJyb3dNb2RlID0gZmFsc2VcbiAgICAvLyB0aGlzLnBob3RvLmZpdEJ5SGVpZ2h0KHRoaXMuZWwpXG5cbiAgICAvLyB0aGlzLmVsLnN0eWxlLndpZHRoID0gdGhpcy5waG90by5kaW1zLndpZHRoICsgJ3B4J1xuICAgIHRoaXMucGhvdG8uY2xlYXJJbmxpbmVTdHlsZXMoKVxuICB9XG5cbiAgZ2V0V2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGhcbiAgfVxuXG4gIC8vIGdldCBwb3NpdGlvbiBvZiB0aGUgaXRlbSwgcmVsYXRpdmUgdG8gdGhlIGNvbnRhaW5pbmcgRGVja1xuICBnZXRPZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWwub2Zmc2V0TGVmdFxuICB9XG5cbiAgLy8gZ2V0IHBvc2l0aW9uIG9mIHRoZSBtaWRwb2ludCBvZiB0aGUgaXRlbSwgcmVsYXRpdmUgdG8gdGhlIGNvbnRhaW5pbmcgZGVja1xuICBnZXRNaWRwb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRPZmZzZXQoKSArICh0aGlzLmdldFdpZHRoKCkgLyAyKVxuICB9XG5cbiAgLyoqXG4gICAgQHBhcmFtIHtTdHJpbmd9IGhlaWdodCBoZWlnaHQgaW4gY3NzIHN5bnRheFxuICAqL1xuICBzZXRIZWlnaHQoaGVpZ2h0KSB7XG4gICAgdGhpcy5lbC5zdHlsZS5oZWlnaHQgPSBoZWlnaHRcbiAgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7XG4gICAgdGhpcy5lbC5zdHlsZS53aWR0aCA9IHdpZHRoXG4gIH1cblxuICBpc0luVmlldygpIHtcbiAgICBjb25zdCBvZmZzZXQgPSB0aGlzLmdldE9mZnNldCgpXG4gICAgY29uc3QgZGVja1Bvc2l0aW9uID0gdGhpcy5vcHRpb25zLmdldERlY2tQb3NpdGlvbigpXG4gICAgY29uc29sZS5sb2coJ2RlY2tJdGVtLmlzSW5WaWV3LCBvZmZzZXQ6ICcsIG9mZnNldCk7XG4gICAgY29uc29sZS5sb2coJ2RlY2tJdGVtLmlzSW5WaWV3LCB3aWR0aDogJywgdGhpcy5nZXRXaWR0aCgpKTtcbiAgICBjb25zb2xlLmxvZygnZGVja0l0ZW0uaXNJblZpZXcsIGdldERlY2tQb3NpdGlvbjogJywgdGhpcy5vcHRpb25zLmdldERlY2tQb3NpdGlvbigpKTtcbiAgICBjb25zb2xlLmxvZygnZGVja0l0ZW0uaXNJblZpZXcsIGdldEdhbGxlcnlWaWV3cG9ydFdpZHRoOiAnLCB0aGlzLm9wdGlvbnMuZ2V0R2FsbGVyeVZpZXdwb3J0V2lkdGgoKSk7XG5cbiAgICAvLyBkZWNrUG9zaXRpb24gY291bGQgYmUgbmVnYXRpdmVcbiAgICByZXR1cm4gb2Zmc2V0ICsgZGVja1Bvc2l0aW9uID49IDAgJiZcbiAgICBkZWNrUG9zaXRpb24gKyBvZmZzZXQgKyB0aGlzLmdldFdpZHRoKCkgPD0gdGhpcy5vcHRpb25zLmdldEdhbGxlcnlWaWV3cG9ydFdpZHRoKClcbiAgICAgID8gdHJ1ZSA6IGZhbHNlXG5cbiAgICAvLyBpZiAoXG4gICAgLy8gICB0aGlzLmdldE9mZnNldCgpICsgdGhpcy5vcHRpb25zLmdldERlY2tQb3NpdGlvbigpID4gMCAmJlxuICAgIC8vICAgdGhpcy5nZXRPZmZzZXQoKSArIHRoaXMuZ2V0V2lkdGgoKSA8IHRoaXMub3B0aW9ucy5nZXRHYWxsZXJ5Vmlld3BvcnRXaWR0aCgpXG4gICAgLy8gKSB7XG4gICAgLy9cbiAgICAvLyB9XG4gIH1cblxuICBsb2FkUGhvdG8odXJsKSB7XG4gICAgcmV0dXJuIHRoaXMucGhvdG8ubG9hZCgpIC8vIFBob3RvLnByb3RvdHlwZS5sb2FkSW1hZ2UoKVxuICAgIC50aGVuKChwaG90bykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5vcHRpb25zLnBob3RvTG9hZENiKHBob3RvKVxuXG4gICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gc2VlIHRoZSBpbWcsIGJ1dCB3ZSB3YW50IHRvIGJlIGFibGUgdG8gbWVhc3VyZSBpdCB3aXRoIGdldEJvdW5kaW5nQ2xpZW50UmVjdCAoc28gZGlzcGxheTogbm9uZSBpcyBub3QgYSBmaXQpXG4gICAgICAgIC8vIGltZy5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIlxuICAgICAgICBwaG90by5oaWRlKClcbiAgICAgICAgdGhpcy5jb250ZW50RWwuYXBwZW5kQ2hpbGQocGhvdG8uZWwpXG5cbiAgICAgICAgaWYgKCF0aGlzLm5hcnJvd01vZGUpIHtcbiAgICAgICAgICAvLyBhdCB0aGUgbW9tZW50LCBzZWVtcyBsaWtlIHdlIGhhbmRsZSBhbGwgb2YgdGhpcyB3aXRoIGNzcyxcbiAgICAgICAgICAvLyBhbmQgZG9uJ3QgbmVlZCB0byBmaXRlIHRoZSBwaG90byBhbmQgc2V0IGl0J3MgY29udGFpbmVyJ3Mgd2lkdGggcmVzcGVjdGl2ZWx5XG5cbiAgICAgICAgICAvLyB0aGlzLnBob3RvLmZpdEJ5SGVpZ2h0KHRoaXMuZWwpXG4gICAgICAgICAgLy8gdGhpcy5lbC5zdHlsZS53aWR0aCA9IHRoaXMucGhvdG8uZGltcy53aWR0aCArICdweCdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnBob3RvLmZpdEJ5Qm90aFNpZGVzKHRoaXMuY29udGVudEVsKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5waG90by5zaG93KClcbiAgICAgICAgLy8gaW1nLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSdcbiAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgIFByb21pc2UucmVqZWN0KGVycilcbiAgICAgIH1cblxuICAgIH0pXG4gICAgLy8gLmNhdGNoKChlcnIpID0+IHtcbiAgICAvLyAgIHRocm93IGVyclxuICAgIC8vIH0pXG4gIH1cbn1cblxuY2xhc3MgRGVjayB7XG4gIGNvbnN0cnVjdG9yKGltYWdlVXJscywgb3B0aW9ucykge1xuICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMuZWwuY2xhc3NOYW1lID0gJ2dhbGxlcnktZGVjaydcblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcblxuICAgIHRoaXMuYnJlYWtwb2ludCA9IG9wdGlvbnMuYnJlYWtwb2ludFxuICAgIHRoaXMucG9zaXRpb24gPSAwXG4gICAgdGhpcy5vZmZzZXQgPSAwXG5cbiAgICB0aGlzLmxvYWRlZCA9IGZhbHNlXG4gICAgdGhpcy5pdGVtc0xvYWRlZCA9IDBcbiAgICB0aGlzLml0ZW1zID0gdGhpcy5pbml0SXRlbXMoaW1hZ2VVcmxzKVxuICAgIHRoaXMuYXBwZW5kSXRlbXMoKVxuXG4gICAgLy8gaW5pdGlhbGl6ZSB0aGUgdHJhbnNmb3JtIG1hdHJpeCBzdHlsaW5nXG4gICAgdGhpcy5lbC5zdHlsZS50cmFuc2Zvcm0gPSAnbWF0cml4KDEsIDAsIDAsIDEsIDAsIDApJ1xuXG4gICAgLy8gd2luZG93Lm9uKCdyZXNpemUnLCAoZXYpID0+IHtcbiAgICAvLyAgIGlmIChnZXRWaWV3cG9ydFdpZHRoKCkgPCB0aGlzLmJyZWFrcG9pbnQpIHtcbiAgICAvL1xuICAgIC8vICAgfVxuICAgIC8vIH0pXG4gIH1cblxuICAvKlxuICBjYWxjdWxhdGVEZWNrT2Zmc2V0KGluZGV4KSB7XG4gICAgaWYgKGdldFZpZXdwb3J0V2lkdGgoKSA8IHRoaXMuYnJlYWtwb2ludCkge1xuICAgICAgY29uc3QgaXRlbU9mZnNldCA9IHRoaXMuaXRlbXNbaW5kZXhdLmdldE9mZnNldCgpXG4gICAgICBjb25zdCBkZWNrT2Zmc2V0TmV3ID0gLWl0ZW1PZmZzZXRcblxuICAgICAgcmV0dXJuIGRlY2tPZmZzZXROZXdcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaXRlbU9mZnNldCA9IHRoaXMuaXRlbXNbaW5kZXhdLmdldE1pZHBvaW50KClcblxuICAgICAgY29uc3QgZ2FsbGVyeU1pZHBvaW50ID0gdGhpcy5vcHRpb25zLmdldEdhbGxlcnlWaWV3cG9ydFdpZHRoKCkgLyAyIC8vIC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAvIDJcbiAgICAgIGNvbnN0IGRlY2tPZmZzZXROZXcgPSAtaXRlbU9mZnNldCArIGdhbGxlcnlNaWRwb2ludFxuXG4gICAgICAvLyBjb25zb2xlLmxvZygnRGVjay5jYWxjdWxhdGVEZWNrT2Zmc2V0LCBpbmRleCcsIGluZGV4KVxuICAgICAgLy8gY29uc29sZS5sb2coJ0RlY2suY2FsY3VsYXRlRGVja09mZnNldCwgaXRlbXNbaW5kZXhdJywgdGhpcy5pdGVtc1tpbmRleF0pXG4gICAgICAvLyBjb25zb2xlLmxvZygnRGVjay5jYWxjdWxhdGVEZWNrT2Zmc2V0LCBpdGVtc1tpbmRleF0nLCB0aGlzLml0ZW1zW2luZGV4XS5nZXRNaWRwb2ludCgpKVxuICAgICAgLy8gY29uc29sZS5sb2coJ0RlY2suY2FsY3VsYXRlRGVja09mZnNldCwgaXRlbU9mZnNldCcsIGl0ZW1PZmZzZXQpXG4gICAgICAvLyBjb25zb2xlLmxvZygnRGVjay5jYWxjdWxhdGVEZWNrT2Zmc2V0LCBkZWNrT2Zmc2V0TmV3JywgZGVja09mZnNldE5ldylcblxuICAgICAgcmV0dXJuIGRlY2tPZmZzZXROZXdcbiAgICB9XG4gIH1cbiAgKi9cblxuICBjYWxjdWxhdGVEZWNrT2Zmc2V0Q2VudGVyZWQoaW5kZXgpIHtcbiAgICBjb25zdCBpdGVtT2Zmc2V0ID0gdGhpcy5pdGVtc1tpbmRleF0uZ2V0TWlkcG9pbnQoKVxuXG4gICAgY29uc3QgZ2FsbGVyeU1pZHBvaW50ID0gdGhpcy5vcHRpb25zLmdldEdhbGxlcnlWaWV3cG9ydFdpZHRoKCkgLyAyIC8vIC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAvIDJcbiAgICBjb25zdCBkZWNrT2Zmc2V0TmV3ID0gLWl0ZW1PZmZzZXQgKyBnYWxsZXJ5TWlkcG9pbnRcblxuICAgIC8vIGNvbnNvbGUubG9nKCdEZWNrLmNhbGN1bGF0ZURlY2tPZmZzZXQsIGluZGV4JywgaW5kZXgpXG4gICAgLy8gY29uc29sZS5sb2coJ0RlY2suY2FsY3VsYXRlRGVja09mZnNldCwgaXRlbXNbaW5kZXhdJywgdGhpcy5pdGVtc1tpbmRleF0pXG4gICAgLy8gY29uc29sZS5sb2coJ0RlY2suY2FsY3VsYXRlRGVja09mZnNldCwgaXRlbXNbaW5kZXhdJywgdGhpcy5pdGVtc1tpbmRleF0uZ2V0TWlkcG9pbnQoKSlcbiAgICAvLyBjb25zb2xlLmxvZygnRGVjay5jYWxjdWxhdGVEZWNrT2Zmc2V0LCBpdGVtT2Zmc2V0JywgaXRlbU9mZnNldClcbiAgICAvLyBjb25zb2xlLmxvZygnRGVjay5jYWxjdWxhdGVEZWNrT2Zmc2V0LCBkZWNrT2Zmc2V0TmV3JywgZGVja09mZnNldE5ldylcblxuICAgIHJldHVybiBkZWNrT2Zmc2V0TmV3XG4gIH1cblxuICBjYWxjdWxhdGVEZWNrT2Zmc2V0KGluZGV4KSB7XG4gICAgY29uc3QgaXRlbU9mZnNldCA9IHRoaXMuaXRlbXNbaW5kZXhdLmdldE9mZnNldCgpXG4gICAgY29uc3QgZGVja09mZnNldE5ldyA9IC1pdGVtT2Zmc2V0XG5cbiAgICByZXR1cm4gZGVja09mZnNldE5ld1xuICB9XG5cbiAgLypcbiAgLy8gVE9ETzpcbiAgZ2V0QWN0dWFsUG9zaXRpb25XaGlsZVRyYW5zaXRpb25pbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCArIHdpbmRvdy5wYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsKVsnbWFyZ2luLWxlZnQnXSlcbiAgICAtIHRoaXMub3B0aW9ucy5nZXRHYWxsZXJ5UG9zKCkubGVmdFxuICAgICsgd2luZG93LnNjcm9sbFhcbiAgfVxuICAqL1xuXG4gIC8qKlxuICBAcGFyYW0ge2Jvb2xlYW59IGNlbnRlcmVkIGlmIHRydWUgLSBjZW50ZXJzIHRoZSBpdGVtLCBpZiBmYWxzeSAtIGRvZXNuJ3QgY2VudGVyXG4gICovXG4gIGdvVG9JdGVtKGluZGV4LCBjZW50ZXJlZCkge1xuXG4gICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+IHRoaXMuaXRlbXMubGVuZ3RoLTEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImNhbid0IGdvIHRvIHVuZXhpc3RpbmcgaXRlbSBhdCBcIisgaW5kZXgpXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmxvYWRlZCkge1xuICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiXCIpXG4gICAgICAvLyBUT0RPOiBtYWtlIGl0IHNvIGl0IGNhbiBnbyB0byB0aGUgaXRlbXMgdGhhdCBhcmUgYWxyZWFkeSBsb2FkZWQsIGFuZFxuICAgICAgLy8gdGhlbiwgYWRqdXN0IHRoZSBwb3NpdGlvbiBvZiB0aGUgZGVjayBzbyBpdCBzdGF5cyBvbiB0aGUgaXRlbSB3ZSd2ZSBnb25lIHRvXG4gICAgICAvLyBhcyBvdGhlciBpdGVtcyBsb2FkIChpZiBuZWNlc3NhcnkpLlxuICAgICAgLy8gVGhpcyBjb3VsZCBiZSBpbXBhY3RmdWwgaWYgdGhlIGRlY2sgaXMgcmlnaHQgYXQgdGhlIHRvcCBvZiB0aGUgcGFnZSBhbmQgdXNlclxuICAgICAgLy8gd2FudHMgdG8gaW1tZWRpYXRlbHkgYmUgYWJsZSB0byBpbnRlcmFjdCB3aXRoIHRoaW5ncy5cbiAgICAgIC8vIGNvbnNvbGUubG9nKFwicGhvdG9zIGluIHRoZSBkZWNrIGhhdmVuJ3QgbG9hZGVkIHlldFwiKTtcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG5cbiAgICBjb25zdCBkZWNrUG9zaXRpb25OZXcgPSBjZW50ZXJlZCA/IHRoaXMuY2FsY3VsYXRlRGVja09mZnNldENlbnRlcmVkKGluZGV4KSA6IHRoaXMuY2FsY3VsYXRlRGVja09mZnNldChpbmRleClcblxuICAgIC8vIFRPRE86XG4gICAgLy8gdGhpcy5vZmZzZXQgPSB0aGlzLnRyYW5zaXRpb25pbmdcbiAgICAvLyAgID8gZGVja1Bvc2l0aW9uTmV3IC0gdGhpcy5nZXRBY3R1YWxQb3NpdGlvbldoaWxlVHJhbnNpdGlvbmluZygpXG4gICAgLy8gICA6IGRlY2tQb3NpdGlvbk5ldyAtIHRoaXMucG9zaXRpb25cblxuICAgIHRoaXMub2Zmc2V0ID0gZGVja1Bvc2l0aW9uTmV3IC0gdGhpcy5wb3NpdGlvblxuICAgIHRoaXMucG9zaXRpb24gPSBkZWNrUG9zaXRpb25OZXdcblxuICAgIGlmICh0aGlzLnRyYW5zaXRpb25pbmcpIHtcbiAgICAgIHRoaXMuZWwuc3R5bGUudHJhbnNmb3JtID0gdGhpcy5tYWtlTWF0cml4KHRoaXMub2Zmc2V0KVxuICAgIH0gZWxzZSB7XG5cbiAgICAgIGZ1bmN0aW9uIHRyYW5zaXRpb25lbmRDYigpIHtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uZW5kQ2IoKVxuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0cmFuc2l0aW9uZW5kQ2IpXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbicpXG5cbiAgICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IHRydWVcbiAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRyYW5zaXRpb25lbmRDYi5iaW5kKHRoaXMpKVxuICAgICAgdGhpcy5lbC5zdHlsZS50cmFuc2Zvcm0gPSB0aGlzLm1ha2VNYXRyaXgodGhpcy5vZmZzZXQpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaXRlbXNbaW5kZXhdXG5cbiAgfVxuXG4gIG1ha2VNYXRyaXgoeCkge1xuICAgIHJldHVybiAnbWF0cml4KDEsIDAsIDAsIDEsICcrIHggKycsIDApJ1xuICB9XG5cbiAgdHJhbnNpdGlvbmVuZENiKCkge1xuICAgIHRoaXMuZWwuc3R5bGUubGVmdCA9IHRoaXMucG9zaXRpb24gKydweCdcblxuICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgndHJhbnNpdGlvbicpXG4gICAgdGhpcy5lbC5zdHlsZS50cmFuc2Zvcm0gPSAnbWF0cml4KDEsIDAsIDAsIDEsIDAsIDApJ1xuICB9XG5cbiAgaW5pdEl0ZW1zKHVybHMpIHtcbiAgICByZXR1cm4gdXJscy5tYXAoKHVybCwgaSkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEZWNrSXRlbSh1cmwsIGksIHtcbiAgICAgICAgYnJlYWtwb2ludDogdGhpcy5icmVha3BvaW50LFxuICAgICAgICBwaG90b0xvYWRDYjogKCkgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicGhvdG9Mb2FkQ2IsIGRlY2suaXRlbXNMb2FkZWQ6IFwiLCB0aGlzLml0ZW1zTG9hZGVkKTtcbiAgICAgICAgICB0aGlzLml0ZW1zTG9hZGVkKytcblxuICAgICAgICAgIGlmICh0aGlzLml0ZW1zTG9hZGVkID09IHRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInBob3RvTG9hZENiLCBkZWNrLml0ZW1zTG9hZGVkID09IGRlY2suaXRlbXMubGVuZ3RoLCBkZWNrLml0ZW1zTG9hZGVkOiBcIiwgdGhpcy5pdGVtc0xvYWRlZCk7XG4gICAgICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWVcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5sb2FkQ2IoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2V0R2FsbGVyeVZpZXdwb3J0V2lkdGg6IHRoaXMub3B0aW9ucy5nZXRHYWxsZXJ5Vmlld3BvcnRXaWR0aCxcbiAgICAgICAgZ2V0RGVja1Bvc2l0aW9uOiAoKSA9PiB7cmV0dXJuIHRoaXMucG9zaXRpb259XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBhcHBlbmRJdGVtKGl0ZW0pIHtcbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGl0ZW0uZWwpXG4gIH1cblxuICBhcHBlbmRJdGVtcygpIHtcbiAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICB0aGlzLmFwcGVuZEl0ZW0oaXRlbSlcbiAgICB9KVxuICB9XG59XG5cbmNsYXNzIEdhbGxlcnkge1xuICBjb25zdHJ1Y3RvcihwaG90b1VybHMsIG9wdGlvbnMpIHtcbiAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLmVsLmNsYXNzTmFtZSA9ICdnYWxsZXJ5J1xuXG5cbiAgICB0aGlzLmRlY2sgPSBuZXcgRGVjayhwaG90b1VybHMsIHtcbiAgICAgIGdldEdhbGxlcnlWaWV3cG9ydFdpZHRoOiAoKSA9PiB7IHJldHVybiB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIH0sXG4gICAgICBsb2FkQ2I6ICgpID0+IHtcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gdGhpcy5kZWNrLmdvVG9JdGVtKDAsIGZhbHNlKVxuICAgICAgICAvLyB0aGlzLmdvVG9OZXh0LmNhbGwodGhpcylcbiAgICAgIH0sXG4gICAgICBicmVha3BvaW50OiBvcHRpb25zLmJyZWFrcG9pbnRcbiAgICB9KVxuXG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmRlY2suZWwpXG5cblxuICAgIC8vIGNvbnN0IGFjdGl2ZUl0ZW0gPSB0aGlzLmRlY2suZ29Ub0l0ZW0oMClcbiAgICAvLyB0aGlzLmFjdGl2ZUl0ZW0gPSBhY3RpdmVJdGVtXG4gIH1cblxuICBnb1RvTmV4dCgpIHtcbiAgICBpZiAoIXRoaXMuZGVjay5sb2FkZWQpIHJldHVyblxuICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0uaW5kZXggPT0gdGhpcy5kZWNrLml0ZW1zLmxlbmd0aC0xKSByZXR1cm5cblxuICAgIHRoaXMuYWN0aXZlSXRlbSA9IHRoaXMuZGVjay5nb1RvSXRlbSh0aGlzLmFjdGl2ZUl0ZW0uaW5kZXgrMSwgdHJ1ZSlcbiAgfVxuXG4gIGdvVG9QcmV2aW91cygpIHtcbiAgICBpZiAoIXRoaXMuZGVjay5sb2FkZWQpIHJldHVyblxuICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0uaW5kZXggPT0gMCkgcmV0dXJuXG5cbiAgICB0aGlzLmFjdGl2ZUl0ZW0gPSB0aGlzLmRlY2suZ29Ub0l0ZW0odGhpcy5hY3RpdmVJdGVtLmluZGV4LTEsIHRydWUpXG4gIH1cbiAgLypcbiAgLy8gVE9ETzpcbiAgLy8gZ2V0IHRoZSBhY3R1YWwgcG9zaXRpb24gb2YgdGhlIGVsLCByZWxhdGl2ZSB0byBib2R5LlxuICBnZXRBYnNQb3NpdGlvbigpIHtcbiAgICB2YXIgcG9zaXRpb24gPSAwXG5cbiAgICAvLyBjb25zdCBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbClcblxuICAgICAgcG9zaXRpb24gPSB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnRcbiAgICAgICAgKyB3aW5kb3cucGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbClbJ21hcmdpbi1sZWZ0J10pXG5cbiAgICAgIHJldHVybiBwb3NpdGlvblxuICB9XG4gICovXG59XG5cbmV4cG9ydCB7R2FsbGVyeX1cbiIsIi8vIGltcG9ydCB7c2xpZGV9IGZyb20gJy4vc2xpZGUuanMnXG5pbXBvcnQge2dldEJhY2tncm91bmRJbWFnZVVybH0gZnJvbSAnLi9saWIuanMnXG5pbXBvcnQge0dhbGxlcnl9IGZyb20gJy4vZ2FsbGVyeS5qcydcbmltcG9ydCB7TGFyZ2VWaWV3LCBFbmxhcmdhYmxlfSBmcm9tICcuL2xhcmdlLXZpZXcuanMnXG5cbmNsYXNzIFNob3djYXNlSW1hZ2UgZXh0ZW5kcyBFbmxhcmdhYmxlIHtcbiAgY29uc3RydWN0b3IoZWwpIHtcbiAgICBzdXBlcihlbCwgZ2V0QmFja2dyb3VuZEltYWdlVXJsKGVsKSlcbiAgICAvLyB0aGlzLmltYWdlID0gbmV3IEVubGFyZ2FibGUoKVxuICB9XG59XG5cbmZ1bmN0aW9uIG5vZGVMaXN0VG9BcnJheShzZWxlY3Rvcikge1xuICB2YXIgZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcbiAgZWxzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZWxzLCAwKVxuICByZXR1cm4gZWxzXG59XG5cbmZ1bmN0aW9uIGluaXRFbmxhcmdhYmxlcyhzZWxlY3Rvcikge1xuICAvLyB2YXIgZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcbiAgLy8gZWxzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZWxzLCAwKVxuXG4gIC8vIGNvbnNvbGUubG9nKGVscyk7XG4gIHZhciBlbHMgPSBub2RlTGlzdFRvQXJyYXkoc2VsZWN0b3IpXG5cbiAgZWxzLmZvckVhY2goZWwgPT4ge25ldyBTaG93Y2FzZUltYWdlKGVsKX0pXG59XG5cbmZ1bmN0aW9uIGluaXRHYWxsZXJ5KHBob3RvVXJscykge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeS1jb250YWluZXInKVxuXG4gIGNvbnN0IGdhbGxlcnkgPSBuZXcgR2FsbGVyeShwaG90b1VybHMsIHticmVha3BvaW50OiA4MDB9KVxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2FsbGVyeS5lbClcblxuICBjb25zdCBhcnJvd3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeS13cmFwJylcbiAgYXJyb3dzLnF1ZXJ5U2VsZWN0b3IoJy5pY29uI2J3ZCcpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2FsbGVyeS5nb1RvUHJldmlvdXMuYmluZChnYWxsZXJ5KSlcbiAgYXJyb3dzLnF1ZXJ5U2VsZWN0b3IoJy5pY29uI2Z3ZCcpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2FsbGVyeS5nb1RvTmV4dC5iaW5kKGdhbGxlcnkpKVxuXG4gIGNvbnNvbGUubG9nKCdnYWxsZXJ5JywgZ2FsbGVyeSlcbn1cblxuZnVuY3Rpb24gaW5pdExhbmdTd2l0Y2goKSB7XG5cbiAgY29uc3QgY29udGVudEVuID0gbm9kZUxpc3RUb0FycmF5KCcudGV4dC5lbicpXG4gIGNvbnN0IGNvbnRlbnRVYSA9IG5vZGVMaXN0VG9BcnJheSgnLnRleHQudWEnKVxuXG4gIGZ1bmN0aW9uIHN3aXRjaFRvRW4oKSB7XG4gICAgY29udGVudFVhLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LmFkZCgnbm9uZWQnKSlcbiAgICBjb250ZW50RW4uZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdub25lZCcpKVxuICB9XG5cbiAgZnVuY3Rpb24gc3dpdGNoVG9VYSgpIHtcbiAgICBjb250ZW50RW4uZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QuYWRkKCdub25lZCcpKVxuICAgIGNvbnRlbnRVYS5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ25vbmVkJykpXG4gIH1cblxuICBjb25zdCBlblN3aXRjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYW5nLXN3aXRjaCAjZW4nKTtcbiAgY29uc3QgdWFTd2l0Y2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFuZy1zd2l0Y2ggI3VhJyk7XG5cbiAgZW5Td2l0Y2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZW5Td2l0Y2guY2xhc3NMaXN0LmFkZCgnbm9uZWQnKVxuICAgIHVhU3dpdGNoLmNsYXNzTGlzdC5yZW1vdmUoJ25vbmVkJylcblxuICAgIHN3aXRjaFRvRW4oKVxuICB9KVxuXG4gIHVhU3dpdGNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHVhU3dpdGNoLmNsYXNzTGlzdC5hZGQoJ25vbmVkJylcbiAgICBlblN3aXRjaC5jbGFzc0xpc3QucmVtb3ZlKCdub25lZCcpXG5cbiAgICBzd2l0Y2hUb1VhKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gYm9vdChnYWxsZXJ5VXJscykge1xuICBpbml0TGFuZ1N3aXRjaCgpXG5cbiAgY29uc3QgbGFyZ2VWaWV3V3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYXJnZS12aWV3X3dyYXAnKVxuICBMYXJnZVZpZXcuaW5pdCh7XG4gICAgdHJhbnNpdGlvbjogJ29wYWNpdHkgMC40cycsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICB3cmFwOiBsYXJnZVZpZXdXcmFwXG4gIH0pXG5cbiAgbGFyZ2VWaWV3V3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdub25lZCcpXG5cbiAgbGFyZ2VWaWV3V3JhcC5hcHBlbmRDaGlsZChMYXJnZVZpZXcuY29udGFpbmVyKVxuICBsYXJnZVZpZXdXcmFwLnF1ZXJ5U2VsZWN0b3IoJy5pY29uI2Nyb3NzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgTGFyZ2VWaWV3LmhpZGUoKVxuICB9KVxuXG4gIGNvbnNvbGUubG9nKCdMYXJnZVZpZXcnLCBMYXJnZVZpZXcpXG5cbiAgaW5pdEdhbGxlcnkoZ2FsbGVyeVVybHMpXG5cbiAgaW5pdEVubGFyZ2FibGVzKCcjb3V0IC5zaG93Y2FzZSAuaW1hZ2UtdGh1bWInKVxuICBpbml0RW5sYXJnYWJsZXMoJyNzdGFmZiAubWVtYmVyIC5hdmF0YXInKVxuICBuZXcgU2hvd2Nhc2VJbWFnZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdCAuc3RyZWV0LXZpZXcnKSlcbiAgLy8gZWxzLmZvckVhY2goZWwgPT4ge25ldyBTaG93Y2FzZUltYWdlKGVsKX0pXG5cbiAgLy8gaW5pdFNob3djYXNlcygpXG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICBib290KFtcbiAgICAnbWVkaWEvaW4vMTQ5MDI4NDFfMTI1OTExMjcyNzQ4MzkxMl8zMjg0MzE1MTA2MzE4OTgxNTc0X28uanBnJyxcbiAgICAnbWVkaWEvaW4vMTk4NzUyNzJfMTAxMDA0ODIyOTYyODY3MDZfMzg4MzMwNjI3NTU0NjE2NjY3Nl9uLmpwZycsXG4gICAgJ21lZGlhL2luLzNiLmpwZycsXG4gICAgJ21lZGlhL2luLzZhLmpwZycsXG4gICAgJ21lZGlhL2luL0RTQ18wMTI2LmpwZycsXG4gICAgJ21lZGlhL2luL0RTQ18wMTI4LkpQRycsXG4gICAgJ21lZGlhL2luL0RTQ18wMzUwLkpQRydcbiAgXSlcbn0pXG4iLCJpbXBvcnQge2dldEJhY2tncm91bmRJbWFnZVVybCwgZ2V0Vmlld3BvcnRXaWR0aCwgZ2V0Vmlld3BvcnRIZWlnaHR9IGZyb20gJy4vbGliLmpzJ1xuaW1wb3J0IHtQaG90b30gZnJvbSAnLi9waG90by5qcydcblxuY29uc3QgTGFyZ2VWaWV3ID0ge1xuICBpbml0KG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICAgIGlmIChvcHRpb25zLnRyYW5zaXRpb24pIHRoaXMudHJhbnNpdGlvblNldHVwID0gb3B0aW9ucy50cmFuc2l0aW9uXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIC8vIHNhbWUgYXMgaW4gdGhlIHNjc3NcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ2xhcmdlLXZpZXdfY29udGFpbmVyJ1xuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyXG5cbiAgICAvLyBpZiAob3B0aW9ucy5jbGlja0NiKVxuICAgIC8vIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge3RoaXMuaGlkZSgpfSlcbiAgICB0aGlzLndyYXAgPSBvcHRpb25zLndyYXAgfHwgdGhpcy5jb250YWluZXJcblxuICAgIHRoaXMud3JhcC5zdHlsZS5vcGFjaXR5ID0gJzAnXG4gICAgLy8gdGhpcy53cmFwLmNsYXNzTGlzdC5hZGQoJ3RyYW5zcGFyZW50JylcblxuICAgIHRoaXMud3JhcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgLy8gdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbm9uZWQnKVxuICAgIHRoaXMuaGlkZGVuID0gdHJ1ZVxuICAgIC8vIHRoaXMucGhvdG8gPSBuZXcgUGhvdG8oKVxuICB9LFxuXG4gIHNldFBob3RvKHVybCkge1xuICAgIGNvbnN0IHBob3RvID0gbmV3IFBob3RvKHVybClcbiAgICAvLyB0aGlzLnBob3RvID0gbmV3IFBob3RvKHVybClcblxuICAgIHJldHVybiBwaG90by5sb2FkKClcbiAgICAvLyAudGhlbigpXG4gICAgLnRoZW4oKHBob3RvKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAodGhpcy5oaWRkZW4pIHtcbiAgICAgICAgICBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ3RoZSBsYXJnZS12aWV3IGNvbnRhaW5lciBtdXN0IGJlIGRpc3BsYXllZCBiZWZvcmUgd2UgY2FuIGZpdCBpbiB0aGUgcGhvdG8nKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyB0aGlzLnBob3RvLmhpZGUoZmFsc2UpXG4gICAgICAgICAgcGhvdG8uaGlkZShmYWxzZSlcbiAgICAgICAgICBpZiAodGhpcy5waG90bykge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIucmVwbGFjZUNoaWxkKHBob3RvLmVsLCB0aGlzLnBob3RvLmVsKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChwaG90by5lbClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwaG90by5maXRCeUJvdGhTaWRlcyh0aGlzLmNvbnRhaW5lcilcbiAgICAgICAgICBwaG90by5zaG93KGZhbHNlKVxuICAgICAgICAgIHRoaXMucGhvdG8gPSBwaG90b1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICBQcm9taXNlLnJlamVjdChlcnIpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICAvKlxuICB0cmFuc2l0aW9uZW5kQ2IoY2IpIHtcbiAgICBjYigpXG4gICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMudHJhbnNpdGlvbmVuZENiKVxuICB9XG4gICovXG5cbiAgLyoqXG4gICAgQGRlc2NyaXB0aW9uIElmIHVybCBpcyBnaXZlLCB0aGVuLCBhZnRlciBzaG93IHRyYW5zaXRpb24gaGFzIGVuZGVkLCBpdCBsb2FkcyB0aGVcbiAgICBuZXcgcGhvdG9cbiAgKi9cbiAgc2hvdyh1cmwpIHtcbiAgICAvLyBpZiAodGhpcy5zaG93UGVuZGluZykge1xuICAgIC8vICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnNob3dUaW1lb3V0SWQpXG4gICAgLy8gICAvLyB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKClcbiAgICAvL1xuICAgIC8vICAgLy8gc2hvdWxkIHJlbW92ZUV2ZW50TGlzdGVuZXIgb2YgaXRzZWxmXG4gICAgLy8gICB0aGlzLnRyYW5zaXRpb25lbmRDYigpXG4gICAgLy9cbiAgICAvL1xuICAgIC8vIH1cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICAgICAgZnVuY3Rpb24gdHJhbnNpdGlvbmVuZENiKCkge1xuICAgICAgICAgIHNlbGYud3JhcC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdHJhbnNpdGlvbmVuZENiKVxuICAgICAgICAgIHNlbGYudHJhbnNpdGlvbk9mZigpXG4gICAgICAgICAgLy8gdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndHJhbnNpdGlvbicpXG5cbiAgICAgICAgICBzZWxmLmhpZGRlbiA9IGZhbHNlXG5cbiAgICAgICAgICBjb25zb2xlLmxvZygnTGFyZ2VWaWV3LnNob3csIHRyYW5zaXRpb25lbmRDYicsIHNlbGYpXG4gICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLndyYXAuc3R5bGUuZGlzcGxheSA9IHRoaXMub3B0aW9ucy5kaXNwbGF5IHx8ICdmbGV4J1xuICAgICAgICAvLyB0aGlzLndyYXAuY2xhc3NMaXN0LnJlbW92ZSgnbm9uZWQnKVxuICAgICAgICB0aGlzLndyYXAuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRyYW5zaXRpb25lbmRDYilcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uT24oKVxuXG4gICAgICAgIHRoaXMuc2hvd1BlbmRpbmcgPSB0cnVlXG4gICAgICAgIC8vIHRoaXMgaXMgbnV0c1xuICAgICAgICB0aGlzLnNob3dUaW1lb3V0SWQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zaG93UGVuZGluZyA9IGZhbHNlXG4gICAgICAgICAgdGhpcy53cmFwLnN0eWxlLm9wYWNpdHkgPSAnMSdcbiAgICAgICAgICAvLyB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uJylcbiAgICAgICAgfSwgNTApXG5cbiAgICAgICAgLy8gdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc29saWQnKVxuICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgcmVqZWN0KGVycilcbiAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0UGhvdG8odXJsKVxuICAgICAgfVxuICAgIH0sIChlcnIpID0+IHtcbiAgICAgIFByb21pc2UucmVqZWN0KGVycilcbiAgICB9KVxuICB9LFxuXG4gIGhpZGUoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBmdW5jdGlvbiB0cmFuc2l0aW9uZW5kQ2IoKSB7XG4gICAgICAgICAgc2VsZi53cmFwLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0cmFuc2l0aW9uZW5kQ2IpXG4gICAgICAgICAgc2VsZi50cmFuc2l0aW9uT2ZmKClcbiAgICAgICAgICAvLyBzZWxmLndyYXAuY2xhc3NMaXN0LnJlbW92ZSgndHJhbnNpdGlvbicpXG4gICAgICAgICAgc2VsZi53cmFwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgICBzZWxmLnBob3RvLmhpZGUoZmFsc2UpXG4gICAgICAgICAgLy8gc2VsZi5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbm9uZWQnKVxuXG4gICAgICAgICAgc2VsZi5oaWRkZW4gPSB0cnVlXG4gICAgICAgICAgY29uc29sZS5sb2coJ0xhcmdlVmlldy5oaWRlLCB0cmFuc2l0aW9uZW5kQ2InLCBMYXJnZVZpZXcpO1xuICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy53cmFwLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0cmFuc2l0aW9uZW5kQ2IpXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbk9uKClcbiAgICAgICAgLy8gdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbicpXG5cbiAgICAgICAgdGhpcy53cmFwLnN0eWxlLm9wYWNpdHkgPSAnMCdcbiAgICAgICAgLy8gdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnc29saWQnKVxuICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgcmVqZWN0KGVycilcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIHRyYW5zaXRpb25PZmYoKSB7XG4gICAgdGhpcy53cmFwLnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSdcbiAgfSxcblxuICB0cmFuc2l0aW9uT24oKSB7XG4gICAgdGhpcy53cmFwLnN0eWxlLnRyYW5zaXRpb24gPSB0aGlzLnRyYW5zaXRpb25TZXR1cFxuICB9XG59XG5cbi8vIGNvbnNvbGUubG9nKCdMYXJnZVZpZXcnLCBMYXJnZVZpZXcpXG5cbmNsYXNzIEVubGFyZ2FibGUge1xuICBjb25zdHJ1Y3RvcihlbCwgdXJsKSB7XG4gICAgdGhpcy5lbCA9IGVsXG4gICAgdGhpcy51cmwgPSB1cmxcblxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrQ2IuYmluZCh0aGlzKSlcbiAgfVxuXG4gIGVubGFyZ2UodXJsKSB7XG4gICAgTGFyZ2VWaWV3LnNob3codXJsKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdFbmxhcmdhYmxlLmVubGFyZ2UsIExhcmdlVmlldyBzaG93bicpXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9KVxuXG4gIH1cblxuICBjbGlja0NiKCkge1xuICAgIGNvbnNvbGUubG9nKCdFbmxhcmdhYmxlLmNsaWNrQ2IsIHRoaXM6ICcsIHRoaXMpO1xuICAgIHRoaXMuZW5sYXJnZSh0aGlzLnVybClcbiAgfVxufVxuXG4vKlxuZnVuY3Rpb24gZW5sYXJnZVNob3djYXNlKCkge1xuICBjb25zdCBpbWFnZVVybCA9IGdldEJhY2tncm91bmRJbWFnZVVybCh0aGlzKVxuICBMYXJnZVZpZXcuc2hvdyhpbWFnZVVybClcbn1cblxuZnVuY3Rpb24gZ2V0RW5sYXJnYWJsZUVsZW1lbnRzKCkge1xuICB2YXIgZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI291dCAuc2hvd2Nhc2UgLmltYWdlLXRodW1iJylcbiAgZWxzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZWxzLCAwKVxuXG4gIGVscy5mb3JFYWNoKGVsID0+IHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVubGFyZ2VTaG93Y2FzZUNiKVxuICB9KVxufVxuKi9cblxuZXhwb3J0IHtMYXJnZVZpZXcsIEVubGFyZ2FibGV9XG4iLCJcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzY5NDI3ODUvd2luZG93LWlubmVyd2lkdGgtdnMtZG9jdW1lbnQtZG9jdW1lbnRlbGVtZW50LWNsaWVudHdpZHRoXG4vLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xNTYzODgjYzE0XG5mdW5jdGlvbiBnZXRWaWV3cG9ydEhlaWdodCgpIHtcbiAgLy8gZ2V0RWxlbWVudHNCeVRhZ05hbWUsIGlmIEknbSBub3QgbWlzdGFrZW4gcmV0dXJucyBhIGxpdmVsaXN0IChoZWxsIGtub3dzIHdoYXQgdGhhdCBpcywgYnV0IGl0J3NcbiAgLy8gdXBkYXRlZCBsaXZlIC0gYXMgZG9tIGdldHMgY2hhbmdlZCkuIEknbSBub3Qgc3VyZSBhYm91dCB1c2luZyBpdCwgaXQgYmVoYXZlZCBtaXN0ZXJpb3VzbHkgb25jZS4uLlxuICAvLyBCdXQsIHF1ZXJ5U2VsZWN0b3IgaXMgbm90IHNvIGNvbXBhdGlibGUuXG4gIC8vIE1heWJlOiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uY2xpZW50V2lkdGgpXG4gIHJldHVybiB3aW5kb3cuaW5uZXJIZWlnaHQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA/XG4gICAgTWF0aC5taW4od2luZG93LmlubmVySGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSA6XG4gICAgd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcbiAgICAgIHx8IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5jbGllbnRIZWlnaHQpO1xufVxuXG5mdW5jdGlvbiBnZXRWaWV3cG9ydFdpZHRoKCkge1xuICByZXR1cm4gd2luZG93LmlubmVyV2lkdGggJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoID9cbiAgICBNYXRoLm1pbih3aW5kb3cuaW5uZXJXaWR0aCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKSA6XG4gICAgd2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXG4gICAgICB8fCAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uY2xpZW50V2lkdGgpO1xufVxuXG5cbi8qXG5cbk5vZGVMaXN0IHRvIGFycmF5XG5mdW5jdGlvbiB0b0FycmF5KG9iaikge1xuICB2YXIgYXJyYXkgPSBbXTtcbiAgLy8gaXRlcmF0ZSBiYWNrd2FyZHMgZW5zdXJpbmcgdGhhdCBsZW5ndGggaXMgYW4gVUludDMyXG4gIGZvciAodmFyIGkgPSBvYmoubGVuZ3RoID4+PiAwOyBpLS07KSB7XG4gICAgYXJyYXlbaV0gPSBvYmpbaV07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuKi9cblxuZnVuY3Rpb24gZ2V0QmFja2dyb3VuZEltYWdlVXJsKGVsKSB7XG4gIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbClcblxuICBjb25zdCByZWd4ID0gbmV3IFJlZ0V4cCgvLip1cmxcXCgoPzpcXFwiPyc/KSguKykoPzouXFwnP1xcXCI/KVxcKS4qL2cpXG4gIGNvbnN0IHJlc3VsdCA9IHJlZ3guZXhlYyhjb21wdXRlZFN0eWxlWydiYWNrZ3JvdW5kLWltYWdlJ10pXG5cbiAgaWYgKHJlc3VsdFsxXSkge1xuICAgIHJldHVybiByZXN1bHRbMV1cbiAgfVxufVxuXG5mdW5jdGlvbiBsb2dGYWN0b3J5KGVudikge1xuICByZXR1cm4gZnVuY3Rpb24oZGF0YSkge1xuICAgIGlmICghZW52LmRldikgcmV0dXJuXG5cbiAgICBjb25zb2xlLnRyYWNlKClcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuICB9XG59XG5cbmV4cG9ydCB7Z2V0Vmlld3BvcnRXaWR0aCwgZ2V0Vmlld3BvcnRIZWlnaHQsIGdldEJhY2tncm91bmRJbWFnZVVybCwgbG9nRmFjdG9yeX1cbiIsImltcG9ydCB7Z2V0Vmlld3BvcnRXaWR0aCwgZ2V0Vmlld3BvcnRIZWlnaHR9IGZyb20gJy4vbGliLmpzJ1xuXG5jbGFzcyBQaG90byB7XG4gIGNvbnN0cnVjdG9yKHVybCkge1xuICAgIHRoaXMudXJsID0gdXJsXG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gIH1cblxuICBsb2FkKCkge1xuICAgIC8vIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5lbC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIHJlc29sdmUodGhpcylcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbC5zcmMgPSB0aGlzLnVybFxuICAgIH0pXG4gIH1cblxuICBjYWxjdWxhdGVGaXRCeUJvdGhTaWRlcyhpbWdEaW1zLCBjb250YWluZXJEaW1zKSB7XG4gICAgLy8gY29uc3QgaW1nRGltcyA9IGltZy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIC8vIGNvbnN0IGNvbnRhaW5lckRpbXMgPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgIGltZ0RpbXMucmF0aW8gPSBpbWdEaW1zLndpZHRoIC8gaW1nRGltcy5oZWlnaHRcbiAgICBjb250YWluZXJEaW1zLnJhdGlvID0gY29udGFpbmVyRGltcy53aWR0aCAvIGNvbnRhaW5lckRpbXMuaGVpZ2h0XG5cbiAgICAvLyBpZiB3aWRlciB0aGFuIGhpZ2hlclxuICAgIGlmIChpbWdEaW1zLnJhdGlvID49IGNvbnRhaW5lckRpbXMucmF0aW8pIHtcbiAgICAgIGNvbnN0IGltZ0RpbXNOZXcgPSB7XG4gICAgICAgIHdpZHRoOiBjb250YWluZXJEaW1zLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IGNvbnRhaW5lckRpbXMud2lkdGggLyBpbWdEaW1zLnJhdGlvXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbWdEaW1zTmV3XG5cbiAgICAvLyBpZiBoaWdoZXIgdGhhbiB3aWRlclxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbWdEaW1zTmV3ID0ge1xuICAgICAgICAvLyB3aWR0aDogY29udGFpbmVyRGltcy5oZWlnaHQgKiBpbWdEaW1zLnJhdGlvLFxuICAgICAgICB3aWR0aDogY29udGFpbmVyRGltcy5oZWlnaHQgKiBpbWdEaW1zLnJhdGlvLFxuICAgICAgICBoZWlnaHQ6IGNvbnRhaW5lckRpbXMuaGVpZ2h0XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbWdEaW1zTmV3XG4gICAgfVxuXG4gIH1cblxuICBjYWxjdWxhdGVGaXRCeUhlaWdodChpbWdEaW1zLCBjb250YWluZXJEaW1zKSB7XG4gICAgLy8gY29uc3QgaW1nRGltcyA9IGltZy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIC8vIGNvbnN0IGNvbnRhaW5lckRpbXMgPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgIGltZ0RpbXMucmF0aW8gPSBpbWdEaW1zLndpZHRoIC8gaW1nRGltcy5oZWlnaHRcbiAgICBjb25zdCBpbWdEaW1zTmV3ID0ge1xuICAgICAgaGVpZ2h0OiBjb250YWluZXJEaW1zLmhlaWdodCxcbiAgICAgIHdpZHRoOiBjb250YWluZXJEaW1zLmhlaWdodCAqIGltZ0RpbXMucmF0aW8sXG4gICAgICByYXRpbzogaW1nRGltcy5yYXRpb1xuICAgIH1cblxuICAgIHJldHVybiBpbWdEaW1zTmV3XG4gIH1cblxuICBmaXRCeUhlaWdodChjb250YWluZXIpIHtcbiAgICB0aGlzLmRpbXMgPSB0aGlzLmNhbGN1bGF0ZUZpdEJ5SGVpZ2h0KFxuICAgICAgdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIClcblxuICAgIC8vIGNvbnN0IGltZ0RpbXMgPSB0aGlzLmNhbGN1bGF0ZUZpdEJ5SGVpZ2h0KGltZywgdGhpcy5lbClcbiAgICB0aGlzLmVsLnN0eWxlLndpZHRoID0gdGhpcy5kaW1zLndpZHRoXG4gICAgdGhpcy5lbC5zdHlsZS5oZWlnaHQgPSB0aGlzLmRpbXMuaGVpZ2h0XG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgZml0QnlCb3RoU2lkZXMoY29udGFpbmVyKSB7XG4gICAgdGhpcy5kaW1zID0gdGhpcy5jYWxjdWxhdGVGaXRCeUJvdGhTaWRlcyhcbiAgICAgIHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICApXG5cbiAgICB0aGlzLmVsLnN0eWxlLndpZHRoID0gdGhpcy5kaW1zLndpZHRoICsgJ3B4J1xuICAgIHRoaXMuZWwuc3R5bGUuaGVpZ2h0ID0gdGhpcy5kaW1zLmhlaWdodCArICdweCdcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBjbGVhcklubGluZVN0eWxlcygpIHtcbiAgICBpZiAodGhpcy5lbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSkge1xuICAgICAgdGhpcy5lbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnd2lkdGgnKVxuICAgICAgdGhpcy5lbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0JylcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSUU5XG4gICAgICB0aGlzLmVsLnN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnd2lkdGgnKVxuICAgICAgdGhpcy5lbC5zdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ2hlaWdodCcpXG4gICAgfVxuICB9XG5cbiAgaGlkZShoYXJkKSB7XG4gICAgaGFyZCA/IHRoaXMuZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiIDogdGhpcy5lbC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIlxuICB9XG5cbiAgc2hvdyhoYXJkKSB7XG4gICAgaWYgKGhhcmQpIHtcbiAgICAgIHRoaXMuZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2Rpc3BsYXknKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCd2aXNpYmlsaXR5JylcbiAgICB9XG5cbiAgICAvLyBoYXJkID8gdGhpcy5lbC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIiA6IHRoaXMuZWwuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiXG4gIH1cbn1cblxuZXhwb3J0IHtQaG90b31cbiJdLCJzb3VyY2VSb290IjoiIn0=