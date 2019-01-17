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

function initNavAnimation(navBreakpoint) {
  var logo = document.querySelector('.logo .logo-itself');
  var lang = document.querySelector('.logo .lang-switch');
  var enlarged = true;
  window.addEventListener('scroll', function (ev) {
    if (window.scrollY > navBreakpoint && enlarged) {
      logo.classList.remove('logo-itself_larger');
      lang.classList.remove('lang-switch_larger');
      enlarged = false;
    } else if (window.scrollY < navBreakpoint && !enlarged) {
      logo.classList.add('logo-itself_larger');
      lang.classList.add('lang-switch_larger');
      enlarged = true;
    }
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

  initNavAnimation(25);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXJnZS12aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Bob3RvLmpzIl0sIm5hbWVzIjpbIkRlY2tJdGVtIiwiaW1hZ2VVcmwiLCJpbmRleCIsIm9wdGlvbnMiLCJlbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImNvbnRlbnRFbCIsImNvbnRlbnRXcmFwIiwiYXBwZW5kQ2hpbGQiLCJuYXJyb3dNb2RlIiwiZ2V0Vmlld3BvcnRXaWR0aCIsImJyZWFrcG9pbnQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXYiLCJwaG90byIsImZpdEJ5Qm90aFNpZGVzIiwidHVybk9mZk5hcnJvd01vZGUiLCJQaG90byIsImxvYWRQaG90byIsImNhdGNoIiwiZXJyIiwibW9kZSIsImNsZWFySW5saW5lU3R5bGVzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJvZmZzZXRMZWZ0IiwiZ2V0T2Zmc2V0IiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJzdHlsZSIsIm9mZnNldCIsImRlY2tQb3NpdGlvbiIsImdldERlY2tQb3NpdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJnZXRHYWxsZXJ5Vmlld3BvcnRXaWR0aCIsInVybCIsImxvYWQiLCJ0aGVuIiwicGhvdG9Mb2FkQ2IiLCJoaWRlIiwic2hvdyIsIlByb21pc2UiLCJyZWplY3QiLCJEZWNrIiwiaW1hZ2VVcmxzIiwicG9zaXRpb24iLCJsb2FkZWQiLCJpdGVtc0xvYWRlZCIsIml0ZW1zIiwiaW5pdEl0ZW1zIiwiYXBwZW5kSXRlbXMiLCJ0cmFuc2Zvcm0iLCJpdGVtT2Zmc2V0IiwiZ2V0TWlkcG9pbnQiLCJnYWxsZXJ5TWlkcG9pbnQiLCJkZWNrT2Zmc2V0TmV3IiwiY2VudGVyZWQiLCJsZW5ndGgiLCJFcnJvciIsInVuZGVmaW5lZCIsImRlY2tQb3NpdGlvbk5ldyIsImNhbGN1bGF0ZURlY2tPZmZzZXRDZW50ZXJlZCIsImNhbGN1bGF0ZURlY2tPZmZzZXQiLCJ0cmFuc2l0aW9uaW5nIiwibWFrZU1hdHJpeCIsInRyYW5zaXRpb25lbmRDYiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJiaW5kIiwieCIsImxlZnQiLCJyZW1vdmUiLCJ1cmxzIiwibWFwIiwiaSIsImxvYWRDYiIsIml0ZW0iLCJmb3JFYWNoIiwiYXBwZW5kSXRlbSIsIkdhbGxlcnkiLCJwaG90b1VybHMiLCJkZWNrIiwiYWN0aXZlSXRlbSIsImdvVG9JdGVtIiwiU2hvd2Nhc2VJbWFnZSIsImdldEJhY2tncm91bmRJbWFnZVVybCIsIkVubGFyZ2FibGUiLCJub2RlTGlzdFRvQXJyYXkiLCJzZWxlY3RvciIsImVscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImluaXRFbmxhcmdhYmxlcyIsImluaXRHYWxsZXJ5IiwiY29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsImdhbGxlcnkiLCJhcnJvd3MiLCJnb1RvUHJldmlvdXMiLCJnb1RvTmV4dCIsImluaXRMYW5nU3dpdGNoIiwiY29udGVudEVuIiwiY29udGVudFVhIiwic3dpdGNoVG9FbiIsInN3aXRjaFRvVWEiLCJlblN3aXRjaCIsInVhU3dpdGNoIiwiaW5pdE5hdkFuaW1hdGlvbiIsIm5hdkJyZWFrcG9pbnQiLCJsb2dvIiwibGFuZyIsImVubGFyZ2VkIiwic2Nyb2xsWSIsImJvb3QiLCJnYWxsZXJ5VXJscyIsImxhcmdlVmlld1dyYXAiLCJMYXJnZVZpZXciLCJpbml0IiwidHJhbnNpdGlvbiIsImRpc3BsYXkiLCJ3cmFwIiwidHJhbnNpdGlvblNldHVwIiwib3BhY2l0eSIsImhpZGRlbiIsInNldFBob3RvIiwicmVwbGFjZUNoaWxkIiwicmVzb2x2ZSIsInNlbGYiLCJ0cmFuc2l0aW9uT2ZmIiwidHJhbnNpdGlvbk9uIiwic2hvd1BlbmRpbmciLCJzaG93VGltZW91dElkIiwic2V0VGltZW91dCIsImNsaWNrQ2IiLCJlbmxhcmdlIiwiZ2V0Vmlld3BvcnRIZWlnaHQiLCJpbm5lckhlaWdodCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsIk1hdGgiLCJtaW4iLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImlubmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwicmVneCIsIlJlZ0V4cCIsInJlc3VsdCIsImV4ZWMiLCJsb2dGYWN0b3J5IiwiZW52IiwiZGF0YSIsImRldiIsInRyYWNlIiwib25sb2FkIiwic3JjIiwiaW1nRGltcyIsImNvbnRhaW5lckRpbXMiLCJyYXRpbyIsImltZ0RpbXNOZXciLCJkaW1zIiwiY2FsY3VsYXRlRml0QnlIZWlnaHQiLCJjYWxjdWxhdGVGaXRCeUJvdGhTaWRlcyIsInJlbW92ZVByb3BlcnR5IiwicmVtb3ZlQXR0cmlidXRlIiwiaGFyZCIsInZpc2liaWxpdHkiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFD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QUFuRTtBQUNEOzs7eUJBRUlELEksRUFBTTtBQUNULFVBQUlBLElBQUosRUFBVTtBQUNSLGFBQUsxSyxFQUFMLENBQVE0QixLQUFSLENBQWM0SSxjQUFkLENBQTZCLFNBQTdCO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBS3hLLEVBQUwsQ0FBUTRCLEtBQVIsQ0FBYzRJLGNBQWQsQ0FBNkIsWUFBN0I7QUFDRCxPQUxRLENBT1Q7O0FBQ0QiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7UGhvdG99IGZyb20gJy4vcGhvdG8uanMnXG5pbXBvcnQge2dldFZpZXdwb3J0V2lkdGgsIGdldFZpZXdwb3J0SGVpZ2h0LCBsb2dGYWN0b3J5fSBmcm9tICcuL2xpYi5qcydcblxuY2xhc3MgRGVja0l0ZW0ge1xuICBjb25zdHJ1Y3RvcihpbWFnZVVybCwgaW5kZXgsIG9wdGlvbnMpIHtcbiAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLmVsLmNsYXNzTmFtZSA9ICdkZWNrLWl0ZW0nXG5cbiAgICB0aGlzLmNvbnRlbnRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy5jb250ZW50RWwuY2xhc3NOYW1lID0gJ2RlY2staXRlbS1jb250ZW50J1xuXG4gICAgY29uc3QgY29udGVudFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRlbnRXcmFwLmNsYXNzTmFtZSA9ICdkZWNrLWl0ZW0tY29udGVudF93cmFwcGVyJ1xuICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoY29udGVudFdyYXApXG4gICAgY29udGVudFdyYXAuYXBwZW5kQ2hpbGQodGhpcy5jb250ZW50RWwpXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gICAgdGhpcy5uYXJyb3dNb2RlID0gZ2V0Vmlld3BvcnRXaWR0aCgpIDwgdGhpcy5vcHRpb25zLmJyZWFrcG9pbnRcbiAgICB0aGlzLmluZGV4ID0gaW5kZXhcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoZXYpID0+IHtcbiAgICAgIGlmIChnZXRWaWV3cG9ydFdpZHRoKCkgPD0gdGhpcy5vcHRpb25zLmJyZWFrcG9pbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLm5hcnJvd01vZGUpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmVzaXplLCB0dXJuaW5nIG9uJylcbiAgICAgICAgICB0aGlzLm5hcnJvd01vZGUgPSB0cnVlXG4gICAgICAgICAgLy8gdGhpcy50dXJuT25OYXJyb3dNb2RlKClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucGhvdG8uZml0QnlCb3RoU2lkZXModGhpcy5lbClcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMubmFycm93TW9kZSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNpemUsIHR1cm5pbmcgT2ZmJylcbiAgICAgICAgICB0aGlzLnR1cm5PZmZOYXJyb3dNb2RlKClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSlcblxuICAgIHRoaXMucGhvdG8gPSBuZXcgUGhvdG8oaW1hZ2VVcmwpXG4gICAgdGhpcy5sb2FkUGhvdG8oKS5jYXRjaCgoZXJyKSA9PiB7dGhyb3cgZXJyfSlcbiAgfVxuXG4gIHR1cm5Pbk5hcnJvd01vZGUobW9kZSkge1xuICAgIC8vIHRoaXMubmFycm93TW9kZSA9IHRydWVcblxuICAgIC8vIHRoaXMgcGVyaGFwcyB3b3VsZCBiZSBiZXR0ZXIgdG8gc2V0IHdpdGggY3NzIHZ3XG4gICAgLy8gdGhpcy5lbC5zdHlsZS53aWR0aCA9IGdldFZpZXdwb3J0V2lkdGgoKSArICdweCdcblxuICAgIC8vIHRoaXMucGhvdG8uZml0QnlCb3RoU2lkZXModGhpcy5lbClcbiAgfVxuXG4gIHR1cm5PZmZOYXJyb3dNb2RlKCkge1xuICAgIHRoaXMubmFycm93TW9kZSA9IGZhbHNlXG4gICAgLy8gdGhpcy5waG90by5maXRCeUhlaWdodCh0aGlzLmVsKVxuXG4gICAgLy8gdGhpcy5lbC5zdHlsZS53aWR0aCA9IHRoaXMucGhvdG8uZGltcy53aWR0aCArICdweCdcbiAgICB0aGlzLnBob3RvLmNsZWFySW5saW5lU3R5bGVzKClcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoXG4gIH1cblxuICAvLyBnZXQgcG9zaXRpb24gb2YgdGhlIGl0ZW0sIHJlbGF0aXZlIHRvIHRoZSBjb250YWluaW5nIERlY2tcbiAgZ2V0T2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLmVsLm9mZnNldExlZnRcbiAgfVxuXG4gIC8vIGdldCBwb3NpdGlvbiBvZiB0aGUgbWlkcG9pbnQgb2YgdGhlIGl0ZW0sIHJlbGF0aXZlIHRvIHRoZSBjb250YWluaW5nIGRlY2tcbiAgZ2V0TWlkcG9pbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0T2Zmc2V0KCkgKyAodGhpcy5nZXRXaWR0aCgpIC8gMilcbiAgfVxuXG4gIC8qKlxuICAgIEBwYXJhbSB7U3RyaW5nfSBoZWlnaHQgaGVpZ2h0IGluIGNzcyBzeW50YXhcbiAgKi9cbiAgc2V0SGVpZ2h0KGhlaWdodCkge1xuICAgIHRoaXMuZWwuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0XG4gIH1cblxuICBzZXRXaWR0aCh3aWR0aCkge1xuICAgIHRoaXMuZWwuc3R5bGUud2lkdGggPSB3aWR0aFxuICB9XG5cbiAgaXNJblZpZXcoKSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5nZXRPZmZzZXQoKVxuICAgIGNvbnN0IGRlY2tQb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5nZXREZWNrUG9zaXRpb24oKVxuICAgIGNvbnNvbGUubG9nKCdkZWNrSXRlbS5pc0luVmlldywgb2Zmc2V0OiAnLCBvZmZzZXQpO1xuICAgIGNvbnNvbGUubG9nKCdkZWNrSXRlbS5pc0luVmlldywgd2lkdGg6ICcsIHRoaXMuZ2V0V2lkdGgoKSk7XG4gICAgY29uc29sZS5sb2coJ2RlY2tJdGVtLmlzSW5WaWV3LCBnZXREZWNrUG9zaXRpb246ICcsIHRoaXMub3B0aW9ucy5nZXREZWNrUG9zaXRpb24oKSk7XG4gICAgY29uc29sZS5sb2coJ2RlY2tJdGVtLmlzSW5WaWV3LCBnZXRHYWxsZXJ5Vmlld3BvcnRXaWR0aDogJywgdGhpcy5vcHRpb25zLmdldEdhbGxlcnlWaWV3cG9ydFdpZHRoKCkpO1xuXG4gICAgLy8gZGVja1Bvc2l0aW9uIGNvdWxkIGJlIG5lZ2F0aXZlXG4gICAgcmV0dXJuIG9mZnNldCArIGRlY2tQb3NpdGlvbiA+PSAwICYmXG4gICAgZGVja1Bvc2l0aW9uICsgb2Zmc2V0ICsgdGhpcy5nZXRXaWR0aCgpIDw9IHRoaXMub3B0aW9ucy5nZXRHYWxsZXJ5Vmlld3BvcnRXaWR0aCgpXG4gICAgICA/IHRydWUgOiBmYWxzZVxuXG4gICAgLy8gaWYgKFxuICAgIC8vICAgdGhpcy5nZXRPZmZzZXQoKSArIHRoaXMub3B0aW9ucy5nZXREZWNrUG9zaXRpb24oKSA+IDAgJiZcbiAgICAvLyAgIHRoaXMuZ2V0T2Zmc2V0KCkgKyB0aGlzLmdldFdpZHRoKCkgPCB0aGlzLm9wdGlvbnMuZ2V0R2FsbGVyeVZpZXdwb3J0V2lkdGgoKVxuICAgIC8vICkge1xuICAgIC8vXG4gICAgLy8gfVxuICB9XG5cbiAgbG9hZFBob3RvKHVybCkge1xuICAgIHJldHVybiB0aGlzLnBob3RvLmxvYWQoKSAvLyBQaG90by5wcm90b3R5cGUubG9hZEltYWdlKClcbiAgICAudGhlbigocGhvdG8pID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5waG90b0xvYWRDYihwaG90bylcblxuICAgICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIHNlZSB0aGUgaW1nLCBidXQgd2Ugd2FudCB0byBiZSBhYmxlIHRvIG1lYXN1cmUgaXQgd2l0aCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgKHNvIGRpc3BsYXk6IG5vbmUgaXMgbm90IGEgZml0KVxuICAgICAgICAvLyBpbWcuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCJcbiAgICAgICAgcGhvdG8uaGlkZSgpXG4gICAgICAgIHRoaXMuY29udGVudEVsLmFwcGVuZENoaWxkKHBob3RvLmVsKVxuXG4gICAgICAgIGlmICghdGhpcy5uYXJyb3dNb2RlKSB7XG4gICAgICAgICAgLy8gYXQgdGhlIG1vbWVudCwgc2VlbXMgbGlrZSB3ZSBoYW5kbGUgYWxsIG9mIHRoaXMgd2l0aCBjc3MsXG4gICAgICAgICAgLy8gYW5kIGRvbid0IG5lZWQgdG8gZml0ZSB0aGUgcGhvdG8gYW5kIHNldCBpdCdzIGNvbnRhaW5lcidzIHdpZHRoIHJlc3BlY3RpdmVseVxuXG4gICAgICAgICAgLy8gdGhpcy5waG90by5maXRCeUhlaWdodCh0aGlzLmVsKVxuICAgICAgICAgIC8vIHRoaXMuZWwuc3R5bGUud2lkdGggPSB0aGlzLnBob3RvLmRpbXMud2lkdGggKyAncHgnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5waG90by5maXRCeUJvdGhTaWRlcyh0aGlzLmNvbnRlbnRFbClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucGhvdG8uc2hvdygpXG4gICAgICAgIC8vIGltZy5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXG4gICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICBQcm9taXNlLnJlamVjdChlcnIpXG4gICAgICB9XG5cbiAgICB9KVxuICAgIC8vIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgLy8gICB0aHJvdyBlcnJcbiAgICAvLyB9KVxuICB9XG59XG5cbmNsYXNzIERlY2sge1xuICBjb25zdHJ1Y3RvcihpbWFnZVVybHMsIG9wdGlvbnMpIHtcbiAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLmVsLmNsYXNzTmFtZSA9ICdnYWxsZXJ5LWRlY2snXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG5cbiAgICB0aGlzLmJyZWFrcG9pbnQgPSBvcHRpb25zLmJyZWFrcG9pbnRcbiAgICB0aGlzLnBvc2l0aW9uID0gMFxuICAgIHRoaXMub2Zmc2V0ID0gMFxuXG4gICAgdGhpcy5sb2FkZWQgPSBmYWxzZVxuICAgIHRoaXMuaXRlbXNMb2FkZWQgPSAwXG4gICAgdGhpcy5pdGVtcyA9IHRoaXMuaW5pdEl0ZW1zKGltYWdlVXJscylcbiAgICB0aGlzLmFwcGVuZEl0ZW1zKClcblxuICAgIC8vIGluaXRpYWxpemUgdGhlIHRyYW5zZm9ybSBtYXRyaXggc3R5bGluZ1xuICAgIHRoaXMuZWwuc3R5bGUudHJhbnNmb3JtID0gJ21hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKSdcblxuICAgIC8vIHdpbmRvdy5vbigncmVzaXplJywgKGV2KSA9PiB7XG4gICAgLy8gICBpZiAoZ2V0Vmlld3BvcnRXaWR0aCgpIDwgdGhpcy5icmVha3BvaW50KSB7XG4gICAgLy9cbiAgICAvLyAgIH1cbiAgICAvLyB9KVxuICB9XG5cbiAgLypcbiAgY2FsY3VsYXRlRGVja09mZnNldChpbmRleCkge1xuICAgIGlmIChnZXRWaWV3cG9ydFdpZHRoKCkgPCB0aGlzLmJyZWFrcG9pbnQpIHtcbiAgICAgIGNvbnN0IGl0ZW1PZmZzZXQgPSB0aGlzLml0ZW1zW2luZGV4XS5nZXRPZmZzZXQoKVxuICAgICAgY29uc3QgZGVja09mZnNldE5ldyA9IC1pdGVtT2Zmc2V0XG5cbiAgICAgIHJldHVybiBkZWNrT2Zmc2V0TmV3XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGl0ZW1PZmZzZXQgPSB0aGlzLml0ZW1zW2luZGV4XS5nZXRNaWRwb2ludCgpXG5cbiAgICAgIGNvbnN0IGdhbGxlcnlNaWRwb2ludCA9IHRoaXMub3B0aW9ucy5nZXRHYWxsZXJ5Vmlld3BvcnRXaWR0aCgpIC8gMiAvLyAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLyAyXG4gICAgICBjb25zdCBkZWNrT2Zmc2V0TmV3ID0gLWl0ZW1PZmZzZXQgKyBnYWxsZXJ5TWlkcG9pbnRcblxuICAgICAgLy8gY29uc29sZS5sb2coJ0RlY2suY2FsY3VsYXRlRGVja09mZnNldCwgaW5kZXgnLCBpbmRleClcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdEZWNrLmNhbGN1bGF0ZURlY2tPZmZzZXQsIGl0ZW1zW2luZGV4XScsIHRoaXMuaXRlbXNbaW5kZXhdKVxuICAgICAgLy8gY29uc29sZS5sb2coJ0RlY2suY2FsY3VsYXRlRGVja09mZnNldCwgaXRlbXNbaW5kZXhdJywgdGhpcy5pdGVtc1tpbmRleF0uZ2V0TWlkcG9pbnQoKSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdEZWNrLmNhbGN1bGF0ZURlY2tPZmZzZXQsIGl0ZW1PZmZzZXQnLCBpdGVtT2Zmc2V0KVxuICAgICAgLy8gY29uc29sZS5sb2coJ0RlY2suY2FsY3VsYXRlRGVja09mZnNldCwgZGVja09mZnNldE5ldycsIGRlY2tPZmZzZXROZXcpXG5cbiAgICAgIHJldHVybiBkZWNrT2Zmc2V0TmV3XG4gICAgfVxuICB9XG4gICovXG5cbiAgY2FsY3VsYXRlRGVja09mZnNldENlbnRlcmVkKGluZGV4KSB7XG4gICAgY29uc3QgaXRlbU9mZnNldCA9IHRoaXMuaXRlbXNbaW5kZXhdLmdldE1pZHBvaW50KClcblxuICAgIGNvbnN0IGdhbGxlcnlNaWRwb2ludCA9IHRoaXMub3B0aW9ucy5nZXRHYWxsZXJ5Vmlld3BvcnRXaWR0aCgpIC8gMiAvLyAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLyAyXG4gICAgY29uc3QgZGVja09mZnNldE5ldyA9IC1pdGVtT2Zmc2V0ICsgZ2FsbGVyeU1pZHBvaW50XG5cbiAgICAvLyBjb25zb2xlLmxvZygnRGVjay5jYWxjdWxhdGVEZWNrT2Zmc2V0LCBpbmRleCcsIGluZGV4KVxuICAgIC8vIGNvbnNvbGUubG9nKCdEZWNrLmNhbGN1bGF0ZURlY2tPZmZzZXQsIGl0ZW1zW2luZGV4XScsIHRoaXMuaXRlbXNbaW5kZXhdKVxuICAgIC8vIGNvbnNvbGUubG9nKCdEZWNrLmNhbGN1bGF0ZURlY2tPZmZzZXQsIGl0ZW1zW2luZGV4XScsIHRoaXMuaXRlbXNbaW5kZXhdLmdldE1pZHBvaW50KCkpXG4gICAgLy8gY29uc29sZS5sb2coJ0RlY2suY2FsY3VsYXRlRGVja09mZnNldCwgaXRlbU9mZnNldCcsIGl0ZW1PZmZzZXQpXG4gICAgLy8gY29uc29sZS5sb2coJ0RlY2suY2FsY3VsYXRlRGVja09mZnNldCwgZGVja09mZnNldE5ldycsIGRlY2tPZmZzZXROZXcpXG5cbiAgICByZXR1cm4gZGVja09mZnNldE5ld1xuICB9XG5cbiAgY2FsY3VsYXRlRGVja09mZnNldChpbmRleCkge1xuICAgIGNvbnN0IGl0ZW1PZmZzZXQgPSB0aGlzLml0ZW1zW2luZGV4XS5nZXRPZmZzZXQoKVxuICAgIGNvbnN0IGRlY2tPZmZzZXROZXcgPSAtaXRlbU9mZnNldFxuXG4gICAgcmV0dXJuIGRlY2tPZmZzZXROZXdcbiAgfVxuXG4gIC8qXG4gIC8vIFRPRE86XG4gIGdldEFjdHVhbFBvc2l0aW9uV2hpbGVUcmFuc2l0aW9uaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgKyB3aW5kb3cucGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbClbJ21hcmdpbi1sZWZ0J10pXG4gICAgLSB0aGlzLm9wdGlvbnMuZ2V0R2FsbGVyeVBvcygpLmxlZnRcbiAgICArIHdpbmRvdy5zY3JvbGxYXG4gIH1cbiAgKi9cblxuICAvKipcbiAgQHBhcmFtIHtib29sZWFufSBjZW50ZXJlZCBpZiB0cnVlIC0gY2VudGVycyB0aGUgaXRlbSwgaWYgZmFsc3kgLSBkb2Vzbid0IGNlbnRlclxuICAqL1xuICBnb1RvSXRlbShpbmRleCwgY2VudGVyZWQpIHtcblxuICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPiB0aGlzLml0ZW1zLmxlbmd0aC0xKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjYW4ndCBnbyB0byB1bmV4aXN0aW5nIGl0ZW0gYXQgXCIrIGluZGV4KVxuICAgIH1cblxuICAgIGlmICghdGhpcy5sb2FkZWQpIHtcbiAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIlwiKVxuICAgICAgLy8gVE9ETzogbWFrZSBpdCBzbyBpdCBjYW4gZ28gdG8gdGhlIGl0ZW1zIHRoYXQgYXJlIGFscmVhZHkgbG9hZGVkLCBhbmRcbiAgICAgIC8vIHRoZW4sIGFkanVzdCB0aGUgcG9zaXRpb24gb2YgdGhlIGRlY2sgc28gaXQgc3RheXMgb24gdGhlIGl0ZW0gd2UndmUgZ29uZSB0b1xuICAgICAgLy8gYXMgb3RoZXIgaXRlbXMgbG9hZCAoaWYgbmVjZXNzYXJ5KS5cbiAgICAgIC8vIFRoaXMgY291bGQgYmUgaW1wYWN0ZnVsIGlmIHRoZSBkZWNrIGlzIHJpZ2h0IGF0IHRoZSB0b3Agb2YgdGhlIHBhZ2UgYW5kIHVzZXJcbiAgICAgIC8vIHdhbnRzIHRvIGltbWVkaWF0ZWx5IGJlIGFibGUgdG8gaW50ZXJhY3Qgd2l0aCB0aGluZ3MuXG4gICAgICAvLyBjb25zb2xlLmxvZyhcInBob3RvcyBpbiB0aGUgZGVjayBoYXZlbid0IGxvYWRlZCB5ZXRcIik7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgY29uc3QgZGVja1Bvc2l0aW9uTmV3ID0gY2VudGVyZWQgPyB0aGlzLmNhbGN1bGF0ZURlY2tPZmZzZXRDZW50ZXJlZChpbmRleCkgOiB0aGlzLmNhbGN1bGF0ZURlY2tPZmZzZXQoaW5kZXgpXG5cbiAgICAvLyBUT0RPOlxuICAgIC8vIHRoaXMub2Zmc2V0ID0gdGhpcy50cmFuc2l0aW9uaW5nXG4gICAgLy8gICA/IGRlY2tQb3NpdGlvbk5ldyAtIHRoaXMuZ2V0QWN0dWFsUG9zaXRpb25XaGlsZVRyYW5zaXRpb25pbmcoKVxuICAgIC8vICAgOiBkZWNrUG9zaXRpb25OZXcgLSB0aGlzLnBvc2l0aW9uXG5cbiAgICB0aGlzLm9mZnNldCA9IGRlY2tQb3NpdGlvbk5ldyAtIHRoaXMucG9zaXRpb25cbiAgICB0aGlzLnBvc2l0aW9uID0gZGVja1Bvc2l0aW9uTmV3XG5cbiAgICBpZiAodGhpcy50cmFuc2l0aW9uaW5nKSB7XG4gICAgICB0aGlzLmVsLnN0eWxlLnRyYW5zZm9ybSA9IHRoaXMubWFrZU1hdHJpeCh0aGlzLm9mZnNldClcbiAgICB9IGVsc2Uge1xuXG4gICAgICBmdW5jdGlvbiB0cmFuc2l0aW9uZW5kQ2IoKSB7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbmVuZENiKClcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdHJhbnNpdGlvbmVuZENiKVxuICAgICAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgICAgfVxuXG4gICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24nKVxuXG4gICAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSB0cnVlXG4gICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0cmFuc2l0aW9uZW5kQ2IuYmluZCh0aGlzKSlcbiAgICAgIHRoaXMuZWwuc3R5bGUudHJhbnNmb3JtID0gdGhpcy5tYWtlTWF0cml4KHRoaXMub2Zmc2V0KVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLml0ZW1zW2luZGV4XVxuXG4gIH1cblxuICBtYWtlTWF0cml4KHgpIHtcbiAgICByZXR1cm4gJ21hdHJpeCgxLCAwLCAwLCAxLCAnKyB4ICsnLCAwKSdcbiAgfVxuXG4gIHRyYW5zaXRpb25lbmRDYigpIHtcbiAgICB0aGlzLmVsLnN0eWxlLmxlZnQgPSB0aGlzLnBvc2l0aW9uICsncHgnXG5cbiAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3RyYW5zaXRpb24nKVxuICAgIHRoaXMuZWwuc3R5bGUudHJhbnNmb3JtID0gJ21hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKSdcbiAgfVxuXG4gIGluaXRJdGVtcyh1cmxzKSB7XG4gICAgcmV0dXJuIHVybHMubWFwKCh1cmwsIGkpID0+IHtcbiAgICAgIHJldHVybiBuZXcgRGVja0l0ZW0odXJsLCBpLCB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IHRoaXMuYnJlYWtwb2ludCxcbiAgICAgICAgcGhvdG9Mb2FkQ2I6ICgpID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInBob3RvTG9hZENiLCBkZWNrLml0ZW1zTG9hZGVkOiBcIiwgdGhpcy5pdGVtc0xvYWRlZCk7XG4gICAgICAgICAgdGhpcy5pdGVtc0xvYWRlZCsrXG5cbiAgICAgICAgICBpZiAodGhpcy5pdGVtc0xvYWRlZCA9PSB0aGlzLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJwaG90b0xvYWRDYiwgZGVjay5pdGVtc0xvYWRlZCA9PSBkZWNrLml0ZW1zLmxlbmd0aCwgZGVjay5pdGVtc0xvYWRlZDogXCIsIHRoaXMuaXRlbXNMb2FkZWQpO1xuICAgICAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubG9hZENiKClcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGdldEdhbGxlcnlWaWV3cG9ydFdpZHRoOiB0aGlzLm9wdGlvbnMuZ2V0R2FsbGVyeVZpZXdwb3J0V2lkdGgsXG4gICAgICAgIGdldERlY2tQb3NpdGlvbjogKCkgPT4ge3JldHVybiB0aGlzLnBvc2l0aW9ufVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgYXBwZW5kSXRlbShpdGVtKSB7XG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZChpdGVtLmVsKVxuICB9XG5cbiAgYXBwZW5kSXRlbXMoKSB7XG4gICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgdGhpcy5hcHBlbmRJdGVtKGl0ZW0pXG4gICAgfSlcbiAgfVxufVxuXG5jbGFzcyBHYWxsZXJ5IHtcbiAgY29uc3RydWN0b3IocGhvdG9VcmxzLCBvcHRpb25zKSB7XG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy5lbC5jbGFzc05hbWUgPSAnZ2FsbGVyeSdcblxuXG4gICAgdGhpcy5kZWNrID0gbmV3IERlY2socGhvdG9VcmxzLCB7XG4gICAgICBnZXRHYWxsZXJ5Vmlld3BvcnRXaWR0aDogKCkgPT4geyByZXR1cm4gdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCB9LFxuICAgICAgbG9hZENiOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IHRoaXMuZGVjay5nb1RvSXRlbSgwLCBmYWxzZSlcbiAgICAgICAgLy8gdGhpcy5nb1RvTmV4dC5jYWxsKHRoaXMpXG4gICAgICB9LFxuICAgICAgYnJlYWtwb2ludDogb3B0aW9ucy5icmVha3BvaW50XG4gICAgfSlcblxuICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5kZWNrLmVsKVxuXG5cbiAgICAvLyBjb25zdCBhY3RpdmVJdGVtID0gdGhpcy5kZWNrLmdvVG9JdGVtKDApXG4gICAgLy8gdGhpcy5hY3RpdmVJdGVtID0gYWN0aXZlSXRlbVxuICB9XG5cbiAgZ29Ub05leHQoKSB7XG4gICAgaWYgKCF0aGlzLmRlY2subG9hZGVkKSByZXR1cm5cbiAgICBpZiAodGhpcy5hY3RpdmVJdGVtLmluZGV4ID09IHRoaXMuZGVjay5pdGVtcy5sZW5ndGgtMSkgcmV0dXJuXG5cbiAgICB0aGlzLmFjdGl2ZUl0ZW0gPSB0aGlzLmRlY2suZ29Ub0l0ZW0odGhpcy5hY3RpdmVJdGVtLmluZGV4KzEsIHRydWUpXG4gIH1cblxuICBnb1RvUHJldmlvdXMoKSB7XG4gICAgaWYgKCF0aGlzLmRlY2subG9hZGVkKSByZXR1cm5cbiAgICBpZiAodGhpcy5hY3RpdmVJdGVtLmluZGV4ID09IDApIHJldHVyblxuXG4gICAgdGhpcy5hY3RpdmVJdGVtID0gdGhpcy5kZWNrLmdvVG9JdGVtKHRoaXMuYWN0aXZlSXRlbS5pbmRleC0xLCB0cnVlKVxuICB9XG4gIC8qXG4gIC8vIFRPRE86XG4gIC8vIGdldCB0aGUgYWN0dWFsIHBvc2l0aW9uIG9mIHRoZSBlbCwgcmVsYXRpdmUgdG8gYm9keS5cbiAgZ2V0QWJzUG9zaXRpb24oKSB7XG4gICAgdmFyIHBvc2l0aW9uID0gMFxuXG4gICAgLy8gY29uc3QgY29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwpXG5cbiAgICAgIHBvc2l0aW9uID0gdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0XG4gICAgICAgICsgd2luZG93LnBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwpWydtYXJnaW4tbGVmdCddKVxuXG4gICAgICByZXR1cm4gcG9zaXRpb25cbiAgfVxuICAqL1xufVxuXG5leHBvcnQge0dhbGxlcnl9XG4iLCIvLyBpbXBvcnQge3NsaWRlfSBmcm9tICcuL3NsaWRlLmpzJ1xuaW1wb3J0IHtnZXRCYWNrZ3JvdW5kSW1hZ2VVcmx9IGZyb20gJy4vbGliLmpzJ1xuaW1wb3J0IHtHYWxsZXJ5fSBmcm9tICcuL2dhbGxlcnkuanMnXG5pbXBvcnQge0xhcmdlVmlldywgRW5sYXJnYWJsZX0gZnJvbSAnLi9sYXJnZS12aWV3LmpzJ1xuXG5jbGFzcyBTaG93Y2FzZUltYWdlIGV4dGVuZHMgRW5sYXJnYWJsZSB7XG4gIGNvbnN0cnVjdG9yKGVsKSB7XG4gICAgc3VwZXIoZWwsIGdldEJhY2tncm91bmRJbWFnZVVybChlbCkpXG4gICAgLy8gdGhpcy5pbWFnZSA9IG5ldyBFbmxhcmdhYmxlKClcbiAgfVxufVxuXG5mdW5jdGlvbiBub2RlTGlzdFRvQXJyYXkoc2VsZWN0b3IpIHtcbiAgdmFyIGVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG4gIGVscyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGVscywgMClcbiAgcmV0dXJuIGVsc1xufVxuXG5mdW5jdGlvbiBpbml0RW5sYXJnYWJsZXMoc2VsZWN0b3IpIHtcbiAgLy8gdmFyIGVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG4gIC8vIGVscyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGVscywgMClcblxuICAvLyBjb25zb2xlLmxvZyhlbHMpO1xuICB2YXIgZWxzID0gbm9kZUxpc3RUb0FycmF5KHNlbGVjdG9yKVxuXG4gIGVscy5mb3JFYWNoKGVsID0+IHtuZXcgU2hvd2Nhc2VJbWFnZShlbCl9KVxufVxuXG5mdW5jdGlvbiBpbml0R2FsbGVyeShwaG90b1VybHMpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGxlcnktY29udGFpbmVyJylcblxuICBjb25zdCBnYWxsZXJ5ID0gbmV3IEdhbGxlcnkocGhvdG9VcmxzLCB7YnJlYWtwb2ludDogODAwfSlcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdhbGxlcnkuZWwpXG5cbiAgY29uc3QgYXJyb3dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGxlcnktd3JhcCcpXG4gIGFycm93cy5xdWVyeVNlbGVjdG9yKCcuaWNvbiNid2QnKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdhbGxlcnkuZ29Ub1ByZXZpb3VzLmJpbmQoZ2FsbGVyeSkpXG4gIGFycm93cy5xdWVyeVNlbGVjdG9yKCcuaWNvbiNmd2QnKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdhbGxlcnkuZ29Ub05leHQuYmluZChnYWxsZXJ5KSlcblxuICBjb25zb2xlLmxvZygnZ2FsbGVyeScsIGdhbGxlcnkpXG59XG5cbmZ1bmN0aW9uIGluaXRMYW5nU3dpdGNoKCkge1xuXG4gIGNvbnN0IGNvbnRlbnRFbiA9IG5vZGVMaXN0VG9BcnJheSgnLnRleHQuZW4nKVxuICBjb25zdCBjb250ZW50VWEgPSBub2RlTGlzdFRvQXJyYXkoJy50ZXh0LnVhJylcblxuICBmdW5jdGlvbiBzd2l0Y2hUb0VuKCkge1xuICAgIGNvbnRlbnRVYS5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5hZGQoJ25vbmVkJykpXG4gICAgY29udGVudEVuLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnbm9uZWQnKSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHN3aXRjaFRvVWEoKSB7XG4gICAgY29udGVudEVuLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LmFkZCgnbm9uZWQnKSlcbiAgICBjb250ZW50VWEuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdub25lZCcpKVxuICB9XG5cbiAgY29uc3QgZW5Td2l0Y2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFuZy1zd2l0Y2ggI2VuJyk7XG4gIGNvbnN0IHVhU3dpdGNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhbmctc3dpdGNoICN1YScpO1xuXG4gIGVuU3dpdGNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGVuU3dpdGNoLmNsYXNzTGlzdC5hZGQoJ25vbmVkJylcbiAgICB1YVN3aXRjaC5jbGFzc0xpc3QucmVtb3ZlKCdub25lZCcpXG5cbiAgICBzd2l0Y2hUb0VuKClcbiAgfSlcblxuICB1YVN3aXRjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB1YVN3aXRjaC5jbGFzc0xpc3QuYWRkKCdub25lZCcpXG4gICAgZW5Td2l0Y2guY2xhc3NMaXN0LnJlbW92ZSgnbm9uZWQnKVxuXG4gICAgc3dpdGNoVG9VYSgpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGluaXROYXZBbmltYXRpb24obmF2QnJlYWtwb2ludCkge1xuICBjb25zdCBsb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ28gLmxvZ28taXRzZWxmJylcbiAgY29uc3QgbGFuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvIC5sYW5nLXN3aXRjaCcpXG5cbiAgdmFyIGVubGFyZ2VkID0gdHJ1ZVxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKGV2KSA9PiB7XG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gbmF2QnJlYWtwb2ludCAmJiBlbmxhcmdlZCkge1xuICAgICAgbG9nby5jbGFzc0xpc3QucmVtb3ZlKCdsb2dvLWl0c2VsZl9sYXJnZXInKVxuICAgICAgbGFuZy5jbGFzc0xpc3QucmVtb3ZlKCdsYW5nLXN3aXRjaF9sYXJnZXInKVxuICAgICAgZW5sYXJnZWQgPSBmYWxzZVxuXG4gICAgfSBlbHNlIGlmICh3aW5kb3cuc2Nyb2xsWSA8IG5hdkJyZWFrcG9pbnQgJiYgIWVubGFyZ2VkKSB7XG4gICAgICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28taXRzZWxmX2xhcmdlcicpXG4gICAgICBsYW5nLmNsYXNzTGlzdC5hZGQoJ2xhbmctc3dpdGNoX2xhcmdlcicpXG4gICAgICBlbmxhcmdlZCA9IHRydWVcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGJvb3QoZ2FsbGVyeVVybHMpIHtcbiAgaW5pdExhbmdTd2l0Y2goKVxuXG4gIGNvbnN0IGxhcmdlVmlld1dyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFyZ2Utdmlld193cmFwJylcbiAgTGFyZ2VWaWV3LmluaXQoe1xuICAgIHRyYW5zaXRpb246ICdvcGFjaXR5IDAuNHMnLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgd3JhcDogbGFyZ2VWaWV3V3JhcFxuICB9KVxuXG4gIGxhcmdlVmlld1dyYXAuY2xhc3NMaXN0LnJlbW92ZSgnbm9uZWQnKVxuXG4gIGxhcmdlVmlld1dyYXAuYXBwZW5kQ2hpbGQoTGFyZ2VWaWV3LmNvbnRhaW5lcilcbiAgbGFyZ2VWaWV3V3JhcC5xdWVyeVNlbGVjdG9yKCcuaWNvbiNjcm9zcycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIExhcmdlVmlldy5oaWRlKClcbiAgfSlcblxuICBjb25zb2xlLmxvZygnTGFyZ2VWaWV3JywgTGFyZ2VWaWV3KVxuXG4gIGluaXRHYWxsZXJ5KGdhbGxlcnlVcmxzKVxuXG4gIGluaXRFbmxhcmdhYmxlcygnI291dCAuc2hvd2Nhc2UgLmltYWdlLXRodW1iJylcbiAgaW5pdEVubGFyZ2FibGVzKCcjc3RhZmYgLm1lbWJlciAuYXZhdGFyJylcbiAgbmV3IFNob3djYXNlSW1hZ2UoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3QgLnN0cmVldC12aWV3JykpXG4gIC8vIGVscy5mb3JFYWNoKGVsID0+IHtuZXcgU2hvd2Nhc2VJbWFnZShlbCl9KVxuXG4gIC8vIGluaXRTaG93Y2FzZXMoKVxuICBpbml0TmF2QW5pbWF0aW9uKDI1KVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgYm9vdChbXG4gICAgJ21lZGlhL2luLzE0OTAyODQxXzEyNTkxMTI3Mjc0ODM5MTJfMzI4NDMxNTEwNjMxODk4MTU3NF9vLmpwZycsXG4gICAgJ21lZGlhL2luLzE5ODc1MjcyXzEwMTAwNDgyMjk2Mjg2NzA2XzM4ODMzMDYyNzU1NDYxNjY2NzZfbi5qcGcnLFxuICAgICdtZWRpYS9pbi8zYi5qcGcnLFxuICAgICdtZWRpYS9pbi82YS5qcGcnLFxuICAgICdtZWRpYS9pbi9EU0NfMDEyNi5qcGcnLFxuICAgICdtZWRpYS9pbi9EU0NfMDEyOC5KUEcnLFxuICAgICdtZWRpYS9pbi9EU0NfMDM1MC5KUEcnXG4gIF0pXG59KVxuIiwiaW1wb3J0IHtnZXRCYWNrZ3JvdW5kSW1hZ2VVcmwsIGdldFZpZXdwb3J0V2lkdGgsIGdldFZpZXdwb3J0SGVpZ2h0fSBmcm9tICcuL2xpYi5qcydcbmltcG9ydCB7UGhvdG99IGZyb20gJy4vcGhvdG8uanMnXG5cbmNvbnN0IExhcmdlVmlldyA9IHtcbiAgaW5pdChvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgICBpZiAob3B0aW9ucy50cmFuc2l0aW9uKSB0aGlzLnRyYW5zaXRpb25TZXR1cCA9IG9wdGlvbnMudHJhbnNpdGlvblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICAvLyBzYW1lIGFzIGluIHRoZSBzY3NzXG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICdsYXJnZS12aWV3X2NvbnRhaW5lcidcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lclxuXG4gICAgLy8gaWYgKG9wdGlvbnMuY2xpY2tDYilcbiAgICAvLyB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHt0aGlzLmhpZGUoKX0pXG4gICAgdGhpcy53cmFwID0gb3B0aW9ucy53cmFwIHx8IHRoaXMuY29udGFpbmVyXG5cbiAgICB0aGlzLndyYXAuc3R5bGUub3BhY2l0eSA9ICcwJ1xuICAgIC8vIHRoaXMud3JhcC5jbGFzc0xpc3QuYWRkKCd0cmFuc3BhcmVudCcpXG5cbiAgICB0aGlzLndyYXAuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIC8vIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25vbmVkJylcbiAgICB0aGlzLmhpZGRlbiA9IHRydWVcbiAgICAvLyB0aGlzLnBob3RvID0gbmV3IFBob3RvKClcbiAgfSxcblxuICBzZXRQaG90byh1cmwpIHtcbiAgICBjb25zdCBwaG90byA9IG5ldyBQaG90byh1cmwpXG4gICAgLy8gdGhpcy5waG90byA9IG5ldyBQaG90byh1cmwpXG5cbiAgICByZXR1cm4gcGhvdG8ubG9hZCgpXG4gICAgLy8gLnRoZW4oKVxuICAgIC50aGVuKChwaG90bykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHRoaXMuaGlkZGVuKSB7XG4gICAgICAgICAgUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCd0aGUgbGFyZ2UtdmlldyBjb250YWluZXIgbXVzdCBiZSBkaXNwbGF5ZWQgYmVmb3JlIHdlIGNhbiBmaXQgaW4gdGhlIHBob3RvJykpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gdGhpcy5waG90by5oaWRlKGZhbHNlKVxuICAgICAgICAgIHBob3RvLmhpZGUoZmFsc2UpXG4gICAgICAgICAgaWYgKHRoaXMucGhvdG8pIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlcGxhY2VDaGlsZChwaG90by5lbCwgdGhpcy5waG90by5lbClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQocGhvdG8uZWwpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcGhvdG8uZml0QnlCb3RoU2lkZXModGhpcy5jb250YWluZXIpXG4gICAgICAgICAgcGhvdG8uc2hvdyhmYWxzZSlcbiAgICAgICAgICB0aGlzLnBob3RvID0gcGhvdG9cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgUHJvbWlzZS5yZWplY3QoZXJyKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgLypcbiAgdHJhbnNpdGlvbmVuZENiKGNiKSB7XG4gICAgY2IoKVxuICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLnRyYW5zaXRpb25lbmRDYilcbiAgfVxuICAqL1xuXG4gIC8qKlxuICAgIEBkZXNjcmlwdGlvbiBJZiB1cmwgaXMgZ2l2ZSwgdGhlbiwgYWZ0ZXIgc2hvdyB0cmFuc2l0aW9uIGhhcyBlbmRlZCwgaXQgbG9hZHMgdGhlXG4gICAgbmV3IHBob3RvXG4gICovXG4gIHNob3codXJsKSB7XG4gICAgLy8gaWYgKHRoaXMuc2hvd1BlbmRpbmcpIHtcbiAgICAvLyAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5zaG93VGltZW91dElkKVxuICAgIC8vICAgLy8gdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigpXG4gICAgLy9cbiAgICAvLyAgIC8vIHNob3VsZCByZW1vdmVFdmVudExpc3RlbmVyIG9mIGl0c2VsZlxuICAgIC8vICAgdGhpcy50cmFuc2l0aW9uZW5kQ2IoKVxuICAgIC8vXG4gICAgLy9cbiAgICAvLyB9XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgICAgIGZ1bmN0aW9uIHRyYW5zaXRpb25lbmRDYigpIHtcbiAgICAgICAgICBzZWxmLndyYXAucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRyYW5zaXRpb25lbmRDYilcbiAgICAgICAgICBzZWxmLnRyYW5zaXRpb25PZmYoKVxuICAgICAgICAgIC8vIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3RyYW5zaXRpb24nKVxuXG4gICAgICAgICAgc2VsZi5oaWRkZW4gPSBmYWxzZVxuXG4gICAgICAgICAgY29uc29sZS5sb2coJ0xhcmdlVmlldy5zaG93LCB0cmFuc2l0aW9uZW5kQ2InLCBzZWxmKVxuICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy53cmFwLnN0eWxlLmRpc3BsYXkgPSB0aGlzLm9wdGlvbnMuZGlzcGxheSB8fCAnZmxleCdcbiAgICAgICAgLy8gdGhpcy53cmFwLmNsYXNzTGlzdC5yZW1vdmUoJ25vbmVkJylcbiAgICAgICAgdGhpcy53cmFwLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0cmFuc2l0aW9uZW5kQ2IpXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbk9uKClcblxuICAgICAgICB0aGlzLnNob3dQZW5kaW5nID0gdHJ1ZVxuICAgICAgICAvLyB0aGlzIGlzIG51dHNcbiAgICAgICAgdGhpcy5zaG93VGltZW91dElkID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2hvd1BlbmRpbmcgPSBmYWxzZVxuICAgICAgICAgIHRoaXMud3JhcC5zdHlsZS5vcGFjaXR5ID0gJzEnXG4gICAgICAgICAgLy8gdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbicpXG4gICAgICAgIH0sIDUwKVxuXG4gICAgICAgIC8vIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NvbGlkJylcbiAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgIHJlamVjdChlcnIpXG4gICAgICB9XG4gICAgfSlcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICBpZiAodXJsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldFBob3RvKHVybClcbiAgICAgIH1cbiAgICB9LCAoZXJyKSA9PiB7XG4gICAgICBQcm9taXNlLnJlamVjdChlcnIpXG4gICAgfSlcbiAgfSxcblxuICBoaWRlKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgZnVuY3Rpb24gdHJhbnNpdGlvbmVuZENiKCkge1xuICAgICAgICAgIHNlbGYud3JhcC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdHJhbnNpdGlvbmVuZENiKVxuICAgICAgICAgIHNlbGYudHJhbnNpdGlvbk9mZigpXG4gICAgICAgICAgLy8gc2VsZi53cmFwLmNsYXNzTGlzdC5yZW1vdmUoJ3RyYW5zaXRpb24nKVxuICAgICAgICAgIHNlbGYud3JhcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgc2VsZi5waG90by5oaWRlKGZhbHNlKVxuICAgICAgICAgIC8vIHNlbGYuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25vbmVkJylcblxuICAgICAgICAgIHNlbGYuaGlkZGVuID0gdHJ1ZVxuICAgICAgICAgIGNvbnNvbGUubG9nKCdMYXJnZVZpZXcuaGlkZSwgdHJhbnNpdGlvbmVuZENiJywgTGFyZ2VWaWV3KTtcbiAgICAgICAgICByZXNvbHZlKClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMud3JhcC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdHJhbnNpdGlvbmVuZENiKVxuICAgICAgICB0aGlzLnRyYW5zaXRpb25PbigpXG4gICAgICAgIC8vIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24nKVxuXG4gICAgICAgIHRoaXMud3JhcC5zdHlsZS5vcGFjaXR5ID0gJzAnXG4gICAgICAgIC8vIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3NvbGlkJylcbiAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgIHJlamVjdChlcnIpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICB0cmFuc2l0aW9uT2ZmKCkge1xuICAgIHRoaXMud3JhcC5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnXG4gIH0sXG5cbiAgdHJhbnNpdGlvbk9uKCkge1xuICAgIHRoaXMud3JhcC5zdHlsZS50cmFuc2l0aW9uID0gdGhpcy50cmFuc2l0aW9uU2V0dXBcbiAgfVxufVxuXG4vLyBjb25zb2xlLmxvZygnTGFyZ2VWaWV3JywgTGFyZ2VWaWV3KVxuXG5jbGFzcyBFbmxhcmdhYmxlIHtcbiAgY29uc3RydWN0b3IoZWwsIHVybCkge1xuICAgIHRoaXMuZWwgPSBlbFxuICAgIHRoaXMudXJsID0gdXJsXG5cbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0NiLmJpbmQodGhpcykpXG4gIH1cblxuICBlbmxhcmdlKHVybCkge1xuICAgIExhcmdlVmlldy5zaG93KHVybClcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnRW5sYXJnYWJsZS5lbmxhcmdlLCBMYXJnZVZpZXcgc2hvd24nKVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfSlcblxuICB9XG5cbiAgY2xpY2tDYigpIHtcbiAgICBjb25zb2xlLmxvZygnRW5sYXJnYWJsZS5jbGlja0NiLCB0aGlzOiAnLCB0aGlzKTtcbiAgICB0aGlzLmVubGFyZ2UodGhpcy51cmwpXG4gIH1cbn1cblxuLypcbmZ1bmN0aW9uIGVubGFyZ2VTaG93Y2FzZSgpIHtcbiAgY29uc3QgaW1hZ2VVcmwgPSBnZXRCYWNrZ3JvdW5kSW1hZ2VVcmwodGhpcylcbiAgTGFyZ2VWaWV3LnNob3coaW1hZ2VVcmwpXG59XG5cbmZ1bmN0aW9uIGdldEVubGFyZ2FibGVFbGVtZW50cygpIHtcbiAgdmFyIGVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvdXQgLnNob3djYXNlIC5pbWFnZS10aHVtYicpXG4gIGVscyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGVscywgMClcblxuICBlbHMuZm9yRWFjaChlbCA9PiB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlbmxhcmdlU2hvd2Nhc2VDYilcbiAgfSlcbn1cbiovXG5cbmV4cG9ydCB7TGFyZ2VWaWV3LCBFbmxhcmdhYmxlfVxuIiwiXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82OTQyNzg1L3dpbmRvdy1pbm5lcndpZHRoLXZzLWRvY3VtZW50LWRvY3VtZW50ZWxlbWVudC1jbGllbnR3aWR0aFxuLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTU2Mzg4I2MxNFxuZnVuY3Rpb24gZ2V0Vmlld3BvcnRIZWlnaHQoKSB7XG4gIC8vIGdldEVsZW1lbnRzQnlUYWdOYW1lLCBpZiBJJ20gbm90IG1pc3Rha2VuIHJldHVybnMgYSBsaXZlbGlzdCAoaGVsbCBrbm93cyB3aGF0IHRoYXQgaXMsIGJ1dCBpdCdzXG4gIC8vIHVwZGF0ZWQgbGl2ZSAtIGFzIGRvbSBnZXRzIGNoYW5nZWQpLiBJJ20gbm90IHN1cmUgYWJvdXQgdXNpbmcgaXQsIGl0IGJlaGF2ZWQgbWlzdGVyaW91c2x5IG9uY2UuLi5cbiAgLy8gQnV0LCBxdWVyeVNlbGVjdG9yIGlzIG5vdCBzbyBjb21wYXRpYmxlLlxuICAvLyBNYXliZTogKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLmNsaWVudFdpZHRoKVxuICByZXR1cm4gd2luZG93LmlubmVySGVpZ2h0ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgP1xuICAgIE1hdGgubWluKHdpbmRvdy5pbm5lckhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgOlxuICAgIHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgICB8fCAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uY2xpZW50SGVpZ2h0KTtcbn1cblxuZnVuY3Rpb24gZ2V0Vmlld3BvcnRXaWR0aCgpIHtcbiAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA/XG4gICAgTWF0aC5taW4od2luZG93LmlubmVyV2lkdGgsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCkgOlxuICAgIHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxuICAgICAgfHwgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLmNsaWVudFdpZHRoKTtcbn1cblxuXG4vKlxuXG5Ob2RlTGlzdCB0byBhcnJheVxuZnVuY3Rpb24gdG9BcnJheShvYmopIHtcbiAgdmFyIGFycmF5ID0gW107XG4gIC8vIGl0ZXJhdGUgYmFja3dhcmRzIGVuc3VyaW5nIHRoYXQgbGVuZ3RoIGlzIGFuIFVJbnQzMlxuICBmb3IgKHZhciBpID0gb2JqLmxlbmd0aCA+Pj4gMDsgaS0tOykge1xuICAgIGFycmF5W2ldID0gb2JqW2ldO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cbiovXG5cbmZ1bmN0aW9uIGdldEJhY2tncm91bmRJbWFnZVVybChlbCkge1xuICBjb25zdCBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpXG5cbiAgY29uc3QgcmVneCA9IG5ldyBSZWdFeHAoLy4qdXJsXFwoKD86XFxcIj8nPykoLispKD86LlxcJz9cXFwiPylcXCkuKi9nKVxuICBjb25zdCByZXN1bHQgPSByZWd4LmV4ZWMoY29tcHV0ZWRTdHlsZVsnYmFja2dyb3VuZC1pbWFnZSddKVxuXG4gIGlmIChyZXN1bHRbMV0pIHtcbiAgICByZXR1cm4gcmVzdWx0WzFdXG4gIH1cbn1cblxuZnVuY3Rpb24gbG9nRmFjdG9yeShlbnYpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBpZiAoIWVudi5kZXYpIHJldHVyblxuXG4gICAgY29uc29sZS50cmFjZSgpXG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgfVxufVxuXG5leHBvcnQge2dldFZpZXdwb3J0V2lkdGgsIGdldFZpZXdwb3J0SGVpZ2h0LCBnZXRCYWNrZ3JvdW5kSW1hZ2VVcmwsIGxvZ0ZhY3Rvcnl9XG4iLCJpbXBvcnQge2dldFZpZXdwb3J0V2lkdGgsIGdldFZpZXdwb3J0SGVpZ2h0fSBmcm9tICcuL2xpYi5qcydcblxuY2xhc3MgUGhvdG8ge1xuICBjb25zdHJ1Y3Rvcih1cmwpIHtcbiAgICB0aGlzLnVybCA9IHVybFxuICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICB9XG5cbiAgbG9hZCgpIHtcbiAgICAvLyBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuZWwub25sb2FkID0gKCkgPT4ge1xuICAgICAgICByZXNvbHZlKHRoaXMpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWwuc3JjID0gdGhpcy51cmxcbiAgICB9KVxuICB9XG5cbiAgY2FsY3VsYXRlRml0QnlCb3RoU2lkZXMoaW1nRGltcywgY29udGFpbmVyRGltcykge1xuICAgIC8vIGNvbnN0IGltZ0RpbXMgPSBpbWcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAvLyBjb25zdCBjb250YWluZXJEaW1zID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICBpbWdEaW1zLnJhdGlvID0gaW1nRGltcy53aWR0aCAvIGltZ0RpbXMuaGVpZ2h0XG4gICAgY29udGFpbmVyRGltcy5yYXRpbyA9IGNvbnRhaW5lckRpbXMud2lkdGggLyBjb250YWluZXJEaW1zLmhlaWdodFxuXG4gICAgLy8gaWYgd2lkZXIgdGhhbiBoaWdoZXJcbiAgICBpZiAoaW1nRGltcy5yYXRpbyA+PSBjb250YWluZXJEaW1zLnJhdGlvKSB7XG4gICAgICBjb25zdCBpbWdEaW1zTmV3ID0ge1xuICAgICAgICB3aWR0aDogY29udGFpbmVyRGltcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBjb250YWluZXJEaW1zLndpZHRoIC8gaW1nRGltcy5yYXRpb1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW1nRGltc05ld1xuXG4gICAgLy8gaWYgaGlnaGVyIHRoYW4gd2lkZXJcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW1nRGltc05ldyA9IHtcbiAgICAgICAgLy8gd2lkdGg6IGNvbnRhaW5lckRpbXMuaGVpZ2h0ICogaW1nRGltcy5yYXRpbyxcbiAgICAgICAgd2lkdGg6IGNvbnRhaW5lckRpbXMuaGVpZ2h0ICogaW1nRGltcy5yYXRpbyxcbiAgICAgICAgaGVpZ2h0OiBjb250YWluZXJEaW1zLmhlaWdodFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW1nRGltc05ld1xuICAgIH1cblxuICB9XG5cbiAgY2FsY3VsYXRlRml0QnlIZWlnaHQoaW1nRGltcywgY29udGFpbmVyRGltcykge1xuICAgIC8vIGNvbnN0IGltZ0RpbXMgPSBpbWcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAvLyBjb25zdCBjb250YWluZXJEaW1zID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICBpbWdEaW1zLnJhdGlvID0gaW1nRGltcy53aWR0aCAvIGltZ0RpbXMuaGVpZ2h0XG4gICAgY29uc3QgaW1nRGltc05ldyA9IHtcbiAgICAgIGhlaWdodDogY29udGFpbmVyRGltcy5oZWlnaHQsXG4gICAgICB3aWR0aDogY29udGFpbmVyRGltcy5oZWlnaHQgKiBpbWdEaW1zLnJhdGlvLFxuICAgICAgcmF0aW86IGltZ0RpbXMucmF0aW9cbiAgICB9XG5cbiAgICByZXR1cm4gaW1nRGltc05ld1xuICB9XG5cbiAgZml0QnlIZWlnaHQoY29udGFpbmVyKSB7XG4gICAgdGhpcy5kaW1zID0gdGhpcy5jYWxjdWxhdGVGaXRCeUhlaWdodChcbiAgICAgIHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICApXG5cbiAgICAvLyBjb25zdCBpbWdEaW1zID0gdGhpcy5jYWxjdWxhdGVGaXRCeUhlaWdodChpbWcsIHRoaXMuZWwpXG4gICAgdGhpcy5lbC5zdHlsZS53aWR0aCA9IHRoaXMuZGltcy53aWR0aFxuICAgIHRoaXMuZWwuc3R5bGUuaGVpZ2h0ID0gdGhpcy5kaW1zLmhlaWdodFxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGZpdEJ5Qm90aFNpZGVzKGNvbnRhaW5lcikge1xuICAgIHRoaXMuZGltcyA9IHRoaXMuY2FsY3VsYXRlRml0QnlCb3RoU2lkZXMoXG4gICAgICB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgKVxuXG4gICAgdGhpcy5lbC5zdHlsZS53aWR0aCA9IHRoaXMuZGltcy53aWR0aCArICdweCdcbiAgICB0aGlzLmVsLnN0eWxlLmhlaWdodCA9IHRoaXMuZGltcy5oZWlnaHQgKyAncHgnXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgY2xlYXJJbmxpbmVTdHlsZXMoKSB7XG4gICAgaWYgKHRoaXMuZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkpIHtcbiAgICAgIHRoaXMuZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3dpZHRoJylcbiAgICAgIHRoaXMuZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElFOVxuICAgICAgdGhpcy5lbC5zdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ3dpZHRoJylcbiAgICAgIHRoaXMuZWwuc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdoZWlnaHQnKVxuICAgIH1cbiAgfVxuXG4gIGhpZGUoaGFyZCkge1xuICAgIGhhcmQgPyB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIiA6IHRoaXMuZWwuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCJcbiAgfVxuXG4gIHNob3coaGFyZCkge1xuICAgIGlmIChoYXJkKSB7XG4gICAgICB0aGlzLmVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdkaXNwbGF5JylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndmlzaWJpbGl0eScpXG4gICAgfVxuXG4gICAgLy8gaGFyZCA/IHRoaXMuZWwuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCIgOiB0aGlzLmVsLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIlxuICB9XG59XG5cbmV4cG9ydCB7UGhvdG99XG4iXSwic291cmNlUm9vdCI6IiJ9