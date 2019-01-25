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
  langSwitch.addEventListener('click', function (ev) {
    ev.preventDefault();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXJnZS12aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Bob3RvLmpzIl0sIm5hbWVzIjpbIkRlY2tJdGVtIiwiaW1hZ2VVcmwiLCJpbmRleCIsIm9wdGlvbnMiLCJlbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImNvbnRlbnRFbCIsImNvbnRlbnRXcmFwIiwiYXBwZW5kQ2hpbGQiLCJuYXJyb3dNb2RlIiwiZ2V0Vmlld3BvcnRXaWR0aCIsImJyZWFrcG9pbnQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXYiLCJwaG90byIsImZpdEJ5Qm90aFNpZGVzIiwidHVybk9mZk5hcnJvd01vZGUiLCJQaG90byIsImxvYWRQaG90byIsImNhdGNoIiwiZXJyIiwibW9kZSIsImNsZWFySW5saW5lU3R5bGVzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJvZmZzZXRMZWZ0IiwiZ2V0T2Zmc2V0IiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJzdHlsZSIsIm9mZnNldCIsImRlY2tQb3NpdGlvbiIsImdldERlY2tQb3NpdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJnZXRHYWxsZXJ5Vmlld3BvcnRXaWR0aCIsInVybCIsImxvYWQiLCJ0aGVuIiwicGhvdG9Mb2FkQ2IiLCJoaWRlIiwic2hvdyIsIlByb21pc2UiLCJyZWplY3QiLCJEZWNrIiwiaW1hZ2VVcmxzIiwicG9zaXRpb24iLCJsb2FkZWQiLCJpdGVtc0xvYWRlZCIsIml0ZW1zIiwiaW5pdEl0ZW1zIiwiYXBwZW5kSXRlbXMiLCJ0cmFuc2Zvcm0iLCJpdGVtT2Zmc2V0IiwiZ2V0TWlkcG9pbnQiLCJnYWxsZXJ5TWlkcG9pbnQiLCJkZWNrT2Zmc2V0TmV3IiwiY2VudGVyZWQiLCJsZW5ndGgiLCJFcnJvciIsInVuZGVmaW5lZCIsImRlY2tQb3NpdGlvbk5ldyIsImNhbGN1bGF0ZURlY2tPZmZzZXRDZW50ZXJlZCIsImNhbGN1bGF0ZURlY2tPZmZzZXQiLCJ0cmFuc2l0aW9uaW5nIiwibWFrZU1hdHJpeCIsInRyYW5zaXRpb25lbmRDYiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJiaW5kIiwieCIsImxlZnQiLCJyZW1vdmUiLCJ1cmxzIiwibWFwIiwiaSIsImxvYWRDYiIsIml0ZW0iLCJmb3JFYWNoIiwiYXBwZW5kSXRlbSIsIkdhbGxlcnkiLCJwaG90b1VybHMiLCJkZWNrIiwiYWN0aXZlSXRlbSIsImdvVG9JdGVtIiwiU2hvd2Nhc2VJbWFnZSIsImdldEJhY2tncm91bmRJbWFnZVVybCIsIkVubGFyZ2FibGUiLCJub2RlTGlzdFRvQXJyYXkiLCJzZWxlY3RvciIsImVscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImluaXRFbmxhcmdhYmxlcyIsImluaXRHYWxsZXJ5IiwiY29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsImdhbGxlcnkiLCJhcnJvd3MiLCJnb1RvUHJldmlvdXMiLCJnb1RvTmV4dCIsImluaXRMYW5nU3dpdGNoIiwiZW4iLCJjb250ZW50RW4iLCJjb250ZW50VWEiLCJzd2l0Y2hUb0VuIiwic3dpdGNoVG9VYSIsImVuU3dpdGNoIiwidWFTd2l0Y2giLCJsYW5nU3dpdGNoIiwicHJldmVudERlZmF1bHQiLCJpbml0TmF2QW5pbWF0aW9uIiwibmF2QnJlYWtwb2ludCIsIm5hdiIsImVubGFyZ2VkIiwic2Nyb2xsWSIsImJvb3QiLCJnYWxsZXJ5VXJscyIsImxhcmdlVmlld1dyYXAiLCJMYXJnZVZpZXciLCJpbml0IiwidHJhbnNpdGlvbiIsImRpc3BsYXkiLCJ3cmFwIiwidHJhbnNpdGlvblNldHVwIiwib3BhY2l0eSIsImhpZGRlbiIsInNldFBob3RvIiwicmVwbGFjZUNoaWxkIiwicmVzb2x2ZSIsInNlbGYiLCJ0cmFuc2l0aW9uT2ZmIiwidHJhbnNpdGlvbk9uIiwic2hvd1BlbmRpbmciLCJzaG93VGltZW91dElkIiwic2V0VGltZW91dCIsImNsaWNrQ2IiLCJlbmxhcmdlIiwiZ2V0Vmlld3BvcnRIZWlnaHQiLCJpbm5lckhlaWdodCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsIk1hdGgiLCJtaW4iLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImlubmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwicmVneCIsIlJlZ0V4cCIsInJlc3VsdCIsImV4ZWMiLCJsb2dGYWN0b3J5IiwiZW52IiwiZGF0YSIsImRldiIsInRyYWNlIiwib25sb2FkIiwic3JjIiwiaW1nRGltcyIsImNvbnRhaW5lckRpbXMiLCJyYXRpbyIsImltZ0RpbXNOZXciLCJkaW1zIiwiY2FsY3VsYXRlRml0QnlIZWlnaHQiLCJjYWxjdWxhdGVGaXRCeUJvdGhTaWRlcyIsInJlbW92ZVByb3BlcnR5IiwicmVtb3ZlQXR0cmlidXRlIiwiaGFyZCIsInZpc2liaWxpdHkiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFt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UUFBOUI7QUFDRDtBQUNGOzs7eUJBRUlDLEksRUFBTTtBQUNUQSxVQUFJLEdBQUcsS0FBSzVLLEVBQUwsQ0FBUTRCLEtBQVIsQ0FBY2lHLE9BQWQsR0FBd0IsTUFBM0IsR0FBb0MsS0FBSzdILEVBQUwsQ0FBUTRCLEtBQVIsQ0FBY2lKLFVBQWQsR0FBMkIsUUFBbkU7QUFDRDs7O3lCQUVJRCxJLEVBQU07QUFDVCxVQUFJQSxJQUFKLEVBQVU7QUFDUixhQUFLNUssRUFBTCxDQUFRNEIsS0FBUixDQUFjOEksY0FBZCxDQUE2QixTQUE3QjtBQUNELE9BRkQsTUFFTztBQUNMLGFBQUsxSyxFQUFMLENBQVE0QixLQUFSLENBQWM4SSxjQUFkLENBQTZCLFlBQTdCO0FBQ0QsT0FMUSxDQU9UOztBQUNEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQge1Bob3RvfSBmcm9tICcuL3Bob3RvLmpzJ1xuaW1wb3J0IHtnZXRWaWV3cG9ydFdpZHRoLCBnZXRWaWV3cG9ydEhlaWdodCwgbG9nRmFjdG9yeX0gZnJvbSAnLi9saWIuanMnXG5cbmNsYXNzIERlY2tJdGVtIHtcbiAgY29uc3RydWN0b3IoaW1hZ2VVcmwsIGluZGV4LCBvcHRpb25zKSB7XG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy5lbC5jbGFzc05hbWUgPSAnZGVjay1pdGVtJ1xuXG4gICAgdGhpcy5jb250ZW50RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMuY29udGVudEVsLmNsYXNzTmFtZSA9ICdkZWNrLWl0ZW0tY29udGVudCdcblxuICAgIGNvbnN0IGNvbnRlbnRXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250ZW50V3JhcC5jbGFzc05hbWUgPSAnZGVjay1pdGVtLWNvbnRlbnRfd3JhcHBlcidcbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGNvbnRlbnRXcmFwKVxuICAgIGNvbnRlbnRXcmFwLmFwcGVuZENoaWxkKHRoaXMuY29udGVudEVsKVxuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICAgIHRoaXMubmFycm93TW9kZSA9IGdldFZpZXdwb3J0V2lkdGgoKSA8IHRoaXMub3B0aW9ucy5icmVha3BvaW50XG4gICAgdGhpcy5pbmRleCA9IGluZGV4XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKGV2KSA9PiB7XG4gICAgICBpZiAoZ2V0Vmlld3BvcnRXaWR0aCgpIDw9IHRoaXMub3B0aW9ucy5icmVha3BvaW50KSB7XG4gICAgICAgIGlmICghdGhpcy5uYXJyb3dNb2RlKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ3Jlc2l6ZSwgdHVybmluZyBvbicpXG4gICAgICAgICAgdGhpcy5uYXJyb3dNb2RlID0gdHJ1ZVxuICAgICAgICAgIC8vIHRoaXMudHVybk9uTmFycm93TW9kZSgpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBob3RvLmZpdEJ5Qm90aFNpZGVzKHRoaXMuZWwpXG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLm5hcnJvd01vZGUpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmVzaXplLCB0dXJuaW5nIE9mZicpXG4gICAgICAgICAgdGhpcy50dXJuT2ZmTmFycm93TW9kZSgpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH0pXG5cbiAgICB0aGlzLnBob3RvID0gbmV3IFBob3RvKGltYWdlVXJsKVxuICAgIHRoaXMubG9hZFBob3RvKCkuY2F0Y2goKGVycikgPT4ge3Rocm93IGVycn0pXG4gIH1cblxuICB0dXJuT25OYXJyb3dNb2RlKG1vZGUpIHtcbiAgICAvLyB0aGlzLm5hcnJvd01vZGUgPSB0cnVlXG5cbiAgICAvLyB0aGlzIHBlcmhhcHMgd291bGQgYmUgYmV0dGVyIHRvIHNldCB3aXRoIGNzcyB2d1xuICAgIC8vIHRoaXMuZWwuc3R5bGUud2lkdGggPSBnZXRWaWV3cG9ydFdpZHRoKCkgKyAncHgnXG5cbiAgICAvLyB0aGlzLnBob3RvLmZpdEJ5Qm90aFNpZGVzKHRoaXMuZWwpXG4gIH1cblxuICB0dXJuT2ZmTmFycm93TW9kZSgpIHtcbiAgICB0aGlzLm5hcnJvd01vZGUgPSBmYWxzZVxuICAgIC8vIHRoaXMucGhvdG8uZml0QnlIZWlnaHQodGhpcy5lbClcblxuICAgIC8vIHRoaXMuZWwuc3R5bGUud2lkdGggPSB0aGlzLnBob3RvLmRpbXMud2lkdGggKyAncHgnXG4gICAgdGhpcy5waG90by5jbGVhcklubGluZVN0eWxlcygpXG4gIH1cblxuICBnZXRXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aFxuICB9XG5cbiAgLy8gZ2V0IHBvc2l0aW9uIG9mIHRoZSBpdGVtLCByZWxhdGl2ZSB0byB0aGUgY29udGFpbmluZyBEZWNrXG4gIGdldE9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbC5vZmZzZXRMZWZ0XG4gIH1cblxuICAvLyBnZXQgcG9zaXRpb24gb2YgdGhlIG1pZHBvaW50IG9mIHRoZSBpdGVtLCByZWxhdGl2ZSB0byB0aGUgY29udGFpbmluZyBkZWNrXG4gIGdldE1pZHBvaW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldE9mZnNldCgpICsgKHRoaXMuZ2V0V2lkdGgoKSAvIDIpXG4gIH1cblxuICAvKipcbiAgICBAcGFyYW0ge1N0cmluZ30gaGVpZ2h0IGhlaWdodCBpbiBjc3Mgc3ludGF4XG4gICovXG4gIHNldEhlaWdodChoZWlnaHQpIHtcbiAgICB0aGlzLmVsLnN0eWxlLmhlaWdodCA9IGhlaWdodFxuICB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHtcbiAgICB0aGlzLmVsLnN0eWxlLndpZHRoID0gd2lkdGhcbiAgfVxuXG4gIGlzSW5WaWV3KCkge1xuICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuZ2V0T2Zmc2V0KClcbiAgICBjb25zdCBkZWNrUG9zaXRpb24gPSB0aGlzLm9wdGlvbnMuZ2V0RGVja1Bvc2l0aW9uKClcbiAgICBjb25zb2xlLmxvZygnZGVja0l0ZW0uaXNJblZpZXcsIG9mZnNldDogJywgb2Zmc2V0KTtcbiAgICBjb25zb2xlLmxvZygnZGVja0l0ZW0uaXNJblZpZXcsIHdpZHRoOiAnLCB0aGlzLmdldFdpZHRoKCkpO1xuICAgIGNvbnNvbGUubG9nKCdkZWNrSXRlbS5pc0luVmlldywgZ2V0RGVja1Bvc2l0aW9uOiAnLCB0aGlzLm9wdGlvbnMuZ2V0RGVja1Bvc2l0aW9uKCkpO1xuICAgIGNvbnNvbGUubG9nKCdkZWNrSXRlbS5pc0luVmlldywgZ2V0R2FsbGVyeVZpZXdwb3J0V2lkdGg6ICcsIHRoaXMub3B0aW9ucy5nZXRHYWxsZXJ5Vmlld3BvcnRXaWR0aCgpKTtcblxuICAgIC8vIGRlY2tQb3NpdGlvbiBjb3VsZCBiZSBuZWdhdGl2ZVxuICAgIHJldHVybiBvZmZzZXQgKyBkZWNrUG9zaXRpb24gPj0gMCAmJlxuICAgIGRlY2tQb3NpdGlvbiArIG9mZnNldCArIHRoaXMuZ2V0V2lkdGgoKSA8PSB0aGlzLm9wdGlvbnMuZ2V0R2FsbGVyeVZpZXdwb3J0V2lkdGgoKVxuICAgICAgPyB0cnVlIDogZmFsc2VcblxuICAgIC8vIGlmIChcbiAgICAvLyAgIHRoaXMuZ2V0T2Zmc2V0KCkgKyB0aGlzLm9wdGlvbnMuZ2V0RGVja1Bvc2l0aW9uKCkgPiAwICYmXG4gICAgLy8gICB0aGlzLmdldE9mZnNldCgpICsgdGhpcy5nZXRXaWR0aCgpIDwgdGhpcy5vcHRpb25zLmdldEdhbGxlcnlWaWV3cG9ydFdpZHRoKClcbiAgICAvLyApIHtcbiAgICAvL1xuICAgIC8vIH1cbiAgfVxuXG4gIGxvYWRQaG90byh1cmwpIHtcbiAgICByZXR1cm4gdGhpcy5waG90by5sb2FkKCkgLy8gUGhvdG8ucHJvdG90eXBlLmxvYWRJbWFnZSgpXG4gICAgLnRoZW4oKHBob3RvKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLm9wdGlvbnMucGhvdG9Mb2FkQ2IocGhvdG8pXG5cbiAgICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0byBzZWUgdGhlIGltZywgYnV0IHdlIHdhbnQgdG8gYmUgYWJsZSB0byBtZWFzdXJlIGl0IHdpdGggZ2V0Qm91bmRpbmdDbGllbnRSZWN0IChzbyBkaXNwbGF5OiBub25lIGlzIG5vdCBhIGZpdClcbiAgICAgICAgLy8gaW1nLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiXG4gICAgICAgIHBob3RvLmhpZGUoKVxuICAgICAgICB0aGlzLmNvbnRlbnRFbC5hcHBlbmRDaGlsZChwaG90by5lbClcblxuICAgICAgICBpZiAoIXRoaXMubmFycm93TW9kZSkge1xuICAgICAgICAgIC8vIGF0IHRoZSBtb21lbnQsIHNlZW1zIGxpa2Ugd2UgaGFuZGxlIGFsbCBvZiB0aGlzIHdpdGggY3NzLFxuICAgICAgICAgIC8vIGFuZCBkb24ndCBuZWVkIHRvIGZpdGUgdGhlIHBob3RvIGFuZCBzZXQgaXQncyBjb250YWluZXIncyB3aWR0aCByZXNwZWN0aXZlbHlcblxuICAgICAgICAgIC8vIHRoaXMucGhvdG8uZml0QnlIZWlnaHQodGhpcy5lbClcbiAgICAgICAgICAvLyB0aGlzLmVsLnN0eWxlLndpZHRoID0gdGhpcy5waG90by5kaW1zLndpZHRoICsgJ3B4J1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucGhvdG8uZml0QnlCb3RoU2lkZXModGhpcy5jb250ZW50RWwpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBob3RvLnNob3coKVxuICAgICAgICAvLyBpbWcuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJ1xuICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgUHJvbWlzZS5yZWplY3QoZXJyKVxuICAgICAgfVxuXG4gICAgfSlcbiAgICAvLyAuY2F0Y2goKGVycikgPT4ge1xuICAgIC8vICAgdGhyb3cgZXJyXG4gICAgLy8gfSlcbiAgfVxufVxuXG5jbGFzcyBEZWNrIHtcbiAgY29uc3RydWN0b3IoaW1hZ2VVcmxzLCBvcHRpb25zKSB7XG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy5lbC5jbGFzc05hbWUgPSAnZ2FsbGVyeS1kZWNrJ1xuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuXG4gICAgdGhpcy5icmVha3BvaW50ID0gb3B0aW9ucy5icmVha3BvaW50XG4gICAgdGhpcy5wb3NpdGlvbiA9IDBcbiAgICB0aGlzLm9mZnNldCA9IDBcblxuICAgIHRoaXMubG9hZGVkID0gZmFsc2VcbiAgICB0aGlzLml0ZW1zTG9hZGVkID0gMFxuICAgIHRoaXMuaXRlbXMgPSB0aGlzLmluaXRJdGVtcyhpbWFnZVVybHMpXG4gICAgdGhpcy5hcHBlbmRJdGVtcygpXG5cbiAgICAvLyBpbml0aWFsaXplIHRoZSB0cmFuc2Zvcm0gbWF0cml4IHN0eWxpbmdcbiAgICB0aGlzLmVsLnN0eWxlLnRyYW5zZm9ybSA9ICdtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMCknXG5cbiAgICAvLyB3aW5kb3cub24oJ3Jlc2l6ZScsIChldikgPT4ge1xuICAgIC8vICAgaWYgKGdldFZpZXdwb3J0V2lkdGgoKSA8IHRoaXMuYnJlYWtwb2ludCkge1xuICAgIC8vXG4gICAgLy8gICB9XG4gICAgLy8gfSlcbiAgfVxuXG4gIC8qXG4gIGNhbGN1bGF0ZURlY2tPZmZzZXQoaW5kZXgpIHtcbiAgICBpZiAoZ2V0Vmlld3BvcnRXaWR0aCgpIDwgdGhpcy5icmVha3BvaW50KSB7XG4gICAgICBjb25zdCBpdGVtT2Zmc2V0ID0gdGhpcy5pdGVtc1tpbmRleF0uZ2V0T2Zmc2V0KClcbiAgICAgIGNvbnN0IGRlY2tPZmZzZXROZXcgPSAtaXRlbU9mZnNldFxuXG4gICAgICByZXR1cm4gZGVja09mZnNldE5ld1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpdGVtT2Zmc2V0ID0gdGhpcy5pdGVtc1tpbmRleF0uZ2V0TWlkcG9pbnQoKVxuXG4gICAgICBjb25zdCBnYWxsZXJ5TWlkcG9pbnQgPSB0aGlzLm9wdGlvbnMuZ2V0R2FsbGVyeVZpZXdwb3J0V2lkdGgoKSAvIDIgLy8gLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC8gMlxuICAgICAgY29uc3QgZGVja09mZnNldE5ldyA9IC1pdGVtT2Zmc2V0ICsgZ2FsbGVyeU1pZHBvaW50XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKCdEZWNrLmNhbGN1bGF0ZURlY2tPZmZzZXQsIGluZGV4JywgaW5kZXgpXG4gICAgICAvLyBjb25zb2xlLmxvZygnRGVjay5jYWxjdWxhdGVEZWNrT2Zmc2V0LCBpdGVtc1tpbmRleF0nLCB0aGlzLml0ZW1zW2luZGV4XSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdEZWNrLmNhbGN1bGF0ZURlY2tPZmZzZXQsIGl0ZW1zW2luZGV4XScsIHRoaXMuaXRlbXNbaW5kZXhdLmdldE1pZHBvaW50KCkpXG4gICAgICAvLyBjb25zb2xlLmxvZygnRGVjay5jYWxjdWxhdGVEZWNrT2Zmc2V0LCBpdGVtT2Zmc2V0JywgaXRlbU9mZnNldClcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdEZWNrLmNhbGN1bGF0ZURlY2tPZmZzZXQsIGRlY2tPZmZzZXROZXcnLCBkZWNrT2Zmc2V0TmV3KVxuXG4gICAgICByZXR1cm4gZGVja09mZnNldE5ld1xuICAgIH1cbiAgfVxuICAqL1xuXG4gIGNhbGN1bGF0ZURlY2tPZmZzZXRDZW50ZXJlZChpbmRleCkge1xuICAgIGNvbnN0IGl0ZW1PZmZzZXQgPSB0aGlzLml0ZW1zW2luZGV4XS5nZXRNaWRwb2ludCgpXG5cbiAgICBjb25zdCBnYWxsZXJ5TWlkcG9pbnQgPSB0aGlzLm9wdGlvbnMuZ2V0R2FsbGVyeVZpZXdwb3J0V2lkdGgoKSAvIDIgLy8gLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC8gMlxuICAgIGNvbnN0IGRlY2tPZmZzZXROZXcgPSAtaXRlbU9mZnNldCArIGdhbGxlcnlNaWRwb2ludFxuXG4gICAgLy8gY29uc29sZS5sb2coJ0RlY2suY2FsY3VsYXRlRGVja09mZnNldCwgaW5kZXgnLCBpbmRleClcbiAgICAvLyBjb25zb2xlLmxvZygnRGVjay5jYWxjdWxhdGVEZWNrT2Zmc2V0LCBpdGVtc1tpbmRleF0nLCB0aGlzLml0ZW1zW2luZGV4XSlcbiAgICAvLyBjb25zb2xlLmxvZygnRGVjay5jYWxjdWxhdGVEZWNrT2Zmc2V0LCBpdGVtc1tpbmRleF0nLCB0aGlzLml0ZW1zW2luZGV4XS5nZXRNaWRwb2ludCgpKVxuICAgIC8vIGNvbnNvbGUubG9nKCdEZWNrLmNhbGN1bGF0ZURlY2tPZmZzZXQsIGl0ZW1PZmZzZXQnLCBpdGVtT2Zmc2V0KVxuICAgIC8vIGNvbnNvbGUubG9nKCdEZWNrLmNhbGN1bGF0ZURlY2tPZmZzZXQsIGRlY2tPZmZzZXROZXcnLCBkZWNrT2Zmc2V0TmV3KVxuXG4gICAgcmV0dXJuIGRlY2tPZmZzZXROZXdcbiAgfVxuXG4gIGNhbGN1bGF0ZURlY2tPZmZzZXQoaW5kZXgpIHtcbiAgICBjb25zdCBpdGVtT2Zmc2V0ID0gdGhpcy5pdGVtc1tpbmRleF0uZ2V0T2Zmc2V0KClcbiAgICBjb25zdCBkZWNrT2Zmc2V0TmV3ID0gLWl0ZW1PZmZzZXRcblxuICAgIHJldHVybiBkZWNrT2Zmc2V0TmV3XG4gIH1cblxuICAvKlxuICAvLyBUT0RPOlxuICBnZXRBY3R1YWxQb3NpdGlvbldoaWxlVHJhbnNpdGlvbmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0ICsgd2luZG93LnBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwpWydtYXJnaW4tbGVmdCddKVxuICAgIC0gdGhpcy5vcHRpb25zLmdldEdhbGxlcnlQb3MoKS5sZWZ0XG4gICAgKyB3aW5kb3cuc2Nyb2xsWFxuICB9XG4gICovXG5cbiAgLyoqXG4gIEBwYXJhbSB7Ym9vbGVhbn0gY2VudGVyZWQgaWYgdHJ1ZSAtIGNlbnRlcnMgdGhlIGl0ZW0sIGlmIGZhbHN5IC0gZG9lc24ndCBjZW50ZXJcbiAgKi9cbiAgZ29Ub0l0ZW0oaW5kZXgsIGNlbnRlcmVkKSB7XG5cbiAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID4gdGhpcy5pdGVtcy5sZW5ndGgtMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY2FuJ3QgZ28gdG8gdW5leGlzdGluZyBpdGVtIGF0IFwiKyBpbmRleClcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMubG9hZGVkKSB7XG4gICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJcIilcbiAgICAgIC8vIFRPRE86IG1ha2UgaXQgc28gaXQgY2FuIGdvIHRvIHRoZSBpdGVtcyB0aGF0IGFyZSBhbHJlYWR5IGxvYWRlZCwgYW5kXG4gICAgICAvLyB0aGVuLCBhZGp1c3QgdGhlIHBvc2l0aW9uIG9mIHRoZSBkZWNrIHNvIGl0IHN0YXlzIG9uIHRoZSBpdGVtIHdlJ3ZlIGdvbmUgdG9cbiAgICAgIC8vIGFzIG90aGVyIGl0ZW1zIGxvYWQgKGlmIG5lY2Vzc2FyeSkuXG4gICAgICAvLyBUaGlzIGNvdWxkIGJlIGltcGFjdGZ1bCBpZiB0aGUgZGVjayBpcyByaWdodCBhdCB0aGUgdG9wIG9mIHRoZSBwYWdlIGFuZCB1c2VyXG4gICAgICAvLyB3YW50cyB0byBpbW1lZGlhdGVseSBiZSBhYmxlIHRvIGludGVyYWN0IHdpdGggdGhpbmdzLlxuICAgICAgLy8gY29uc29sZS5sb2coXCJwaG90b3MgaW4gdGhlIGRlY2sgaGF2ZW4ndCBsb2FkZWQgeWV0XCIpO1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH1cblxuICAgIGNvbnN0IGRlY2tQb3NpdGlvbk5ldyA9IGNlbnRlcmVkID8gdGhpcy5jYWxjdWxhdGVEZWNrT2Zmc2V0Q2VudGVyZWQoaW5kZXgpIDogdGhpcy5jYWxjdWxhdGVEZWNrT2Zmc2V0KGluZGV4KVxuXG4gICAgLy8gVE9ETzpcbiAgICAvLyB0aGlzLm9mZnNldCA9IHRoaXMudHJhbnNpdGlvbmluZ1xuICAgIC8vICAgPyBkZWNrUG9zaXRpb25OZXcgLSB0aGlzLmdldEFjdHVhbFBvc2l0aW9uV2hpbGVUcmFuc2l0aW9uaW5nKClcbiAgICAvLyAgIDogZGVja1Bvc2l0aW9uTmV3IC0gdGhpcy5wb3NpdGlvblxuXG4gICAgdGhpcy5vZmZzZXQgPSBkZWNrUG9zaXRpb25OZXcgLSB0aGlzLnBvc2l0aW9uXG4gICAgdGhpcy5wb3NpdGlvbiA9IGRlY2tQb3NpdGlvbk5ld1xuXG4gICAgaWYgKHRoaXMudHJhbnNpdGlvbmluZykge1xuICAgICAgdGhpcy5lbC5zdHlsZS50cmFuc2Zvcm0gPSB0aGlzLm1ha2VNYXRyaXgodGhpcy5vZmZzZXQpXG4gICAgfSBlbHNlIHtcblxuICAgICAgZnVuY3Rpb24gdHJhbnNpdGlvbmVuZENiKCkge1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25lbmRDYigpXG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRyYW5zaXRpb25lbmRDYilcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uJylcblxuICAgICAgdGhpcy50cmFuc2l0aW9uaW5nID0gdHJ1ZVxuICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdHJhbnNpdGlvbmVuZENiLmJpbmQodGhpcykpXG4gICAgICB0aGlzLmVsLnN0eWxlLnRyYW5zZm9ybSA9IHRoaXMubWFrZU1hdHJpeCh0aGlzLm9mZnNldClcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5pdGVtc1tpbmRleF1cblxuICB9XG5cbiAgbWFrZU1hdHJpeCh4KSB7XG4gICAgcmV0dXJuICdtYXRyaXgoMSwgMCwgMCwgMSwgJysgeCArJywgMCknXG4gIH1cblxuICB0cmFuc2l0aW9uZW5kQ2IoKSB7XG4gICAgdGhpcy5lbC5zdHlsZS5sZWZ0ID0gdGhpcy5wb3NpdGlvbiArJ3B4J1xuXG4gICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCd0cmFuc2l0aW9uJylcbiAgICB0aGlzLmVsLnN0eWxlLnRyYW5zZm9ybSA9ICdtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMCknXG4gIH1cblxuICBpbml0SXRlbXModXJscykge1xuICAgIHJldHVybiB1cmxzLm1hcCgodXJsLCBpKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IERlY2tJdGVtKHVybCwgaSwge1xuICAgICAgICBicmVha3BvaW50OiB0aGlzLmJyZWFrcG9pbnQsXG4gICAgICAgIHBob3RvTG9hZENiOiAoKSA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJwaG90b0xvYWRDYiwgZGVjay5pdGVtc0xvYWRlZDogXCIsIHRoaXMuaXRlbXNMb2FkZWQpO1xuICAgICAgICAgIHRoaXMuaXRlbXNMb2FkZWQrK1xuXG4gICAgICAgICAgaWYgKHRoaXMuaXRlbXNMb2FkZWQgPT0gdGhpcy5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicGhvdG9Mb2FkQ2IsIGRlY2suaXRlbXNMb2FkZWQgPT0gZGVjay5pdGVtcy5sZW5ndGgsIGRlY2suaXRlbXNMb2FkZWQ6IFwiLCB0aGlzLml0ZW1zTG9hZGVkKTtcbiAgICAgICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmxvYWRDYigpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBnZXRHYWxsZXJ5Vmlld3BvcnRXaWR0aDogdGhpcy5vcHRpb25zLmdldEdhbGxlcnlWaWV3cG9ydFdpZHRoLFxuICAgICAgICBnZXREZWNrUG9zaXRpb246ICgpID0+IHtyZXR1cm4gdGhpcy5wb3NpdGlvbn1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGFwcGVuZEl0ZW0oaXRlbSkge1xuICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoaXRlbS5lbClcbiAgfVxuXG4gIGFwcGVuZEl0ZW1zKCkge1xuICAgIHRoaXMuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIHRoaXMuYXBwZW5kSXRlbShpdGVtKVxuICAgIH0pXG4gIH1cbn1cblxuY2xhc3MgR2FsbGVyeSB7XG4gIGNvbnN0cnVjdG9yKHBob3RvVXJscywgb3B0aW9ucykge1xuICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMuZWwuY2xhc3NOYW1lID0gJ2dhbGxlcnknXG5cblxuICAgIHRoaXMuZGVjayA9IG5ldyBEZWNrKHBob3RvVXJscywge1xuICAgICAgZ2V0R2FsbGVyeVZpZXdwb3J0V2lkdGg6ICgpID0+IHsgcmV0dXJuIHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggfSxcbiAgICAgIGxvYWRDYjogKCkgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSB0aGlzLmRlY2suZ29Ub0l0ZW0oMCwgZmFsc2UpXG4gICAgICAgIC8vIHRoaXMuZ29Ub05leHQuY2FsbCh0aGlzKVxuICAgICAgfSxcbiAgICAgIGJyZWFrcG9pbnQ6IG9wdGlvbnMuYnJlYWtwb2ludFxuICAgIH0pXG5cbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuZGVjay5lbClcblxuXG4gICAgLy8gY29uc3QgYWN0aXZlSXRlbSA9IHRoaXMuZGVjay5nb1RvSXRlbSgwKVxuICAgIC8vIHRoaXMuYWN0aXZlSXRlbSA9IGFjdGl2ZUl0ZW1cbiAgfVxuXG4gIGdvVG9OZXh0KCkge1xuICAgIGlmICghdGhpcy5kZWNrLmxvYWRlZCkgcmV0dXJuXG4gICAgaWYgKHRoaXMuYWN0aXZlSXRlbS5pbmRleCA9PSB0aGlzLmRlY2suaXRlbXMubGVuZ3RoLTEpIHJldHVyblxuXG4gICAgdGhpcy5hY3RpdmVJdGVtID0gdGhpcy5kZWNrLmdvVG9JdGVtKHRoaXMuYWN0aXZlSXRlbS5pbmRleCsxLCB0cnVlKVxuICB9XG5cbiAgZ29Ub1ByZXZpb3VzKCkge1xuICAgIGlmICghdGhpcy5kZWNrLmxvYWRlZCkgcmV0dXJuXG4gICAgaWYgKHRoaXMuYWN0aXZlSXRlbS5pbmRleCA9PSAwKSByZXR1cm5cblxuICAgIHRoaXMuYWN0aXZlSXRlbSA9IHRoaXMuZGVjay5nb1RvSXRlbSh0aGlzLmFjdGl2ZUl0ZW0uaW5kZXgtMSwgdHJ1ZSlcbiAgfVxuICAvKlxuICAvLyBUT0RPOlxuICAvLyBnZXQgdGhlIGFjdHVhbCBwb3NpdGlvbiBvZiB0aGUgZWwsIHJlbGF0aXZlIHRvIGJvZHkuXG4gIGdldEFic1Bvc2l0aW9uKCkge1xuICAgIHZhciBwb3NpdGlvbiA9IDBcblxuICAgIC8vIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsKVxuXG4gICAgICBwb3NpdGlvbiA9IHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdFxuICAgICAgICArIHdpbmRvdy5wYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsKVsnbWFyZ2luLWxlZnQnXSlcblxuICAgICAgcmV0dXJuIHBvc2l0aW9uXG4gIH1cbiAgKi9cbn1cblxuZXhwb3J0IHtHYWxsZXJ5fVxuIiwiLy8gaW1wb3J0IHtzbGlkZX0gZnJvbSAnLi9zbGlkZS5qcydcbmltcG9ydCB7Z2V0QmFja2dyb3VuZEltYWdlVXJsfSBmcm9tICcuL2xpYi5qcydcbmltcG9ydCB7R2FsbGVyeX0gZnJvbSAnLi9nYWxsZXJ5LmpzJ1xuaW1wb3J0IHtMYXJnZVZpZXcsIEVubGFyZ2FibGV9IGZyb20gJy4vbGFyZ2Utdmlldy5qcydcblxuY2xhc3MgU2hvd2Nhc2VJbWFnZSBleHRlbmRzIEVubGFyZ2FibGUge1xuICBjb25zdHJ1Y3RvcihlbCkge1xuICAgIHN1cGVyKGVsLCBnZXRCYWNrZ3JvdW5kSW1hZ2VVcmwoZWwpKVxuICAgIC8vIHRoaXMuaW1hZ2UgPSBuZXcgRW5sYXJnYWJsZSgpXG4gIH1cbn1cblxuZnVuY3Rpb24gbm9kZUxpc3RUb0FycmF5KHNlbGVjdG9yKSB7XG4gIHZhciBlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuICBlbHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlbHMsIDApXG4gIHJldHVybiBlbHNcbn1cblxuZnVuY3Rpb24gaW5pdEVubGFyZ2FibGVzKHNlbGVjdG9yKSB7XG4gIC8vIHZhciBlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuICAvLyBlbHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlbHMsIDApXG5cbiAgLy8gY29uc29sZS5sb2coZWxzKTtcbiAgdmFyIGVscyA9IG5vZGVMaXN0VG9BcnJheShzZWxlY3RvcilcblxuICBlbHMuZm9yRWFjaChlbCA9PiB7bmV3IFNob3djYXNlSW1hZ2UoZWwpfSlcbn1cblxuZnVuY3Rpb24gaW5pdEdhbGxlcnkocGhvdG9VcmxzKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5LWNvbnRhaW5lcicpXG5cbiAgY29uc3QgZ2FsbGVyeSA9IG5ldyBHYWxsZXJ5KHBob3RvVXJscywge2JyZWFrcG9pbnQ6IDgwMH0pXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnYWxsZXJ5LmVsKVxuXG4gIGNvbnN0IGFycm93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5LXdyYXAnKVxuICBhcnJvd3MucXVlcnlTZWxlY3RvcignLmljb24jYndkJylcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnYWxsZXJ5LmdvVG9QcmV2aW91cy5iaW5kKGdhbGxlcnkpKVxuICBhcnJvd3MucXVlcnlTZWxlY3RvcignLmljb24jZndkJylcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnYWxsZXJ5LmdvVG9OZXh0LmJpbmQoZ2FsbGVyeSkpXG5cbiAgY29uc29sZS5sb2coJ2dhbGxlcnknLCBnYWxsZXJ5KVxufVxuXG5mdW5jdGlvbiBpbml0TGFuZ1N3aXRjaCgpIHtcblxuICB2YXIgZW4gPSBmYWxzZVxuXG4gIGNvbnN0IGNvbnRlbnRFbiA9IG5vZGVMaXN0VG9BcnJheSgnLnRleHQuZW4nKVxuICBjb25zdCBjb250ZW50VWEgPSBub2RlTGlzdFRvQXJyYXkoJy50ZXh0LnVhJylcblxuICBmdW5jdGlvbiBzd2l0Y2hUb0VuKCkge1xuICAgIGNvbnRlbnRVYS5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5hZGQoJ25vbmVkJykpXG4gICAgY29udGVudEVuLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnbm9uZWQnKSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHN3aXRjaFRvVWEoKSB7XG4gICAgY29udGVudEVuLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LmFkZCgnbm9uZWQnKSlcbiAgICBjb250ZW50VWEuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdub25lZCcpKVxuICB9XG5cbiAgY29uc3QgZW5Td2l0Y2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFuZy1zd2l0Y2ggI2VuJyk7XG4gIGNvbnN0IHVhU3dpdGNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhbmctc3dpdGNoICN1YScpO1xuXG4gIGNvbnN0IGxhbmdTd2l0Y2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFuZy1zd2l0Y2gnKTtcblxuICBsYW5nU3dpdGNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKVxuICAgIFxuICAgIGlmICghZW4pIHtcbiAgICAgIGVuU3dpdGNoLmNsYXNzTGlzdC5hZGQoJ25vbmVkJylcbiAgICAgIHVhU3dpdGNoLmNsYXNzTGlzdC5yZW1vdmUoJ25vbmVkJylcblxuICAgICAgc3dpdGNoVG9FbigpXG4gICAgICBlbiA9IHRydWVcbiAgICB9IGVsc2Uge1xuICAgICAgdWFTd2l0Y2guY2xhc3NMaXN0LmFkZCgnbm9uZWQnKVxuICAgICAgZW5Td2l0Y2guY2xhc3NMaXN0LnJlbW92ZSgnbm9uZWQnKVxuXG4gICAgICBzd2l0Y2hUb1VhKClcbiAgICAgIGVuID0gZmFsc2VcbiAgICB9XG4gIH0pXG5cbiAgLy8gZW5Td2l0Y2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIC8vICAgZW5Td2l0Y2guY2xhc3NMaXN0LmFkZCgnbm9uZWQnKVxuICAvLyAgIHVhU3dpdGNoLmNsYXNzTGlzdC5yZW1vdmUoJ25vbmVkJylcbiAgLy9cbiAgLy8gICBzd2l0Y2hUb0VuKClcbiAgLy8gfSlcblxuICAvLyB1YVN3aXRjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgLy8gICB1YVN3aXRjaC5jbGFzc0xpc3QuYWRkKCdub25lZCcpXG4gIC8vICAgZW5Td2l0Y2guY2xhc3NMaXN0LnJlbW92ZSgnbm9uZWQnKVxuICAvL1xuICAvLyAgIHN3aXRjaFRvVWEoKVxuICAvLyB9KVxufVxuXG5mdW5jdGlvbiBpbml0TmF2QW5pbWF0aW9uKG5hdkJyZWFrcG9pbnQpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb24nKVxuICAvLyBjb25zdCBsb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9jb250YWluZXIgLmxvZ28nKVxuICAvLyBjb25zdCBsYW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9jb250YWluZXIgLmxhbmctc3dpdGNoJylcblxuICB2YXIgZW5sYXJnZWQgPSB0cnVlXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoZXYpID0+IHtcbiAgICBpZiAod2luZG93LnNjcm9sbFkgPiBuYXZCcmVha3BvaW50ICYmIGVubGFyZ2VkKSB7XG4gICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZSgnbGFyZ2VyJylcbiAgICAgIC8vIGxvZ28uY2xhc3NMaXN0LnJlbW92ZSgnbGFyZ2VyJylcbiAgICAgIC8vIGxhbmcuY2xhc3NMaXN0LnJlbW92ZSgnbGFyZ2VyJylcbiAgICAgIGVubGFyZ2VkID0gZmFsc2VcblxuICAgIH0gZWxzZSBpZiAod2luZG93LnNjcm9sbFkgPCBuYXZCcmVha3BvaW50ICYmICFlbmxhcmdlZCkge1xuICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoJ2xhcmdlcicpXG4gICAgICAvLyBsb2dvLmNsYXNzTGlzdC5hZGQoJ2xhcmdlcicpXG4gICAgICAvLyBsYW5nLmNsYXNzTGlzdC5hZGQoJ2xhcmdlcicpXG4gICAgICBlbmxhcmdlZCA9IHRydWVcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGJvb3QoZ2FsbGVyeVVybHMpIHtcbiAgaW5pdExhbmdTd2l0Y2goKVxuXG4gIGNvbnN0IGxhcmdlVmlld1dyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFyZ2Utdmlld193cmFwJylcbiAgTGFyZ2VWaWV3LmluaXQoe1xuICAgIHRyYW5zaXRpb246ICdvcGFjaXR5IDAuNHMnLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgd3JhcDogbGFyZ2VWaWV3V3JhcFxuICB9KVxuXG4gIGxhcmdlVmlld1dyYXAuY2xhc3NMaXN0LnJlbW92ZSgnbm9uZWQnKVxuXG4gIGxhcmdlVmlld1dyYXAuYXBwZW5kQ2hpbGQoTGFyZ2VWaWV3LmNvbnRhaW5lcilcbiAgbGFyZ2VWaWV3V3JhcC5xdWVyeVNlbGVjdG9yKCcuaWNvbiNjcm9zcycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIExhcmdlVmlldy5oaWRlKClcbiAgfSlcblxuICBjb25zb2xlLmxvZygnTGFyZ2VWaWV3JywgTGFyZ2VWaWV3KVxuXG4gIGluaXRHYWxsZXJ5KGdhbGxlcnlVcmxzKVxuXG4gIGluaXRFbmxhcmdhYmxlcygnI291dCAuc2hvd2Nhc2UgLmltYWdlLXRodW1iJylcbiAgaW5pdEVubGFyZ2FibGVzKCcjc3RhZmYgLm1lbWJlciAuYXZhdGFyJylcbiAgbmV3IFNob3djYXNlSW1hZ2UoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3QgLnN0cmVldC12aWV3JykpXG4gIC8vIGVscy5mb3JFYWNoKGVsID0+IHtuZXcgU2hvd2Nhc2VJbWFnZShlbCl9KVxuXG4gIC8vIGluaXRTaG93Y2FzZXMoKVxuICBpbml0TmF2QW5pbWF0aW9uKDI1KVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgYm9vdChbXG4gICAgJ21lZGlhL2luLzE0OTAyODQxXzEyNTkxMTI3Mjc0ODM5MTJfMzI4NDMxNTEwNjMxODk4MTU3NF9vLmpwZycsXG4gICAgJ21lZGlhL2luLzE5ODc1MjcyXzEwMTAwNDgyMjk2Mjg2NzA2XzM4ODMzMDYyNzU1NDYxNjY2NzZfbi5qcGcnLFxuICAgICdtZWRpYS9pbi8zYi5qcGcnLFxuICAgICdtZWRpYS9pbi82YS5qcGcnLFxuICAgICdtZWRpYS9pbi9EU0NfMDEyNi5qcGcnLFxuICAgICdtZWRpYS9pbi9EU0NfMDEyOC5KUEcnLFxuICAgICdtZWRpYS9pbi9EU0NfMDM1MC5KUEcnXG4gIF0pXG59KVxuIiwiaW1wb3J0IHtnZXRCYWNrZ3JvdW5kSW1hZ2VVcmwsIGdldFZpZXdwb3J0V2lkdGgsIGdldFZpZXdwb3J0SGVpZ2h0fSBmcm9tICcuL2xpYi5qcydcbmltcG9ydCB7UGhvdG99IGZyb20gJy4vcGhvdG8uanMnXG5cbmNvbnN0IExhcmdlVmlldyA9IHtcbiAgaW5pdChvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgICBpZiAob3B0aW9ucy50cmFuc2l0aW9uKSB0aGlzLnRyYW5zaXRpb25TZXR1cCA9IG9wdGlvbnMudHJhbnNpdGlvblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICAvLyBzYW1lIGFzIGluIHRoZSBzY3NzXG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICdsYXJnZS12aWV3X2NvbnRhaW5lcidcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lclxuXG4gICAgLy8gaWYgKG9wdGlvbnMuY2xpY2tDYilcbiAgICAvLyB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHt0aGlzLmhpZGUoKX0pXG4gICAgdGhpcy53cmFwID0gb3B0aW9ucy53cmFwIHx8IHRoaXMuY29udGFpbmVyXG5cbiAgICB0aGlzLndyYXAuc3R5bGUub3BhY2l0eSA9ICcwJ1xuICAgIC8vIHRoaXMud3JhcC5jbGFzc0xpc3QuYWRkKCd0cmFuc3BhcmVudCcpXG5cbiAgICB0aGlzLndyYXAuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIC8vIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25vbmVkJylcbiAgICB0aGlzLmhpZGRlbiA9IHRydWVcbiAgICAvLyB0aGlzLnBob3RvID0gbmV3IFBob3RvKClcbiAgfSxcblxuICBzZXRQaG90byh1cmwpIHtcbiAgICBjb25zdCBwaG90byA9IG5ldyBQaG90byh1cmwpXG4gICAgLy8gdGhpcy5waG90byA9IG5ldyBQaG90byh1cmwpXG5cbiAgICByZXR1cm4gcGhvdG8ubG9hZCgpXG4gICAgLy8gLnRoZW4oKVxuICAgIC50aGVuKChwaG90bykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHRoaXMuaGlkZGVuKSB7XG4gICAgICAgICAgUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCd0aGUgbGFyZ2UtdmlldyBjb250YWluZXIgbXVzdCBiZSBkaXNwbGF5ZWQgYmVmb3JlIHdlIGNhbiBmaXQgaW4gdGhlIHBob3RvJykpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gdGhpcy5waG90by5oaWRlKGZhbHNlKVxuICAgICAgICAgIHBob3RvLmhpZGUoZmFsc2UpXG4gICAgICAgICAgaWYgKHRoaXMucGhvdG8pIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlcGxhY2VDaGlsZChwaG90by5lbCwgdGhpcy5waG90by5lbClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQocGhvdG8uZWwpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcGhvdG8uZml0QnlCb3RoU2lkZXModGhpcy5jb250YWluZXIpXG4gICAgICAgICAgcGhvdG8uc2hvdyhmYWxzZSlcbiAgICAgICAgICB0aGlzLnBob3RvID0gcGhvdG9cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgUHJvbWlzZS5yZWplY3QoZXJyKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgLypcbiAgdHJhbnNpdGlvbmVuZENiKGNiKSB7XG4gICAgY2IoKVxuICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLnRyYW5zaXRpb25lbmRDYilcbiAgfVxuICAqL1xuXG4gIC8qKlxuICAgIEBkZXNjcmlwdGlvbiBJZiB1cmwgaXMgZ2l2ZSwgdGhlbiwgYWZ0ZXIgc2hvdyB0cmFuc2l0aW9uIGhhcyBlbmRlZCwgaXQgbG9hZHMgdGhlXG4gICAgbmV3IHBob3RvXG4gICovXG4gIHNob3codXJsKSB7XG4gICAgLy8gaWYgKHRoaXMuc2hvd1BlbmRpbmcpIHtcbiAgICAvLyAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5zaG93VGltZW91dElkKVxuICAgIC8vICAgLy8gdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigpXG4gICAgLy9cbiAgICAvLyAgIC8vIHNob3VsZCByZW1vdmVFdmVudExpc3RlbmVyIG9mIGl0c2VsZlxuICAgIC8vICAgdGhpcy50cmFuc2l0aW9uZW5kQ2IoKVxuICAgIC8vXG4gICAgLy9cbiAgICAvLyB9XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgICAgIGZ1bmN0aW9uIHRyYW5zaXRpb25lbmRDYigpIHtcbiAgICAgICAgICBzZWxmLndyYXAucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRyYW5zaXRpb25lbmRDYilcbiAgICAgICAgICBzZWxmLnRyYW5zaXRpb25PZmYoKVxuICAgICAgICAgIC8vIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3RyYW5zaXRpb24nKVxuXG4gICAgICAgICAgc2VsZi5oaWRkZW4gPSBmYWxzZVxuXG4gICAgICAgICAgY29uc29sZS5sb2coJ0xhcmdlVmlldy5zaG93LCB0cmFuc2l0aW9uZW5kQ2InLCBzZWxmKVxuICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy53cmFwLnN0eWxlLmRpc3BsYXkgPSB0aGlzLm9wdGlvbnMuZGlzcGxheSB8fCAnZmxleCdcbiAgICAgICAgLy8gdGhpcy53cmFwLmNsYXNzTGlzdC5yZW1vdmUoJ25vbmVkJylcbiAgICAgICAgdGhpcy53cmFwLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0cmFuc2l0aW9uZW5kQ2IpXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbk9uKClcblxuICAgICAgICB0aGlzLnNob3dQZW5kaW5nID0gdHJ1ZVxuICAgICAgICAvLyB0aGlzIGlzIG51dHNcbiAgICAgICAgdGhpcy5zaG93VGltZW91dElkID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2hvd1BlbmRpbmcgPSBmYWxzZVxuICAgICAgICAgIHRoaXMud3JhcC5zdHlsZS5vcGFjaXR5ID0gJzEnXG4gICAgICAgICAgLy8gdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbicpXG4gICAgICAgIH0sIDUwKVxuXG4gICAgICAgIC8vIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NvbGlkJylcbiAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgIHJlamVjdChlcnIpXG4gICAgICB9XG4gICAgfSlcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICBpZiAodXJsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldFBob3RvKHVybClcbiAgICAgIH1cbiAgICB9LCAoZXJyKSA9PiB7XG4gICAgICBQcm9taXNlLnJlamVjdChlcnIpXG4gICAgfSlcbiAgfSxcblxuICBoaWRlKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgZnVuY3Rpb24gdHJhbnNpdGlvbmVuZENiKCkge1xuICAgICAgICAgIHNlbGYud3JhcC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdHJhbnNpdGlvbmVuZENiKVxuICAgICAgICAgIHNlbGYudHJhbnNpdGlvbk9mZigpXG4gICAgICAgICAgLy8gc2VsZi53cmFwLmNsYXNzTGlzdC5yZW1vdmUoJ3RyYW5zaXRpb24nKVxuICAgICAgICAgIHNlbGYud3JhcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgc2VsZi5waG90by5oaWRlKGZhbHNlKVxuICAgICAgICAgIC8vIHNlbGYuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25vbmVkJylcblxuICAgICAgICAgIHNlbGYuaGlkZGVuID0gdHJ1ZVxuICAgICAgICAgIGNvbnNvbGUubG9nKCdMYXJnZVZpZXcuaGlkZSwgdHJhbnNpdGlvbmVuZENiJywgTGFyZ2VWaWV3KTtcbiAgICAgICAgICByZXNvbHZlKClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMud3JhcC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdHJhbnNpdGlvbmVuZENiKVxuICAgICAgICB0aGlzLnRyYW5zaXRpb25PbigpXG4gICAgICAgIC8vIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24nKVxuXG4gICAgICAgIHRoaXMud3JhcC5zdHlsZS5vcGFjaXR5ID0gJzAnXG4gICAgICAgIC8vIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3NvbGlkJylcbiAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgIHJlamVjdChlcnIpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICB0cmFuc2l0aW9uT2ZmKCkge1xuICAgIHRoaXMud3JhcC5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnXG4gIH0sXG5cbiAgdHJhbnNpdGlvbk9uKCkge1xuICAgIHRoaXMud3JhcC5zdHlsZS50cmFuc2l0aW9uID0gdGhpcy50cmFuc2l0aW9uU2V0dXBcbiAgfVxufVxuXG4vLyBjb25zb2xlLmxvZygnTGFyZ2VWaWV3JywgTGFyZ2VWaWV3KVxuXG5jbGFzcyBFbmxhcmdhYmxlIHtcbiAgY29uc3RydWN0b3IoZWwsIHVybCkge1xuICAgIHRoaXMuZWwgPSBlbFxuICAgIHRoaXMudXJsID0gdXJsXG5cbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0NiLmJpbmQodGhpcykpXG4gIH1cblxuICBlbmxhcmdlKHVybCkge1xuICAgIExhcmdlVmlldy5zaG93KHVybClcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnRW5sYXJnYWJsZS5lbmxhcmdlLCBMYXJnZVZpZXcgc2hvd24nKVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfSlcblxuICB9XG5cbiAgY2xpY2tDYigpIHtcbiAgICBjb25zb2xlLmxvZygnRW5sYXJnYWJsZS5jbGlja0NiLCB0aGlzOiAnLCB0aGlzKTtcbiAgICB0aGlzLmVubGFyZ2UodGhpcy51cmwpXG4gIH1cbn1cblxuLypcbmZ1bmN0aW9uIGVubGFyZ2VTaG93Y2FzZSgpIHtcbiAgY29uc3QgaW1hZ2VVcmwgPSBnZXRCYWNrZ3JvdW5kSW1hZ2VVcmwodGhpcylcbiAgTGFyZ2VWaWV3LnNob3coaW1hZ2VVcmwpXG59XG5cbmZ1bmN0aW9uIGdldEVubGFyZ2FibGVFbGVtZW50cygpIHtcbiAgdmFyIGVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvdXQgLnNob3djYXNlIC5pbWFnZS10aHVtYicpXG4gIGVscyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGVscywgMClcblxuICBlbHMuZm9yRWFjaChlbCA9PiB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlbmxhcmdlU2hvd2Nhc2VDYilcbiAgfSlcbn1cbiovXG5cbmV4cG9ydCB7TGFyZ2VWaWV3LCBFbmxhcmdhYmxlfVxuIiwiXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82OTQyNzg1L3dpbmRvdy1pbm5lcndpZHRoLXZzLWRvY3VtZW50LWRvY3VtZW50ZWxlbWVudC1jbGllbnR3aWR0aFxuLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTU2Mzg4I2MxNFxuZnVuY3Rpb24gZ2V0Vmlld3BvcnRIZWlnaHQoKSB7XG4gIC8vIGdldEVsZW1lbnRzQnlUYWdOYW1lLCBpZiBJJ20gbm90IG1pc3Rha2VuIHJldHVybnMgYSBsaXZlbGlzdCAoaGVsbCBrbm93cyB3aGF0IHRoYXQgaXMsIGJ1dCBpdCdzXG4gIC8vIHVwZGF0ZWQgbGl2ZSAtIGFzIGRvbSBnZXRzIGNoYW5nZWQpLiBJJ20gbm90IHN1cmUgYWJvdXQgdXNpbmcgaXQsIGl0IGJlaGF2ZWQgbWlzdGVyaW91c2x5IG9uY2UuLi5cbiAgLy8gQnV0LCBxdWVyeVNlbGVjdG9yIGlzIG5vdCBzbyBjb21wYXRpYmxlLlxuICAvLyBNYXliZTogKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLmNsaWVudFdpZHRoKVxuICByZXR1cm4gd2luZG93LmlubmVySGVpZ2h0ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgP1xuICAgIE1hdGgubWluKHdpbmRvdy5pbm5lckhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgOlxuICAgIHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgICB8fCAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uY2xpZW50SGVpZ2h0KTtcbn1cblxuZnVuY3Rpb24gZ2V0Vmlld3BvcnRXaWR0aCgpIHtcbiAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA/XG4gICAgTWF0aC5taW4od2luZG93LmlubmVyV2lkdGgsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCkgOlxuICAgIHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxuICAgICAgfHwgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLmNsaWVudFdpZHRoKTtcbn1cblxuXG4vKlxuXG5Ob2RlTGlzdCB0byBhcnJheVxuZnVuY3Rpb24gdG9BcnJheShvYmopIHtcbiAgdmFyIGFycmF5ID0gW107XG4gIC8vIGl0ZXJhdGUgYmFja3dhcmRzIGVuc3VyaW5nIHRoYXQgbGVuZ3RoIGlzIGFuIFVJbnQzMlxuICBmb3IgKHZhciBpID0gb2JqLmxlbmd0aCA+Pj4gMDsgaS0tOykge1xuICAgIGFycmF5W2ldID0gb2JqW2ldO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cbiovXG5cbmZ1bmN0aW9uIGdldEJhY2tncm91bmRJbWFnZVVybChlbCkge1xuICBjb25zdCBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpXG5cbiAgY29uc3QgcmVneCA9IG5ldyBSZWdFeHAoLy4qdXJsXFwoKD86XFxcIj8nPykoLispKD86LlxcJz9cXFwiPylcXCkuKi9nKVxuICBjb25zdCByZXN1bHQgPSByZWd4LmV4ZWMoY29tcHV0ZWRTdHlsZVsnYmFja2dyb3VuZC1pbWFnZSddKVxuXG4gIGlmIChyZXN1bHRbMV0pIHtcbiAgICByZXR1cm4gcmVzdWx0WzFdXG4gIH1cbn1cblxuZnVuY3Rpb24gbG9nRmFjdG9yeShlbnYpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBpZiAoIWVudi5kZXYpIHJldHVyblxuXG4gICAgY29uc29sZS50cmFjZSgpXG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgfVxufVxuXG5leHBvcnQge2dldFZpZXdwb3J0V2lkdGgsIGdldFZpZXdwb3J0SGVpZ2h0LCBnZXRCYWNrZ3JvdW5kSW1hZ2VVcmwsIGxvZ0ZhY3Rvcnl9XG4iLCJpbXBvcnQge2dldFZpZXdwb3J0V2lkdGgsIGdldFZpZXdwb3J0SGVpZ2h0fSBmcm9tICcuL2xpYi5qcydcblxuY2xhc3MgUGhvdG8ge1xuICBjb25zdHJ1Y3Rvcih1cmwpIHtcbiAgICB0aGlzLnVybCA9IHVybFxuICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICB9XG5cbiAgbG9hZCgpIHtcbiAgICAvLyBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuZWwub25sb2FkID0gKCkgPT4ge1xuICAgICAgICByZXNvbHZlKHRoaXMpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWwuc3JjID0gdGhpcy51cmxcbiAgICB9KVxuICB9XG5cbiAgY2FsY3VsYXRlRml0QnlCb3RoU2lkZXMoaW1nRGltcywgY29udGFpbmVyRGltcykge1xuICAgIC8vIGNvbnN0IGltZ0RpbXMgPSBpbWcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAvLyBjb25zdCBjb250YWluZXJEaW1zID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICBpbWdEaW1zLnJhdGlvID0gaW1nRGltcy53aWR0aCAvIGltZ0RpbXMuaGVpZ2h0XG4gICAgY29udGFpbmVyRGltcy5yYXRpbyA9IGNvbnRhaW5lckRpbXMud2lkdGggLyBjb250YWluZXJEaW1zLmhlaWdodFxuXG4gICAgLy8gaWYgd2lkZXIgdGhhbiBoaWdoZXJcbiAgICBpZiAoaW1nRGltcy5yYXRpbyA+PSBjb250YWluZXJEaW1zLnJhdGlvKSB7XG4gICAgICBjb25zdCBpbWdEaW1zTmV3ID0ge1xuICAgICAgICB3aWR0aDogY29udGFpbmVyRGltcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBjb250YWluZXJEaW1zLndpZHRoIC8gaW1nRGltcy5yYXRpb1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW1nRGltc05ld1xuXG4gICAgLy8gaWYgaGlnaGVyIHRoYW4gd2lkZXJcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW1nRGltc05ldyA9IHtcbiAgICAgICAgLy8gd2lkdGg6IGNvbnRhaW5lckRpbXMuaGVpZ2h0ICogaW1nRGltcy5yYXRpbyxcbiAgICAgICAgd2lkdGg6IGNvbnRhaW5lckRpbXMuaGVpZ2h0ICogaW1nRGltcy5yYXRpbyxcbiAgICAgICAgaGVpZ2h0OiBjb250YWluZXJEaW1zLmhlaWdodFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW1nRGltc05ld1xuICAgIH1cblxuICB9XG5cbiAgY2FsY3VsYXRlRml0QnlIZWlnaHQoaW1nRGltcywgY29udGFpbmVyRGltcykge1xuICAgIC8vIGNvbnN0IGltZ0RpbXMgPSBpbWcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAvLyBjb25zdCBjb250YWluZXJEaW1zID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICBpbWdEaW1zLnJhdGlvID0gaW1nRGltcy53aWR0aCAvIGltZ0RpbXMuaGVpZ2h0XG4gICAgY29uc3QgaW1nRGltc05ldyA9IHtcbiAgICAgIGhlaWdodDogY29udGFpbmVyRGltcy5oZWlnaHQsXG4gICAgICB3aWR0aDogY29udGFpbmVyRGltcy5oZWlnaHQgKiBpbWdEaW1zLnJhdGlvLFxuICAgICAgcmF0aW86IGltZ0RpbXMucmF0aW9cbiAgICB9XG5cbiAgICByZXR1cm4gaW1nRGltc05ld1xuICB9XG5cbiAgZml0QnlIZWlnaHQoY29udGFpbmVyKSB7XG4gICAgdGhpcy5kaW1zID0gdGhpcy5jYWxjdWxhdGVGaXRCeUhlaWdodChcbiAgICAgIHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICApXG5cbiAgICAvLyBjb25zdCBpbWdEaW1zID0gdGhpcy5jYWxjdWxhdGVGaXRCeUhlaWdodChpbWcsIHRoaXMuZWwpXG4gICAgdGhpcy5lbC5zdHlsZS53aWR0aCA9IHRoaXMuZGltcy53aWR0aFxuICAgIHRoaXMuZWwuc3R5bGUuaGVpZ2h0ID0gdGhpcy5kaW1zLmhlaWdodFxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGZpdEJ5Qm90aFNpZGVzKGNvbnRhaW5lcikge1xuICAgIHRoaXMuZGltcyA9IHRoaXMuY2FsY3VsYXRlRml0QnlCb3RoU2lkZXMoXG4gICAgICB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgKVxuXG4gICAgdGhpcy5lbC5zdHlsZS53aWR0aCA9IHRoaXMuZGltcy53aWR0aCArICdweCdcbiAgICB0aGlzLmVsLnN0eWxlLmhlaWdodCA9IHRoaXMuZGltcy5oZWlnaHQgKyAncHgnXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgY2xlYXJJbmxpbmVTdHlsZXMoKSB7XG4gICAgaWYgKHRoaXMuZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkpIHtcbiAgICAgIHRoaXMuZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3dpZHRoJylcbiAgICAgIHRoaXMuZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElFOVxuICAgICAgdGhpcy5lbC5zdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ3dpZHRoJylcbiAgICAgIHRoaXMuZWwuc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdoZWlnaHQnKVxuICAgIH1cbiAgfVxuXG4gIGhpZGUoaGFyZCkge1xuICAgIGhhcmQgPyB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIiA6IHRoaXMuZWwuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCJcbiAgfVxuXG4gIHNob3coaGFyZCkge1xuICAgIGlmIChoYXJkKSB7XG4gICAgICB0aGlzLmVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdkaXNwbGF5JylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndmlzaWJpbGl0eScpXG4gICAgfVxuXG4gICAgLy8gaGFyZCA/IHRoaXMuZWwuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCIgOiB0aGlzLmVsLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIlxuICB9XG59XG5cbmV4cG9ydCB7UGhvdG99XG4iXSwic291cmNlUm9vdCI6IiJ9