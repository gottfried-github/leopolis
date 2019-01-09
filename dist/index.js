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
}(_large_view_js__WEBPACK_IMPORTED_MODULE_2__["Enlargable"]); //
// function initShowcases() {
//   var els = document.querySelectorAll('#out .showcase .image-thumb')
//   els = Array.prototype.slice.call(els, 0)
//
//   // console.log(els);
//
//   els.forEach(el => {new ShowcaseImage(el)})
// }


function initEnlargables(selector) {
  var els = document.querySelectorAll(selector);
  els = Array.prototype.slice.call(els, 0); // console.log(els);

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

function boot(galleryUrls) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXJnZS12aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Bob3RvLmpzIl0sIm5hbWVzIjpbIkRlY2tJdGVtIiwiaW1hZ2VVcmwiLCJpbmRleCIsIm9wdGlvbnMiLCJlbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImNvbnRlbnRFbCIsImNvbnRlbnRXcmFwIiwiYXBwZW5kQ2hpbGQiLCJuYXJyb3dNb2RlIiwiZ2V0Vmlld3BvcnRXaWR0aCIsImJyZWFrcG9pbnQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXYiLCJwaG90byIsImZpdEJ5Qm90aFNpZGVzIiwidHVybk9mZk5hcnJvd01vZGUiLCJQaG90byIsImxvYWRQaG90byIsImNhdGNoIiwiZXJyIiwibW9kZSIsImNsZWFySW5saW5lU3R5bGVzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJvZmZzZXRMZWZ0IiwiZ2V0T2Zmc2V0IiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJzdHlsZSIsIm9mZnNldCIsImRlY2tQb3NpdGlvbiIsImdldERlY2tQb3NpdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJnZXRHYWxsZXJ5Vmlld3BvcnRXaWR0aCIsInVybCIsImxvYWQiLCJ0aGVuIiwicGhvdG9Mb2FkQ2IiLCJoaWRlIiwic2hvdyIsIlByb21pc2UiLCJyZWplY3QiLCJEZWNrIiwiaW1hZ2VVcmxzIiwicG9zaXRpb24iLCJsb2FkZWQiLCJpdGVtc0xvYWRlZCIsIml0ZW1zIiwiaW5pdEl0ZW1zIiwiYXBwZW5kSXRlbXMiLCJ0cmFuc2Zvcm0iLCJpdGVtT2Zmc2V0IiwiZ2V0TWlkcG9pbnQiLCJnYWxsZXJ5TWlkcG9pbnQiLCJkZWNrT2Zmc2V0TmV3IiwiY2VudGVyZWQiLCJsZW5ndGgiLCJFcnJvciIsInVuZGVmaW5lZCIsImRlY2tQb3NpdGlvbk5ldyIsImNhbGN1bGF0ZURlY2tPZmZzZXRDZW50ZXJlZCIsImNhbGN1bGF0ZURlY2tPZmZzZXQiLCJ0cmFuc2l0aW9uaW5nIiwibWFrZU1hdHJpeCIsInRyYW5zaXRpb25lbmRDYiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJiaW5kIiwieCIsImxlZnQiLCJyZW1vdmUiLCJ1cmxzIiwibWFwIiwiaSIsImxvYWRDYiIsIml0ZW0iLCJmb3JFYWNoIiwiYXBwZW5kSXRlbSIsIkdhbGxlcnkiLCJwaG90b1VybHMiLCJkZWNrIiwiYWN0aXZlSXRlbSIsImdvVG9JdGVtIiwiU2hvd2Nhc2VJbWFnZSIsImdldEJhY2tncm91bmRJbWFnZVVybCIsIkVubGFyZ2FibGUiLCJpbml0RW5sYXJnYWJsZXMiLCJzZWxlY3RvciIsImVscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImluaXRHYWxsZXJ5IiwiY29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsImdhbGxlcnkiLCJhcnJvd3MiLCJnb1RvUHJldmlvdXMiLCJnb1RvTmV4dCIsImJvb3QiLCJnYWxsZXJ5VXJscyIsImxhcmdlVmlld1dyYXAiLCJMYXJnZVZpZXciLCJpbml0IiwidHJhbnNpdGlvbiIsImRpc3BsYXkiLCJ3cmFwIiwidHJhbnNpdGlvblNldHVwIiwib3BhY2l0eSIsImhpZGRlbiIsInNldFBob3RvIiwicmVwbGFjZUNoaWxkIiwicmVzb2x2ZSIsInNlbGYiLCJ0cmFuc2l0aW9uT2ZmIiwidHJhbnNpdGlvbk9uIiwic2hvd1BlbmRpbmciLCJzaG93VGltZW91dElkIiwic2V0VGltZW91dCIsImNsaWNrQ2IiLCJlbmxhcmdlIiwiZ2V0Vmlld3BvcnRIZWlnaHQiLCJpbm5lckhlaWdodCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsIk1hdGgiLCJtaW4iLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImlubmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwicmVneCIsIlJlZ0V4cCIsInJlc3VsdCIsImV4ZWMiLCJsb2dGYWN0b3J5IiwiZW52IiwiZGF0YSIsImRldiIsInRyYWNlIiwib25sb2FkIiwic3JjIiwiaW1nRGltcyIsImNvbnRhaW5lckRpbXMiLCJyYXRpbyIsImltZ0RpbXNOZXciLCJkaW1zIiwiY2FsY3VsYXRlRml0QnlIZWlnaHQiLCJjYWxjdWxhdGVGaXRCeUJvdGhTaWRlcyIsInJlbW92ZVByb3BlcnR5IiwicmVtb3ZlQXR0cmlidXRlIiwiaGFyZCIsInZpc2liaWxpdHkiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7O0lBRU1BLFE7OztBQUNKLG9CQUFZQyxRQUFaLEVB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RCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHtQaG90b30gZnJvbSAnLi9waG90by5qcydcbmltcG9ydCB7Z2V0Vmlld3BvcnRXaWR0aCwgZ2V0Vmlld3BvcnRIZWlnaHQsIGxvZ0ZhY3Rvcnl9IGZyb20gJy4vbGliLmpzJ1xuXG5jbGFzcyBEZWNrSXRlbSB7XG4gIGNvbnN0cnVjdG9yKGltYWdlVXJsLCBpbmRleCwgb3B0aW9ucykge1xuICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMuZWwuY2xhc3NOYW1lID0gJ2RlY2staXRlbSdcblxuICAgIHRoaXMuY29udGVudEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLmNvbnRlbnRFbC5jbGFzc05hbWUgPSAnZGVjay1pdGVtLWNvbnRlbnQnXG5cbiAgICBjb25zdCBjb250ZW50V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGVudFdyYXAuY2xhc3NOYW1lID0gJ2RlY2staXRlbS1jb250ZW50X3dyYXBwZXInXG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZChjb250ZW50V3JhcClcbiAgICBjb250ZW50V3JhcC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnRFbClcblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgICB0aGlzLm5hcnJvd01vZGUgPSBnZXRWaWV3cG9ydFdpZHRoKCkgPCB0aGlzLm9wdGlvbnMuYnJlYWtwb2ludFxuICAgIHRoaXMuaW5kZXggPSBpbmRleFxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIChldikgPT4ge1xuICAgICAgaWYgKGdldFZpZXdwb3J0V2lkdGgoKSA8PSB0aGlzLm9wdGlvbnMuYnJlYWtwb2ludCkge1xuICAgICAgICBpZiAoIXRoaXMubmFycm93TW9kZSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNpemUsIHR1cm5pbmcgb24nKVxuICAgICAgICAgIHRoaXMubmFycm93TW9kZSA9IHRydWVcbiAgICAgICAgICAvLyB0aGlzLnR1cm5Pbk5hcnJvd01vZGUoKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5waG90by5maXRCeUJvdGhTaWRlcyh0aGlzLmVsKVxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5uYXJyb3dNb2RlKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ3Jlc2l6ZSwgdHVybmluZyBPZmYnKVxuICAgICAgICAgIHRoaXMudHVybk9mZk5hcnJvd01vZGUoKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9KVxuXG4gICAgdGhpcy5waG90byA9IG5ldyBQaG90byhpbWFnZVVybClcbiAgICB0aGlzLmxvYWRQaG90bygpLmNhdGNoKChlcnIpID0+IHt0aHJvdyBlcnJ9KVxuICB9XG5cbiAgdHVybk9uTmFycm93TW9kZShtb2RlKSB7XG4gICAgLy8gdGhpcy5uYXJyb3dNb2RlID0gdHJ1ZVxuXG4gICAgLy8gdGhpcyBwZXJoYXBzIHdvdWxkIGJlIGJldHRlciB0byBzZXQgd2l0aCBjc3MgdndcbiAgICAvLyB0aGlzLmVsLnN0eWxlLndpZHRoID0gZ2V0Vmlld3BvcnRXaWR0aCgpICsgJ3B4J1xuXG4gICAgLy8gdGhpcy5waG90by5maXRCeUJvdGhTaWRlcyh0aGlzLmVsKVxuICB9XG5cbiAgdHVybk9mZk5hcnJvd01vZGUoKSB7XG4gICAgdGhpcy5uYXJyb3dNb2RlID0gZmFsc2VcbiAgICAvLyB0aGlzLnBob3RvLmZpdEJ5SGVpZ2h0KHRoaXMuZWwpXG5cbiAgICAvLyB0aGlzLmVsLnN0eWxlLndpZHRoID0gdGhpcy5waG90by5kaW1zLndpZHRoICsgJ3B4J1xuICAgIHRoaXMucGhvdG8uY2xlYXJJbmxpbmVTdHlsZXMoKVxuICB9XG5cbiAgZ2V0V2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGhcbiAgfVxuXG4gIC8vIGdldCBwb3NpdGlvbiBvZiB0aGUgaXRlbSwgcmVsYXRpdmUgdG8gdGhlIGNvbnRhaW5pbmcgRGVja1xuICBnZXRPZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWwub2Zmc2V0TGVmdFxuICB9XG5cbiAgLy8gZ2V0IHBvc2l0aW9uIG9mIHRoZSBtaWRwb2ludCBvZiB0aGUgaXRlbSwgcmVsYXRpdmUgdG8gdGhlIGNvbnRhaW5pbmcgZGVja1xuICBnZXRNaWRwb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRPZmZzZXQoKSArICh0aGlzLmdldFdpZHRoKCkgLyAyKVxuICB9XG5cbiAgLyoqXG4gICAgQHBhcmFtIHtTdHJpbmd9IGhlaWdodCBoZWlnaHQgaW4gY3NzIHN5bnRheFxuICAqL1xuICBzZXRIZWlnaHQoaGVpZ2h0KSB7XG4gICAgdGhpcy5lbC5zdHlsZS5oZWlnaHQgPSBoZWlnaHRcbiAgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7XG4gICAgdGhpcy5lbC5zdHlsZS53aWR0aCA9IHdpZHRoXG4gIH1cblxuICBpc0luVmlldygpIHtcbiAgICBjb25zdCBvZmZzZXQgPSB0aGlzLmdldE9mZnNldCgpXG4gICAgY29uc3QgZGVja1Bvc2l0aW9uID0gdGhpcy5vcHRpb25zLmdldERlY2tQb3NpdGlvbigpXG4gICAgY29uc29sZS5sb2coJ2RlY2tJdGVtLmlzSW5WaWV3LCBvZmZzZXQ6ICcsIG9mZnNldCk7XG4gICAgY29uc29sZS5sb2coJ2RlY2tJdGVtLmlzSW5WaWV3LCB3aWR0aDogJywgdGhpcy5nZXRXaWR0aCgpKTtcbiAgICBjb25zb2xlLmxvZygnZGVja0l0ZW0uaXNJblZpZXcsIGdldERlY2tQb3NpdGlvbjogJywgdGhpcy5vcHRpb25zLmdldERlY2tQb3NpdGlvbigpKTtcbiAgICBjb25zb2xlLmxvZygnZGVja0l0ZW0uaXNJblZpZXcsIGdldEdhbGxlcnlWaWV3cG9ydFdpZHRoOiAnLCB0aGlzLm9wdGlvbnMuZ2V0R2FsbGVyeVZpZXdwb3J0V2lkdGgoKSk7XG5cbiAgICAvLyBkZWNrUG9zaXRpb24gY291bGQgYmUgbmVnYXRpdmVcbiAgICByZXR1cm4gb2Zmc2V0ICsgZGVja1Bvc2l0aW9uID49IDAgJiZcbiAgICBkZWNrUG9zaXRpb24gKyBvZmZzZXQgKyB0aGlzLmdldFdpZHRoKCkgPD0gdGhpcy5vcHRpb25zLmdldEdhbGxlcnlWaWV3cG9ydFdpZHRoKClcbiAgICAgID8gdHJ1ZSA6IGZhbHNlXG5cbiAgICAvLyBpZiAoXG4gICAgLy8gICB0aGlzLmdldE9mZnNldCgpICsgdGhpcy5vcHRpb25zLmdldERlY2tQb3NpdGlvbigpID4gMCAmJlxuICAgIC8vICAgdGhpcy5nZXRPZmZzZXQoKSArIHRoaXMuZ2V0V2lkdGgoKSA8IHRoaXMub3B0aW9ucy5nZXRHYWxsZXJ5Vmlld3BvcnRXaWR0aCgpXG4gICAgLy8gKSB7XG4gICAgLy9cbiAgICAvLyB9XG4gIH1cblxuICBsb2FkUGhvdG8odXJsKSB7XG4gICAgcmV0dXJuIHRoaXMucGhvdG8ubG9hZCgpIC8vIFBob3RvLnByb3RvdHlwZS5sb2FkSW1hZ2UoKVxuICAgIC50aGVuKChwaG90bykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5vcHRpb25zLnBob3RvTG9hZENiKHBob3RvKVxuXG4gICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gc2VlIHRoZSBpbWcsIGJ1dCB3ZSB3YW50IHRvIGJlIGFibGUgdG8gbWVhc3VyZSBpdCB3aXRoIGdldEJvdW5kaW5nQ2xpZW50UmVjdCAoc28gZGlzcGxheTogbm9uZSBpcyBub3QgYSBmaXQpXG4gICAgICAgIC8vIGltZy5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIlxuICAgICAgICBwaG90by5oaWRlKClcbiAgICAgICAgdGhpcy5jb250ZW50RWwuYXBwZW5kQ2hpbGQocGhvdG8uZWwpXG5cbiAgICAgICAgaWYgKCF0aGlzLm5hcnJvd01vZGUpIHtcbiAgICAgICAgICAvLyBhdCB0aGUgbW9tZW50LCBzZWVtcyBsaWtlIHdlIGhhbmRsZSBhbGwgb2YgdGhpcyB3aXRoIGNzcyxcbiAgICAgICAgICAvLyBhbmQgZG9uJ3QgbmVlZCB0byBmaXRlIHRoZSBwaG90byBhbmQgc2V0IGl0J3MgY29udGFpbmVyJ3Mgd2lkdGggcmVzcGVjdGl2ZWx5XG5cbiAgICAgICAgICAvLyB0aGlzLnBob3RvLmZpdEJ5SGVpZ2h0KHRoaXMuZWwpXG4gICAgICAgICAgLy8gdGhpcy5lbC5zdHlsZS53aWR0aCA9IHRoaXMucGhvdG8uZGltcy53aWR0aCArICdweCdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnBob3RvLmZpdEJ5Qm90aFNpZGVzKHRoaXMuY29udGVudEVsKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5waG90by5zaG93KClcbiAgICAgICAgLy8gaW1nLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSdcbiAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgIFByb21pc2UucmVqZWN0KGVycilcbiAgICAgIH1cblxuICAgIH0pXG4gICAgLy8gLmNhdGNoKChlcnIpID0+IHtcbiAgICAvLyAgIHRocm93IGVyclxuICAgIC8vIH0pXG4gIH1cbn1cblxuY2xhc3MgRGVjayB7XG4gIGNvbnN0cnVjdG9yKGltYWdlVXJscywgb3B0aW9ucykge1xuICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMuZWwuY2xhc3NOYW1lID0gJ2dhbGxlcnktZGVjaydcblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcblxuICAgIHRoaXMuYnJlYWtwb2ludCA9IG9wdGlvbnMuYnJlYWtwb2ludFxuICAgIHRoaXMucG9zaXRpb24gPSAwXG4gICAgdGhpcy5vZmZzZXQgPSAwXG5cbiAgICB0aGlzLmxvYWRlZCA9IGZhbHNlXG4gICAgdGhpcy5pdGVtc0xvYWRlZCA9IDBcbiAgICB0aGlzLml0ZW1zID0gdGhpcy5pbml0SXRlbXMoaW1hZ2VVcmxzKVxuICAgIHRoaXMuYXBwZW5kSXRlbXMoKVxuXG4gICAgLy8gaW5pdGlhbGl6ZSB0aGUgdHJhbnNmb3JtIG1hdHJpeCBzdHlsaW5nXG4gICAgdGhpcy5lbC5zdHlsZS50cmFuc2Zvcm0gPSAnbWF0cml4KDEsIDAsIDAsIDEsIDAsIDApJ1xuXG4gICAgLy8gd2luZG93Lm9uKCdyZXNpemUnLCAoZXYpID0+IHtcbiAgICAvLyAgIGlmIChnZXRWaWV3cG9ydFdpZHRoKCkgPCB0aGlzLmJyZWFrcG9pbnQpIHtcbiAgICAvL1xuICAgIC8vICAgfVxuICAgIC8vIH0pXG4gIH1cblxuICAvKlxuICBjYWxjdWxhdGVEZWNrT2Zmc2V0KGluZGV4KSB7XG4gICAgaWYgKGdldFZpZXdwb3J0V2lkdGgoKSA8IHRoaXMuYnJlYWtwb2ludCkge1xuICAgICAgY29uc3QgaXRlbU9mZnNldCA9IHRoaXMuaXRlbXNbaW5kZXhdLmdldE9mZnNldCgpXG4gICAgICBjb25zdCBkZWNrT2Zmc2V0TmV3ID0gLWl0ZW1PZmZzZXRcblxuICAgICAgcmV0dXJuIGRlY2tPZmZzZXROZXdcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaXRlbU9mZnNldCA9IHRoaXMuaXRlbXNbaW5kZXhdLmdldE1pZHBvaW50KClcblxuICAgICAgY29uc3QgZ2FsbGVyeU1pZHBvaW50ID0gdGhpcy5vcHRpb25zLmdldEdhbGxlcnlWaWV3cG9ydFdpZHRoKCkgLyAyIC8vIC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAvIDJcbiAgICAgIGNvbnN0IGRlY2tPZmZzZXROZXcgPSAtaXRlbU9mZnNldCArIGdhbGxlcnlNaWRwb2ludFxuXG4gICAgICAvLyBjb25zb2xlLmxvZygnRGVjay5jYWxjdWxhdGVEZWNrT2Zmc2V0LCBpbmRleCcsIGluZGV4KVxuICAgICAgLy8gY29uc29sZS5sb2coJ0RlY2suY2FsY3VsYXRlRGVja09mZnNldCwgaXRlbXNbaW5kZXhdJywgdGhpcy5pdGVtc1tpbmRleF0pXG4gICAgICAvLyBjb25zb2xlLmxvZygnRGVjay5jYWxjdWxhdGVEZWNrT2Zmc2V0LCBpdGVtc1tpbmRleF0nLCB0aGlzLml0ZW1zW2luZGV4XS5nZXRNaWRwb2ludCgpKVxuICAgICAgLy8gY29uc29sZS5sb2coJ0RlY2suY2FsY3VsYXRlRGVja09mZnNldCwgaXRlbU9mZnNldCcsIGl0ZW1PZmZzZXQpXG4gICAgICAvLyBjb25zb2xlLmxvZygnRGVjay5jYWxjdWxhdGVEZWNrT2Zmc2V0LCBkZWNrT2Zmc2V0TmV3JywgZGVja09mZnNldE5ldylcblxuICAgICAgcmV0dXJuIGRlY2tPZmZzZXROZXdcbiAgICB9XG4gIH1cbiAgKi9cblxuICBjYWxjdWxhdGVEZWNrT2Zmc2V0Q2VudGVyZWQoaW5kZXgpIHtcbiAgICBjb25zdCBpdGVtT2Zmc2V0ID0gdGhpcy5pdGVtc1tpbmRleF0uZ2V0TWlkcG9pbnQoKVxuXG4gICAgY29uc3QgZ2FsbGVyeU1pZHBvaW50ID0gdGhpcy5vcHRpb25zLmdldEdhbGxlcnlWaWV3cG9ydFdpZHRoKCkgLyAyIC8vIC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAvIDJcbiAgICBjb25zdCBkZWNrT2Zmc2V0TmV3ID0gLWl0ZW1PZmZzZXQgKyBnYWxsZXJ5TWlkcG9pbnRcblxuICAgIC8vIGNvbnNvbGUubG9nKCdEZWNrLmNhbGN1bGF0ZURlY2tPZmZzZXQsIGluZGV4JywgaW5kZXgpXG4gICAgLy8gY29uc29sZS5sb2coJ0RlY2suY2FsY3VsYXRlRGVja09mZnNldCwgaXRlbXNbaW5kZXhdJywgdGhpcy5pdGVtc1tpbmRleF0pXG4gICAgLy8gY29uc29sZS5sb2coJ0RlY2suY2FsY3VsYXRlRGVja09mZnNldCwgaXRlbXNbaW5kZXhdJywgdGhpcy5pdGVtc1tpbmRleF0uZ2V0TWlkcG9pbnQoKSlcbiAgICAvLyBjb25zb2xlLmxvZygnRGVjay5jYWxjdWxhdGVEZWNrT2Zmc2V0LCBpdGVtT2Zmc2V0JywgaXRlbU9mZnNldClcbiAgICAvLyBjb25zb2xlLmxvZygnRGVjay5jYWxjdWxhdGVEZWNrT2Zmc2V0LCBkZWNrT2Zmc2V0TmV3JywgZGVja09mZnNldE5ldylcblxuICAgIHJldHVybiBkZWNrT2Zmc2V0TmV3XG4gIH1cblxuICBjYWxjdWxhdGVEZWNrT2Zmc2V0KGluZGV4KSB7XG4gICAgY29uc3QgaXRlbU9mZnNldCA9IHRoaXMuaXRlbXNbaW5kZXhdLmdldE9mZnNldCgpXG4gICAgY29uc3QgZGVja09mZnNldE5ldyA9IC1pdGVtT2Zmc2V0XG5cbiAgICByZXR1cm4gZGVja09mZnNldE5ld1xuICB9XG5cbiAgLypcbiAgLy8gVE9ETzpcbiAgZ2V0QWN0dWFsUG9zaXRpb25XaGlsZVRyYW5zaXRpb25pbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCArIHdpbmRvdy5wYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsKVsnbWFyZ2luLWxlZnQnXSlcbiAgICAtIHRoaXMub3B0aW9ucy5nZXRHYWxsZXJ5UG9zKCkubGVmdFxuICAgICsgd2luZG93LnNjcm9sbFhcbiAgfVxuICAqL1xuXG4gIC8qKlxuICBAcGFyYW0ge2Jvb2xlYW59IGNlbnRlcmVkIGlmIHRydWUgLSBjZW50ZXJzIHRoZSBpdGVtLCBpZiBmYWxzeSAtIGRvZXNuJ3QgY2VudGVyXG4gICovXG4gIGdvVG9JdGVtKGluZGV4LCBjZW50ZXJlZCkge1xuXG4gICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+IHRoaXMuaXRlbXMubGVuZ3RoLTEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImNhbid0IGdvIHRvIHVuZXhpc3RpbmcgaXRlbSBhdCBcIisgaW5kZXgpXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmxvYWRlZCkge1xuICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiXCIpXG4gICAgICAvLyBUT0RPOiBtYWtlIGl0IHNvIGl0IGNhbiBnbyB0byB0aGUgaXRlbXMgdGhhdCBhcmUgYWxyZWFkeSBsb2FkZWQsIGFuZFxuICAgICAgLy8gdGhlbiwgYWRqdXN0IHRoZSBwb3NpdGlvbiBvZiB0aGUgZGVjayBzbyBpdCBzdGF5cyBvbiB0aGUgaXRlbSB3ZSd2ZSBnb25lIHRvXG4gICAgICAvLyBhcyBvdGhlciBpdGVtcyBsb2FkIChpZiBuZWNlc3NhcnkpLlxuICAgICAgLy8gVGhpcyBjb3VsZCBiZSBpbXBhY3RmdWwgaWYgdGhlIGRlY2sgaXMgcmlnaHQgYXQgdGhlIHRvcCBvZiB0aGUgcGFnZSBhbmQgdXNlclxuICAgICAgLy8gd2FudHMgdG8gaW1tZWRpYXRlbHkgYmUgYWJsZSB0byBpbnRlcmFjdCB3aXRoIHRoaW5ncy5cbiAgICAgIC8vIGNvbnNvbGUubG9nKFwicGhvdG9zIGluIHRoZSBkZWNrIGhhdmVuJ3QgbG9hZGVkIHlldFwiKTtcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG5cbiAgICBjb25zdCBkZWNrUG9zaXRpb25OZXcgPSBjZW50ZXJlZCA/IHRoaXMuY2FsY3VsYXRlRGVja09mZnNldENlbnRlcmVkKGluZGV4KSA6IHRoaXMuY2FsY3VsYXRlRGVja09mZnNldChpbmRleClcblxuICAgIC8vIFRPRE86XG4gICAgLy8gdGhpcy5vZmZzZXQgPSB0aGlzLnRyYW5zaXRpb25pbmdcbiAgICAvLyAgID8gZGVja1Bvc2l0aW9uTmV3IC0gdGhpcy5nZXRBY3R1YWxQb3NpdGlvbldoaWxlVHJhbnNpdGlvbmluZygpXG4gICAgLy8gICA6IGRlY2tQb3NpdGlvbk5ldyAtIHRoaXMucG9zaXRpb25cblxuICAgIHRoaXMub2Zmc2V0ID0gZGVja1Bvc2l0aW9uTmV3IC0gdGhpcy5wb3NpdGlvblxuICAgIHRoaXMucG9zaXRpb24gPSBkZWNrUG9zaXRpb25OZXdcblxuICAgIGlmICh0aGlzLnRyYW5zaXRpb25pbmcpIHtcbiAgICAgIHRoaXMuZWwuc3R5bGUudHJhbnNmb3JtID0gdGhpcy5tYWtlTWF0cml4KHRoaXMub2Zmc2V0KVxuICAgIH0gZWxzZSB7XG5cbiAgICAgIGZ1bmN0aW9uIHRyYW5zaXRpb25lbmRDYigpIHtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uZW5kQ2IoKVxuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0cmFuc2l0aW9uZW5kQ2IpXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbicpXG5cbiAgICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IHRydWVcbiAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRyYW5zaXRpb25lbmRDYi5iaW5kKHRoaXMpKVxuICAgICAgdGhpcy5lbC5zdHlsZS50cmFuc2Zvcm0gPSB0aGlzLm1ha2VNYXRyaXgodGhpcy5vZmZzZXQpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaXRlbXNbaW5kZXhdXG5cbiAgfVxuXG4gIG1ha2VNYXRyaXgoeCkge1xuICAgIHJldHVybiAnbWF0cml4KDEsIDAsIDAsIDEsICcrIHggKycsIDApJ1xuICB9XG5cbiAgdHJhbnNpdGlvbmVuZENiKCkge1xuICAgIHRoaXMuZWwuc3R5bGUubGVmdCA9IHRoaXMucG9zaXRpb24gKydweCdcblxuICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgndHJhbnNpdGlvbicpXG4gICAgdGhpcy5lbC5zdHlsZS50cmFuc2Zvcm0gPSAnbWF0cml4KDEsIDAsIDAsIDEsIDAsIDApJ1xuICB9XG5cbiAgaW5pdEl0ZW1zKHVybHMpIHtcbiAgICByZXR1cm4gdXJscy5tYXAoKHVybCwgaSkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEZWNrSXRlbSh1cmwsIGksIHtcbiAgICAgICAgYnJlYWtwb2ludDogdGhpcy5icmVha3BvaW50LFxuICAgICAgICBwaG90b0xvYWRDYjogKCkgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicGhvdG9Mb2FkQ2IsIGRlY2suaXRlbXNMb2FkZWQ6IFwiLCB0aGlzLml0ZW1zTG9hZGVkKTtcbiAgICAgICAgICB0aGlzLml0ZW1zTG9hZGVkKytcblxuICAgICAgICAgIGlmICh0aGlzLml0ZW1zTG9hZGVkID09IHRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInBob3RvTG9hZENiLCBkZWNrLml0ZW1zTG9hZGVkID09IGRlY2suaXRlbXMubGVuZ3RoLCBkZWNrLml0ZW1zTG9hZGVkOiBcIiwgdGhpcy5pdGVtc0xvYWRlZCk7XG4gICAgICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWVcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5sb2FkQ2IoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2V0R2FsbGVyeVZpZXdwb3J0V2lkdGg6IHRoaXMub3B0aW9ucy5nZXRHYWxsZXJ5Vmlld3BvcnRXaWR0aCxcbiAgICAgICAgZ2V0RGVja1Bvc2l0aW9uOiAoKSA9PiB7cmV0dXJuIHRoaXMucG9zaXRpb259XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBhcHBlbmRJdGVtKGl0ZW0pIHtcbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGl0ZW0uZWwpXG4gIH1cblxuICBhcHBlbmRJdGVtcygpIHtcbiAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICB0aGlzLmFwcGVuZEl0ZW0oaXRlbSlcbiAgICB9KVxuICB9XG59XG5cbmNsYXNzIEdhbGxlcnkge1xuICBjb25zdHJ1Y3RvcihwaG90b1VybHMsIG9wdGlvbnMpIHtcbiAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLmVsLmNsYXNzTmFtZSA9ICdnYWxsZXJ5J1xuXG5cbiAgICB0aGlzLmRlY2sgPSBuZXcgRGVjayhwaG90b1VybHMsIHtcbiAgICAgIGdldEdhbGxlcnlWaWV3cG9ydFdpZHRoOiAoKSA9PiB7IHJldHVybiB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIH0sXG4gICAgICBsb2FkQ2I6ICgpID0+IHtcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gdGhpcy5kZWNrLmdvVG9JdGVtKDAsIGZhbHNlKVxuICAgICAgICAvLyB0aGlzLmdvVG9OZXh0LmNhbGwodGhpcylcbiAgICAgIH0sXG4gICAgICBicmVha3BvaW50OiBvcHRpb25zLmJyZWFrcG9pbnRcbiAgICB9KVxuXG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmRlY2suZWwpXG5cblxuICAgIC8vIGNvbnN0IGFjdGl2ZUl0ZW0gPSB0aGlzLmRlY2suZ29Ub0l0ZW0oMClcbiAgICAvLyB0aGlzLmFjdGl2ZUl0ZW0gPSBhY3RpdmVJdGVtXG4gIH1cblxuICBnb1RvTmV4dCgpIHtcbiAgICBpZiAoIXRoaXMuZGVjay5sb2FkZWQpIHJldHVyblxuICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0uaW5kZXggPT0gdGhpcy5kZWNrLml0ZW1zLmxlbmd0aC0xKSByZXR1cm5cblxuICAgIHRoaXMuYWN0aXZlSXRlbSA9IHRoaXMuZGVjay5nb1RvSXRlbSh0aGlzLmFjdGl2ZUl0ZW0uaW5kZXgrMSwgdHJ1ZSlcbiAgfVxuXG4gIGdvVG9QcmV2aW91cygpIHtcbiAgICBpZiAoIXRoaXMuZGVjay5sb2FkZWQpIHJldHVyblxuICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0uaW5kZXggPT0gMCkgcmV0dXJuXG5cbiAgICB0aGlzLmFjdGl2ZUl0ZW0gPSB0aGlzLmRlY2suZ29Ub0l0ZW0odGhpcy5hY3RpdmVJdGVtLmluZGV4LTEsIHRydWUpXG4gIH1cbiAgLypcbiAgLy8gVE9ETzpcbiAgLy8gZ2V0IHRoZSBhY3R1YWwgcG9zaXRpb24gb2YgdGhlIGVsLCByZWxhdGl2ZSB0byBib2R5LlxuICBnZXRBYnNQb3NpdGlvbigpIHtcbiAgICB2YXIgcG9zaXRpb24gPSAwXG5cbiAgICAvLyBjb25zdCBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbClcblxuICAgICAgcG9zaXRpb24gPSB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnRcbiAgICAgICAgKyB3aW5kb3cucGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbClbJ21hcmdpbi1sZWZ0J10pXG5cbiAgICAgIHJldHVybiBwb3NpdGlvblxuICB9XG4gICovXG59XG5cbmV4cG9ydCB7R2FsbGVyeX1cbiIsIi8vIGltcG9ydCB7c2xpZGV9IGZyb20gJy4vc2xpZGUuanMnXG5pbXBvcnQge2dldEJhY2tncm91bmRJbWFnZVVybH0gZnJvbSAnLi9saWIuanMnXG5pbXBvcnQge0dhbGxlcnl9IGZyb20gJy4vZ2FsbGVyeS5qcydcbmltcG9ydCB7TGFyZ2VWaWV3LCBFbmxhcmdhYmxlfSBmcm9tICcuL2xhcmdlLXZpZXcuanMnXG5cbmNsYXNzIFNob3djYXNlSW1hZ2UgZXh0ZW5kcyBFbmxhcmdhYmxlIHtcbiAgY29uc3RydWN0b3IoZWwpIHtcbiAgICBzdXBlcihlbCwgZ2V0QmFja2dyb3VuZEltYWdlVXJsKGVsKSlcbiAgICAvLyB0aGlzLmltYWdlID0gbmV3IEVubGFyZ2FibGUoKVxuICB9XG59XG4vL1xuLy8gZnVuY3Rpb24gaW5pdFNob3djYXNlcygpIHtcbi8vICAgdmFyIGVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNvdXQgLnNob3djYXNlIC5pbWFnZS10aHVtYicpXG4vLyAgIGVscyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGVscywgMClcbi8vXG4vLyAgIC8vIGNvbnNvbGUubG9nKGVscyk7XG4vL1xuLy8gICBlbHMuZm9yRWFjaChlbCA9PiB7bmV3IFNob3djYXNlSW1hZ2UoZWwpfSlcbi8vIH1cblxuZnVuY3Rpb24gaW5pdEVubGFyZ2FibGVzKHNlbGVjdG9yKSB7XG4gIHZhciBlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuICBlbHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlbHMsIDApXG5cbiAgLy8gY29uc29sZS5sb2coZWxzKTtcblxuICBlbHMuZm9yRWFjaChlbCA9PiB7bmV3IFNob3djYXNlSW1hZ2UoZWwpfSlcbn1cblxuZnVuY3Rpb24gaW5pdEdhbGxlcnkocGhvdG9VcmxzKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5LWNvbnRhaW5lcicpXG5cbiAgY29uc3QgZ2FsbGVyeSA9IG5ldyBHYWxsZXJ5KHBob3RvVXJscywge2JyZWFrcG9pbnQ6IDgwMH0pXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnYWxsZXJ5LmVsKVxuXG4gIGNvbnN0IGFycm93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5LXdyYXAnKVxuICBhcnJvd3MucXVlcnlTZWxlY3RvcignLmljb24jYndkJylcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnYWxsZXJ5LmdvVG9QcmV2aW91cy5iaW5kKGdhbGxlcnkpKVxuICBhcnJvd3MucXVlcnlTZWxlY3RvcignLmljb24jZndkJylcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnYWxsZXJ5LmdvVG9OZXh0LmJpbmQoZ2FsbGVyeSkpXG5cbiAgY29uc29sZS5sb2coJ2dhbGxlcnknLCBnYWxsZXJ5KVxufVxuXG5mdW5jdGlvbiBib290KGdhbGxlcnlVcmxzKSB7XG4gIGNvbnN0IGxhcmdlVmlld1dyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFyZ2Utdmlld193cmFwJylcbiAgTGFyZ2VWaWV3LmluaXQoe1xuICAgIHRyYW5zaXRpb246ICdvcGFjaXR5IDAuNHMnLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgd3JhcDogbGFyZ2VWaWV3V3JhcFxuICB9KVxuXG4gIGxhcmdlVmlld1dyYXAuY2xhc3NMaXN0LnJlbW92ZSgnbm9uZWQnKVxuXG4gIGxhcmdlVmlld1dyYXAuYXBwZW5kQ2hpbGQoTGFyZ2VWaWV3LmNvbnRhaW5lcilcbiAgbGFyZ2VWaWV3V3JhcC5xdWVyeVNlbGVjdG9yKCcuaWNvbiNjcm9zcycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIExhcmdlVmlldy5oaWRlKClcbiAgfSlcblxuICBjb25zb2xlLmxvZygnTGFyZ2VWaWV3JywgTGFyZ2VWaWV3KVxuXG4gIGluaXRHYWxsZXJ5KGdhbGxlcnlVcmxzKVxuXG4gIGluaXRFbmxhcmdhYmxlcygnI291dCAuc2hvd2Nhc2UgLmltYWdlLXRodW1iJylcbiAgaW5pdEVubGFyZ2FibGVzKCcjc3RhZmYgLm1lbWJlciAuYXZhdGFyJylcbiAgbmV3IFNob3djYXNlSW1hZ2UoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3QgLnN0cmVldC12aWV3JykpXG4gIC8vIGVscy5mb3JFYWNoKGVsID0+IHtuZXcgU2hvd2Nhc2VJbWFnZShlbCl9KVxuXG4gIC8vIGluaXRTaG93Y2FzZXMoKVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgYm9vdChbXG4gICAgJ21lZGlhL2luLzE0OTAyODQxXzEyNTkxMTI3Mjc0ODM5MTJfMzI4NDMxNTEwNjMxODk4MTU3NF9vLmpwZycsXG4gICAgJ21lZGlhL2luLzE5ODc1MjcyXzEwMTAwNDgyMjk2Mjg2NzA2XzM4ODMzMDYyNzU1NDYxNjY2NzZfbi5qcGcnLFxuICAgICdtZWRpYS9pbi8zYi5qcGcnLFxuICAgICdtZWRpYS9pbi82YS5qcGcnLFxuICAgICdtZWRpYS9pbi9EU0NfMDEyNi5qcGcnLFxuICAgICdtZWRpYS9pbi9EU0NfMDEyOC5KUEcnLFxuICAgICdtZWRpYS9pbi9EU0NfMDM1MC5KUEcnXG4gIF0pXG59KVxuIiwiaW1wb3J0IHtnZXRCYWNrZ3JvdW5kSW1hZ2VVcmwsIGdldFZpZXdwb3J0V2lkdGgsIGdldFZpZXdwb3J0SGVpZ2h0fSBmcm9tICcuL2xpYi5qcydcbmltcG9ydCB7UGhvdG99IGZyb20gJy4vcGhvdG8uanMnXG5cbmNvbnN0IExhcmdlVmlldyA9IHtcbiAgaW5pdChvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgICBpZiAob3B0aW9ucy50cmFuc2l0aW9uKSB0aGlzLnRyYW5zaXRpb25TZXR1cCA9IG9wdGlvbnMudHJhbnNpdGlvblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICAvLyBzYW1lIGFzIGluIHRoZSBzY3NzXG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICdsYXJnZS12aWV3X2NvbnRhaW5lcidcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lclxuXG4gICAgLy8gaWYgKG9wdGlvbnMuY2xpY2tDYilcbiAgICAvLyB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHt0aGlzLmhpZGUoKX0pXG4gICAgdGhpcy53cmFwID0gb3B0aW9ucy53cmFwIHx8IHRoaXMuY29udGFpbmVyXG5cbiAgICB0aGlzLndyYXAuc3R5bGUub3BhY2l0eSA9ICcwJ1xuICAgIC8vIHRoaXMud3JhcC5jbGFzc0xpc3QuYWRkKCd0cmFuc3BhcmVudCcpXG5cbiAgICB0aGlzLndyYXAuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIC8vIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25vbmVkJylcbiAgICB0aGlzLmhpZGRlbiA9IHRydWVcbiAgICAvLyB0aGlzLnBob3RvID0gbmV3IFBob3RvKClcbiAgfSxcblxuICBzZXRQaG90byh1cmwpIHtcbiAgICBjb25zdCBwaG90byA9IG5ldyBQaG90byh1cmwpXG4gICAgLy8gdGhpcy5waG90byA9IG5ldyBQaG90byh1cmwpXG5cbiAgICByZXR1cm4gcGhvdG8ubG9hZCgpXG4gICAgLy8gLnRoZW4oKVxuICAgIC50aGVuKChwaG90bykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHRoaXMuaGlkZGVuKSB7XG4gICAgICAgICAgUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCd0aGUgbGFyZ2UtdmlldyBjb250YWluZXIgbXVzdCBiZSBkaXNwbGF5ZWQgYmVmb3JlIHdlIGNhbiBmaXQgaW4gdGhlIHBob3RvJykpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gdGhpcy5waG90by5oaWRlKGZhbHNlKVxuICAgICAgICAgIHBob3RvLmhpZGUoZmFsc2UpXG4gICAgICAgICAgaWYgKHRoaXMucGhvdG8pIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlcGxhY2VDaGlsZChwaG90by5lbCwgdGhpcy5waG90by5lbClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQocGhvdG8uZWwpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcGhvdG8uZml0QnlCb3RoU2lkZXModGhpcy5jb250YWluZXIpXG4gICAgICAgICAgcGhvdG8uc2hvdyhmYWxzZSlcbiAgICAgICAgICB0aGlzLnBob3RvID0gcGhvdG9cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgUHJvbWlzZS5yZWplY3QoZXJyKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgLypcbiAgdHJhbnNpdGlvbmVuZENiKGNiKSB7XG4gICAgY2IoKVxuICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLnRyYW5zaXRpb25lbmRDYilcbiAgfVxuICAqL1xuXG4gIC8qKlxuICAgIEBkZXNjcmlwdGlvbiBJZiB1cmwgaXMgZ2l2ZSwgdGhlbiwgYWZ0ZXIgc2hvdyB0cmFuc2l0aW9uIGhhcyBlbmRlZCwgaXQgbG9hZHMgdGhlXG4gICAgbmV3IHBob3RvXG4gICovXG4gIHNob3codXJsKSB7XG4gICAgLy8gaWYgKHRoaXMuc2hvd1BlbmRpbmcpIHtcbiAgICAvLyAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5zaG93VGltZW91dElkKVxuICAgIC8vICAgLy8gdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigpXG4gICAgLy9cbiAgICAvLyAgIC8vIHNob3VsZCByZW1vdmVFdmVudExpc3RlbmVyIG9mIGl0c2VsZlxuICAgIC8vICAgdGhpcy50cmFuc2l0aW9uZW5kQ2IoKVxuICAgIC8vXG4gICAgLy9cbiAgICAvLyB9XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgICAgIGZ1bmN0aW9uIHRyYW5zaXRpb25lbmRDYigpIHtcbiAgICAgICAgICBzZWxmLndyYXAucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRyYW5zaXRpb25lbmRDYilcbiAgICAgICAgICBzZWxmLnRyYW5zaXRpb25PZmYoKVxuICAgICAgICAgIC8vIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3RyYW5zaXRpb24nKVxuXG4gICAgICAgICAgc2VsZi5oaWRkZW4gPSBmYWxzZVxuXG4gICAgICAgICAgY29uc29sZS5sb2coJ0xhcmdlVmlldy5zaG93LCB0cmFuc2l0aW9uZW5kQ2InLCBzZWxmKVxuICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy53cmFwLnN0eWxlLmRpc3BsYXkgPSB0aGlzLm9wdGlvbnMuZGlzcGxheSB8fCAnZmxleCdcbiAgICAgICAgLy8gdGhpcy53cmFwLmNsYXNzTGlzdC5yZW1vdmUoJ25vbmVkJylcbiAgICAgICAgdGhpcy53cmFwLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0cmFuc2l0aW9uZW5kQ2IpXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbk9uKClcblxuICAgICAgICB0aGlzLnNob3dQZW5kaW5nID0gdHJ1ZVxuICAgICAgICAvLyB0aGlzIGlzIG51dHNcbiAgICAgICAgdGhpcy5zaG93VGltZW91dElkID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2hvd1BlbmRpbmcgPSBmYWxzZVxuICAgICAgICAgIHRoaXMud3JhcC5zdHlsZS5vcGFjaXR5ID0gJzEnXG4gICAgICAgICAgLy8gdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbicpXG4gICAgICAgIH0sIDUwKVxuXG4gICAgICAgIC8vIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NvbGlkJylcbiAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgIHJlamVjdChlcnIpXG4gICAgICB9XG4gICAgfSlcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICBpZiAodXJsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldFBob3RvKHVybClcbiAgICAgIH1cbiAgICB9LCAoZXJyKSA9PiB7XG4gICAgICBQcm9taXNlLnJlamVjdChlcnIpXG4gICAgfSlcbiAgfSxcblxuICBoaWRlKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgZnVuY3Rpb24gdHJhbnNpdGlvbmVuZENiKCkge1xuICAgICAgICAgIHNlbGYud3JhcC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdHJhbnNpdGlvbmVuZENiKVxuICAgICAgICAgIHNlbGYudHJhbnNpdGlvbk9mZigpXG4gICAgICAgICAgLy8gc2VsZi53cmFwLmNsYXNzTGlzdC5yZW1vdmUoJ3RyYW5zaXRpb24nKVxuICAgICAgICAgIHNlbGYud3JhcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgc2VsZi5waG90by5oaWRlKGZhbHNlKVxuICAgICAgICAgIC8vIHNlbGYuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25vbmVkJylcblxuICAgICAgICAgIHNlbGYuaGlkZGVuID0gdHJ1ZVxuICAgICAgICAgIGNvbnNvbGUubG9nKCdMYXJnZVZpZXcuaGlkZSwgdHJhbnNpdGlvbmVuZENiJywgTGFyZ2VWaWV3KTtcbiAgICAgICAgICByZXNvbHZlKClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMud3JhcC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdHJhbnNpdGlvbmVuZENiKVxuICAgICAgICB0aGlzLnRyYW5zaXRpb25PbigpXG4gICAgICAgIC8vIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24nKVxuXG4gICAgICAgIHRoaXMud3JhcC5zdHlsZS5vcGFjaXR5ID0gJzAnXG4gICAgICAgIC8vIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3NvbGlkJylcbiAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgIHJlamVjdChlcnIpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICB0cmFuc2l0aW9uT2ZmKCkge1xuICAgIHRoaXMud3JhcC5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnXG4gIH0sXG5cbiAgdHJhbnNpdGlvbk9uKCkge1xuICAgIHRoaXMud3JhcC5zdHlsZS50cmFuc2l0aW9uID0gdGhpcy50cmFuc2l0aW9uU2V0dXBcbiAgfVxufVxuXG4vLyBjb25zb2xlLmxvZygnTGFyZ2VWaWV3JywgTGFyZ2VWaWV3KVxuXG5jbGFzcyBFbmxhcmdhYmxlIHtcbiAgY29uc3RydWN0b3IoZWwsIHVybCkge1xuICAgIHRoaXMuZWwgPSBlbFxuICAgIHRoaXMudXJsID0gdXJsXG5cbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0NiLmJpbmQodGhpcykpXG4gIH1cblxuICBlbmxhcmdlKHVybCkge1xuICAgIExhcmdlVmlldy5zaG93KHVybClcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnRW5sYXJnYWJsZS5lbmxhcmdlLCBMYXJnZVZpZXcgc2hvd24nKVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfSlcblxuICB9XG5cbiAgY2xpY2tDYigpIHtcbiAgICBjb25zb2xlLmxvZygnRW5sYXJnYWJsZS5jbGlja0NiLCB0aGlzOiAnLCB0aGlzKTtcbiAgICB0aGlzLmVubGFyZ2UodGhpcy51cmwpXG4gIH1cbn1cblxuLypcbmZ1bmN0aW9uIGVubGFyZ2VTaG93Y2FzZSgpIHtcbiAgY29uc3QgaW1hZ2VVcmwgPSBnZXRCYWNrZ3JvdW5kSW1hZ2VVcmwodGhpcylcbiAgTGFyZ2VWaWV3LnNob3coaW1hZ2VVcmwpXG59XG5cbmZ1bmN0aW9uIGdldEVubGFyZ2FibGVFbGVtZW50cygpIHtcbiAgdmFyIGVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvdXQgLnNob3djYXNlIC5pbWFnZS10aHVtYicpXG4gIGVscyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGVscywgMClcblxuICBlbHMuZm9yRWFjaChlbCA9PiB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlbmxhcmdlU2hvd2Nhc2VDYilcbiAgfSlcbn1cbiovXG5cbmV4cG9ydCB7TGFyZ2VWaWV3LCBFbmxhcmdhYmxlfVxuIiwiXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82OTQyNzg1L3dpbmRvdy1pbm5lcndpZHRoLXZzLWRvY3VtZW50LWRvY3VtZW50ZWxlbWVudC1jbGllbnR3aWR0aFxuLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTU2Mzg4I2MxNFxuZnVuY3Rpb24gZ2V0Vmlld3BvcnRIZWlnaHQoKSB7XG4gIC8vIGdldEVsZW1lbnRzQnlUYWdOYW1lLCBpZiBJJ20gbm90IG1pc3Rha2VuIHJldHVybnMgYSBsaXZlbGlzdCAoaGVsbCBrbm93cyB3aGF0IHRoYXQgaXMsIGJ1dCBpdCdzXG4gIC8vIHVwZGF0ZWQgbGl2ZSAtIGFzIGRvbSBnZXRzIGNoYW5nZWQpLiBJJ20gbm90IHN1cmUgYWJvdXQgdXNpbmcgaXQsIGl0IGJlaGF2ZWQgbWlzdGVyaW91c2x5IG9uY2UuLi5cbiAgLy8gQnV0LCBxdWVyeVNlbGVjdG9yIGlzIG5vdCBzbyBjb21wYXRpYmxlLlxuICAvLyBNYXliZTogKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLmNsaWVudFdpZHRoKVxuICByZXR1cm4gd2luZG93LmlubmVySGVpZ2h0ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgP1xuICAgIE1hdGgubWluKHdpbmRvdy5pbm5lckhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgOlxuICAgIHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgICB8fCAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uY2xpZW50SGVpZ2h0KTtcbn1cblxuZnVuY3Rpb24gZ2V0Vmlld3BvcnRXaWR0aCgpIHtcbiAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA/XG4gICAgTWF0aC5taW4od2luZG93LmlubmVyV2lkdGgsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCkgOlxuICAgIHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxuICAgICAgfHwgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLmNsaWVudFdpZHRoKTtcbn1cblxuXG4vKlxuXG5Ob2RlTGlzdCB0byBhcnJheVxuZnVuY3Rpb24gdG9BcnJheShvYmopIHtcbiAgdmFyIGFycmF5ID0gW107XG4gIC8vIGl0ZXJhdGUgYmFja3dhcmRzIGVuc3VyaW5nIHRoYXQgbGVuZ3RoIGlzIGFuIFVJbnQzMlxuICBmb3IgKHZhciBpID0gb2JqLmxlbmd0aCA+Pj4gMDsgaS0tOykge1xuICAgIGFycmF5W2ldID0gb2JqW2ldO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cbiovXG5cbmZ1bmN0aW9uIGdldEJhY2tncm91bmRJbWFnZVVybChlbCkge1xuICBjb25zdCBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpXG5cbiAgY29uc3QgcmVneCA9IG5ldyBSZWdFeHAoLy4qdXJsXFwoKD86XFxcIj8nPykoLispKD86LlxcJz9cXFwiPylcXCkuKi9nKVxuICBjb25zdCByZXN1bHQgPSByZWd4LmV4ZWMoY29tcHV0ZWRTdHlsZVsnYmFja2dyb3VuZC1pbWFnZSddKVxuXG4gIGlmIChyZXN1bHRbMV0pIHtcbiAgICByZXR1cm4gcmVzdWx0WzFdXG4gIH1cbn1cblxuZnVuY3Rpb24gbG9nRmFjdG9yeShlbnYpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBpZiAoIWVudi5kZXYpIHJldHVyblxuXG4gICAgY29uc29sZS50cmFjZSgpXG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgfVxufVxuXG5leHBvcnQge2dldFZpZXdwb3J0V2lkdGgsIGdldFZpZXdwb3J0SGVpZ2h0LCBnZXRCYWNrZ3JvdW5kSW1hZ2VVcmwsIGxvZ0ZhY3Rvcnl9XG4iLCJpbXBvcnQge2dldFZpZXdwb3J0V2lkdGgsIGdldFZpZXdwb3J0SGVpZ2h0fSBmcm9tICcuL2xpYi5qcydcblxuY2xhc3MgUGhvdG8ge1xuICBjb25zdHJ1Y3Rvcih1cmwpIHtcbiAgICB0aGlzLnVybCA9IHVybFxuICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICB9XG5cbiAgbG9hZCgpIHtcbiAgICAvLyBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuZWwub25sb2FkID0gKCkgPT4ge1xuICAgICAgICByZXNvbHZlKHRoaXMpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWwuc3JjID0gdGhpcy51cmxcbiAgICB9KVxuICB9XG5cbiAgY2FsY3VsYXRlRml0QnlCb3RoU2lkZXMoaW1nRGltcywgY29udGFpbmVyRGltcykge1xuICAgIC8vIGNvbnN0IGltZ0RpbXMgPSBpbWcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAvLyBjb25zdCBjb250YWluZXJEaW1zID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICBpbWdEaW1zLnJhdGlvID0gaW1nRGltcy53aWR0aCAvIGltZ0RpbXMuaGVpZ2h0XG4gICAgY29udGFpbmVyRGltcy5yYXRpbyA9IGNvbnRhaW5lckRpbXMud2lkdGggLyBjb250YWluZXJEaW1zLmhlaWdodFxuXG4gICAgLy8gaWYgd2lkZXIgdGhhbiBoaWdoZXJcbiAgICBpZiAoaW1nRGltcy5yYXRpbyA+PSBjb250YWluZXJEaW1zLnJhdGlvKSB7XG4gICAgICBjb25zdCBpbWdEaW1zTmV3ID0ge1xuICAgICAgICB3aWR0aDogY29udGFpbmVyRGltcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBjb250YWluZXJEaW1zLndpZHRoIC8gaW1nRGltcy5yYXRpb1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW1nRGltc05ld1xuXG4gICAgLy8gaWYgaGlnaGVyIHRoYW4gd2lkZXJcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW1nRGltc05ldyA9IHtcbiAgICAgICAgLy8gd2lkdGg6IGNvbnRhaW5lckRpbXMuaGVpZ2h0ICogaW1nRGltcy5yYXRpbyxcbiAgICAgICAgd2lkdGg6IGNvbnRhaW5lckRpbXMuaGVpZ2h0ICogaW1nRGltcy5yYXRpbyxcbiAgICAgICAgaGVpZ2h0OiBjb250YWluZXJEaW1zLmhlaWdodFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW1nRGltc05ld1xuICAgIH1cblxuICB9XG5cbiAgY2FsY3VsYXRlRml0QnlIZWlnaHQoaW1nRGltcywgY29udGFpbmVyRGltcykge1xuICAgIC8vIGNvbnN0IGltZ0RpbXMgPSBpbWcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAvLyBjb25zdCBjb250YWluZXJEaW1zID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICBpbWdEaW1zLnJhdGlvID0gaW1nRGltcy53aWR0aCAvIGltZ0RpbXMuaGVpZ2h0XG4gICAgY29uc3QgaW1nRGltc05ldyA9IHtcbiAgICAgIGhlaWdodDogY29udGFpbmVyRGltcy5oZWlnaHQsXG4gICAgICB3aWR0aDogY29udGFpbmVyRGltcy5oZWlnaHQgKiBpbWdEaW1zLnJhdGlvLFxuICAgICAgcmF0aW86IGltZ0RpbXMucmF0aW9cbiAgICB9XG5cbiAgICByZXR1cm4gaW1nRGltc05ld1xuICB9XG5cbiAgZml0QnlIZWlnaHQoY29udGFpbmVyKSB7XG4gICAgdGhpcy5kaW1zID0gdGhpcy5jYWxjdWxhdGVGaXRCeUhlaWdodChcbiAgICAgIHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICApXG5cbiAgICAvLyBjb25zdCBpbWdEaW1zID0gdGhpcy5jYWxjdWxhdGVGaXRCeUhlaWdodChpbWcsIHRoaXMuZWwpXG4gICAgdGhpcy5lbC5zdHlsZS53aWR0aCA9IHRoaXMuZGltcy53aWR0aFxuICAgIHRoaXMuZWwuc3R5bGUuaGVpZ2h0ID0gdGhpcy5kaW1zLmhlaWdodFxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGZpdEJ5Qm90aFNpZGVzKGNvbnRhaW5lcikge1xuICAgIHRoaXMuZGltcyA9IHRoaXMuY2FsY3VsYXRlRml0QnlCb3RoU2lkZXMoXG4gICAgICB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgKVxuXG4gICAgdGhpcy5lbC5zdHlsZS53aWR0aCA9IHRoaXMuZGltcy53aWR0aCArICdweCdcbiAgICB0aGlzLmVsLnN0eWxlLmhlaWdodCA9IHRoaXMuZGltcy5oZWlnaHQgKyAncHgnXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgY2xlYXJJbmxpbmVTdHlsZXMoKSB7XG4gICAgaWYgKHRoaXMuZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkpIHtcbiAgICAgIHRoaXMuZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3dpZHRoJylcbiAgICAgIHRoaXMuZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElFOVxuICAgICAgdGhpcy5lbC5zdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ3dpZHRoJylcbiAgICAgIHRoaXMuZWwuc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdoZWlnaHQnKVxuICAgIH1cbiAgfVxuXG4gIGhpZGUoaGFyZCkge1xuICAgIGhhcmQgPyB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIiA6IHRoaXMuZWwuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCJcbiAgfVxuXG4gIHNob3coaGFyZCkge1xuICAgIGlmIChoYXJkKSB7XG4gICAgICB0aGlzLmVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdkaXNwbGF5JylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndmlzaWJpbGl0eScpXG4gICAgfVxuXG4gICAgLy8gaGFyZCA/IHRoaXMuZWwuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCIgOiB0aGlzLmVsLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIlxuICB9XG59XG5cbmV4cG9ydCB7UGhvdG99XG4iXSwic291cmNlUm9vdCI6IiJ9