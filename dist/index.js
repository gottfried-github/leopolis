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
  var en = false;
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
  var langSwitch = document.querySelector('.lang-switch');
  langSwitch.addEventListener('click', function () {
    if (!en) {
      enSwitch.classList.add('noned');
      uaSwitch.classList.remove('noned');
      switchToEn();
      en = true;
    } else {
      uaSwitch.classList.add('noned');
      enSwitch.classList.remove('noned');
      switchToUa();
      en = false;
    }
  }); // enSwitch.addEventListener('click', () => {
  //   enSwitch.classList.add('noned')
  //   uaSwitch.classList.remove('noned')
  //
  //   switchToEn()
  // })
  // uaSwitch.addEventListener('click', () => {
  //   uaSwitch.classList.add('noned')
  //   enSwitch.classList.remove('noned')
  //
  //   switchToUa()
  // })
}

function initNavAnimation(navBreakpoint) {
  var nav = document.querySelector('.navigation'); // const logo = document.querySelector('.header_container .logo')
  // const lang = document.querySelector('.header_container .lang-switch')

  var enlarged = true;
  window.addEventListener('scroll', function (ev) {
    if (window.scrollY > navBreakpoint && enlarged) {
      nav.classList.remove('larger'); // logo.classList.remove('larger')
      // lang.classList.remove('larger')

      enlarged = false;
    } else if (window.scrollY < navBreakpoint && !enlarged) {
      nav.classList.add('larger'); // logo.classList.add('larger')
      // lang.classList.add('larger')

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
        // maybe this doesnt work in safari mobile...
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
      var imgDims = this.el.getBoundingClientRect();
      var containerDims = container.getBoundingClientRect();
      var imgDimsObj = {
        width: imgDims.width,
        height: imgDims.height
      };
      var containerDimsObj = {
        width: containerDims.width,
        height: containerDims.height
      };
      this.dims = this.calculateFitByHeight(imgDimsObj, containerDimsObj); // const imgDims = this.calculateFitByHeight(img, this.el)

      this.el.style.width = Math.round(this.dims.width) + 'px';
      this.el.style.height = Math.round(this.dims.height) + 'px';
      return this;
    } // in fitByHeight I didn't convert dims to string before setting them on
    // width and height in inline styles.. However, I believe, on mobile the fitByBothSides
    // should have been called, where there wasn't this typo. In the fitByBothSides I didn't
    // convert the values to whole numbers, none the less.
    // I fixed that, and I also decided to move the values of getBoundingClientRect output
    // to a regular object literal, instead of using the output itself (which i believe is an instance
    // of some special class), including adding new properties to it.
    // Another thing I want to check is whether or not the width and height in getBoundingClientRect are
    // basic implementation.. Also, maybe it makes sense to parseInt the values of getBoundingClientRect,
    // or doing something in that spirit

  }, {
    key: "fitByBothSides",
    value: function fitByBothSides(container) {
      var imgDims = this.el.getBoundingClientRect();
      var containerDims = container.getBoundingClientRect();
      var imgDimsObj = {
        width: imgDims.width,
        height: imgDims.height
      };
      var containerDimsObj = {
        width: containerDims.width,
        height: containerDims.height
      };
      this.dims = this.calculateFitByBothSides(imgDimsObj, containerDims);
      this.el.style.width = Math.round(this.dims.width) + 'px';
      this.el.style.height = Math.round(this.dims.height) + 'px';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXJnZS12aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Bob3RvLmpzIl0sIm5hbWVzIjpbIkRlY2tJdGVtIiwiaW1hZ2VVcmwiLCJpbmRleCIsIm9wdGlvbnMiLCJlbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImNvbnRlbnRFbCIsImNvbnRlbnRXcmFwIiwiYXBwZW5kQ2hpbGQiLCJuYXJyb3dNb2RlIiwiZ2V0Vmlld3BvcnRXaWR0aCIsImJyZWFrcG9pbnQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXYiLCJwaG90byIsImZpdEJ5Qm90aFNpZGVzIiwidHVybk9mZk5hcnJvd01vZGUiLCJQaG90byIsImxvYWRQaG90byIsImNhdGNoIiwiZXJyIiwibW9kZSIsImNsZWFySW5saW5lU3R5bGVzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJvZmZzZXRMZWZ0IiwiZ2V0T2Zmc2V0IiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJzdHlsZSIsIm9mZnNldCIsImRlY2tQb3NpdGlvbiIsImdldERlY2tQb3NpdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJnZXRHYWxsZXJ5Vmlld3BvcnRXaWR0aCIsInVybCIsImxvYWQiLCJ0aGVuIiwicGhvdG9Mb2FkQ2IiLCJoaWRlIiwic2hvdyIsIlByb21pc2UiLCJyZWplY3QiLCJEZWNrIiwiaW1hZ2VVcmxzIiwicG9zaXRpb24iLCJsb2FkZWQiLCJpdGVtc0xvYWRlZCIsIml0ZW1zIiwiaW5pdEl0ZW1zIiwiYXBwZW5kSXRlbXMiLCJ0cmFuc2Zvcm0iLCJpdGVtT2Zmc2V0IiwiZ2V0TWlkcG9pbnQiLCJnYWxsZXJ5TWlkcG9pbnQiLCJkZWNrT2Zmc2V0TmV3IiwiY2VudGVyZWQiLCJsZW5ndGgiLCJFcnJvciIsInVuZGVmaW5lZCIsImRlY2tQb3NpdGlvbk5ldyIsImNhbGN1bGF0ZURlY2tPZmZzZXRDZW50ZXJlZCIsImNhbGN1bGF0ZURlY2tPZmZzZXQiLCJ0cmFuc2l0aW9uaW5nIiwibWFrZU1hdHJpeCIsInRyYW5zaXRpb25lbmRDYiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJiaW5kIiwieCIsImxlZnQiLCJyZW1vdmUiLCJ1cmxzIiwibWFwIiwiaSIsImxvYWRDYiIsIml0ZW0iLCJmb3JFYWNoIiwiYXBwZW5kSXRlbSIsIkdhbGxlcnkiLCJwaG90b1VybHMiLCJkZWNrIiwiYWN0aXZlSXRlbSIsImdvVG9JdGVtIiwiU2hvd2Nhc2VJbWFnZSIsImdldEJhY2tncm91bmRJbWFnZVVybCIsIkVubGFyZ2FibGUiLCJub2RlTGlzdFRvQXJyYXkiLCJzZWxlY3RvciIsImVscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImluaXRFbmxhcmdhYmxlcyIsImluaXRHYWxsZXJ5IiwiY29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsImdhbGxlcnkiLCJhcnJvd3MiLCJnb1RvUHJldmlvdXMiLCJnb1RvTmV4dCIsImluaXRMYW5nU3dpdGNoIiwiZW4iLCJjb250ZW50RW4iLCJjb250ZW50VWEiLCJzd2l0Y2hUb0VuIiwic3dpdGNoVG9VYSIsImVuU3dpdGNoIiwidWFTd2l0Y2giLCJsYW5nU3dpdGNoIiwiaW5pdE5hdkFuaW1hdGlvbiIsIm5hdkJyZWFrcG9pbnQiLCJuYXYiLCJlbmxhcmdlZCIsInNjcm9sbFkiLCJib290IiwiZ2FsbGVyeVVybHMiLCJsYXJnZVZpZXdXcmFwIiwiTGFyZ2VWaWV3IiwiaW5pdCIsInRyYW5zaXRpb24iLCJkaXNwbGF5Iiwid3JhcCIsInRyYW5zaXRpb25TZXR1cCIsIm9wYWNpdHkiLCJoaWRkZW4iLCJzZXRQaG90byIsInJlcGxhY2VDaGlsZCIsInJlc29sdmUiLCJzZWxmIiwidHJhbnNpdGlvbk9mZiIsInRyYW5zaXRpb25PbiIsInNob3dQZW5kaW5nIiwic2hvd1RpbWVvdXRJZCIsInNldFRpbWVvdXQiLCJjbGlja0NiIiwiZW5sYXJnZSIsImdldFZpZXdwb3J0SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJNYXRoIiwibWluIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJpbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJjb21wdXRlZFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInJlZ3giLCJSZWdFeHAiLCJyZXN1bHQiLCJleGVjIiwibG9nRmFjdG9yeSIsImVudiIsImRhdGEiLCJkZXYiLCJ0cmFjZSIsIm9ubG9hZCIsInNyYyIsImltZ0RpbXMiLCJjb250YWluZXJEaW1zIiwicmF0aW8iLCJpbWdEaW1zTmV3IiwiaW1nRGltc09iaiIsImNvbnRhaW5lckRpbXNPYmoiLCJkaW1zIiwiY2FsY3VsYXRlRml0QnlIZWlnaHQiLCJyb3VuZCIsImNhbGN1bGF0ZUZpdEJ5Qm90aFNpZGVzIiwicmVtb3ZlUHJvcGVydHkiLCJyZW1vdmVBdHRyaWJ1dGUiLCJoYXJkIiwidmlzaWJpbGl0eSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlD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QVE0QixLQUFSLENBQWNnSixjQUFkLENBQTZCLFNBQTdCO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBSzVLLEVBQUwsQ0FBUTRCLEtBQVIsQ0FBY2dKLGNBQWQsQ0FBNkIsWUFBN0I7QUFDRCxPQUxRLENBT1Q7O0FBQ0QiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7UGhvdG99IGZyb20gJy4vcGhvdG8uanMnXG5pbXBvcnQge2dldFZpZXdwb3J0V2lkdGgsIGdldFZpZXdwb3J0SGVpZ2h0LCBsb2dGYWN0b3J5fSBmcm9tICcuL2xpYi5qcydcblxuY2xhc3MgRGVja0l0ZW0ge1xuICBjb25zdHJ1Y3RvcihpbWFnZVVybCwgaW5kZXgsIG9wdGlvbnMpIHtcbiAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLmVsLmNsYXNzTmFtZSA9ICdkZWNrLWl0ZW0nXG5cbiAgICB0aGlzLmNvbnRlbnRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy5jb250ZW50RWwuY2xhc3NOYW1lID0gJ2RlY2staXRlbS1jb250ZW50J1xuXG4gICAgY29uc3QgY29udGVudFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRlbnRXcmFwLmNsYXNzTmFtZSA9ICdkZWNrLWl0ZW0tY29udGVudF93cmFwcGVyJ1xuICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoY29udGVudFdyYXApXG4gICAgY29udGVudFdyYXAuYXBwZW5kQ2hpbGQodGhpcy5jb250ZW50RWwpXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gICAgdGhpcy5uYXJyb3dNb2RlID0gZ2V0Vmlld3BvcnRXaWR0aCgpIDwgdGhpcy5vcHRpb25zLmJyZWFrcG9pbnRcbiAgICB0aGlzLmluZGV4ID0gaW5kZXhcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoZXYpID0+IHtcbiAgICAgIGlmIChnZXRWaWV3cG9ydFdpZHRoKCkgPD0gdGhpcy5vcHRpb25zLmJyZWFrcG9pbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLm5hcnJvd01vZGUpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmVzaXplLCB0dXJuaW5nIG9uJylcbiAgICAgICAgICB0aGlzLm5hcnJvd01vZGUgPSB0cnVlXG4gICAgICAgICAgLy8gdGhpcy50dXJuT25OYXJyb3dNb2RlKClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucGhvdG8uZml0QnlCb3RoU2lkZXModGhpcy5lbClcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMubmFycm93TW9kZSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNpemUsIHR1cm5pbmcgT2ZmJylcbiAgICAgICAgICB0aGlzLnR1cm5PZmZOYXJyb3dNb2RlKClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSlcblxuICAgIHRoaXMucGhvdG8gPSBuZXcgUGhvdG8oaW1hZ2VVcmwpXG4gICAgdGhpcy5sb2FkUGhvdG8oKS5jYXRjaCgoZXJyKSA9PiB7dGhyb3cgZXJyfSlcbiAgfVxuXG4gIHR1cm5Pbk5hcnJvd01vZGUobW9kZSkge1xuICAgIC8vIHRoaXMubmFycm93TW9kZSA9IHRydWVcblxuICAgIC8vIHRoaXMgcGVyaGFwcyB3b3VsZCBiZSBiZXR0ZXIgdG8gc2V0IHdpdGggY3NzIHZ3XG4gICAgLy8gdGhpcy5lbC5zdHlsZS53aWR0aCA9IGdldFZpZXdwb3J0V2lkdGgoKSArICdweCdcblxuICAgIC8vIHRoaXMucGhvdG8uZml0QnlCb3RoU2lkZXModGhpcy5lbClcbiAgfVxuXG4gIHR1cm5PZmZOYXJyb3dNb2RlKCkge1xuICAgIHRoaXMubmFycm93TW9kZSA9IGZhbHNlXG4gICAgLy8gdGhpcy5waG90by5maXRCeUhlaWdodCh0aGlzLmVsKVxuXG4gICAgLy8gdGhpcy5lbC5zdHlsZS53aWR0aCA9IHRoaXMucGhvdG8uZGltcy53aWR0aCArICdweCdcbiAgICB0aGlzLnBob3RvLmNsZWFySW5saW5lU3R5bGVzKClcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoXG4gIH1cblxuICAvLyBnZXQgcG9zaXRpb24gb2YgdGhlIGl0ZW0sIHJlbGF0aXZlIHRvIHRoZSBjb250YWluaW5nIERlY2tcbiAgZ2V0T2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLmVsLm9mZnNldExlZnRcbiAgfVxuXG4gIC8vIGdldCBwb3NpdGlvbiBvZiB0aGUgbWlkcG9pbnQgb2YgdGhlIGl0ZW0sIHJlbGF0aXZlIHRvIHRoZSBjb250YWluaW5nIGRlY2tcbiAgZ2V0TWlkcG9pbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0T2Zmc2V0KCkgKyAodGhpcy5nZXRXaWR0aCgpIC8gMilcbiAgfVxuXG4gIC8qKlxuICAgIEBwYXJhbSB7U3RyaW5nfSBoZWlnaHQgaGVpZ2h0IGluIGNzcyBzeW50YXhcbiAgKi9cbiAgc2V0SGVpZ2h0KGhlaWdodCkge1xuICAgIHRoaXMuZWwuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0XG4gIH1cblxuICBzZXRXaWR0aCh3aWR0aCkge1xuICAgIHRoaXMuZWwuc3R5bGUud2lkdGggPSB3aWR0aFxuICB9XG5cbiAgaXNJblZpZXcoKSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5nZXRPZmZzZXQoKVxuICAgIGNvbnN0IGRlY2tQb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5nZXREZWNrUG9zaXRpb24oKVxuICAgIGNvbnNvbGUubG9nKCdkZWNrSXRlbS5pc0luVmlldywgb2Zmc2V0OiAnLCBvZmZzZXQpO1xuICAgIGNvbnNvbGUubG9nKCdkZWNrSXRlbS5pc0luVmlldywgd2lkdGg6ICcsIHRoaXMuZ2V0V2lkdGgoKSk7XG4gICAgY29uc29sZS5sb2coJ2RlY2tJdGVtLmlzSW5WaWV3LCBnZXREZWNrUG9zaXRpb246ICcsIHRoaXMub3B0aW9ucy5nZXREZWNrUG9zaXRpb24oKSk7XG4gICAgY29uc29sZS5sb2coJ2RlY2tJdGVtLmlzSW5WaWV3LCBnZXRHYWxsZXJ5Vmlld3BvcnRXaWR0aDogJywgdGhpcy5vcHRpb25zLmdldEdhbGxlcnlWaWV3cG9ydFdpZHRoKCkpO1xuXG4gICAgLy8gZGVja1Bvc2l0aW9uIGNvdWxkIGJlIG5lZ2F0aXZlXG4gICAgcmV0dXJuIG9mZnNldCArIGRlY2tQb3NpdGlvbiA+PSAwICYmXG4gICAgZGVja1Bvc2l0aW9uICsgb2Zmc2V0ICsgdGhpcy5nZXRXaWR0aCgpIDw9IHRoaXMub3B0aW9ucy5nZXRHYWxsZXJ5Vmlld3BvcnRXaWR0aCgpXG4gICAgICA/IHRydWUgOiBmYWxzZVxuXG4gICAgLy8gaWYgKFxuICAgIC8vICAgdGhpcy5nZXRPZmZzZXQoKSArIHRoaXMub3B0aW9ucy5nZXREZWNrUG9zaXRpb24oKSA+IDAgJiZcbiAgICAvLyAgIHRoaXMuZ2V0T2Zmc2V0KCkgKyB0aGlzLmdldFdpZHRoKCkgPCB0aGlzLm9wdGlvbnMuZ2V0R2FsbGVyeVZpZXdwb3J0V2lkdGgoKVxuICAgIC8vICkge1xuICAgIC8vXG4gICAgLy8gfVxuICB9XG5cbiAgbG9hZFBob3RvKHVybCkge1xuICAgIHJldHVybiB0aGlzLnBob3RvLmxvYWQoKSAvLyBQaG90by5wcm90b3R5cGUubG9hZEltYWdlKClcbiAgICAudGhlbigocGhvdG8pID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5waG90b0xvYWRDYihwaG90bylcblxuICAgICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIHNlZSB0aGUgaW1nLCBidXQgd2Ugd2FudCB0byBiZSBhYmxlIHRvIG1lYXN1cmUgaXQgd2l0aCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgKHNvIGRpc3BsYXk6IG5vbmUgaXMgbm90IGEgZml0KVxuICAgICAgICAvLyBpbWcuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCJcbiAgICAgICAgcGhvdG8uaGlkZSgpXG4gICAgICAgIHRoaXMuY29udGVudEVsLmFwcGVuZENoaWxkKHBob3RvLmVsKVxuXG4gICAgICAgIGlmICghdGhpcy5uYXJyb3dNb2RlKSB7XG4gICAgICAgICAgLy8gYXQgdGhlIG1vbWVudCwgc2VlbXMgbGlrZSB3ZSBoYW5kbGUgYWxsIG9mIHRoaXMgd2l0aCBjc3MsXG4gICAgICAgICAgLy8gYW5kIGRvbid0IG5lZWQgdG8gZml0ZSB0aGUgcGhvdG8gYW5kIHNldCBpdCdzIGNvbnRhaW5lcidzIHdpZHRoIHJlc3BlY3RpdmVseVxuXG4gICAgICAgICAgLy8gdGhpcy5waG90by5maXRCeUhlaWdodCh0aGlzLmVsKVxuICAgICAgICAgIC8vIHRoaXMuZWwuc3R5bGUud2lkdGggPSB0aGlzLnBob3RvLmRpbXMud2lkdGggKyAncHgnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5waG90by5maXRCeUJvdGhTaWRlcyh0aGlzLmNvbnRlbnRFbClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucGhvdG8uc2hvdygpXG4gICAgICAgIC8vIGltZy5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXG4gICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICBQcm9taXNlLnJlamVjdChlcnIpXG4gICAgICB9XG5cbiAgICB9KVxuICAgIC8vIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgLy8gICB0aHJvdyBlcnJcbiAgICAvLyB9KVxuICB9XG59XG5cbmNsYXNzIERlY2sge1xuICBjb25zdHJ1Y3RvcihpbWFnZVVybHMsIG9wdGlvbnMpIHtcbiAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLmVsLmNsYXNzTmFtZSA9ICdnYWxsZXJ5LWRlY2snXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG5cbiAgICB0aGlzLmJyZWFrcG9pbnQgPSBvcHRpb25zLmJyZWFrcG9pbnRcbiAgICB0aGlzLnBvc2l0aW9uID0gMFxuICAgIHRoaXMub2Zmc2V0ID0gMFxuXG4gICAgdGhpcy5sb2FkZWQgPSBmYWxzZVxuICAgIHRoaXMuaXRlbXNMb2FkZWQgPSAwXG4gICAgdGhpcy5pdGVtcyA9IHRoaXMuaW5pdEl0ZW1zKGltYWdlVXJscylcbiAgICB0aGlzLmFwcGVuZEl0ZW1zKClcblxuICAgIC8vIGluaXRpYWxpemUgdGhlIHRyYW5zZm9ybSBtYXRyaXggc3R5bGluZ1xuICAgIHRoaXMuZWwuc3R5bGUudHJhbnNmb3JtID0gJ21hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKSdcblxuICAgIC8vIHdpbmRvdy5vbigncmVzaXplJywgKGV2KSA9PiB7XG4gICAgLy8gICBpZiAoZ2V0Vmlld3BvcnRXaWR0aCgpIDwgdGhpcy5icmVha3BvaW50KSB7XG4gICAgLy9cbiAgICAvLyAgIH1cbiAgICAvLyB9KVxuICB9XG5cbiAgLypcbiAgY2FsY3VsYXRlRGVja09mZnNldChpbmRleCkge1xuICAgIGlmIChnZXRWaWV3cG9ydFdpZHRoKCkgPCB0aGlzLmJyZWFrcG9pbnQpIHtcbiAgICAgIGNvbnN0IGl0ZW1PZmZzZXQgPSB0aGlzLml0ZW1zW2luZGV4XS5nZXRPZmZzZXQoKVxuICAgICAgY29uc3QgZGVja09mZnNldE5ldyA9IC1pdGVtT2Zmc2V0XG5cbiAgICAgIHJldHVybiBkZWNrT2Zmc2V0TmV3XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGl0ZW1PZmZzZXQgPSB0aGlzLml0ZW1zW2luZGV4XS5nZXRNaWRwb2ludCgpXG5cbiAgICAgIGNvbnN0IGdhbGxlcnlNaWRwb2ludCA9IHRoaXMub3B0aW9ucy5nZXRHYWxsZXJ5Vmlld3BvcnRXaWR0aCgpIC8gMiAvLyAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLyAyXG4gICAgICBjb25zdCBkZWNrT2Zmc2V0TmV3ID0gLWl0ZW1PZmZzZXQgKyBnYWxsZXJ5TWlkcG9pbnRcblxuICAgICAgLy8gY29uc29sZS5sb2coJ0RlY2suY2FsY3VsYXRlRGVja09mZnNldCwgaW5kZXgnLCBpbmRleClcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdEZWNrLmNhbGN1bGF0ZURlY2tPZmZzZXQsIGl0ZW1zW2luZGV4XScsIHRoaXMuaXRlbXNbaW5kZXhdKVxuICAgICAgLy8gY29uc29sZS5sb2coJ0RlY2suY2FsY3VsYXRlRGVja09mZnNldCwgaXRlbXNbaW5kZXhdJywgdGhpcy5pdGVtc1tpbmRleF0uZ2V0TWlkcG9pbnQoKSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdEZWNrLmNhbGN1bGF0ZURlY2tPZmZzZXQsIGl0ZW1PZmZzZXQnLCBpdGVtT2Zmc2V0KVxuICAgICAgLy8gY29uc29sZS5sb2coJ0RlY2suY2FsY3VsYXRlRGVja09mZnNldCwgZGVja09mZnNldE5ldycsIGRlY2tPZmZzZXROZXcpXG5cbiAgICAgIHJldHVybiBkZWNrT2Zmc2V0TmV3XG4gICAgfVxuICB9XG4gICovXG5cbiAgY2FsY3VsYXRlRGVja09mZnNldENlbnRlcmVkKGluZGV4KSB7XG4gICAgY29uc3QgaXRlbU9mZnNldCA9IHRoaXMuaXRlbXNbaW5kZXhdLmdldE1pZHBvaW50KClcblxuICAgIGNvbnN0IGdhbGxlcnlNaWRwb2ludCA9IHRoaXMub3B0aW9ucy5nZXRHYWxsZXJ5Vmlld3BvcnRXaWR0aCgpIC8gMiAvLyAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLyAyXG4gICAgY29uc3QgZGVja09mZnNldE5ldyA9IC1pdGVtT2Zmc2V0ICsgZ2FsbGVyeU1pZHBvaW50XG5cbiAgICAvLyBjb25zb2xlLmxvZygnRGVjay5jYWxjdWxhdGVEZWNrT2Zmc2V0LCBpbmRleCcsIGluZGV4KVxuICAgIC8vIGNvbnNvbGUubG9nKCdEZWNrLmNhbGN1bGF0ZURlY2tPZmZzZXQsIGl0ZW1zW2luZGV4XScsIHRoaXMuaXRlbXNbaW5kZXhdKVxuICAgIC8vIGNvbnNvbGUubG9nKCdEZWNrLmNhbGN1bGF0ZURlY2tPZmZzZXQsIGl0ZW1zW2luZGV4XScsIHRoaXMuaXRlbXNbaW5kZXhdLmdldE1pZHBvaW50KCkpXG4gICAgLy8gY29uc29sZS5sb2coJ0RlY2suY2FsY3VsYXRlRGVja09mZnNldCwgaXRlbU9mZnNldCcsIGl0ZW1PZmZzZXQpXG4gICAgLy8gY29uc29sZS5sb2coJ0RlY2suY2FsY3VsYXRlRGVja09mZnNldCwgZGVja09mZnNldE5ldycsIGRlY2tPZmZzZXROZXcpXG5cbiAgICByZXR1cm4gZGVja09mZnNldE5ld1xuICB9XG5cbiAgY2FsY3VsYXRlRGVja09mZnNldChpbmRleCkge1xuICAgIGNvbnN0IGl0ZW1PZmZzZXQgPSB0aGlzLml0ZW1zW2luZGV4XS5nZXRPZmZzZXQoKVxuICAgIGNvbnN0IGRlY2tPZmZzZXROZXcgPSAtaXRlbU9mZnNldFxuXG4gICAgcmV0dXJuIGRlY2tPZmZzZXROZXdcbiAgfVxuXG4gIC8qXG4gIC8vIFRPRE86XG4gIGdldEFjdHVhbFBvc2l0aW9uV2hpbGVUcmFuc2l0aW9uaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgKyB3aW5kb3cucGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbClbJ21hcmdpbi1sZWZ0J10pXG4gICAgLSB0aGlzLm9wdGlvbnMuZ2V0R2FsbGVyeVBvcygpLmxlZnRcbiAgICArIHdpbmRvdy5zY3JvbGxYXG4gIH1cbiAgKi9cblxuICAvKipcbiAgQHBhcmFtIHtib29sZWFufSBjZW50ZXJlZCBpZiB0cnVlIC0gY2VudGVycyB0aGUgaXRlbSwgaWYgZmFsc3kgLSBkb2Vzbid0IGNlbnRlclxuICAqL1xuICBnb1RvSXRlbShpbmRleCwgY2VudGVyZWQpIHtcblxuICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPiB0aGlzLml0ZW1zLmxlbmd0aC0xKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjYW4ndCBnbyB0byB1bmV4aXN0aW5nIGl0ZW0gYXQgXCIrIGluZGV4KVxuICAgIH1cblxuICAgIGlmICghdGhpcy5sb2FkZWQpIHtcbiAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIlwiKVxuICAgICAgLy8gVE9ETzogbWFrZSBpdCBzbyBpdCBjYW4gZ28gdG8gdGhlIGl0ZW1zIHRoYXQgYXJlIGFscmVhZHkgbG9hZGVkLCBhbmRcbiAgICAgIC8vIHRoZW4sIGFkanVzdCB0aGUgcG9zaXRpb24gb2YgdGhlIGRlY2sgc28gaXQgc3RheXMgb24gdGhlIGl0ZW0gd2UndmUgZ29uZSB0b1xuICAgICAgLy8gYXMgb3RoZXIgaXRlbXMgbG9hZCAoaWYgbmVjZXNzYXJ5KS5cbiAgICAgIC8vIFRoaXMgY291bGQgYmUgaW1wYWN0ZnVsIGlmIHRoZSBkZWNrIGlzIHJpZ2h0IGF0IHRoZSB0b3Agb2YgdGhlIHBhZ2UgYW5kIHVzZXJcbiAgICAgIC8vIHdhbnRzIHRvIGltbWVkaWF0ZWx5IGJlIGFibGUgdG8gaW50ZXJhY3Qgd2l0aCB0aGluZ3MuXG4gICAgICAvLyBjb25zb2xlLmxvZyhcInBob3RvcyBpbiB0aGUgZGVjayBoYXZlbid0IGxvYWRlZCB5ZXRcIik7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgY29uc3QgZGVja1Bvc2l0aW9uTmV3ID0gY2VudGVyZWQgPyB0aGlzLmNhbGN1bGF0ZURlY2tPZmZzZXRDZW50ZXJlZChpbmRleCkgOiB0aGlzLmNhbGN1bGF0ZURlY2tPZmZzZXQoaW5kZXgpXG5cbiAgICAvLyBUT0RPOlxuICAgIC8vIHRoaXMub2Zmc2V0ID0gdGhpcy50cmFuc2l0aW9uaW5nXG4gICAgLy8gICA/IGRlY2tQb3NpdGlvbk5ldyAtIHRoaXMuZ2V0QWN0dWFsUG9zaXRpb25XaGlsZVRyYW5zaXRpb25pbmcoKVxuICAgIC8vICAgOiBkZWNrUG9zaXRpb25OZXcgLSB0aGlzLnBvc2l0aW9uXG5cbiAgICB0aGlzLm9mZnNldCA9IGRlY2tQb3NpdGlvbk5ldyAtIHRoaXMucG9zaXRpb25cbiAgICB0aGlzLnBvc2l0aW9uID0gZGVja1Bvc2l0aW9uTmV3XG5cbiAgICBpZiAodGhpcy50cmFuc2l0aW9uaW5nKSB7XG4gICAgICB0aGlzLmVsLnN0eWxlLnRyYW5zZm9ybSA9IHRoaXMubWFrZU1hdHJpeCh0aGlzLm9mZnNldClcbiAgICB9IGVsc2Uge1xuXG4gICAgICBmdW5jdGlvbiB0cmFuc2l0aW9uZW5kQ2IoKSB7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbmVuZENiKClcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdHJhbnNpdGlvbmVuZENiKVxuICAgICAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgICAgfVxuXG4gICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24nKVxuXG4gICAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSB0cnVlXG4gICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0cmFuc2l0aW9uZW5kQ2IuYmluZCh0aGlzKSlcbiAgICAgIHRoaXMuZWwuc3R5bGUudHJhbnNmb3JtID0gdGhpcy5tYWtlTWF0cml4KHRoaXMub2Zmc2V0KVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLml0ZW1zW2luZGV4XVxuXG4gIH1cblxuICBtYWtlTWF0cml4KHgpIHtcbiAgICByZXR1cm4gJ21hdHJpeCgxLCAwLCAwLCAxLCAnKyB4ICsnLCAwKSdcbiAgfVxuXG4gIHRyYW5zaXRpb25lbmRDYigpIHtcbiAgICB0aGlzLmVsLnN0eWxlLmxlZnQgPSB0aGlzLnBvc2l0aW9uICsncHgnXG5cbiAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3RyYW5zaXRpb24nKVxuICAgIHRoaXMuZWwuc3R5bGUudHJhbnNmb3JtID0gJ21hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKSdcbiAgfVxuXG4gIGluaXRJdGVtcyh1cmxzKSB7XG4gICAgcmV0dXJuIHVybHMubWFwKCh1cmwsIGkpID0+IHtcbiAgICAgIHJldHVybiBuZXcgRGVja0l0ZW0odXJsLCBpLCB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IHRoaXMuYnJlYWtwb2ludCxcbiAgICAgICAgcGhvdG9Mb2FkQ2I6ICgpID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInBob3RvTG9hZENiLCBkZWNrLml0ZW1zTG9hZGVkOiBcIiwgdGhpcy5pdGVtc0xvYWRlZCk7XG4gICAgICAgICAgdGhpcy5pdGVtc0xvYWRlZCsrXG5cbiAgICAgICAgICBpZiAodGhpcy5pdGVtc0xvYWRlZCA9PSB0aGlzLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJwaG90b0xvYWRDYiwgZGVjay5pdGVtc0xvYWRlZCA9PSBkZWNrLml0ZW1zLmxlbmd0aCwgZGVjay5pdGVtc0xvYWRlZDogXCIsIHRoaXMuaXRlbXNMb2FkZWQpO1xuICAgICAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubG9hZENiKClcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGdldEdhbGxlcnlWaWV3cG9ydFdpZHRoOiB0aGlzLm9wdGlvbnMuZ2V0R2FsbGVyeVZpZXdwb3J0V2lkdGgsXG4gICAgICAgIGdldERlY2tQb3NpdGlvbjogKCkgPT4ge3JldHVybiB0aGlzLnBvc2l0aW9ufVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgYXBwZW5kSXRlbShpdGVtKSB7XG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZChpdGVtLmVsKVxuICB9XG5cbiAgYXBwZW5kSXRlbXMoKSB7XG4gICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgdGhpcy5hcHBlbmRJdGVtKGl0ZW0pXG4gICAgfSlcbiAgfVxufVxuXG5jbGFzcyBHYWxsZXJ5IHtcbiAgY29uc3RydWN0b3IocGhvdG9VcmxzLCBvcHRpb25zKSB7XG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy5lbC5jbGFzc05hbWUgPSAnZ2FsbGVyeSdcblxuXG4gICAgdGhpcy5kZWNrID0gbmV3IERlY2socGhvdG9VcmxzLCB7XG4gICAgICBnZXRHYWxsZXJ5Vmlld3BvcnRXaWR0aDogKCkgPT4geyByZXR1cm4gdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCB9LFxuICAgICAgbG9hZENiOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IHRoaXMuZGVjay5nb1RvSXRlbSgwLCBmYWxzZSlcbiAgICAgICAgLy8gdGhpcy5nb1RvTmV4dC5jYWxsKHRoaXMpXG4gICAgICB9LFxuICAgICAgYnJlYWtwb2ludDogb3B0aW9ucy5icmVha3BvaW50XG4gICAgfSlcblxuICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5kZWNrLmVsKVxuXG5cbiAgICAvLyBjb25zdCBhY3RpdmVJdGVtID0gdGhpcy5kZWNrLmdvVG9JdGVtKDApXG4gICAgLy8gdGhpcy5hY3RpdmVJdGVtID0gYWN0aXZlSXRlbVxuICB9XG5cbiAgZ29Ub05leHQoKSB7XG4gICAgaWYgKCF0aGlzLmRlY2subG9hZGVkKSByZXR1cm5cbiAgICBpZiAodGhpcy5hY3RpdmVJdGVtLmluZGV4ID09IHRoaXMuZGVjay5pdGVtcy5sZW5ndGgtMSkgcmV0dXJuXG5cbiAgICB0aGlzLmFjdGl2ZUl0ZW0gPSB0aGlzLmRlY2suZ29Ub0l0ZW0odGhpcy5hY3RpdmVJdGVtLmluZGV4KzEsIHRydWUpXG4gIH1cblxuICBnb1RvUHJldmlvdXMoKSB7XG4gICAgaWYgKCF0aGlzLmRlY2subG9hZGVkKSByZXR1cm5cbiAgICBpZiAodGhpcy5hY3RpdmVJdGVtLmluZGV4ID09IDApIHJldHVyblxuXG4gICAgdGhpcy5hY3RpdmVJdGVtID0gdGhpcy5kZWNrLmdvVG9JdGVtKHRoaXMuYWN0aXZlSXRlbS5pbmRleC0xLCB0cnVlKVxuICB9XG4gIC8qXG4gIC8vIFRPRE86XG4gIC8vIGdldCB0aGUgYWN0dWFsIHBvc2l0aW9uIG9mIHRoZSBlbCwgcmVsYXRpdmUgdG8gYm9keS5cbiAgZ2V0QWJzUG9zaXRpb24oKSB7XG4gICAgdmFyIHBvc2l0aW9uID0gMFxuXG4gICAgLy8gY29uc3QgY29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwpXG5cbiAgICAgIHBvc2l0aW9uID0gdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0XG4gICAgICAgICsgd2luZG93LnBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwpWydtYXJnaW4tbGVmdCddKVxuXG4gICAgICByZXR1cm4gcG9zaXRpb25cbiAgfVxuICAqL1xufVxuXG5leHBvcnQge0dhbGxlcnl9XG4iLCIvLyBpbXBvcnQge3NsaWRlfSBmcm9tICcuL3NsaWRlLmpzJ1xuaW1wb3J0IHtnZXRCYWNrZ3JvdW5kSW1hZ2VVcmx9IGZyb20gJy4vbGliLmpzJ1xuaW1wb3J0IHtHYWxsZXJ5fSBmcm9tICcuL2dhbGxlcnkuanMnXG5pbXBvcnQge0xhcmdlVmlldywgRW5sYXJnYWJsZX0gZnJvbSAnLi9sYXJnZS12aWV3LmpzJ1xuXG5jbGFzcyBTaG93Y2FzZUltYWdlIGV4dGVuZHMgRW5sYXJnYWJsZSB7XG4gIGNvbnN0cnVjdG9yKGVsKSB7XG4gICAgc3VwZXIoZWwsIGdldEJhY2tncm91bmRJbWFnZVVybChlbCkpXG4gICAgLy8gdGhpcy5pbWFnZSA9IG5ldyBFbmxhcmdhYmxlKClcbiAgfVxufVxuXG5mdW5jdGlvbiBub2RlTGlzdFRvQXJyYXkoc2VsZWN0b3IpIHtcbiAgdmFyIGVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG4gIGVscyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGVscywgMClcbiAgcmV0dXJuIGVsc1xufVxuXG5mdW5jdGlvbiBpbml0RW5sYXJnYWJsZXMoc2VsZWN0b3IpIHtcbiAgLy8gdmFyIGVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG4gIC8vIGVscyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGVscywgMClcblxuICAvLyBjb25zb2xlLmxvZyhlbHMpO1xuICB2YXIgZWxzID0gbm9kZUxpc3RUb0FycmF5KHNlbGVjdG9yKVxuXG4gIGVscy5mb3JFYWNoKGVsID0+IHtuZXcgU2hvd2Nhc2VJbWFnZShlbCl9KVxufVxuXG5mdW5jdGlvbiBpbml0R2FsbGVyeShwaG90b1VybHMpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGxlcnktY29udGFpbmVyJylcblxuICBjb25zdCBnYWxsZXJ5ID0gbmV3IEdhbGxlcnkocGhvdG9VcmxzLCB7YnJlYWtwb2ludDogODAwfSlcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdhbGxlcnkuZWwpXG5cbiAgY29uc3QgYXJyb3dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGxlcnktd3JhcCcpXG4gIGFycm93cy5xdWVyeVNlbGVjdG9yKCcuaWNvbiNid2QnKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdhbGxlcnkuZ29Ub1ByZXZpb3VzLmJpbmQoZ2FsbGVyeSkpXG4gIGFycm93cy5xdWVyeVNlbGVjdG9yKCcuaWNvbiNmd2QnKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdhbGxlcnkuZ29Ub05leHQuYmluZChnYWxsZXJ5KSlcblxuICBjb25zb2xlLmxvZygnZ2FsbGVyeScsIGdhbGxlcnkpXG59XG5cbmZ1bmN0aW9uIGluaXRMYW5nU3dpdGNoKCkge1xuXG4gIHZhciBlbiA9IGZhbHNlXG5cbiAgY29uc3QgY29udGVudEVuID0gbm9kZUxpc3RUb0FycmF5KCcudGV4dC5lbicpXG4gIGNvbnN0IGNvbnRlbnRVYSA9IG5vZGVMaXN0VG9BcnJheSgnLnRleHQudWEnKVxuXG4gIGZ1bmN0aW9uIHN3aXRjaFRvRW4oKSB7XG4gICAgY29udGVudFVhLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LmFkZCgnbm9uZWQnKSlcbiAgICBjb250ZW50RW4uZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdub25lZCcpKVxuICB9XG5cbiAgZnVuY3Rpb24gc3dpdGNoVG9VYSgpIHtcbiAgICBjb250ZW50RW4uZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QuYWRkKCdub25lZCcpKVxuICAgIGNvbnRlbnRVYS5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ25vbmVkJykpXG4gIH1cblxuICBjb25zdCBlblN3aXRjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYW5nLXN3aXRjaCAjZW4nKTtcbiAgY29uc3QgdWFTd2l0Y2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFuZy1zd2l0Y2ggI3VhJyk7XG5cbiAgY29uc3QgbGFuZ1N3aXRjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYW5nLXN3aXRjaCcpO1xuXG4gIGxhbmdTd2l0Y2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKCFlbikge1xuICAgICAgZW5Td2l0Y2guY2xhc3NMaXN0LmFkZCgnbm9uZWQnKVxuICAgICAgdWFTd2l0Y2guY2xhc3NMaXN0LnJlbW92ZSgnbm9uZWQnKVxuXG4gICAgICBzd2l0Y2hUb0VuKClcbiAgICAgIGVuID0gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICB1YVN3aXRjaC5jbGFzc0xpc3QuYWRkKCdub25lZCcpXG4gICAgICBlblN3aXRjaC5jbGFzc0xpc3QucmVtb3ZlKCdub25lZCcpXG5cbiAgICAgIHN3aXRjaFRvVWEoKVxuICAgICAgZW4gPSBmYWxzZVxuICAgIH1cbiAgfSlcblxuICAvLyBlblN3aXRjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgLy8gICBlblN3aXRjaC5jbGFzc0xpc3QuYWRkKCdub25lZCcpXG4gIC8vICAgdWFTd2l0Y2guY2xhc3NMaXN0LnJlbW92ZSgnbm9uZWQnKVxuICAvL1xuICAvLyAgIHN3aXRjaFRvRW4oKVxuICAvLyB9KVxuXG4gIC8vIHVhU3dpdGNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAvLyAgIHVhU3dpdGNoLmNsYXNzTGlzdC5hZGQoJ25vbmVkJylcbiAgLy8gICBlblN3aXRjaC5jbGFzc0xpc3QucmVtb3ZlKCdub25lZCcpXG4gIC8vXG4gIC8vICAgc3dpdGNoVG9VYSgpXG4gIC8vIH0pXG59XG5cbmZ1bmN0aW9uIGluaXROYXZBbmltYXRpb24obmF2QnJlYWtwb2ludCkge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGlvbicpXG4gIC8vIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX2NvbnRhaW5lciAubG9nbycpXG4gIC8vIGNvbnN0IGxhbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX2NvbnRhaW5lciAubGFuZy1zd2l0Y2gnKVxuXG4gIHZhciBlbmxhcmdlZCA9IHRydWVcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIChldikgPT4ge1xuICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IG5hdkJyZWFrcG9pbnQgJiYgZW5sYXJnZWQpIHtcbiAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdsYXJnZXInKVxuICAgICAgLy8gbG9nby5jbGFzc0xpc3QucmVtb3ZlKCdsYXJnZXInKVxuICAgICAgLy8gbGFuZy5jbGFzc0xpc3QucmVtb3ZlKCdsYXJnZXInKVxuICAgICAgZW5sYXJnZWQgPSBmYWxzZVxuXG4gICAgfSBlbHNlIGlmICh3aW5kb3cuc2Nyb2xsWSA8IG5hdkJyZWFrcG9pbnQgJiYgIWVubGFyZ2VkKSB7XG4gICAgICBuYXYuY2xhc3NMaXN0LmFkZCgnbGFyZ2VyJylcbiAgICAgIC8vIGxvZ28uY2xhc3NMaXN0LmFkZCgnbGFyZ2VyJylcbiAgICAgIC8vIGxhbmcuY2xhc3NMaXN0LmFkZCgnbGFyZ2VyJylcbiAgICAgIGVubGFyZ2VkID0gdHJ1ZVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gYm9vdChnYWxsZXJ5VXJscykge1xuICBpbml0TGFuZ1N3aXRjaCgpXG5cbiAgY29uc3QgbGFyZ2VWaWV3V3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYXJnZS12aWV3X3dyYXAnKVxuICBMYXJnZVZpZXcuaW5pdCh7XG4gICAgdHJhbnNpdGlvbjogJ29wYWNpdHkgMC40cycsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICB3cmFwOiBsYXJnZVZpZXdXcmFwXG4gIH0pXG5cbiAgbGFyZ2VWaWV3V3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdub25lZCcpXG5cbiAgbGFyZ2VWaWV3V3JhcC5hcHBlbmRDaGlsZChMYXJnZVZpZXcuY29udGFpbmVyKVxuICBsYXJnZVZpZXdXcmFwLnF1ZXJ5U2VsZWN0b3IoJy5pY29uI2Nyb3NzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgTGFyZ2VWaWV3LmhpZGUoKVxuICB9KVxuXG4gIGNvbnNvbGUubG9nKCdMYXJnZVZpZXcnLCBMYXJnZVZpZXcpXG5cbiAgaW5pdEdhbGxlcnkoZ2FsbGVyeVVybHMpXG5cbiAgaW5pdEVubGFyZ2FibGVzKCcjb3V0IC5zaG93Y2FzZSAuaW1hZ2UtdGh1bWInKVxuICBpbml0RW5sYXJnYWJsZXMoJyNzdGFmZiAubWVtYmVyIC5hdmF0YXInKVxuICBuZXcgU2hvd2Nhc2VJbWFnZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdCAuc3RyZWV0LXZpZXcnKSlcbiAgLy8gZWxzLmZvckVhY2goZWwgPT4ge25ldyBTaG93Y2FzZUltYWdlKGVsKX0pXG5cbiAgLy8gaW5pdFNob3djYXNlcygpXG4gIGluaXROYXZBbmltYXRpb24oMjUpXG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICBib290KFtcbiAgICAnbWVkaWEvaW4vMTQ5MDI4NDFfMTI1OTExMjcyNzQ4MzkxMl8zMjg0MzE1MTA2MzE4OTgxNTc0X28uanBnJyxcbiAgICAnbWVkaWEvaW4vMTk4NzUyNzJfMTAxMDA0ODIyOTYyODY3MDZfMzg4MzMwNjI3NTU0NjE2NjY3Nl9uLmpwZycsXG4gICAgJ21lZGlhL2luLzNiLmpwZycsXG4gICAgJ21lZGlhL2luLzZhLmpwZycsXG4gICAgJ21lZGlhL2luL0RTQ18wMTI2LmpwZycsXG4gICAgJ21lZGlhL2luL0RTQ18wMTI4LkpQRycsXG4gICAgJ21lZGlhL2luL0RTQ18wMzUwLkpQRydcbiAgXSlcbn0pXG4iLCJpbXBvcnQge2dldEJhY2tncm91bmRJbWFnZVVybCwgZ2V0Vmlld3BvcnRXaWR0aCwgZ2V0Vmlld3BvcnRIZWlnaHR9IGZyb20gJy4vbGliLmpzJ1xuaW1wb3J0IHtQaG90b30gZnJvbSAnLi9waG90by5qcydcblxuY29uc3QgTGFyZ2VWaWV3ID0ge1xuICBpbml0KG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICAgIGlmIChvcHRpb25zLnRyYW5zaXRpb24pIHRoaXMudHJhbnNpdGlvblNldHVwID0gb3B0aW9ucy50cmFuc2l0aW9uXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIC8vIHNhbWUgYXMgaW4gdGhlIHNjc3NcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ2xhcmdlLXZpZXdfY29udGFpbmVyJ1xuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyXG5cbiAgICAvLyBpZiAob3B0aW9ucy5jbGlja0NiKVxuICAgIC8vIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge3RoaXMuaGlkZSgpfSlcbiAgICB0aGlzLndyYXAgPSBvcHRpb25zLndyYXAgfHwgdGhpcy5jb250YWluZXJcblxuICAgIHRoaXMud3JhcC5zdHlsZS5vcGFjaXR5ID0gJzAnXG4gICAgLy8gdGhpcy53cmFwLmNsYXNzTGlzdC5hZGQoJ3RyYW5zcGFyZW50JylcblxuICAgIHRoaXMud3JhcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgLy8gdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbm9uZWQnKVxuICAgIHRoaXMuaGlkZGVuID0gdHJ1ZVxuICAgIC8vIHRoaXMucGhvdG8gPSBuZXcgUGhvdG8oKVxuICB9LFxuXG4gIHNldFBob3RvKHVybCkge1xuICAgIGNvbnN0IHBob3RvID0gbmV3IFBob3RvKHVybClcbiAgICAvLyB0aGlzLnBob3RvID0gbmV3IFBob3RvKHVybClcblxuICAgIHJldHVybiBwaG90by5sb2FkKClcbiAgICAvLyAudGhlbigpXG4gICAgLnRoZW4oKHBob3RvKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAodGhpcy5oaWRkZW4pIHtcbiAgICAgICAgICBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ3RoZSBsYXJnZS12aWV3IGNvbnRhaW5lciBtdXN0IGJlIGRpc3BsYXllZCBiZWZvcmUgd2UgY2FuIGZpdCBpbiB0aGUgcGhvdG8nKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyB0aGlzLnBob3RvLmhpZGUoZmFsc2UpXG4gICAgICAgICAgcGhvdG8uaGlkZShmYWxzZSlcbiAgICAgICAgICBpZiAodGhpcy5waG90bykge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIucmVwbGFjZUNoaWxkKHBob3RvLmVsLCB0aGlzLnBob3RvLmVsKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChwaG90by5lbClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwaG90by5maXRCeUJvdGhTaWRlcyh0aGlzLmNvbnRhaW5lcilcbiAgICAgICAgICBwaG90by5zaG93KGZhbHNlKVxuICAgICAgICAgIHRoaXMucGhvdG8gPSBwaG90b1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICBQcm9taXNlLnJlamVjdChlcnIpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICAvKlxuICB0cmFuc2l0aW9uZW5kQ2IoY2IpIHtcbiAgICBjYigpXG4gICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMudHJhbnNpdGlvbmVuZENiKVxuICB9XG4gICovXG5cbiAgLyoqXG4gICAgQGRlc2NyaXB0aW9uIElmIHVybCBpcyBnaXZlLCB0aGVuLCBhZnRlciBzaG93IHRyYW5zaXRpb24gaGFzIGVuZGVkLCBpdCBsb2FkcyB0aGVcbiAgICBuZXcgcGhvdG9cbiAgKi9cbiAgc2hvdyh1cmwpIHtcbiAgICAvLyBpZiAodGhpcy5zaG93UGVuZGluZykge1xuICAgIC8vICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnNob3dUaW1lb3V0SWQpXG4gICAgLy8gICAvLyB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKClcbiAgICAvL1xuICAgIC8vICAgLy8gc2hvdWxkIHJlbW92ZUV2ZW50TGlzdGVuZXIgb2YgaXRzZWxmXG4gICAgLy8gICB0aGlzLnRyYW5zaXRpb25lbmRDYigpXG4gICAgLy9cbiAgICAvL1xuICAgIC8vIH1cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICAgICAgZnVuY3Rpb24gdHJhbnNpdGlvbmVuZENiKCkge1xuICAgICAgICAgIHNlbGYud3JhcC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdHJhbnNpdGlvbmVuZENiKVxuICAgICAgICAgIHNlbGYudHJhbnNpdGlvbk9mZigpXG4gICAgICAgICAgLy8gdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndHJhbnNpdGlvbicpXG5cbiAgICAgICAgICBzZWxmLmhpZGRlbiA9IGZhbHNlXG5cbiAgICAgICAgICBjb25zb2xlLmxvZygnTGFyZ2VWaWV3LnNob3csIHRyYW5zaXRpb25lbmRDYicsIHNlbGYpXG4gICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLndyYXAuc3R5bGUuZGlzcGxheSA9IHRoaXMub3B0aW9ucy5kaXNwbGF5IHx8ICdmbGV4J1xuICAgICAgICAvLyB0aGlzLndyYXAuY2xhc3NMaXN0LnJlbW92ZSgnbm9uZWQnKVxuICAgICAgICB0aGlzLndyYXAuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRyYW5zaXRpb25lbmRDYilcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uT24oKVxuXG4gICAgICAgIHRoaXMuc2hvd1BlbmRpbmcgPSB0cnVlXG4gICAgICAgIC8vIHRoaXMgaXMgbnV0c1xuICAgICAgICB0aGlzLnNob3dUaW1lb3V0SWQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zaG93UGVuZGluZyA9IGZhbHNlXG4gICAgICAgICAgdGhpcy53cmFwLnN0eWxlLm9wYWNpdHkgPSAnMSdcbiAgICAgICAgICAvLyB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uJylcbiAgICAgICAgfSwgNTApXG5cbiAgICAgICAgLy8gdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc29saWQnKVxuICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgcmVqZWN0KGVycilcbiAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0UGhvdG8odXJsKVxuICAgICAgfVxuICAgIH0sIChlcnIpID0+IHtcbiAgICAgIFByb21pc2UucmVqZWN0KGVycilcbiAgICB9KVxuICB9LFxuXG4gIGhpZGUoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBmdW5jdGlvbiB0cmFuc2l0aW9uZW5kQ2IoKSB7XG4gICAgICAgICAgc2VsZi53cmFwLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0cmFuc2l0aW9uZW5kQ2IpXG4gICAgICAgICAgc2VsZi50cmFuc2l0aW9uT2ZmKClcbiAgICAgICAgICAvLyBzZWxmLndyYXAuY2xhc3NMaXN0LnJlbW92ZSgndHJhbnNpdGlvbicpXG4gICAgICAgICAgc2VsZi53cmFwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgICBzZWxmLnBob3RvLmhpZGUoZmFsc2UpXG4gICAgICAgICAgLy8gc2VsZi5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbm9uZWQnKVxuXG4gICAgICAgICAgc2VsZi5oaWRkZW4gPSB0cnVlXG4gICAgICAgICAgY29uc29sZS5sb2coJ0xhcmdlVmlldy5oaWRlLCB0cmFuc2l0aW9uZW5kQ2InLCBMYXJnZVZpZXcpO1xuICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy53cmFwLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0cmFuc2l0aW9uZW5kQ2IpXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbk9uKClcbiAgICAgICAgLy8gdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbicpXG5cbiAgICAgICAgdGhpcy53cmFwLnN0eWxlLm9wYWNpdHkgPSAnMCdcbiAgICAgICAgLy8gdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnc29saWQnKVxuICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgcmVqZWN0KGVycilcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIHRyYW5zaXRpb25PZmYoKSB7XG4gICAgdGhpcy53cmFwLnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSdcbiAgfSxcblxuICB0cmFuc2l0aW9uT24oKSB7XG4gICAgdGhpcy53cmFwLnN0eWxlLnRyYW5zaXRpb24gPSB0aGlzLnRyYW5zaXRpb25TZXR1cFxuICB9XG59XG5cbi8vIGNvbnNvbGUubG9nKCdMYXJnZVZpZXcnLCBMYXJnZVZpZXcpXG5cbmNsYXNzIEVubGFyZ2FibGUge1xuICBjb25zdHJ1Y3RvcihlbCwgdXJsKSB7XG4gICAgdGhpcy5lbCA9IGVsXG4gICAgdGhpcy51cmwgPSB1cmxcblxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrQ2IuYmluZCh0aGlzKSlcbiAgfVxuXG4gIGVubGFyZ2UodXJsKSB7XG4gICAgTGFyZ2VWaWV3LnNob3codXJsKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdFbmxhcmdhYmxlLmVubGFyZ2UsIExhcmdlVmlldyBzaG93bicpXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9KVxuXG4gIH1cblxuICBjbGlja0NiKCkge1xuICAgIGNvbnNvbGUubG9nKCdFbmxhcmdhYmxlLmNsaWNrQ2IsIHRoaXM6ICcsIHRoaXMpO1xuICAgIHRoaXMuZW5sYXJnZSh0aGlzLnVybClcbiAgfVxufVxuXG4vKlxuZnVuY3Rpb24gZW5sYXJnZVNob3djYXNlKCkge1xuICBjb25zdCBpbWFnZVVybCA9IGdldEJhY2tncm91bmRJbWFnZVVybCh0aGlzKVxuICBMYXJnZVZpZXcuc2hvdyhpbWFnZVVybClcbn1cblxuZnVuY3Rpb24gZ2V0RW5sYXJnYWJsZUVsZW1lbnRzKCkge1xuICB2YXIgZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI291dCAuc2hvd2Nhc2UgLmltYWdlLXRodW1iJylcbiAgZWxzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZWxzLCAwKVxuXG4gIGVscy5mb3JFYWNoKGVsID0+IHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVubGFyZ2VTaG93Y2FzZUNiKVxuICB9KVxufVxuKi9cblxuZXhwb3J0IHtMYXJnZVZpZXcsIEVubGFyZ2FibGV9XG4iLCJcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzY5NDI3ODUvd2luZG93LWlubmVyd2lkdGgtdnMtZG9jdW1lbnQtZG9jdW1lbnRlbGVtZW50LWNsaWVudHdpZHRoXG4vLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xNTYzODgjYzE0XG5mdW5jdGlvbiBnZXRWaWV3cG9ydEhlaWdodCgpIHtcbiAgLy8gZ2V0RWxlbWVudHNCeVRhZ05hbWUsIGlmIEknbSBub3QgbWlzdGFrZW4gcmV0dXJucyBhIGxpdmVsaXN0IChoZWxsIGtub3dzIHdoYXQgdGhhdCBpcywgYnV0IGl0J3NcbiAgLy8gdXBkYXRlZCBsaXZlIC0gYXMgZG9tIGdldHMgY2hhbmdlZCkuIEknbSBub3Qgc3VyZSBhYm91dCB1c2luZyBpdCwgaXQgYmVoYXZlZCBtaXN0ZXJpb3VzbHkgb25jZS4uLlxuICAvLyBCdXQsIHF1ZXJ5U2VsZWN0b3IgaXMgbm90IHNvIGNvbXBhdGlibGUuXG4gIC8vIE1heWJlOiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uY2xpZW50V2lkdGgpXG4gIHJldHVybiB3aW5kb3cuaW5uZXJIZWlnaHQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA/XG4gICAgTWF0aC5taW4od2luZG93LmlubmVySGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSA6XG4gICAgd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcbiAgICAgIHx8IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5jbGllbnRIZWlnaHQpO1xufVxuXG5mdW5jdGlvbiBnZXRWaWV3cG9ydFdpZHRoKCkge1xuICByZXR1cm4gd2luZG93LmlubmVyV2lkdGggJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoID9cbiAgICBNYXRoLm1pbih3aW5kb3cuaW5uZXJXaWR0aCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKSA6XG4gICAgd2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXG4gICAgICB8fCAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uY2xpZW50V2lkdGgpO1xufVxuXG5cbi8qXG5cbk5vZGVMaXN0IHRvIGFycmF5XG5mdW5jdGlvbiB0b0FycmF5KG9iaikge1xuICB2YXIgYXJyYXkgPSBbXTtcbiAgLy8gaXRlcmF0ZSBiYWNrd2FyZHMgZW5zdXJpbmcgdGhhdCBsZW5ndGggaXMgYW4gVUludDMyXG4gIGZvciAodmFyIGkgPSBvYmoubGVuZ3RoID4+PiAwOyBpLS07KSB7XG4gICAgYXJyYXlbaV0gPSBvYmpbaV07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuKi9cblxuZnVuY3Rpb24gZ2V0QmFja2dyb3VuZEltYWdlVXJsKGVsKSB7XG4gIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbClcblxuICBjb25zdCByZWd4ID0gbmV3IFJlZ0V4cCgvLip1cmxcXCgoPzpcXFwiPyc/KSguKykoPzouXFwnP1xcXCI/KVxcKS4qL2cpXG4gIGNvbnN0IHJlc3VsdCA9IHJlZ3guZXhlYyhjb21wdXRlZFN0eWxlWydiYWNrZ3JvdW5kLWltYWdlJ10pXG5cbiAgaWYgKHJlc3VsdFsxXSkge1xuICAgIHJldHVybiByZXN1bHRbMV1cbiAgfVxufVxuXG5mdW5jdGlvbiBsb2dGYWN0b3J5KGVudikge1xuICByZXR1cm4gZnVuY3Rpb24oZGF0YSkge1xuICAgIGlmICghZW52LmRldikgcmV0dXJuXG5cbiAgICBjb25zb2xlLnRyYWNlKClcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuICB9XG59XG5cbmV4cG9ydCB7Z2V0Vmlld3BvcnRXaWR0aCwgZ2V0Vmlld3BvcnRIZWlnaHQsIGdldEJhY2tncm91bmRJbWFnZVVybCwgbG9nRmFjdG9yeX1cbiIsImltcG9ydCB7Z2V0Vmlld3BvcnRXaWR0aCwgZ2V0Vmlld3BvcnRIZWlnaHR9IGZyb20gJy4vbGliLmpzJ1xuXG5jbGFzcyBQaG90byB7XG4gIGNvbnN0cnVjdG9yKHVybCkge1xuICAgIHRoaXMudXJsID0gdXJsXG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gIH1cblxuICBsb2FkKCkge1xuICAgIC8vIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgXG4gICAgICAvLyBtYXliZSB0aGlzIGRvZXNudCB3b3JrIGluIHNhZmFyaSBtb2JpbGUuLi5cbiAgICAgIHRoaXMuZWwub25sb2FkID0gKCkgPT4ge1xuICAgICAgICByZXNvbHZlKHRoaXMpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWwuc3JjID0gdGhpcy51cmxcbiAgICB9KVxuICB9XG5cbiAgY2FsY3VsYXRlRml0QnlCb3RoU2lkZXMoaW1nRGltcywgY29udGFpbmVyRGltcykge1xuICAgIC8vIGNvbnN0IGltZ0RpbXMgPSBpbWcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAvLyBjb25zdCBjb250YWluZXJEaW1zID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICBpbWdEaW1zLnJhdGlvID0gaW1nRGltcy53aWR0aCAvIGltZ0RpbXMuaGVpZ2h0XG4gICAgY29udGFpbmVyRGltcy5yYXRpbyA9IGNvbnRhaW5lckRpbXMud2lkdGggLyBjb250YWluZXJEaW1zLmhlaWdodFxuXG4gICAgLy8gaWYgd2lkZXIgdGhhbiBoaWdoZXJcbiAgICBpZiAoaW1nRGltcy5yYXRpbyA+PSBjb250YWluZXJEaW1zLnJhdGlvKSB7XG4gICAgICBjb25zdCBpbWdEaW1zTmV3ID0ge1xuICAgICAgICB3aWR0aDogY29udGFpbmVyRGltcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBjb250YWluZXJEaW1zLndpZHRoIC8gaW1nRGltcy5yYXRpb1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW1nRGltc05ld1xuXG4gICAgLy8gaWYgaGlnaGVyIHRoYW4gd2lkZXJcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW1nRGltc05ldyA9IHtcbiAgICAgICAgLy8gd2lkdGg6IGNvbnRhaW5lckRpbXMuaGVpZ2h0ICogaW1nRGltcy5yYXRpbyxcbiAgICAgICAgd2lkdGg6IGNvbnRhaW5lckRpbXMuaGVpZ2h0ICogaW1nRGltcy5yYXRpbyxcbiAgICAgICAgaGVpZ2h0OiBjb250YWluZXJEaW1zLmhlaWdodFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW1nRGltc05ld1xuICAgIH1cblxuICB9XG5cbiAgY2FsY3VsYXRlRml0QnlIZWlnaHQoaW1nRGltcywgY29udGFpbmVyRGltcykge1xuICAgIC8vIGNvbnN0IGltZ0RpbXMgPSBpbWcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAvLyBjb25zdCBjb250YWluZXJEaW1zID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICBpbWdEaW1zLnJhdGlvID0gaW1nRGltcy53aWR0aCAvIGltZ0RpbXMuaGVpZ2h0XG4gICAgY29uc3QgaW1nRGltc05ldyA9IHtcbiAgICAgIGhlaWdodDogY29udGFpbmVyRGltcy5oZWlnaHQsXG4gICAgICB3aWR0aDogY29udGFpbmVyRGltcy5oZWlnaHQgKiBpbWdEaW1zLnJhdGlvLFxuICAgICAgcmF0aW86IGltZ0RpbXMucmF0aW9cbiAgICB9XG5cbiAgICByZXR1cm4gaW1nRGltc05ld1xuICB9XG5cbiAgZml0QnlIZWlnaHQoY29udGFpbmVyKSB7XG4gICAgY29uc3QgaW1nRGltcyA9IHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zdCBjb250YWluZXJEaW1zID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICBjb25zdCBpbWdEaW1zT2JqID0ge1xuICAgICAgd2lkdGg6IGltZ0RpbXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IGltZ0RpbXMuaGVpZ2h0LFxuICAgIH1cblxuICAgIGNvbnN0IGNvbnRhaW5lckRpbXNPYmogPSB7XG4gICAgICB3aWR0aDogY29udGFpbmVyRGltcy53aWR0aCxcbiAgICAgIGhlaWdodDogY29udGFpbmVyRGltcy5oZWlnaHQsXG4gICAgfVxuXG4gICAgdGhpcy5kaW1zID0gdGhpcy5jYWxjdWxhdGVGaXRCeUhlaWdodChcbiAgICAgIGltZ0RpbXNPYmosXG4gICAgICBjb250YWluZXJEaW1zT2JqXG4gICAgKVxuXG4gICAgLy8gY29uc3QgaW1nRGltcyA9IHRoaXMuY2FsY3VsYXRlRml0QnlIZWlnaHQoaW1nLCB0aGlzLmVsKVxuICAgIHRoaXMuZWwuc3R5bGUud2lkdGggPSBNYXRoLnJvdW5kKHRoaXMuZGltcy53aWR0aCkgKyAncHgnXG4gICAgdGhpcy5lbC5zdHlsZS5oZWlnaHQgPSBNYXRoLnJvdW5kKHRoaXMuZGltcy5oZWlnaHQpICsgJ3B4J1xuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIC8vIGluIGZpdEJ5SGVpZ2h0IEkgZGlkbid0IGNvbnZlcnQgZGltcyB0byBzdHJpbmcgYmVmb3JlIHNldHRpbmcgdGhlbSBvblxuICAvLyB3aWR0aCBhbmQgaGVpZ2h0IGluIGlubGluZSBzdHlsZXMuLiBIb3dldmVyLCBJIGJlbGlldmUsIG9uIG1vYmlsZSB0aGUgZml0QnlCb3RoU2lkZXNcbiAgLy8gc2hvdWxkIGhhdmUgYmVlbiBjYWxsZWQsIHdoZXJlIHRoZXJlIHdhc24ndCB0aGlzIHR5cG8uIEluIHRoZSBmaXRCeUJvdGhTaWRlcyBJIGRpZG4ndFxuICAvLyBjb252ZXJ0IHRoZSB2YWx1ZXMgdG8gd2hvbGUgbnVtYmVycywgbm9uZSB0aGUgbGVzcy5cblxuICAvLyBJIGZpeGVkIHRoYXQsIGFuZCBJIGFsc28gZGVjaWRlZCB0byBtb3ZlIHRoZSB2YWx1ZXMgb2YgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IG91dHB1dFxuICAvLyB0byBhIHJlZ3VsYXIgb2JqZWN0IGxpdGVyYWwsIGluc3RlYWQgb2YgdXNpbmcgdGhlIG91dHB1dCBpdHNlbGYgKHdoaWNoIGkgYmVsaWV2ZSBpcyBhbiBpbnN0YW5jZVxuICAvLyBvZiBzb21lIHNwZWNpYWwgY2xhc3MpLCBpbmNsdWRpbmcgYWRkaW5nIG5ldyBwcm9wZXJ0aWVzIHRvIGl0LlxuXG4gIC8vIEFub3RoZXIgdGhpbmcgSSB3YW50IHRvIGNoZWNrIGlzIHdoZXRoZXIgb3Igbm90IHRoZSB3aWR0aCBhbmQgaGVpZ2h0IGluIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBhcmVcbiAgLy8gYmFzaWMgaW1wbGVtZW50YXRpb24uLiBBbHNvLCBtYXliZSBpdCBtYWtlcyBzZW5zZSB0byBwYXJzZUludCB0aGUgdmFsdWVzIG9mIGdldEJvdW5kaW5nQ2xpZW50UmVjdCxcbiAgLy8gb3IgZG9pbmcgc29tZXRoaW5nIGluIHRoYXQgc3Bpcml0XG4gIGZpdEJ5Qm90aFNpZGVzKGNvbnRhaW5lcikge1xuICAgIGNvbnN0IGltZ0RpbXMgPSB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgY29udGFpbmVyRGltcyA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgY29uc3QgaW1nRGltc09iaiA9IHtcbiAgICAgIHdpZHRoOiBpbWdEaW1zLndpZHRoLFxuICAgICAgaGVpZ2h0OiBpbWdEaW1zLmhlaWdodCxcbiAgICB9XG5cbiAgICBjb25zdCBjb250YWluZXJEaW1zT2JqID0ge1xuICAgICAgd2lkdGg6IGNvbnRhaW5lckRpbXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IGNvbnRhaW5lckRpbXMuaGVpZ2h0LFxuICAgIH1cblxuICAgIHRoaXMuZGltcyA9IHRoaXMuY2FsY3VsYXRlRml0QnlCb3RoU2lkZXMoXG4gICAgICBpbWdEaW1zT2JqLFxuICAgICAgY29udGFpbmVyRGltc1xuICAgIClcblxuICAgIHRoaXMuZWwuc3R5bGUud2lkdGggPSBNYXRoLnJvdW5kKHRoaXMuZGltcy53aWR0aCkgKyAncHgnXG4gICAgdGhpcy5lbC5zdHlsZS5oZWlnaHQgPSBNYXRoLnJvdW5kKHRoaXMuZGltcy5oZWlnaHQpICsgJ3B4J1xuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGNsZWFySW5saW5lU3R5bGVzKCkge1xuICAgIGlmICh0aGlzLmVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KSB7XG4gICAgICB0aGlzLmVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCd3aWR0aCcpXG4gICAgICB0aGlzLmVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdoZWlnaHQnKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJRTlcbiAgICAgIHRoaXMuZWwuc3R5bGUucmVtb3ZlQXR0cmlidXRlKCd3aWR0aCcpXG4gICAgICB0aGlzLmVsLnN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnaGVpZ2h0JylcbiAgICB9XG4gIH1cblxuICBoaWRlKGhhcmQpIHtcbiAgICBoYXJkID8gdGhpcy5lbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIgOiB0aGlzLmVsLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiXG4gIH1cblxuICBzaG93KGhhcmQpIHtcbiAgICBpZiAoaGFyZCkge1xuICAgICAgdGhpcy5lbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnZGlzcGxheScpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3Zpc2liaWxpdHknKVxuICAgIH1cblxuICAgIC8vIGhhcmQgPyB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiIDogdGhpcy5lbC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCJcbiAgfVxufVxuXG5leHBvcnQge1Bob3RvfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==